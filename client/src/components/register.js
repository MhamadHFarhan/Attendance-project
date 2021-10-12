import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const addNewUser = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:5000/users', {
        firstName,
        lastName,
        email,
        password,
      });
      if (result.data.success) {
        console.log(result.data.success);
      } else throw Error;
    } catch (error) {}
  };

    const registerForm = () => {
        <Form
          name="basic"
          labelCol={{ span: 50 }}
          wrapperCol={{ span: 25 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 55, span: 23 }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={addNewUser}
              icon={<MailOutlined />}
              disabled={!email || password.length < 4}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>;
    }

    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-2">
            <h4> Register</h4>
            <br />
            

            <Link to="/register" className="text-danger">
              New account?
            </Link>
          </div>
        </div>
      </div>
    );
}
