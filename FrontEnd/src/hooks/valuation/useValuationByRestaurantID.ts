import axios, { AxiosPromise } from "axios";
import { ValuationData } from "../../interface/ValuationData";
import { API_URL, QUERY_STRINGS } from "../../utils/config";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (restaurant_id: number): AxiosPromise<ValuationData[]> => {
    const response = axios.get(API_URL + "/valuation/getByRestaurantID/" + restaurant_id)
    return response;
}
export function useValuationByRestaurantID(restaurant_id: number) {

    const query = useQuery({
        queryFn: () => fetchData(restaurant_id),
        queryKey: [QUERY_STRINGS.VALUATION_QUERY],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}