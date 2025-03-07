import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  role: "admin" | "student" | "teacher";
  courses?: string[];
};

const dummyUsers: User[] = [
  { id: 1, name: "Alice Johnson", role: "admin" },
  { id: 2, name: "Bob Smith", role: "student", courses: ["Math", "Physics"] },
  { id: 3, name: "Charlie Brown", role: "teacher" },
  { id: 4, name: "Diana White", role: "student", courses: ["Biology"] },
];

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = dummyUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-management">
      <h2 className="user-management__title">User Management</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        className="user-management__search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* User Table */}
      <div className="user-management__table-wrapper">
        <table className="user-management__table">
          <thead>
            <tr className="user-management__table-header">
              <th className="user-management__table-th">Name</th>
              <th className="user-management__table-th">Role</th>
              <th className="user-management__table-th">Assigned Courses</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="user-management__table-row">
                <td className="user-management__table-td">{user.name}</td>
                <td className="user-management__table-td">{user.role}</td>
                <td className="user-management__table-td">
                  {user.role === "student"
                    ? user.courses?.join(", ") || "No courses assigned"
                    : "N/A"}
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