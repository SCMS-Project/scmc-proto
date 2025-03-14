import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { COURSE_CREATE, COURSE_GET_ALL, COURSE_UPDATE, COURSE_DELETE } from "../api/APIUrls";
import DeleteIcon from "../assets/images/delete-icon.png";
import AcademicModal from "../components/AcademicModal";

type CourseData = {
  id: string;
  courseId: string;
  title: string;
  description: string;
};

const CourseManagement: React.FC = () => {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [fetchData, setFetchData] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingCourse, setEditingCourse] = useState<CourseData | null>(null);

  const getAllCourses = async () => {
    try {
      const response = await axiosInstance.get(COURSE_GET_ALL);
      console.log(22, response);

      const modifiedCourses = response.data.map((course: any) => ({
        id: course._id,
        courseId: course.courseId,
        title: course.name,
        description: course.courseDet,
      }));
      setCourses(modifiedCourses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, [fetchData]);

  const handleCreateOrUpdateCourse = async (course: { id: string; name: string; description: string }) => {
    try {
      if (editingCourse) {
        const url = COURSE_UPDATE.replace(":id", editingCourse.courseId)
        await axiosInstance.put(url, course);
      } else {
        await axiosInstance.post(COURSE_CREATE, course);
      }
      setFetchData((prev) => !prev);
      setIsModalOpen(false);
      setEditingCourse(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditCourse = (course: CourseData) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      const url = COURSE_DELETE.replace(":id", courseId);
      await axiosInstance.delete(url);
      setFetchData((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="course-management">
      <h2 className="course-management__title">Course Management</h2>

      <div className="course-management__actions">
        <button
          className="course-management__create-button"
          onClick={() => {
            setEditingCourse(null);
            setIsModalOpen(true);
          }}
        >
          Create Course
        </button>
      </div>

      <div className="course-management__table-wrapper">
        <table className="course-management__table">
          <thead>
            <tr className="course-management__table-header">
              <th className="course-management__table-th-id">Course ID</th>
              <th className="course-management__table-th">Title</th>
              <th className="course-management__table-th">Description</th>
              <th className="course-management__table-th-edit">Edit</th>
              <th className="course-management__table-th-delete" />
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr className="course-management__table-row" key={course.id}>
                <td className="course-management__table-td-id">{course.courseId}</td>
                <td className="course-management__table-td">{course.title}</td>
                <td className="course-management__table-td">{course.description}</td>
                <td className="course-management__table-td-edit">
                  <button
                    className="course-management__table__edit-button"
                    onClick={() => handleEditCourse(course)}
                  >
                    Edit
                  </button>
                </td>
                <td className="course-management__table-td-delete">
                  <button style={{ border: "none" }} onClick={() => handleDeleteCourse(course.courseId)}>
                    <img
                      className="course-management__delete-icon"
                      src={DeleteIcon}
                      alt="Delete" />
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
            setEditingCourse(null);
          }}
          onCreate={handleCreateOrUpdateCourse}
          type="course"
          editingData={editingCourse}
        />
      )}
    </div>
  );
};

export default CourseManagement;
