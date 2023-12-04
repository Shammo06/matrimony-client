import Typography from '@mui/material/Typography';
import { Button } from "@mui/base";
import swal from "sweetalert";
import Card from '@mui/material/Card';
import useData from '../hook/useData';
import Details from '../Shared/Details';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';

const ViewBiodata = () => {
    const [data,refetch] = useData();
    const {user} = useContext(AuthContext);
    const item = data.find(item => item && item.email === `${user.email}`);
    const handleClick= () =>{
        fetch(`https://matrimony-server-liart.vercel.app/biodata/${item._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ biodataType: 'Pending' })
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)                
                if (res.modifiedCount > 0) {
                    refetch()
                    swal("Successfully submit request");
                }
            })
    }

    return (
        <div className="">
            <Card sx={{ maxWidth: 345 }}>
            <img src={item.image} className=' w-full' /> 
            {
                <Details item={item}/>
            }
            {               
                 item.biodataType==="Premium"?<>
                 <Typography gutterBottom variant="h5" component="div">Permanent Address: {item.division}</Typography>
                 <Typography gutterBottom variant="h5" component="div">Present Address: {item.presentDivision}</Typography>
                 <Typography gutterBottom variant="h5" component="div">Email: {item.email}</Typography>    
                 <Typography gutterBottom variant="h5" component="div">Mobile: {item.mobile}</Typography>
                 </>:
                  <Typography gutterBottom variant="h5" component="div">
                      <Button className='rounded-lg w-full text-white bg-blue-700' onClick={handleClick} variant="contained" size="small">Make Premium</Button>
                  </Typography>
                  
                   
            }
              
            </Card>
           
        </div>
    );
};

export default ViewBiodata;