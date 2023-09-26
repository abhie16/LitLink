import React from 'react'
import { Form, Input, Button } from 'antd'
import {Link} from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-form card p-2'>
        <h1 className='card-title'>Welcome to the LitLink!!</h1>
        <Form>
          <Form.Item name='name'>
            <Input placeholder='Enter your Name' />
          </Form.Item>
          <Form.Item name='email'>
            <Input placeholder='Enter your Email' />
          </Form.Item>
          <Form.Item name='password'>
            <Input type='password' placeholder='Enter your Password' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' block>
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