import bg from '../../../public/nick-karvounis-6vwrVGrxOKE-unsplash.jpg'

const Banner = () => {
    return (
        <div className="relative">
           <div >
           <img src={bg} alt="" />
           </div> 
            <div className="absolute top-1/3 left-1/2">
                <h1>Find Your Life Partner</h1>
                <h1>With Our No1 Site</h1>
            </div>           
        </div>
    );
};

export default Banner;