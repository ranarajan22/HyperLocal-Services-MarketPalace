import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [role, setRole] = useState('user'); // Default role is User
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadhaar, setAadhaar] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for Aadhaar (if professional)
    if (role === 'professional' && (!aadhaar || !/^\d{12}$/.test(aadhaar))) {
      alert('Please enter a valid 12-digit Aadhaar number for verification.');
      return;
    }

    await login(email, password, role, aadhaar);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-10 shadow-xl w-full max-w-md space-y-6 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
        >
          <option value="user">User</option>
          <option value="professional">Professional</option>
        </select>

        <div className="flex flex-col space-y-4">
          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
          />

          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
          />

          {/* Aadhaar (only if professional) */}
          {role === 'professional' && (
            <input
              type="text"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              placeholder="Aadhaar Number (12 digits)"
              pattern="\d{12}"
              maxLength={12}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 outline-none"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 transition-all duration-500 transform hover:scale-105 shadow-lg"
        >
          Login
        </button>

        {/* Footer Links */}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-purple-800 font-semibold transition"
          >
            &larr; Back
          </button>

          <p className="text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-purple-600 font-semibold cursor-pointer">
              Register
            </Link>
          </p>
        </div>
      </form>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
