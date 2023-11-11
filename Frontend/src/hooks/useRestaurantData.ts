import axios, { AxiosPromise } from "axios"
import { RestaurantData } from "../interface/RestaurantData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<RestaurantData[]> => {
    const response = axios.get(API_URL + "/restaurant")
    return response;
}
export function useRestaurantData(){
    
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['restaurant-data'],
        retry: 2
    })
    
    return {
        ...query,
        data: query.data?.data
    }
}