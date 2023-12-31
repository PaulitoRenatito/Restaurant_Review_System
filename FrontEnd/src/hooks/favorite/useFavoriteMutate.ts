import axios, { AxiosPromise } from "axios";
import { FavoriteData } from "../../interface/FavoriteData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL, QUERY_STRINGS } from "../../utils/config";


const postData = async (data: FavoriteData): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/favorites", data)
    return response;
}
export function useFavoriteMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [QUERY_STRINGS.FAVORITE_QUERY] });
        }
    });

    return mutate;
}