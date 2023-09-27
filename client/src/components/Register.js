import React from 'react';
import { Form, Input, Button } from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { showLoading, hideLoading } from '../redux/alertsSlice';


const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async(values) => {
    
    try {
      dispatch(showLoading());
      const response = await axios.post('/api/user/register', values);
      dispatch(hideLoading());
      if(response.data.success){
        toast.success(response.data.message);
        toast("Redirecting to Login Page");
        navigate('/login');
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  }

  return (
    <div className='auth-wrapper'>
      <div className='auth-form card p-2'>
        <h1 className='card-title'>Welcome to the LitLink!!</h1>
        <Form onFinish={onFinish}>
          <Form.Item name='name'>
            <Input placeholder='Enter your Name' />
          </Form.Item>
          <Form.Item name='email'>
            <Input type='email' placeholder='Enter your Email' />
          </Form.Item>
          <Form.Item name='password'>
            <Input type='password' placeholder='Create your Password' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              Register
            </Button>
          </Form.Item>
          <Link to='/login'>Already have an account? Login</Link>
        </Form>
      </div>
    </div>

  )
}

export default Register