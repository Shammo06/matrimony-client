import { useLoaderData } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Button } from "@mui/base";
import axios from "axios";
import ShareBiodata from "../../Shared/ShareBiodata";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import Details from "../../Shared/Details";
import Card from '@mui/material/Card';
import { AuthContext } from "../../AuthContext/AuthProvider";


const ViewDetails = () => {
    const data = useLoaderData();
    const [item, setItem] = useState([]);
    const {user} = useContext(AuthContext);
    
    useEffect(()=>{
        axios(`https://matrimony-server-liart.vercel.app/biodata?sex=${data.sex}`)
        .then(res=>setItem(res.data))
    })

    const handleFavourite = () =>{
        data["userEmail"]= user.email;
        axios.post('https://matrimony-server-liart.vercel.app/favourite', data)
          .then(response  => {
            if(response.data.insertedId){
                swal("Successfully", "Added Successfully to Favourite", "success");
            }
            else{swal("Already add to favourite");}
          })
          .catch(error=> {
            swal("Already add to favourite");
          }); 
    }
    const handleClick= () =>{
        const user = data;
        axios.post('https://matrimony-server-liart.vercel.app/contactrequest', user)
          .then(response  => {
            if(response.data.insertedId){
                swal("Contact Requested", "success");}
            
          })
          .catch(error=> {
            console.log(error)
          }); 
            
        }

    


    
    return (
        <div className="md:flex">
            <div className="py-10 md:px-28 border-r-2 border-orange-300">
            <Card sx={{ maxWidth: 345 }}>
            <img src={data.image} className=' w-full' /> 
            {
                <Details item={data}/>
            }
                <Typography gutterBottom variant="h5" component="div">Permanent Address: {data.division}</Typography>
                <Typography gutterBottom variant="h5" component="div">Present Address: {data.presentDivision}</Typography>
                <Typography gutterBottom variant="h5" component="div">Email: {data.email}</Typography>    
                <Typography gutterBottom variant="h5" component="div">Mobile: {data.mobile}</Typography>
                
                <Typography gutterBottom variant="h5" component="div">
                    <Button className='rounded-lg w-full text-white bg-blue-700' onClick={handleClick} variant="contained" size="small">Request Contact Information</Button>
                </Typography>
                
                <Typography gutterBottom variant="h5" component="div">
                    <Button className='rounded-lg w-full text-white bg-blue-700' size="small" onClick={handleFavourite}>Add to Favourite</Button>
                </Typography>
            </Card>
            </div>
            <div className="gap-24 py-10 ">
                <div className="text-center text-5xl">
                    <h1>Your Suggested Biodatas</h1>
                </div>
                <div className="grid md:grid-cols-2 gap-8 py-10 px-10">
                    
                    {
                        item.map(data=> <ShareBiodata key={data._id} item={data}/>)
                    }
                        
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;