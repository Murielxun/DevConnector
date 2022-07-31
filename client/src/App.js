import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import ProfileForm from './components/profile-forms/ProfileForm';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <section className='container'>
          <Alert />
          <Fragment>
            <Routes>
              <Route exact path='/' element={<Landing />} />
              <Route exact path='register' element={<Register />} />
              <Route exact path='login' element={<Login />} />
              <Route exact path='profiles' element={<Profiles />} />
              <Route exact path='profile/:id' element={<Profile />} />
              <Route
                exact
                path='dashboard'
                element={<PrivateRoute component={Dashboard} />}
              />{' '}
              <Route
                exact
                path='create-profile'
                element={<PrivateRoute component={ProfileForm} />}
              />{' '}
              <Route
                exact
                path='edit-profile'
                element={<PrivateRoute component={ProfileForm} />}
              />{' '}
              <Route
                exact
                path='add-experience'
                element={<PrivateRoute component={AddExperience} />}
              />{' '}
              <Route
                exact
                path='add-education'
                element={<PrivateRoute component={AddEducation} />}
              />
              <Route
                exact
                path='posts'
                element={<PrivateRoute component={Posts} />}
              />{' '}
              <Route
                exact
                path='posts/:id'
                element={<PrivateRoute component={Post} />}
              />
            </Routes>
          </Fragment>
        </section>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
