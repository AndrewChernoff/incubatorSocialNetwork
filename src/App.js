import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.friends} />
        <div class='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profileComponent}
            dispatch={props.dispatch}
            newPostText={props.state.profileComponent} />} />

          {/* <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsComponent}
            textNewMessage={props.textNewMessage}
            newMessageText={props.state.dialogsComponent}
            updateMessageText={props.updateMessageText} />} /> */}
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsComponent}
            dispatch={props.dispatch}
            newMessageText={props.state.dialogsComponent} />} />

          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;