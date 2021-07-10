const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';

const Send_Message = 'Send-Message';
const Update_Message_Body = 'Update-Message-Body';

let store = {
  _renderEntireTree() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._renderEntireTree = observer;
  },

  _state: {
    profileComponent: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: '15' },
        { id: 2, message: 'It\'s my first post', likeCount: '20' },
      ],
      newPostText: 'it-samurai'
    },

    dialogsComponent: {
      dialogs: [
        { name: 'Dimych', id: '1' },
        { name: 'Andrey', id: '2' },
        { name: 'Sveta', id: '3' },
        { name: 'Sasha', id: '4' },
        { name: 'Victor', id: '5' },
        { name: 'Valera', id: '6' },
      ],

      message: [
        { message: 'Hi', id: '1' },
        { message: 'How is your React', id: '2' },
        { message: 'Yo', id: '3' },
        { message: 'Yo', id: '4' },
        { message: 'Yo', id: '5' },
      ],
      newMessageText: ''
    },

    friends: [
      { name: 'Andrew', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVT7KXYQ8uEG3LVXleY_e5t--XmqCby2lFQ&usqp=CAU' },
      { name: 'Sasha', ava: 'https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg' },
      { name: 'Sveta', ava: 'https://n1s2.starhit.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0_2bbde84177c9ff1c2299a26a0f69f69c@480x496_0xac120003_4430520541578509619.jpg' }
    ]
  },

  getState() {
    return this._state;
  },

  /*  addPost() {
     let newPost = {
       id: 3,
       message: this._state.profileComponent.newPostText,
       likeCount: '0'
     };
     this._state.profileComponent.posts.push(newPost);
     this._state.profileComponent.newPostText = '';
     this._renderEntireTree(this._state);
   },
 
   updatePostText(newText) {
     this._state.profileComponent.newPostText = newText;
     this._renderEntireTree(this._state);
   }, */

  /* textNewMessage(message) {
    let newMessage = {
      message: message,
      id: '6'
    }
    this._state.dialogsComponent.message.push(newMessage);
    this._state.dialogsComponent.newMessageText = '';
    this._renderEntireTree(this._state);
  },

  updateMessageText(newText) {
    this._state.dialogsComponent.newMessageText = newText;
    this._renderEntireTree(this._state);
  }, */

  dispatch(action) {
    debugger
    if (action.type === 'Add-Post') {
      let newPost = {
        id: 3,
        message: this._state.profileComponent.newPostText,
        likeCount: '0'
      };
      this._state.profileComponent.posts.push(newPost);
      this._state.profileComponent.newPostText = '';
      this._renderEntireTree(this._state);
    }
    else if (action.type === 'Update-Post-Text') {
      this._state.profileComponent.newPostText = action.newText;
      this._renderEntireTree(this._state);
    }
    else if (action.type === 'Send-Message') {
      let newMessage = {
        message:  this._state.dialogsComponent.newMessageText,
        id: '6'
      }
      this._state.dialogsComponent.message.push(newMessage);
      this._state.dialogsComponent.newMessageText = '';
      this._renderEntireTree(this._state);
    }
    else if (action.type === 'Update-Message-Body') {
      this._state.dialogsComponent.newMessageText = action.newText;
      this._renderEntireTree(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: Add_Post });
export const updatePostTextCreator = (text) => ({ type: Update_Post_Text, newText: text });

export const sendMessageActionCreator = () => ({type: Send_Message});
export const updateMessageBodyActionCreator = (text) => ({type:Update_Message_Body, newText: text });

export default store;