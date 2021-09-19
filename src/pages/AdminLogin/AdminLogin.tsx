import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface IState {
  email: string;
  password: string;
}

const AdminLogin = (): JSX.Element => {
  const [user, setUser] = useState<IState>({ email: "", password: "" });

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    signIn(user.email, user.password).then(() => {
      history.replace("/admin");
    });
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
