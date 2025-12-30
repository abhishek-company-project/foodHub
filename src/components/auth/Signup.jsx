const Signup = ({ switchToLogin }) => {
  return (
    <div className="h-full flex flex-col justify-center px-6">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

      <input
        type="text"
        placeholder="Username"
        className="border p-3 rounded mb-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 rounded mb-3"
      />

      <input
        type="text"
        placeholder="Mobile number"
        className="border p-3 rounded mb-4"
      />

      <button className="bg-orange-500 text-white py-3 rounded font-semibold">
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
    </div>
  );
};

export default Signup;
