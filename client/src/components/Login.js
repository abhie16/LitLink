import React from 'react'
import {Form,Input,Button} from 'antd'
import {Link} from 'react-router-dom'

const Login = () => {

  const onFinish = (values) => {
    console.log('Success:', values)
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