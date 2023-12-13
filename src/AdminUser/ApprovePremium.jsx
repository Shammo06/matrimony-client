import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';
import useData from '../hook/useData';



const ApprovePremium = () => {
    const [data,refetch] = useData();
    const item = data.filter(item => item && item.biodataType === 'pending');

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
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Biodata ID</TableCell>
            <TableCell align="right">Make Premium</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {item.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.biodataID}</TableCell>
              <TableCell align="right"><button className="bg-blue-500 text-orange-100 rounded-lg w-28" onClick={()=>handlePremium(row._id)}>{row.biodataType==="premium"?"Premium":"Make Premium"}</button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default ApprovePremium;