import { useState } from "react";
import axios from "axios";

const Signup = ({ switchToLogin }) => {

  const [formData,setformData]=useState({})

  function handleInput(e){
    const {name,value}=e.target;
    setformData(values => ({...values, [name]: value}))
    
  }

async function submitHandler(e) {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/user/signup",
      formData
    );
    console.log(res);
  } catch (error) {
    console.error("Error while calling signup API:", error);
  }

  console.log(formData);
}


 

  return (
    <div className="h-full flex flex-col justify-center px-6">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
<form className="max-w-full" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Username"
        className="border p-3 rounded mb-3"
        name="username"
        onChange={(e)=>{handleInput(e)}}
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 rounded mb-3"
        name="email"
        onChange={(e)=>{handleInput(e)}}
      />
      <input
        type="password"
        placeholder="password"
        className="border p-3 rounded mb-3"
        name="password"
        onChange={(e)=>{handleInput(e)}}
      />

      <input
        type="text"
        placeholder="Mobile number"
        className="border p-3 rounded mb-4"
        name="mobile"
        onChange={(e)=>{handleInput(e)}}
      />

      <button type="submit" className="bg-orange-500 text-white py-3 rounded font-semibold">
        Create Account
      </button>

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <span
          className="text-orange-500 cursor-pointer font-medium"
          onClick={switchToLogin}
        >
          Login
        </span>
      </p>
      </form>
    </div>
  );
};

export default Signup;
