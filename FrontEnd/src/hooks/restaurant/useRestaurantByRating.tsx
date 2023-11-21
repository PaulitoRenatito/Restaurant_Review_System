import axios, { AxiosPromise } from "axios"
import { RestaurantData } from "../../interface/RestaurantData";
import { useQuery } from "@tanstack/react-query";
import { API_URL, QUERY_STRINGS } from "../../utils/config";

const fetchData = async (rating: number): AxiosPromise<RestaurantData[]> => {
    const response = axios.get(API_URL + "/restaurant/getByRating/" + rating)
    return response;
}
export function useRestaurantByRating(rating: number) {

    const query = useQuery({
        queryFn: () => fetchData(rating),
        queryKey: [QUERY_STRINGS.RESTAURANT_QUERY, rating],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}