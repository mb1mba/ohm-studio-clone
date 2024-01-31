import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "/src/api/axios";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const LOGIN_URL = "/users/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      const accessToken = response.data.accessToken;
      if (response.status === 200) {
        const currentUser = await axios.get("/users/current", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        });

        // navigate("/");
      } else {
        setError(response.data.error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center px-5 w-full bg-white ">
      <h1 className="text-3xl font-helvetica mb-5 text-center">
        Login to your account
      </h1>

      <form method="POST" onSubmit={handleSubmit} className="mb-5 w-full">
        <div className="grid  h-[4.25rem] mb-5">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => onChange(e)}
            className="bg-white border px-3  py-2 border-[#c0c0c0] rounded-lg"
            type="email"
            name="email"
            placeholder="you@domain.com"
          />
        </div>
        <div className="grid h-[4.25rem] mb-5 ">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => onChange(e)}
            className="bg-white border px-3 py-2 border-[#c0c0c0] rounded-lg"
            type="password"
            name="password"
            placeholder="******"
          />
        </div>
        <button
          type="submit"
          className="bg-[#111111] text-white w-full rounded-lg p-3"
        >
          Login
        </button>
      </form>
      <p className="text-center">
        Dont have an account ?
        <strong>
          <Link to="/register">&nbsp;Sign Up</Link>
        </strong>
      </p>
    </div>
  );
};

export default Login;
