import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log("Login Output", data);
  };

  return (
    <>
      <div className="justify-center border-2 border-slate-400 w-80  p-2">
        <h1 className="font-bold p-2 text-center">Login</h1>
        <label className="p-2 m-2">Username</label>
        <br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border-zinc-600 border-b-2  p-2 "
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label className="p-2 m-2">Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-zinc-600 border-b-2 p-2  "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />

        <button className="bg-blue-600" onClick={handleSubmit}>
          Login
        </button>
        <br />

        <a href="/" className="text-blue-700">
          Forget Password?
        </a>
      </div>
    </>
  );
};
