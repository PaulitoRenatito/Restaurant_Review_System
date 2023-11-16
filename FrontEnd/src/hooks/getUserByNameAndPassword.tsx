import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query";
import API_URL from "../utils/config";
import { UserData } from "../interface/UserData";

const fetchData = async (first_name: string, password: string): AxiosPromise<UserData> => {
    const response = axios.get(API_URL + "/user/getUserByNameAndPassword/" + first_name + "/" + password);
    return response;
}
export function getUserByNameAndPassword(first_name: string, password: string) {

    const query = useQuery({
        queryFn: () => fetchData(first_name, password),
        queryKey: ['user-getUserByNameAndPassword-data', first_name, password],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}