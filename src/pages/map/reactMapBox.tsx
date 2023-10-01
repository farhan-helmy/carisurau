import Image from "next/image";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { MapRef, Popup, Source, Layer, FullscreenControl, NavigationControl, GeolocateControl, GeoJSONSource } from 'react-map-gl';
import type { FeatureCollection } from 'geojson';
import { clusterCountLayer, clusterLayer, unclusteredPointLayer } from './layers';
import { api } from "../../utils/api";
import { useEffect, useRef, useState } from 'react';

const MAPBOX_TOKEN = '';
const ZOOM = 12;

export default function Mapbox() {
  const { data, isLoading } = api.surau.getCoordinates.useQuery();
  
  const geojson : FeatureCollection = {
    type: 'FeatureCollection',
    features: [
      {type: 'Feature', geometry: {type: 'Point', coordinates: [100.9758, 4.2205]},properties:{ name:'surau lorem ipsum'}},
    ],
  };
  
  data?.map((surau)=>{

    geojson.features.push({
      type: 'Feature', 
      geometry: {
        type: 'Point', 
        coordinates: [
          surau.qiblat[0]?.longitude, 
          surau.qiblat[0]?.latitude
        ]
      },
      properties:{
        name:surau.name
      }
    })    
  })
  
  const mapRef = useRef<MapRef>(null);
  const [popupInfo, setPopupInfo] = useState<{ name: string; longitude: number; latitude: number } | null>(null);
  useEffect(() => {
    console.log("popupInfo changed:", popupInfo);
  }, [popupInfo]);
  
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
            height: '75%',
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
          if (!popupInfo) {
            
            if(mapRef.current?.getZoom() < ZOOM){
              mapRef.current?.flyTo({
                center: feature.geometry.coordinates,
                // zoom: ZOOM,
              })
              
            }
            setPopupInfo({
              name: feature.properties.name,
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
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <p>{`${popupInfo.name}`}</p>
            <div>              
            { popupInfo.image ? (<img width="auto" height='20' src={popupInfo.image} />) : (<Image
              src="/assets/background/carisuraudefault.png"
              alt="logoratemysurau"
              width={150}
              height={20}
              priority
            />) }
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