import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const userPosts = useSelector((state) => state.userPostReducer.userPosts);
  const posts = useSelector((state) => state.postReducer.posts);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    if (!userId) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const postsData = await response.json();
      dispatch({ type: "SET_POSTS", payload: postsData });
    } else {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
      );
      const userPostsData = await response.json();
      dispatch({ type: "SET_USERPOSTS", payload: userPostsData });
    }
    setLoading(false);
  };
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!userId ? (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id}>{post.body}</li>
          ))}
        </ul>
      ) : (
        <ul>
          {userPosts.map((userPost, index) => (
            <li key={userPost.id}>{userPost.body}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Post;
