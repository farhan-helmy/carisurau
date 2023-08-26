type LocationData = {
    city: string;
    localityInfo: {
        administrative: {
            name: string;
        }[];
    };
}

export const getLocation = async () => {
    let district: string | undefined = '';
    let state: string | undefined = '';

    try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const geoApiURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`;

        const response = await fetch(geoApiURL);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data: LocationData = await response.json();

        district = data.city;
        state = data.localityInfo.administrative[1]?.name;

        return {
            district,
            state
        };
    } catch (error) {
        console.error(error);
        return {
            district,
            state
        };
    }
};