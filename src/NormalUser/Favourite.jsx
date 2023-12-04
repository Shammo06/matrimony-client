import axios from "axios";
import { useEffect, useState } from "react";

const Favourite = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
    axios.get(`https://matrimony-server-6fqnjdrq2-shammo06.vercel.app/favourite?${user.email}`)
    .then(response =>{setData(response.data);
        console.log(response.data)
    });
    })
    return (
        <div>
            
        </div>
    );
};

export default Favourite;