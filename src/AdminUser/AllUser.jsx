import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useData from '../hook/useData';
import swal from 'sweetalert';



const AllUser = () =>  {
    const [data,refetch] = useData();

    const handlePremium= (Id) =>{
        fetch(`https://matrimony-server-liart.vercel.app/biodata/${Id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ biodataType: 'premium' })
        })
            .then(res => res.json())
            .then(res => {if (res.modifiedCount > 0) {
                refetch()
                swal("Successfully make Premium");
                   
                }
            })
    }
    const handleAdmin = (email) =>{
        fetch(`https://matrimony-server-liart.vercel.app/user/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ role: 'admin' })
        })
            .then(res => res.json())
            .then(res => {if (res.modifiedCount > 0) {
                   swal("admin make Successfully");
                }
            })
    }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="right">User Email</TableCell>
            <TableCell align="right">Make Admin</TableCell>
            <TableCell align="right">Make Premium</TableCell>
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
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><button className="bg-blue-500 text-white" onClick={()=>handlePremium(row.email)}>Make Admin</button></TableCell>
              <TableCell align="right"><button className="bg-blue-500 text-white" onClick={()=>handlePremium(row._Id)}>{row.biodataType==="premium"?"Premium":"Make Premium"}</button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



   

export default AllUser;