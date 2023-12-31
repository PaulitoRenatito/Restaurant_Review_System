import axios, { AxiosPromise } from "axios"
import { RestaurantData } from "../../interface/RestaurantData";
import { useQuery } from "@tanstack/react-query";
import { API_URL, QUERY_STRINGS } from "../../utils/config";

const fetchData = async (): AxiosPromise<RestaurantData[]> => {
    const response = axios.get(API_URL + "/restaurant")
    return response;
}
export function useRestaurantData() {

    const query = useQuery({
        queryFn: fetchData,
        queryKey: [QUERY_STRINGS.RESTAURANT_QUERY],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}
