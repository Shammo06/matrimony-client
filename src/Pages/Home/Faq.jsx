import { FaQuestionCircle } from "react-icons/fa";

const Faq = () => {
    return (
        <div className="pb-20 md:px-28">
            <div className="md:text-5xl py-14 flex gap-2"><FaQuestionCircle></FaQuestionCircle>Frequently Asked Questions</div>
           <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" /> 
            <div className="collapse-title text-xl font-medium">
                How to register on Biye Shadi?
            </div>
            <div className="collapse-content"> 
                <p>Register on BiyeShadi.com for free by providing necessary details.</p>
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
                What are some of the top-notch safety measures in Biye Shadi?
            </div>
            <div className="collapse-content"> 
                <p>At Bharat Matrimony, we always prioritize your safety first. When it comes to your safety we are number One.</p>
            </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
            Why choose Biye Shadi Premium Membership plan?
            </div>
            <div className="collapse-content"> 
                <p>
                Contact your matches directly through Call, WhatsApp, Chat, Message and Video Call
                Get featured in the Premium Members section and receive more responses
                View and match unlimited horoscopes
                </p>
            </div>
            </div> 
            <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" /> 
            <div className="collapse-title text-xl font-medium">
                 What are the features of Biye Shadi?
            </div>
            <div className="collapse-content"> 
                <p>
                Search for matches by city, Age, Gender and many other specific parameters
                View complete profile details, photos, and contact matches you like
                Connect instantly with your matches through getting Premimum membership
                </p>
            </div>
            </div>
        </div>
    );
};

export default Faq;




