import React from "react";
import UserAuthenticatedContext from "../context/UserAuthenticated";
import { useContext } from "react";

export default function Settings() {
  const { isUserAuthenticated, setIsUserAuthenticated } = useContext(
    UserAuthenticatedContext
  );
  return (
    <div>
      <h1>Settings</h1>
      <hr />
      {isUserAuthenticated ? (
        <>
          <p>Hello, User</p>
          <button className="btn btn-danger" onClick={() => setIsUserAuthenticated(false)}>Logout</button>
        </>
      ) : (
        <>
          <p>Please Login first</p>
          <button className="btn btn-primary" onClick={() => setIsUserAuthenticated(true)}>Login</button>
        </>
      )}
    </div>
  );
}
