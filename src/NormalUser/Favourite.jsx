import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

const Favourite = () => {
    const [data,setData] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
    axios.get(`https://matrimony-server-liart.vercel.app/favourite?userEmail=${user.email}`)
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