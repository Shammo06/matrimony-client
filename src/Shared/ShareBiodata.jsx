/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const ShareBiodata = ({item}) => {
        const navigate = useNavigate();
        const data = item;
        const handleClick = (id)=>{
            navigate(`/biodata/${id}`)
        }
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
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
                    <Button size="small"  onClick={() =>handleClick(data._id)}>View Details</Button>
                </Typography>
            </CardContent>
            </Card>
            
        </div>
    );
};

export default ShareBiodata;