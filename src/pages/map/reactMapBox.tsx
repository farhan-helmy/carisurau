import { api } from "../../utils/api";
import { capitalizeFirstLetter } from "../../utils";
import Link from "next/link";
import Image from "next/image";
import 'mapbox-gl/dist/mapbox-gl.css';
import Badge from "../../components/shared/Badge";
import Map, { MapRef, Popup, Source, Layer, FullscreenControl, NavigationControl, GeolocateControl, GeoJSONSource } from 'react-map-gl';
import type { FeatureCollection } from 'geojson';
import { clusterCountLayer, clusterLayer, unclusteredPointLayer } from './layers';
import { useRef, useState } from 'react';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const ZOOM = 12;
type popupInfoType = { 
  name: string;
  unique_name: string;
  is_qiblat_certified: boolean;
  is_solat_jumaat: boolean;
  file_path: string;
  longitude: number;
  latitude: number
};

export default function Mapbox() {
  const { data, isLoading } = api.surau.getCoordinates.useQuery();
  
  const geojson : FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      // {type: 'Feature', geometry: {type: 'Point', coordinates: [101.648000, 2.932444]},properties:{ name:'Masjid Raja Haji Fi Sabilillah', unique_name:'lorem-ipsum', is_qiblat_certified:false, is_solat_jumaat:true, file_path:'/assets/background/carisurau1.jpeg'  }},
    ],
  };
  
  data?.map((surau)=>{

    geojson.features.push({
      type: 'Feature', 
      geometry: {
        type: 'Point', 
        coordinates: [
          surau.qiblat[0]?.longitude as number, 
          surau.qiblat[0]?.latitude as number
        ]
      },
      properties:{
        name:surau.name,
        unique_name:surau.unique_name,
        is_qiblat_certified:surau.is_qiblat_certified,
        is_solat_jumaat:surau.is_solat_jumaat,
        image:surau.images[0]?.file_path,
      }
    })    
  })
  
  const mapRef = useRef<MapRef>(null);
  const [popupInfo, setPopupInfo] = useState<popupInfoType | null>(null);
  const [viewState, setViewState] = useState({
    longitude: 101.6958,
    latitude: 3.1466,
    zoom: ZOOM,
  });
  
  return (
    <Map
      projection={{name:'globe'}}
      mapboxAccessToken={MAPBOX_TOKEN}
      {...viewState}
      ref={mapRef}
      interactiveLayerIds={['clusters','cluster-count','unclustered-point']}
      onMove={evt => setViewState(evt.viewState)}
      style={{
            position: 'absolute',
            borderRadius: '1.2%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -42%)',
            height: '65%',
            width: '80%',
            boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
            border: '1px solid #333',
            overflow: 'auto',
        }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      onClick = {(event) => {
        if (!event.features || event.features.length === 0) {
          return;
        }
        const feature = event.features[0];
      
        if( (feature.layer.id === 'clusters' || feature.layer.id === 'cluster-count' ) ){
          const clusterId = feature.properties.cluster_id;
          const mapboxSource = mapRef.current?.getSource('suraus') as GeoJSONSource;
      
          mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
              return;
            }
            mapRef.current?.easeTo({
              center: feature.geometry.coordinates,
              zoom: zoom+2,
              duration: 1000
            });
          });
        }else if(event.features && feature && (feature.layer.id === 'unclustered-point')){
          event.originalEvent.stopPropagation();
          if (!popupInfo && feature.properties) {
            
            if(mapRef.current?.getZoom() < ZOOM){
              mapRef.current?.flyTo({
                center: feature.geometry.coordinates,
                // zoom: ZOOM,
              })
              
            }
            setPopupInfo({
              name: feature.properties.name,
              unique_name: feature.properties.unique_name,
              is_qiblat_certified: feature.properties.is_qiblat_certified,
              is_solat_jumaat: feature.properties.is_solat_jumaat,
              file_path: feature.properties.file_path,
              latitude: feature.geometry.coordinates[1],
              longitude: feature.geometry.coordinates[0],
            });
          }else {
            setPopupInfo(null);
          }
        }  
      }}
      reuseMaps
    >
      <FullscreenControl />
      <NavigationControl />
      <GeolocateControl />
      
      {popupInfo && (
          <Popup
            anchor="top-right"
            maxWidth="300px"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div className="flex justify-between">
              <Link
                className=""
                href={`/${popupInfo.unique_name}`}
              >
                <p className="text-base lg:text-lg">{capitalizeFirstLetter(popupInfo?.name as string)}</p>
              </Link>
            </div>
            
            <div className="flex justify-center items-center">              
            { popupInfo.file_path ? (<img width="150" height='20' src={popupInfo.file_path} />) : (
            <Image
              src="/assets/background/carisuraudefault.png"
              alt="logoratemysurau"
              width={150}
              height={20}
              priority
            />
            ) }
            </div>
            <div className="mt-2 flex flex-row justify-center space-x-2">
              {popupInfo.is_solat_jumaat ? (
                <Badge color="green" text="Solat Jumaat" />
              ) : null}
              {popupInfo.is_qiblat_certified ? (
                <Badge color="purple" text="Qiblat Certified" />
              ) : null}
            </div>
          </Popup>
      )}
      <Source
          id="suraus"
          type="geojson"
          data={geojson}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
    </Map>
  );
}