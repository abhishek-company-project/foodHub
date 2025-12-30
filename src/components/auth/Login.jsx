const Login = ({ switchToSignup }) => {
  return (
    <div className="h-full flex flex-col justify-center px-6">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <input
        type="text"
        placeholder="Mobile number"
        className="border p-3 rounded mb-4"
      />

      <button className="bg-orange-500 text-white py-3 rounded font-semibold">
        Login
      </button>

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
