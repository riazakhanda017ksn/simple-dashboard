/* eslint-disable jsx-a11y/anchor-is-valid */
// @ts-nocheck
import {
  faCheck,
  faCommentDots,
  faHome,
  faList,
  faPencilAlt,
  faPeopleCarry,
  faPlus,
  faStore,
  faUser,
  faUserAlt,
  faUserPlus,
  faUserTie,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Dashboard.css";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Any from "./Any";
import File from "./file";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const { path, url } = useRouteMatch();
  console.log("path", path, url);
  return (
    <div>
      <section className="dashboard top-spacing">
        <div
          className={`dashboard__sidebar ${sidebar ? "active" : ""}`}
          onClick={(e) => setSidebar(false)}
        >
          <div className="sidebar__inner">
            <div className="sidebar__nav">
              {/* //// */}
              {/* //link start from here// */}
              <ul>
                <li>
                  <Link to="/">
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={`${url}/any`}>
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Sales
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Message
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Sales Anylist
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Chart
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    {" "}
                    <span>
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    User Sales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dashboard__content">
          <div className="dashboard__header">
            <div className="user-img-and-dashboard-name">
              <h3>Dashboard</h3>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14Ggm8NcyEUQAi5uNIi15gWY2hFHKurE0hvpMq9wiUA=s96-c"
                alt=""
              />
            </div>
            <button
              className="dashboard__menu"
              onClick={() => setSidebar(true)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <Switch>
            <Route exact path={`${path}/`}>
              <File />
            </Route>
            <Route path={`${path}/any`}>
              <Any />
            </Route>
          </Switch>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
