import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/FindUsers/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LogIn';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Prelouder from './components/common/Prelouder';
import { withRouter } from 'react-router';

class App extends React.Component {

  componentDidMount() {
    debugger
    //this.props.getAuthUserData();
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Prelouder/>
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar sidebar={this.props.state} />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />

          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />
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

export default withRouter(connect(mapStateToProps, { initializeApp })(App));