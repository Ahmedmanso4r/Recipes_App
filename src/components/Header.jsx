import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserAuthenticatedContext from "../context/UserAuthenticated";

export default function Header() {
  const counterValue = useSelector((state) => state.counter.value);
  const {isUserAuthenticated} = useContext(UserAuthenticatedContext)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand">
          Recipes App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link"to="/">
                Recipes List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-recipe">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe-counter">
                Recipes Counter : {counterValue}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                Settings : {isUserAuthenticated ? "Logged In" : "Logged Out"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
