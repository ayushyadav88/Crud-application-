import { useState, useEffect } from 'react';
import axios from 'axios';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
axios.defaults.baseURL = 'http://localhost:5000/api';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const fetchStudents = async () => {
    const res = await axios.get('/students');
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Management System</h1>
      <StudentForm fetchStudents={fetchStudents} editingStudent={editingStudent} setEditingStudent={setEditingStudent} />
      <StudentList students={students} fetchStudents={fetchStudents} setEditingStudent={setEditingStudent} />
    </div>
  );
}

export default App;
