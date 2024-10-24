import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(firstName, lastName, email, username, password);
    const response = await fetch("http://localhost:4000/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username,
        password,
      }),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    console.log("Signup Output", data);
  };

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="text"
              placeholder="Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700  focus:ring-blue-500 focus:outline-none"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <div>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-blue-600 hover:underline"
            >
              Have a Account,Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
