import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API_URL from "../../utils/config";
import { UserData } from "../../interface/UserData";

const postData =async (data: UserData): AxiosPromise<any> => {
    const response = axios.post(API_URL + "/user", data)
    return response;
}

export function useUserMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user-data']});
        }
    })

    return mutate;
}