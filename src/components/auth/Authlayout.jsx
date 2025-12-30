import Login from "./Login";
import Signup from "./Signup";

    function Authlayout({ isOpen, mode, close, switchMode }){

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex justify-end">
      <div
        key={mode}
        className="h-full w-[350px] bg-white shadow-xl animate-slide-in relative"
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {mode === "login" ? (
          <Login switchToSignup={() => switchMode("signup")} />
        ) : (
          <Signup switchToLogin={() => switchMode("login")} />
        )}
      </div>
    </div>
  );
};

export default Authlayout;
