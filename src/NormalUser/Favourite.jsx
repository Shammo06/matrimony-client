import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useData from '../hook/useData';
import swal from 'sweetalert';

const Favourite = () => {
    const [data,setData] = useState([]);
    const {user} = useContext(AuthContext);
    let item = data.filter(item => item && item.userEmail === `${user.email}`);
    useEffect(()=>{
    axios.get(`https://matrimony-server-liart.vercel.app/favourite`)
    .then(response =>{setData(response.data);
        console.log(response.data)
    });
    })
    
    const handleDelete = (id) =>{
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this donate food details",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            fetch(`https://matrimony-server-liart.vercel.app/contactrequest/${id}`,{
              method: 'DELETE'
               })
              .then(res => res.json())
              .then(data => {
                
                      swal("Deleted!", "Your contact has been deleted.", "success");                    
                      item = item.filter(item => item._id !== id);                     
                      
                  
              })
          } 
        });
                    
       
        }   

    return (
        <div>
           { data?.length>0?
            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Biodata ID</TableCell>
                  <TableCell align="right">Permanent Address</TableCell>
                  <TableCell align="right">Occupation</TableCell>
                  <TableCell align="right">Delete</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.biodataID}</TableCell>
                    <TableCell align="right">{row.division}</TableCell>
                    <TableCell align="right">{row.occupation}</TableCell>
                    <TableCell align="right"><button className="bg-blue-500 text-white" onClick={()=>handleDelete(row._id)}>Delete</button></TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          :
          <p className="text-center text-5xl py-14">Donot Add Any Favourite Biodata</p>
           } 
        </div>
    );
};

export default Favourite;