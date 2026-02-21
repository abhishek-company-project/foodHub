import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/authSlice";

const Login = ({ switchToSignup }) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: ""
  });

  const [loading, setLoading] = useState(false);

  // -----------------------
  // Input Change
  // -----------------------
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    // Clear error when user types
    setErrors({
      ...errors,
      [e.target.name]: "",
      general: ""
    });
  };

  // -----------------------
  // Frontend Validation
  // -----------------------
  const validate = () => {
    let valid = true;
    let newErrors = { email: "", password: "", general: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // -----------------------
  // Submit Handler
  // -----------------------
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setErrors({ email: "", password: "", general: "" });

    try {
      const res = await axiosInstance.post(
        "user/login",
        formData
      );

      console.log("Login success:", res.data);
      dispatch(loginSuccess(res.data))
      if (res.data.message) {
          setErrors({ ...errors, general: res.data.message });
        }

        if(res.data.data.role=="admin"){
          navigate("/admin")
        }
        else if(res.data.data.role=="subadmin"){
          navigate("/sub-admin")
        }
        else if(res.data.data.role=="user"){
          navigate("/user")
        }

      // Example: Save user
      // localStorage.setItem("user", JSON.stringify(res.data.data));

    } catch (error) {

      // 🟥 Backend responded with error
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message;

        if (status === 400) {
          setErrors({ ...errors, general: message });
        }
        else if (status === 401) {
          setErrors({ ...errors, general: "Invalid email or password" });
        }
        else if (status === 404) {
          setErrors({ ...errors, general: "User not found" });
        }
        else if (status >= 500) {
          setErrors({ ...errors, general: "Server error. Try again later." });
        }
        else {
          setErrors({ ...errors, general: message || "Something went wrong" });
        }
      }

      // 🟥 No response (server down / network issue)
      else if (error.request) {
        setErrors({
          ...errors,
          general: "Network error. Please check your internet connection."
        });
      }

      // 🟥 Unknown error
      else {
        setErrors({
          ...errors,
          general: "Unexpected error occurred."
        });
      }
    }

    finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center px-6">

      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <form onSubmit={submitHandler}>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3 rounded mb-1 w-full"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-3 rounded mb-1 w-full"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-3">{errors.password}</p>
        )}

        {errors.general && (
          <p className="text-red-600 text-sm mb-3 text-center">
            {errors.general}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white py-3 rounded font-semibold w-full disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      <p className="text-sm mt-4 text-center">
        Don’t have an account?{" "}
        <span
          className="text-orange-500 cursor-pointer font-medium"
          onClick={switchToSignup}
        >
          Sign up
        </span>
      </p>

    </div>
  );
};

export default Login;
