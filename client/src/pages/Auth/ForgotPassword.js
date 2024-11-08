import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [question,setQuestion] = useState("");
    const navigate = useNavigate();
  //form function handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('/api/v1/auth/forgot-password',
        {email,
        newPassword,
        question}
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
    <Layout title = {'Forgot Password - Ecommerce App'}>
        <div className="form-container">
            <form onSubmit = {handleSubmit}>
            <h4 className="title">Reset Password</h4>
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
                    type="text" 
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="form-control"
                    id="exampleInputQustion1" 
                    placeholder = "Enter your first school name"
                    required/>
                </div>
                <div className="mb-3">
                    <input 
                    type="password" 
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder = "Enter your password"
                    required/>
                </div>
                <button type="submit" className="btn btn-primary">
                    Reset
                </button>
            </form>
        </div>
    </Layout>
  )
}

export default ForgotPassword