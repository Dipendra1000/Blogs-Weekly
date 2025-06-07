import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert(`Welcome, ${res.data.username}`);
      navigate('/'); // Redirect to home or dashboard
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='min-h-[67vh]'>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="block w-full mb-2 p-2 border" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="block w-full mb-4 p-2 border" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Login</button>
      </form>
     <p className='text-center'>Don't have an account? Then create one with <Link to="/signup" className='text-blue-600 hover:underline'> signUp</Link></p>
    </div>
  );
}
