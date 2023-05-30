import React, { useState } from "react";
import {Input} from "../Ui/index";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <Input label="Username" state={name} setState={setName}/>
          <Input label="Email address" state={email} setState={setEmail}/>
          <Input label="Password" type={password} state={password} setState={setPassword}/>

          <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
            Register
          </button>

        </form>
      </main>
    </div>
  );
}

export default Register;
