import { useForm } from "react-hook-form"
import useData from "../hook/useData"
import axios from "axios"
import swal from "sweetalert"
import { AuthContext } from "../AuthContext/AuthProvider"
import { useContext } from "react"

const EditBiodata = () => {
  const {user} = useContext(AuthContext)
  const { register, handleSubmit,reset } = useForm();
  const [data,refetch] = useData();
  let ID = data.length+1

  const onSubmit = (data) =>{
    data['biodataID']=ID 
    data["biodataType"]="regular"  
    axios.post('https://matrimony-server-liart.vercel.app/biodatas', data)
    .then(response  => {      
          swal("Successfully", "Your Biodata Successfully Publish", "success");
          reset()
          refetch();     
    })
    .catch(error=> {
      console.log(error);
    }); 
 
  }
  
  

  return (
    <div className="text-blue-600 bg-yellow-100 mx-72">
        <h1 className="text-center text-5xl py-10 font-bold">Edit Your Biodata</h1>
        <form className='px-32' onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Biodata Type</label>
          <select {...register('sex', { required: true })} className="form-control border-2 text-black border-red-300 w-80">
            <option value="Female">Female</option>
            <option value="Male">Male</option>
        </select>
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Name</label>
          <input {...register('name', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='name' />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Photo Link</label>
          <input {...register('image', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Image link' />
        </div>
        <div className="form-group pt-3">
            <label className="input-label text-2xl flex">Date of Birth</label>
            <input type="date" {...register('birth', { required: true })} className="form-control border-2 text-black border-red-300 w-80" />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Height</label>
          <select {...register('height', { required: true })} className="form-control border-2 text-black border-red-300 w-80">
          <option value="5">5</option>
            <option value="5.2">5.2</option>
            <option value="5.4">5.4</option>
            <option value="5.6">5.6</option>
            <option value="5.8">5.8</option>
            <option value="5.10">5.10</option>
            <option value="6">6</option>      
        </select>
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Weight</label>
          <input {...register('weight', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Your weight' />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Age</label>
          <input {...register('age', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Your Age' />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Occupation</label>
          <select {...register('occupation', { required: true })} className="form-control border-2 text-black border-red-300 w-80">
          <option value="Student">Student</option>
            <option value="Job">Job</option>
            <option value="House Wife">House Wife</option>   
        </select>
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Race</label>
          <select {...register('race', { required: true })} className="form-control border-2 text-black border-red-300 w-80">
          <option value="Bangladeshi">Bangladeshi</option>
            <option value="Indian">Indian</option>
            <option value="Pakistani">Pakistani</option>
            <option value="American">American</option>
            <option value="European">European</option>
            <option value="Others">Others</option>   
        </select>
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Fathers name</label>
          <input {...register('fatherName', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Fathers Name' />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Mothers Name</label>
          <input {...register('motherName', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Your Mothers Name' />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Permanent Division</label>
          <select {...register('division', { required: true })} className="form-control border-2 text-black border-red-300 w-80">
            <option value="Rajshahi">Rajshahi</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Khulna">Khulna</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Maymansign">Maymansign</option>
            <option value="Sylhet">Sylhet</option>       
        </select>
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Persent Division</label>
          <select {...register('presentDivision', { required: true })} className="form-control border-2 text-black border-red-300 w-80">
            <option value="Rajshahi">Rajshahi</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagram">Chattagram</option>
            <option value="Khulna">Khulna</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Maymansign">Maymansign</option>
            <option value="Sylhet">Sylhet</option>       
        </select>
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Partner Expected Age</label>
          <input {...register('partnerAge', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Partner Expected Age' />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Partner Expected Height</label>
          <select {...register('partnerHeight', { required: true })} className="form-control border-2 text-black border-red-300 w-80">
          <option value="5">5</option>
            <option value="5.2">5.2</option>
            <option value="5.4">5.4</option>
            <option value="5.6">5.6</option>
            <option value="5.8">5.8</option>
            <option value="5.10">5.10</option>
            <option value="6">6</option>      
        </select>
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Partner Expected Weight</label>
          <input {...register('partnerWeight', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Partner weight' />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Your Email</label>
          <input {...register('email', { required: true })} className="form-control border-2 text-black border-red-300 w-80" defaultValue={user.email} readOnly={true} />
        </div>
        <div className="form-group pt-3 ">
          <label className="input-label text-2xl flex">Mobile Number</label>
          <input {...register('mobile', { required: true })} className="form-control border-2 text-black border-red-300 w-80" placeholder='Your Mobile Number' />
        </div>
       
        
        

      <input className='px-5 my-5 bg-blue-600 text-white w-32 h-10' type="Submit" />
    </form>
    </div>
  )
}

export default EditBiodata;