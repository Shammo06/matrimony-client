import { useLoaderData } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/base";
import axios from "axios";
import ShareBiodata from "../../Shared/ShareBiodata";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const ViewDetails = () => {
    const data = useLoaderData();
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        axios(`http://localhost:5000/biodata?sex=${data.sex}`)
        .then(res=>setItem(res.data))
    })

    const handleFavourite = () =>{
        axios.post('http://localhost:5000/favourite', {data, userEmail:"shammo@gmail.com"})
          .then(response  => {
            if(response.data.insertedId){
                swal("Successfully", "Added Successfully to Favourite", "success");
            }
          })
          .catch(error=> {
            console.log(error);
          }); 
    }
    
    return (
        <div className="md:flex">
            <div className="py-10 px-28 border-r-2 border-orange-300">
            <Card sx={{ maxWidth: 345 }}>
            <img src={data.image} className=' w-full' />         
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Biodata ID: {data.biodataID}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                Biodata Type: {data.sex}
                </Typography>  
                <Typography gutterBottom variant="h5" component="div">
                Name: {data.name} years
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                Age: {data.age} years
                </Typography>
                <Typography variant="h5" component="div">
                Division Name: {data.division}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Occupation: {data.occupation}
                </Typography>
                
                <Typography  variant="h5" component="div">Contact: {data.contact}</Typography>
                <Typography  variant="h5" component="div">Mobile: {data.mobile}</Typography>    
                <Typography gutterBottom variant="h5" component="div">
                    <Button size="small">Request Contact Information</Button>
                </Typography>
                
                <Typography gutterBottom variant="h5" component="div">
                    <Button size="small" onClick={handleFavourite}>Add to Favourite</Button>
                </Typography>
            </CardContent>
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