import axios, { AxiosPromise } from "axios";
import API_URL from "../../utils/config";
import { useQuery } from "@tanstack/react-query";
import { UserData } from "../../interface/UserData";

const fetchData = async (id: number): AxiosPromise<UserData> => {
    const response = axios.get(API_URL + "/user/getByID/" + id)
    return response;
}
export function useUserByID(id: number) {

    const query = useQuery({
        queryFn: () => fetchData(id),
        queryKey: ['UserByID-data', id],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}