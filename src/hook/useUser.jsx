import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useData = () => {
    const { refetch, data: ID = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async() => {
            const res = await axios.get("https://matrimony-server-6fqnjdrq2-shammo06.vercel.app/user");
            return res.data;
        }
    })

    return [ID, refetch]
};

export default useData;