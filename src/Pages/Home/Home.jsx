import Banner from "./Banner";
import BioData from "./BioData";
import Counter from "./Counter";
import Faq from "./Faq";
import HowWork from "./HowWork";
import SuccessStory from "./SuccessStory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWork></HowWork>
            <BioData></BioData>            
            <Counter></Counter>
            <SuccessStory></SuccessStory> 
            <Faq></Faq>                      
        </div>
    );
};

export default Home;