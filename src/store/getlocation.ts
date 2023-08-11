import {useState, useEffect} from "react";

  const getlocation = () => {    
    const [location, setLocation] = useState({
      district: "",
      state: "", 
    });

    const onSuccess = (location: GeolocationPosition) => {
      const geoApiURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&localityLanguage=en`
       fetch(geoApiURL)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
      setLocation({  district : data.city, state: data.localityInfo.administrative[1].name, })
      }).catch((err) => console.log(err));
    }

    const onError = () => {
      setLocation({
        district : "getCurrentPosition returns ERROR",
        state: "getCurrentPosition returns ERROR",
        
      });
    };

    useEffect(() => {
      if (!("geolocation" in navigator)) {
        console.log("Something went wrong")
      }
      navigator.geolocation.getCurrentPosition(onSuccess, onError);

      }, []);

    return location
}

export default getlocation