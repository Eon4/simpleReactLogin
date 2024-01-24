import { useState } from "react";

export const SignupPage = () => {
  const [msg, setMsg] = useState("");

  async function handleSignUp(event) {
    event.preventDefault();

    let url = "http://localhost:8081/sign-up";
    let body = new URLSearchParams();
    body.append("name", event.target.username.value);
    body.append("email", event.target.email.value);
    body.append("password", event.target.password.value);

    let options = {
      method: "POST",
      body: body,
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      setMsg(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Sign up page</h1>
      {msg && <b>{msg}</b>}
      <form onSubmit={(event) => handleSignUp(event)}>
        <label>
          Username:
          <input name="username" type="text"></input>
        </label>
        <label>
          Email:
          <input name="email" type="text"></input>
        </label>
        <label>
          Password:
          <input name="password" type="password"></input>
        </label>
        <input value="Sign up" type="submit"></input>
      </form>
    </>
  );
};