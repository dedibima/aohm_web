"use client"
import { privateAxios } from "@/lib/hooks/axios";
import { useEffect } from "react";
import useRefreshToken from "./refresher";
import { useAuthStore } from "./AuthStore";
// import useAuth from "./useAuth";

const usePrivateAxios = () => {
    const refresh = useRefreshToken();
    const accessToken = useAuthStore((state)=> state.accessToken)
    const auth = useAuthStore((state)=> state.auth)
    // const updateAccessToken = useAuthStore((state) => state.updateAccessToken)



   

    useEffect(() => {

        const requestIntercept = privateAxios.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = privateAxios.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return privateAxios(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            privateAxios.interceptors.request.eject(requestIntercept);
            privateAxios.interceptors.response.eject(responseIntercept);
        }
    }, [refresh])

    return privateAxios;
}

export default usePrivateAxios;