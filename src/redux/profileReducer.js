const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';

let initialState = {
    posts: [
      { id: 1, message: 'Hi, how are you?', likeCount: '15' },
      { id: 2, message: 'It\'s my first post', likeCount: '20' },
    ],
    newPostText: 'it-samurai'
  }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likeCount: '0'
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

            case Update_Post_Text:
                state.newPostText = action.newText;
                return state;
                default: return state;
    }
}

export const addPostActionCreator = () => ({ type: Add_Post });
export const updatePostTextCreator = (text) => ({ type: Update_Post_Text, newText: text });


export default profileReducer