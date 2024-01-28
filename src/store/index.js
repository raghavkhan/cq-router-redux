import { createStore } from "redux";
import rootReducer from "./reducers/index.js";

// //optional import
// import userPostReducer from "./reducers/post.js";

// const store = createStore(
//   rootReducer
//   // userPostReducer
// );

const store = createStore(rootReducer)

export default store;

// import { configureStore } from '@reduxjs/toolkit'

// const store = configureStore({
//   reducer: {rightDrawerReducer},
// })
// export default store