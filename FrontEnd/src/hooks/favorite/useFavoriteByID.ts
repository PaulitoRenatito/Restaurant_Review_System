import axios, { AxiosPromise } from "axios";
import { API_URL, QUERY_STRINGS } from "../../utils/config";
import { FavoriteData } from "../../interface/FavoriteData";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (data: FavoriteData): AxiosPromise<boolean> => {
    const response = axios.post(API_URL + "/favorites/isFavorite", data)
    return response;
}
export function useFavoriteByID(user_id: number, restaurant_id: number) {

    const favoriteData: FavoriteData = {
        user_id: user_id,
        restaurant_id: restaurant_id
    }

    const query = useQuery({
        queryFn: () => fetchData(favoriteData),
        queryKey: [QUERY_STRINGS.FAVORITE_QUERY, favoriteData],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}