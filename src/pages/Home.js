import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: "SET_USERS", payload: data });
    setLoading(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <Link to={`/posts/${index + 1}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <p>done by raghav</p>
      <Outlet />
    </>
  );
};

export default Home;
