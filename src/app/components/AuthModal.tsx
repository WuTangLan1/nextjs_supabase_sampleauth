// src/components/AuthModal.tsx
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const { signUp, signIn, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [profilePhotoUrl, setProfilePhotoUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      await signIn(email, password);
    } else {
      // Include additional fields for sign-up
      await signUp(email, password, {
        id: '', // Assuming 'id' is generated server-side; adjust if needed
        email: email, // Include the email explicitly
        full_name: fullName,
        phone_number: phoneNumber,
        description: description,
        profile_photo_url: profilePhotoUrl,
      });
      
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

        <div
          className={`bg-white dark:bg-gray-800 p-6 rounded-t-lg shadow-lg relative z-10 max-w-sm w-full max-h-[85vh] sm:rounded-lg sm:max-h-none overflow-y-auto mt-4`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
        >

        <h2
          id="auth-modal-title"
          className="text-2xl md:text-3xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-md"
        >
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>


        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              />
              <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              />
              <input
                type="url"
                placeholder="Profile Photo URL"
                value={profilePhotoUrl}
                onChange={(e) => setProfilePhotoUrl(e.target.value)}
                className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
 type="submit"
  className="p-3 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Link */}
        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="relative inline-flex items-center justify-center p-2 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          >
            {isLogin ? (
              <>
                <span className="underline underline-offset-4">Don’t have an account?</span> 
                <span className="ml-1 text-blue-500 hover:text-purple-500">
                  Sign Up
                </span>
              </>
            ) : (
              <>
                <span className="underline underline-offset-4">Already have an account?</span> 
                <span className="ml-1 text-blue-500 hover:text-purple-500">
                  Login
                </span>
              </>
            )}
          </button>
        </div>


        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all p-1"
        >
          &times;
        </button>

      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid #ffffff;
          width: 20px;
          height: 20px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
