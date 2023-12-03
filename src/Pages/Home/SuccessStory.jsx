import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';


const SuccessStory = () => {
    const [data,setData] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:5000/successStory')
        .then(res=> {
            setData(res.data);           
        })
      })
    return (
        <div className="py-20 md:px-24">
            <div className="text-center text-5xl py-14">Our Success Story</div>
            <div className="grid md:grid-cols-3 gap-8">
            {
                data.map(data=>
                    <Card key={data._id} sx={{ maxWidth: 345 }}>
                    <CardHeader        
                        title={data.couple}
                        subheader={data.date}
                    />
                    <img src={data.image} alt="" />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">{data.des}</Typography>
                    </CardContent>
                    </Card>)
            }
            </div>
                      
        </div>
    );
};

export default SuccessStory;