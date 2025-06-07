import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', form);
      alert('Signup successful!');
      navigate('/login'); // Redirect to login
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className='min-h-[67vh]'>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <input name="username" placeholder="Username" onChange={handleChange} className="block w-full mb-2 p-2 border" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="block w-full mb-2 p-2 border" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="block w-full mb-4 p-2 border" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Sign Up</button>
      </form>
    </div>
  );
}
