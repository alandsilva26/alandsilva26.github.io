import React from "react";
import { Link } from "react-router-dom";

const NoMatch = (): JSX.Element => {
  return (
    <div className="notfound">
      <div className="container">
        <div className="jumbotron">
          <h1>404</h1>
          <h2>You seem to be on the wrong path</h2>
          <Link to="/" className="btn btn-primary ms-2">
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoMatch;
