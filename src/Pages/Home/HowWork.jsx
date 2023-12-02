
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GroupIcon from '@mui/icons-material/Group';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
const HowWork = () => {
    return (
        <div className='py-10 bg-rose-400 text-rose-100'>
            <div className="text-center text-5xl py-14">Find Your Life Partner</div>
            <div className="grid md:grid-cols-3 px-5 md:px-24">
                <div className="text-center pb-10">
                    <AssignmentIndIcon fontSize="large"/>
                    <h1 className='py-2 text-4xl'>Sign Up</h1>
                    <p>Register for free & put up your Matrimony Profile</p>
                </div>
                <div className="text-center pb-10">
                    <GroupIcon fontSize="large"/>
                    <h1 className='py-2 text-4xl'>Connect</h1>
                    <p>Select & Connect with Matches you like</p>
                </div>
                <div className="text-center pb-10">
                    <VideoCameraFrontIcon fontSize="large"/>
                    <h1 className='py-2 text-4xl'>Interact</h1>
                    <p>Become a Premium Member & Start a Conversation</p>
                </div>
            </div>
        </div>
    );
};
export default HowWork;


