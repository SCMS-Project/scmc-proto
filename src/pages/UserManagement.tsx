import Input from "../components/Input";
import React, { useEffect, useState } from "react";
import { userRoles } from "../constants";
import { LECTURER_CREATE, STUDENT_CREATE, USER_MGT_DELETE, USER_MGT_GET_ALL } from "../api/APIUrls";
import axiosInstance from "../api/axiosInstance";
import DeleteIcon from "../assets/images/delete-icon.png";

type UserData = {
  id: string;
  fullName: string;
  nic: string;
  phoneNumber: string;
  role: string;
  email: string;
  dateOfBirth: string;
  address: string;
  lecturerId: string;
  studentId: string;
};

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [fetchData, setFetchData] = useState<boolean>(false);
  const [users, setUsers] = useState<UserData[]>([]);
  console.log(25, users);
  console.log(26, fetchData);
  


  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get(USER_MGT_GET_ALL);
      const modifiedUsers = response.data.map((user: any) => ({
        id: user._id,
        fullName: `${user.firstName} ${user.lastName}`,
        nic: user.nicNumber,
        phoneNumber: user.phoneNumber,
        role: user.role,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        address: user.address,
        lecturerId: user.lecturer,
        studentId: user.student,
      }))
      setUsers(modifiedUsers)

    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAllUsers();
  }, [fetchData])

  const filteredUsers = users.filter((user) =>
    user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleRoleChange = async (e: React.ChangeEvent<HTMLSelectElement>, user: UserData) => {
    const newRole = e.target.value;

    console.log(59, { newRole, user });

    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === user.id ? { ...u, role: newRole } : u
      )
    );

    try {
      if (newRole === 'lecturer') {
        const url = LECTURER_CREATE.replace(":id", user.lecturerId);

        const response = await axiosInstance.post(url, {
          lecturer: {
            lecturerId: user.lecturerId,
            designation: "Senior Lecturera",
            hireDate: "2021-09-15",
            qualifications: ["MSc in Computer Science", "PhD in Artificial Intelligence"],
            subjectsTaught: ["Machine Learning", "Data Structures and Algorithms"]
          }
        });
      } else if (newRole === 'student') {
        const url = STUDENT_CREATE.replace(":id", user.studentId);

        const response = await axiosInstance.post(url, {
          student: {
            studentId: user.studentId,
            enrollmentDate: "2/05/2025"
          }
        })
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const url = USER_MGT_DELETE.replace(":id", id);
      const response = await axiosInstance.delete(url)
      setFetchData((prevState) => !prevState);
    } catch (error) {
      console.error(error)
    }
  };


  return (
    <div className="user-management">
      <h2 className="user-management__title">User Management</h2>

      <div className="user-management__search-container">
        <input
          type="text"
          placeholder="Search users..."
          className="user-management__search-container__search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="user-management__table-wrapper">
        <table className="user-management__table">
          <thead>
            <tr className="user-management__table-header">
              <th className="user-management__table-th">Name</th>
              <th className="user-management__table-th">Role</th>
              <th className="user-management__table-th">NIC</th>
              <th className="user-management__table-th-fixed" />
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="user-management__table-row">
                <td className="user-management__table-td">{user.fullName}</td>
                <td className="user-management__table-td">
                  <Input
                    label=""
                    name="role"
                    type="select"
                    value={user.role}
                    onChange={(e) => handleRoleChange(e, user)}
                    options={userRoles}
                  />
                </td>
                <td className="user-management__table-td">{user.nic}</td>
                <td className="user-management__table-td-fixed">
                  <button style={{ border: "none" }} onClick={() => handleDeleteUser(user.id)}>
                    <img
                      className="user-management__delete-icon"
                      src={DeleteIcon}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;