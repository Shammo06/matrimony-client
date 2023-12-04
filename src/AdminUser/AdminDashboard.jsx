
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

import WcIcon from '@mui/icons-material/Wc';
import useData from '../hook/useData';

const AdminDashboard = () => {
    const [data] = useData();
    const male = data.filter(item => item && item.sex === 'Male');
    const female = data.filter(item => item && item.sex === 'Female');
    
    return (
        <div className='py-10 bg-rose-400 text-rose-100'>
        <div className="text-center text-5xl py-14">Our Success Counter</div>
        <div className="grid md:grid-cols-4 px-5 md:px-24">
            <div className="text-center pb-10">
                <Diversity1Icon fontSize="large"/>
                <h1 className='py-2 text-4xl'>Total Biodata</h1>
                <p className="text-9xl">{data.length}</p>
            </div>
            <div className="text-center pb-10">
                <ManIcon fontSize="large"/>
                <h1 className='py-2 text-4xl'>Male Biodata</h1>
                <p className="text-9xl">{male.length}</p>
            </div>
            <div className="text-center pb-10">
                <WomanIcon fontSize="large"/>
                <h1 className='py-2 text-4xl '>Female Biodata</h1>
                <p className="text-9xl">{female.length}</p>
            </div>
            <div className="text-center pb-10">
                <WcIcon fontSize="large"/>
                <h1 className='py-2 text-4xl '>Marriage</h1>
                <p className="text-9xl">20</p>
            </div>
        </div>
    </div>
    );
};

export default AdminDashboard;