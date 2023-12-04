import Select from 'react-select';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShareBiodata from '../../Shared/ShareBiodata';

const Biodatas = () => {
    const [division,setDivision] = useState({value:''});
    const [sex,setSex] = useState({value:''}); 
    const [age,setAge] = useState({value: ''});
    const [data, setData] = useState([])
    

    useEffect(()=>{
        axios(`https://matrimony-server-liart.vercel.app/biodata?sex=${sex.value}&division=${division.value}&age=${age.value}`)
        .then(res=>setData(res.data))
    })
    const type = [
        { value: '', label: '------' },
        { value: 'Dhaka', label: 'Dhaka' },
        { value: 'Khulna', label: 'Khulna' },
        { value: 'Chattagram', label: 'Chattagram' },
        { value: 'Barisal', label: 'Barisal' },
        { value: 'Rangpur', label: 'Rangpur' },
        { value: 'Sylhet', label: 'Sylhet' },
        { value: 'Maymansign', label: 'Maymansign' }
    ];
    const options = [
        { value: '', label: '-------' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' }
    ];

    const ages = [
        { value: '', label: '-------' },
        { value: 25, label: '25' },
        { value: 30, label: '30' },
        { value: 35, label: '35' },
        { value: 40, label: '40' },
        { value: 45, label: '45' },
        { value: 50, label: '50' }
    ];


    return (
        <div className='flex px-5'>
            <div className="">
            <div className="w-80 gap-4 py-20">
                    <h1>Sort By Division</h1>
                    <Select className='w-44'
                    options={type}
                    defaultValue={division}
                    onChange={setDivision}
                    placeholder={'-------'} 
                    />
                    <h1>Sort By Gender</h1>
                    <Select className='w-44'
                    options={options}
                    defaultValue={sex}
                    onChange={setSex}
                    placeholder={'-------'} 
                    />
                    <h1>Sort By Age</h1>
                    <Select className='w-44'
                    options={ages}
                    defaultValue={age}
                    onChange={setAge}
                    placeholder={'-------'} 
                    />                    
                </div>
            </div>
           <div className="py-24">
           <div className="text-center text-5xl pb-14">Biodatas</div> 
            <div className="grid md:grid-cols-3  gap-5">
            {
                data.map(data=> <ShareBiodata key={data._id} item={data}/>)
            }
            </div>
           </div>
        </div>
    );
};

export default Biodatas;