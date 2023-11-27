import axios, { AxiosPromise } from "axios";
import { ValuationData } from "../../interface/ValuationData";
import { API_URL, QUERY_STRINGS } from "../../utils/config";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (user_id: number): AxiosPromise<ValuationData[]> => {
    const response = axios.get(API_URL + "/valuation/getByUserID/" + user_id)
    return response;
}
export function useValuationByUserID(user_id: number) {

    const query = useQuery({
        queryFn: () => fetchData(user_id),
        queryKey: [QUERY_STRINGS.VALUATION_QUERY, user_id],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}