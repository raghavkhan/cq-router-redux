//pdp page

const initialStatePost = { posts: [] };
const initialStateUserPost = { userPosts: [] };

export const postReducer = (state = initialStatePost, action) => {
  //////////////////////////
  if (action.type === "SET_POSTS") {
    return {
     ...state,
      posts: action.payload
    };
  }
  
  ////////////////////////////////////
  else return state;
};

export const userPostReducer = (state = initialStateUserPost, action) => {
    if (action.type === "SET_USERPOSTS"){
        return {
            ...state,
            userPosts : action.payload
        }
    }
    else return state;
    }
