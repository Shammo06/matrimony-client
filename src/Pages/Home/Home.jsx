import Banner from "./Banner";
import BioData from "./BioData";
import Counter from "./Counter";
import HowWork from "./HowWork";
import SuccessStory from "./SuccessStory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BioData></BioData>
            <HowWork></HowWork>
            <SuccessStory></SuccessStory> 
            <Counter></Counter>          
        </div>
    );
};

export default Home;