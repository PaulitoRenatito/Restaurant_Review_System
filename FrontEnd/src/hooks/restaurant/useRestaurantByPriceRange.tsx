import axios, { AxiosPromise } from "axios"
import { RestaurantData } from "../../interface/RestaurantData";
import { useQuery } from "@tanstack/react-query";
import { API_URL, QUERY_STRINGS } from "../../utils/config";

const fetchData = async (min_price: number, max_price: number): AxiosPromise<RestaurantData[]> => {
    const response = axios.get(API_URL + "/restaurant/getBetweenPriceRange/" + min_price + "/" + max_price)
    return response;
}
export function useRestaurantByPriceRange(min_price: number, max_price: number) {

    const query = useQuery({
        queryFn: () => fetchData(min_price, max_price),
        queryKey: [QUERY_STRINGS.RESTAURANT_QUERY, min_price, max_price],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}