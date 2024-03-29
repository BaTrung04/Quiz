import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";

const LayoutDefault = () => {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">
            <Link to="/">Quiz</Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/topic">Topic</NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink to="/answers">Answers</NavLink>
              </li>
            </ul>
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet />
        </main>
        <footer className="layout-default__footer">
          Copyright @2024 by BT
        </footer>
      </div>
    </>
  );
};

export default LayoutDefault;
