import axios, { AxiosPromise } from "axios";
import { ValuationData } from "../../interface/ValuationData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL, QUERY_STRINGS } from "../../utils/config";

const postData = async (data: ValuationData): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/valuation", data)
    return response;
}

export function useValuationMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_STRINGS.VALUATION_QUERY]});
        }
    })

    return mutate;
}