import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = () => {
    const { data: ID = [] } = useQuery({
        queryKey: ['ID'],
        queryFn: async() => {
            const res = await axios.get("https://matrimony-server-liart.vercel.app/user");
            return res.data;
        }
    })

    return [ID]
};

export default useUser;