import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [role, setRole] = useState('user');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [expertise, setExpertise] = useState('');
  const [experience, setExperience] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [aadhaarFile, setAadhaarFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here you can create formData for file uploads
    const formData = new FormData();
    formData.append('role', role);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phone);

    if (role === 'professional') {
      formData.append('expertise', expertise);
      formData.append('experience', experience);
      if (profilePhoto) formData.append('profilePhoto', profilePhoto);
      if (aadhaarFile) formData.append('aadhaarFile', aadhaarFile);
    }

    await register(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      
      {/* Back Button */}
      <div className="w-full max-w-md mb-4 px-10">
        <button
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-purple-800 font-semibold transition"
        >
          &larr; Back
        </button>
      </div>

      {/* Register Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-10 shadow-xl w-full max-w-md space-y-6 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>

        {/* Role Selection */}
        <div className="flex justify-center space-x-6">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="user"
              checked={role === 'user'}
              onChange={() => setRole('user')}
              className="form-radio text-purple-600"
            />
            <span>User</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="professional"
              checked={role === 'professional'}
              onChange={() => setRole('professional')}
              className="form-radio text-purple-600"
            />
            <span>Professional</span>
          </label>
        </div>

        {/* Common Fields */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Professional Only Fields */}
        {role === 'professional' && (
          <div className="space-y-4">
            <select
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
            >
              <option value="">Select Profession</option>
              <option value="AC Mechanic">AC Mechanic</option>
              <option value="Electrician">Electrician</option>
              <option value="Plumber">Plumber</option>
              <option value="Barber">Barber</option>
              <option value="Carpenter">Carpenter</option>
              <option value="Painter">Painter</option>
            </select>

            <input
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Years of Experience"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
            />

            {/* Profile Photo Upload */}
            <div>
              <label className="block text-gray-700 mb-1">Upload Profile Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setProfilePhoto(e.target.files[0])}
                className="w-full p-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Aadhaar Verification */}
            <div>
              <label className="block text-gray-700 mb-1">Upload Aadhaar Card</label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setAadhaarFile(e.target.files[0])}
                className="w-full p-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, JPG, JPEG, PNG</p>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 mt-4 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 transition-all duration-500 transform hover:scale-105 shadow-lg"
        >
          Register
        </button>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 font-semibold cursor-pointer">
            Login
          </Link>
        </p>
      </form>

      {/* Tailwind animation */}
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

export default Register;
