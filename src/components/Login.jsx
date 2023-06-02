import React, { useState } from "react";
import { Input } from "../Ui/index";
import { useDispatch, useSelector } from "react-redux";
import {
  signUserFailure,
  signUserStart,
  signUserSuccess,
} from "../slice/auth.js";
import AuthService from "../service/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(signUserStart());
    try {
      const response = await AuthService.userLogin(user);
      dispatch(signUserSuccess(response));
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="w-25 form-signin m-auto">
        <form>
          <img
            className="mb-4"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="bootstrap_image"
            width={72}
            height={60}
          />
          <h1 className="h3 mb-3 fw-normal">Please Login</h1>

          <Input label="Email address" state={email} setState={setEmail} />
          <Input
            label="Password"
            type={password}
            state={password}
            setState={setPassword}
          />

          <button
            className="w-100 btn btn-lg btn-primary mt-2"
            disabled={isLoading}
            onClick={loginHandler}
            type="submit"
          >
            {isLoading ? "Loading" : "Login"}
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
