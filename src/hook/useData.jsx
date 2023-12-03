import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useData = () => {
    const { refetch, data: data = [] } = useQuery({
        queryKey: ['data'],
        queryFn: async() => {
            const res = await axios.get("http://localhost:5000/biodatas");
            return res.data;
        }
    })

    return [data, refetch]
};

export default useData;