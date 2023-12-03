import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Details = ({item}) => {
    const data = item;
    return (
        <div>       
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">Biodata ID: {data.biodataID}</Typography>
                <Typography gutterBottom variant="h5" component="div">Biodata Type: {data.sex}</Typography>  
                <Typography gutterBottom variant="h5" component="div">Name: {data.name}</Typography>
                <Typography gutterBottom variant="h5" component="div">Age: {data.age} years</Typography>
                <Typography gutterBottom variant="h5" component="div">Race: {data.race}</Typography>
                <Typography gutterBottom variant="h5" component="div">Occupation: {data.occupation}</Typography>
                <Typography gutterBottom variant="h5" component="div">Birth Date: {data.birth}</Typography>
                <Typography gutterBottom variant="h5" component="div">Height: {data.height}</Typography>
                <Typography gutterBottom variant="h5" component="div">Weight: {data.weight}</Typography>
                <Typography gutterBottom variant="h5" component="div">Fathers Name: {data.fatherName}</Typography>
                <Typography gutterBottom variant="h5" component="div">Mothers Name: {data.motherName}</Typography>
                <Typography gutterBottom variant="h5" component="div">Partner Expected Height: {data.partnerHeight}</Typography>
                <Typography gutterBottom variant="h5" component="div">Partner Expected Weight: {data.partnerWeight}</Typography>    
                <Typography gutterBottom variant="h5" component="div">Partner Expected Age: {data.partnerAge}</Typography>
            </CardContent>  
            
        </div>
    );
};

export default Details;