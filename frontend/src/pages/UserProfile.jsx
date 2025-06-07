import React, { useEffect, useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios'

const UserProfile = () => {

    const [user, setUser] = useState(null)
    const [editing, setEditing] = useState(false)
    const [formData, setFormData] = useState({username: "", bio: "", avatar: ""})

    const token = localStorage.getItem('token')

    const fetchProfile = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/user/profile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            // console.log(res.data)
            setUser(res.data)
            setFormData({
                username: res.data.username,
                bio: res.data.bio,
                avatar: res.data.avatar
            })
        } catch (err) {
            console.log("profile fetch error:", err.response?.data || err.message)
        }
    }

    const updateProfile = async() =>{
        try{
            const res = await axios.put("http://localhost:5000/api/user/profile", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(res.data)
            setEditing(false)
        }catch(err){
            console.log("profile update error:", err.response?.data || err.message)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    if (!user) return <div className="text-center mt-10">Loading...</div>;

    return (
    <div className="min-h-[67vh]">
        <div className="max-w-xl mx-auto p-4 mt-10">
            <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center space-x-4">
                    {user.avatar ? (<img
                        src={user.avatar}
                        alt="Avatar"
                        className="w-20 h-20 rounded-full object-cover"
                        />) : (<FaUserCircle className='size-20' />)}

                    {editing ? (
                        <input type="text" name="username" value={formData.username} onChange={(e)=> setFormData({ ...formData, username: e.target.value})} className='border rounded px-2 py-1' />
                    ) : (
                        <div>
                            <h2 className="text-2xl font-semibold">{user.username}</h2>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    )}
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold">Bio</h3>
                    {editing ? (
                        <>
                            <textarea name="bio"row="4" value={formData.bio} onChange={(e)=> setFormData({ ...formData, bio: e.target.value})} className='w-full border rounded p-2 mt-2' />
                            <input type="text" name="avatar" placeholder="Avatar URL" value={formData.avatar} onChange={(e) => setFormData({ ...formData, avatar: e.target.value })} className="w-full border rounded p-2 mt-2" />
                            <div className="flex gap-2 mt-4">
                                <button onClick={updateProfile} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                                <button onClick={() => setEditing(false)} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-700">{user.bio || 'No bio yet.'}</p>
                            <button onClick={() => setEditing(true)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Edit Profile</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserProfile