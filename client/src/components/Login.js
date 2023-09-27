import React from 'react'
import {Form,Input,Button} from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {

  const {loading} = useSelector(state => state.alerts);
  console.log(loading);

  const navigate = useNavigate();

  const onFinish = async(values) => {
    
    try {
      const response = await axios.post('/api/user/login', values);
      if(response.data.success){
        toast.success(response.data.message);
        toast("Redirecting to Hompage Page");

        localStorage.setItem('token', response.data.data);

        navigate('/');
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className='auth-wrapper'>
      <div className='auth-form card p-2'>
        <h1 className='card-title'>Welcome Back!!</h1>
        <Form onFinish={onFinish}>
          <Form.Item name='email'>
            <Input type='email' placeholder='Enter your Email' />
          </Form.Item>
          <Form.Item name='password'>
            <Input type='password' placeholder='Enter your Password' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              LogIn
            </Button>
          </Form.Item>
          <Link to='/register'>New User? Register</Link>
        </Form>
      </div>
    </div>
  )
}

export default Login