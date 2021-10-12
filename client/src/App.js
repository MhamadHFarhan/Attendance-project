import React, { Suspense } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';

import Header from './components/Nav';
import Login from './components/login';

const App = () => {

  return (
    <Suspense
      fallback={
        <div className="col text-center p-5">
          __ MERAKI
          <LoadingOutlined />
          Academy __
        </div>
      }
    >
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Suspense>
  );
};

export default App;
