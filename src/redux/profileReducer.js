const Add_Post = 'Add-Post';
const Update_Post_Text = 'Update-Post-Text';

const profileReducer = (state, action) => {
    if (action.type === Add_Post) {
        let newPost = {
            id: 3,
            message: state.newPostText,
            likeCount: '0'
        }
        state.posts.push(newPost);
        state.newPostText = '';
    }
    else if (action.type === Update_Post_Text) {
        state.newPostText = action.newText;
    }
    return state
}

export default profileReducer