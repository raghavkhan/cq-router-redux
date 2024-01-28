import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
          }}
        >
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/posts'>All Posts</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default NavBar;
