import axios, { AxiosPromise } from "axios"
import { RestaurantData } from "../../interface/RestaurantData";
import { useQuery } from "@tanstack/react-query";
import API_URL from "../../utils/config";

const fetchData = async (id: number): AxiosPromise<RestaurantData> => {
    const response = axios.get(API_URL + "/restaurant/getById/" + id)
    return response;
}
export function useRestaurantById(id: number){
    
    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['restaurant-data', id],
        retry: 2
    })
    
    return {
        ...query,
        data: query.data?.data
    }
}