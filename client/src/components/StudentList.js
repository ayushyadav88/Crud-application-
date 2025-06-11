import axios from 'axios';

function StudentList({ students, fetchStudents, setEditingStudent }) {
  const handleDelete = async (id) => {
    await axios.delete(`/students/${id}`);
    fetchStudents();
  };

  return (
    <ul>
      {students.map((s) => (
        <li key={s._id}>
          {s.name} - {s.course} - {s.email} - {s.phone}
          <button onClick={() => setEditingStudent(s)}>Edit</button>
          <button onClick={() => handleDelete(s._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
// This component displays a list of students with options to edit or delete each student.