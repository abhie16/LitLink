import React from 'react'
import {Form,Input,Button} from 'antd'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-form card p-2'>
        <h1 className='card-title'>Welcome Back!!</h1>
        <Form>
          <Form.Item name='email'>
            <Input placeholder='Enter your Email' />
          </Form.Item>
          <Form.Item name='password'>
            <Input type='password' placeholder='Enter your Password' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' block>
              LogIn
            </Button>
          </Form.Item>
          <Link to='/register'>Forget Password?</Link>
        </Form>
      </div>
    </div>
  )
}

export default Login