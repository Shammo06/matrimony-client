import { useEffect, useState } from 'react';
import axios from 'axios';
import ShareBiodata from '../../Shared/ShareBiodata';

const BioData = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
    axios.get('http://localhost:5000/biodatas?biodataType=premium')
    .then(response =>{setData(response.data);
        console.log(response.data)
    });
    })
    console.log(data)
    return (
        <div>
             <div className="text-center text-5xl py-14">Biodatas</div>      
            <div className='grid md:grid-cols-3 md:px-24'>
                {
                    data.map(data=>
                        <ShareBiodata key={data._id} item={data}/>
                        )
                }
            </div>   
        </div>
    );
};

export default BioData;