export type StateRes = {
    administrative_division: string,
    state: string,
    capital: string,
    royal_capital: string,
    population: number,
    total_area: number,
    licence_plate_prefix: string,
    phone_area_code: string,
    abbreviation: string,
    ISO: string,
    FIPS: string,
    HDI: number,
    region: string,
    head_of_state: string,
    head_of_goverment: string
}


export type DistrictRes = {
    administrative_districts: string[],
    population: number,
    total_area: number,
    abbreviation: string,
    ISO: string,
    FIPS: string,
    HDI: number,
    region: string,
    head_of_state: string,
    head_of_goverment: string
}
