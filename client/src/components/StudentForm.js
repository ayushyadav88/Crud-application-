import { useState, useEffect } from 'react';
import axios from 'axios';

function StudentForm({ fetchStudents, editingStudent, setEditingStudent }) {
  const [formData, setFormData] = useState({
    name: '', email: '', course: '', phone: ''
  });

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingStudent) {
      await axios.put(`/students/${editingStudent._id}`, formData);
    } else {
      await axios.post('/students', formData);
    }
    setFormData({ name: '', email: '', course: '', phone: '' });
    setEditingStudent(null);
    fetchStudents();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="course" placeholder="Course" value={formData.course} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <button type="submit">{editingStudent ? 'Update' : 'Add'} Student</button>
    </form>
  );
}

export default StudentForm;
// This component handles both adding and editing students.