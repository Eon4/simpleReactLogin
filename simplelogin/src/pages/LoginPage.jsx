import { useState } from "react";

export const LoginPage = () => {
  const [userData, setUserData] = useState();

  async function handleLogin(event) {
    event.preventDefault();

    let url = "http://localhost:8081/sign-in";
    let body = new URLSearchParams();

    body.append("email", event.target.email.value);
    body.append("password", event.target.password.value);

    let options = {
      method: "POST",
      body: body,
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <p>Name: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
      <form onSubmit={(event) => handleLogin(event)}>
        <label>
          Email:
          <input name="email" type="text"></input>
        </label>
        <label>
          Password:
          <input name="password" type="password"></input>
        </label>
        <input value="Login" type="submit"></input>
      </form>
    </>
  );
};