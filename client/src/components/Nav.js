import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { setToken } from '../reducer/login';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppstoreOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import Logo from './logo.png';

const { SubMenu, Item } = Menu;

export default function Header() {
  const [current, setCurrent] = useState('home');

  const history = useHistory();
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return {
      token: state.login,
    };
  });

  const user = state.token;

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };
  console.log(user.userId);

  const logout = () => {
    history.push('/login')
    dispatch(setToken(''));
    localStorage.clear();
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item>
        <Link to="/">
          <img src={Logo} alt="imag" />
        </Link>
      </Item>
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu
          icon={<SettingOutlined />}
          title="my name"
          className="float-right"
        >
          {user && (
            <Item>
              <Link to="/user/history">Dashboard</Link>
            </Item>
          )}

          {user && user.role === 'admin' && (
            <Item>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
          )}
        </SubMenu>
      )}
    </Menu>
  );
}
