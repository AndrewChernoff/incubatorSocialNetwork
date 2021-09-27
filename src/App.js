import './App.css';
import Navbar from './components/Navbar/Navbar';
import { HashRouter, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LogIn';
import React, { Suspense } from 'react';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Prelouder from './components/common/Prelouder';
import { Switch, withRouter } from 'react-router';
import { compose } from 'redux'
import store from './redux/redux-store';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const UsersContainer = React.lazy(() => import('./components/FindUsers/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Prelouder />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar sidebar={this.props.state} />
        <div className='app-wrapper-content'>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => <DialogsContainer />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/login' render={() => <LoginPage />} />
            </Switch>
          </Suspense>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.isInitialized
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))
  (App)

const SamuraiApp = () => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default SamuraiApp;