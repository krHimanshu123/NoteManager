import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotesDashboard() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  const fetchNotes = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('/api/notes', { headers: { Authorization: `Bearer ${token}` } });
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddOrEdit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (editId) {
      await axios.put(`/api/notes/${editId}`, { title, description }, { headers: { Authorization: `Bearer ${token}` } });
    } else {
      await axios.post('/api/notes', { title, description }, { headers: { Authorization: `Bearer ${token}` } });
    }
    setTitle('');
    setDescription('');
    setEditId(null);
    fetchNotes();
  };

  const handleEdit = (note) => {
    setTitle(note.title);
    setDescription(note.description);
    setEditId(note._id);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`/api/notes/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    fetchNotes();
  };

  const handleLogout = () => {
    
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="dashboard-container">
      <h2>Notes Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <form onSubmit={handleAddOrEdit}>
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
        <button type="submit">{editId ? 'Update' : 'Add'} Note</button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.description}</p>
            <button onClick={() => handleEdit(note)}>Edit</button>
            <button onClick={() => handleDelete(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default NotesDashboard;
