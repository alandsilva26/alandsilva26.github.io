import React from "react";

function NoMatch() {
  return (
    <div className="notfound">
      <div className="container">
        <div className="jumbotron">
          <h1>404</h1>
          <h2>You seem to be on the wrong path</h2>
          <button className="btn btn-primary">Go back home</button>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
