import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BioData = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
    axios.get('http://localhost:5000/biodatas?biodataType=premium')
    .then(response =>{setData(response.data);
        console.log(response.data)
    });
    })
    console.log(data)
    return (
        <div>
             <div className="text-center text-5xl py-14">Biodatas</div>      
            <div className='grid md:grid-cols-3 px-24'>
                {
                    data.map(data=>
                        <Card key={data._id} sx={{ maxWidth: 345 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Biodata ID: {data.biodataID}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                        Biodata Type: {data.sex}
                        </Typography>
                        <img src={data.image} className='h-64 w-full' />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Age: {data.age} years
                            </Typography>
                            <Typography variant="h5" component="div">
                            Division Name: {data.division}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                Occupation: {data.occupation}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                <Button size="small">View Details</Button>
                            </Typography>
                        </CardContent>
                        </Card>
                        )
                }
            </div>   
        </div>
    );
};

export default BioData;