import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
const SignUp = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [question,setQuestion] = useState("");
    const navigate = useNavigate();
  //form function handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('/api/v1/auth/SignUp',
        {name,email,password,phone,address,question}
        );
        if(res && res.data.success) {
            toast.success(res.data && res.data.message);
            setTimeout(() => {
                navigate('/login');
            });
        }else {
            toast.error(res.data.message);
        }
    } catch(error) {
        console.log(error);
        toast.error('Something went wrong');
    }
  }
  return (
    <Layout title = "SignUp">
        <div className="form-container">
            <h1>SignUp</h1>
            <form onSubmit = {handleSubmit}>
                <div className="mb-3">
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleInputName" 
                    placeholder = "Enter your Name"
                    required/>
                </div>
                <div className="mb-3">
                    <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1" 
                    placeholder = "Enter your email"
                    required/>
                </div>
                <div className="mb-3">
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder = "Enter your password"
                    required/>
                </div>
                <div className="mb-3">
                    <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control" 
                    id="exampleInputPhone" 
                    placeholder = "Enter your phone number"
                    required/>
                </div>
                <div className="mb-3">
                    <input 
                    type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control" 
                    id="exampleInputAddress" 
                    placeholder = "Enter your address"
                    required/>
                </div>
                <div className="mb-3">
                    <input 
                    type="text" 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="form-control" 
                    id="exampleInputAddress" 
                    placeholder = "What is your first school"
                    required/>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>       
    </Layout>
  )
}

export default SignUp