import React, { useEffect, useState } from 'react';
import { setToken } from '../reducer/login';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      token: state.login,
    };
  });

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`http://localhost:5000/login`, {
        email,
        password,
      });
      if (res.data.success) {
        console.log(res.data);
        dispatch(setToken(res.data.token));
      } else throw Error;
    } catch (error) {
      setLoading(false);
      toast.error('Email or password is not correct!');
    }
  };

  useEffect(() => {
    if (state.token) {
      //

      history.push('/');
    }
  });

  const loginForm = () => (
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
          onClick={login}
          icon={<MailOutlined />}
          size="medum"
          disabled={!email || password.length < 4}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-2">
          <h4> Login</h4>
          <br />
          {loginForm()}

          <Link to="/register" className="text-danger">
            New account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
