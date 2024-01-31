import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "/src/api/axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  const LOGIN_URL = "/users/add";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (response) {
        navigate("/login");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center px-5 w-full bg-white ">
      <h1 className="text-3xl font-helvetica mb-5 text-center">
        Create an account
      </h1>

      <form method="POST" onSubmit={handleSubmit} className="mb-5 w-full">
        <div className="grid h-20 mb-5">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => onChange(e)}
            className="bg-white border px-3  py-2 border-[#c0c0c0] rounded-lg"
            type="text"
            name="name"
            placeholder="What shall we call you ?"
          />
        </div>
        <div className="grid h-20 mb-5">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => onChange(e)}
            className="bg-white border px-3  py-2 border-[#c0c0c0] rounded-lg"
            type="email"
            name="email"
            placeholder="you@domain.com"
          />
        </div>
        <div className="grid h-20 mb-5 ">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => onChange(e)}
            className="bg-white border px-3  py-2 border-[#c0c0c0] rounded-lg"
            type="password"
            name="password"
            placeholder="******"
          />
        </div>
        <button
          type="submit"
          className="bg-[#111111] text-white w-full rounded-lg p-3"
        >
          Create account
        </button>
      </form>

      <Toaster />

      <p className="text-center">
        Been here before ?
        <strong>
          <Link to="/login">&nbsp;Login</Link>
        </strong>
      </p>
    </div>
  );
};

export default Register;
