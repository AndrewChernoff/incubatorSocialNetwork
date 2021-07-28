import dialogReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _state: {
    profileComponent: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 15 },
        { id: 2, message: 'It\'s my first post', likeCount: 20 },
      ],
      newPostText: 'it-samurai'
    },

    dialogsComponent: {
      dialogs: [
        { name: 'Dimych', id: 1 },
        { name: 'Andrey', id: 2 },
        { name: 'Sveta', id: 3 },
        { name: 'Sasha', id: 4 },
        { name: 'Victor', id: 5 },
        { name: 'Valera', id: 6 },
      ],

      message: [
        { message: 'Hi', id: 1 },
        { message: 'How is your React', id: 2 },
        { message: 'Yo', id: 3 },
        { message: 'Yo', id: 4 },
        { message: 'Yo', id: 5 },
      ],
      newMessageText: ''
    },

    sidebar: [
      { name: 'Andrew', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVT7KXYQ8uEG3LVXleY_e5t--XmqCby2lFQ&usqp=CAU' },
      { name: 'Sasha', ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg' },
      { name: 'Sveta', ava: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg' }
    ]
  },

  getState() {
    return this._state;
  },

  dispatch(action) {
    this._state.profileComponent = profileReducer(this._state.profileComponent, action);
    this._state.dialogsComponent = dialogReducer(this._state.dialogsComponent, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
}

export default store;