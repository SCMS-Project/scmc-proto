import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { SUBJECT_CREATE, SUBJECT_GET_ALL, SUBJECT_UPDATE, SUBJECT_DELETE, COURSE_GET_ALL } from "../api/APIUrls";
import DeleteIcon from "../assets/images/delete-icon.png";
import AcademicModal from "../components/AcademicModal";

type SubjectData = {
  id: string;
  subjectId: string;
  name: string;
  courses: [];
  courseTitle: string;
};

type CourseData = {
  id: string;
  title: string;
};

const SubjectManagement: React.FC = () => {
  const [subjects, setSubjects] = useState<SubjectData[]>([]);
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [fetchData, setFetchData] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingSubject, setEditingSubject] = useState<SubjectData | null>(null);

  const getAllSubjects = async () => {
    try {
      const response = await axiosInstance.get(SUBJECT_GET_ALL);
      console.log(30, response);

      const modifiedSubjects = response.data.map((subject: any) => ({
        id: subject._id,
        subjectId: subject.subjectId,
        name: subject.subjectName,
        courses: subject.courses,
        courseTitle: subject.courseTitle,
      }));
      setSubjects(modifiedSubjects);
    } catch (error) {
      console.error(error);
    }
  };


  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get(COURSE_GET_ALL);
      console.log(52, response);
      
      const modifiedCourses = response.data.map((course: any) => ({
        id: course._id,
        courseId: course.courseId,
        title: course.name,
      }));
      setCourses(modifiedCourses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllSubjects();
    getAllCourses();
  }, [fetchData]);

  const handleCreateOrUpdateSubject = async (subject: { name: string; courseId: string }) => {
    try {
      if (editingSubject) {
        await axiosInstance.put(`${SUBJECT_UPDATE}/${editingSubject.id}`, subject);
      } else {
        await axiosInstance.post(SUBJECT_CREATE, subject);
      }
      setFetchData((prev) => !prev);
      setIsModalOpen(false);
      setEditingSubject(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditSubject = (subject: SubjectData) => {
    setEditingSubject(subject);
    setIsModalOpen(true);
  };

  console.log(88, courses);
  

  const handleDeleteSubject = async (subjectId: string) => {
    try {
      const url = SUBJECT_DELETE.replace(":id", subjectId)
      await axiosInstance.delete(url);
      setFetchData((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="subject-management">
      <h2 className="subject-management__title">Subject Management</h2>
      <div className="subject-management__actions">
        <button
          className="subject-management__create-button"
          onClick={() => {
            setEditingSubject(null);
            setIsModalOpen(true);
          }}
        >
          Create Subject
        </button>
      </div>
      <div className="subject-management__table-wrapper">
        <table className="subject-management__table">
          <thead>
            <tr className="subject-management__table-header">
              <th className="subject-management__table-th-id">Subject ID</th>
              <th className="subject-management__table-th">Name</th>
              <th className="subject-management__table-th">Courses</th>
              <th className="subject-management__table-th-edit">Edit</th>
              <th className="subject-management__table-th-delete" />
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr className="subject-management__table-row" key={subject.id}>
                <td className="subject-management__table-td-id">{subject.subjectId}</td>
                <td className="subject-management__table-td">{subject.name}</td>
                <td className="subject-management__table-td">
                  {subject.courses.map((course) => course.name).join(", ")}
                </td>
                <td className="subject-management__table-td-edit">
                  <button
                    className="subject-management__table__edit-button"
                    onClick={() => handleEditSubject(subject)}
                  >
                    Edit
                  </button>
                </td>
                <td className="subject-management__table-td-delete">
                  <button style={{ border: "none" }} onClick={() => handleDeleteSubject(subject.subjectId)}>
                    <img
                      className="subject-management__delete-icon"
                      src={DeleteIcon}
                      alt="Delete"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <AcademicModal
          onClose={() => {
            setIsModalOpen(false);
            setEditingSubject(null);
          }}
          onCreate={handleCreateOrUpdateSubject}
          courses={courses}
          editingData={editingSubject}
          type="subject"
        />
      )}
    </div>
  );
};

export default SubjectManagement;