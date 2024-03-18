import axios from './axios';
import {useAuthStore} from "@/lib/hooks/AuthStore"

const useRefreshToken = () => {
    const accessToken = useAuthStore((state) => state.accessToken)
    const updateAccessToken = useAuthStore((state) => state.updateAccessToken)
    

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
       updateAccessToken(response.data.accessToken)
       return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;