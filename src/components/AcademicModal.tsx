import React, { useState, useEffect } from "react";

type CommonModalProps = {
  onClose: () => void;
  onCreate: (data: { title?: string; description?: string; name?: string; courseId?: string }) => void;
  courses?: { id: string; courseId: string; title: string }[];
  editingData?: {
    subjectId: string; name?: string; courseId?: string; title?: string; description?: string
  } | null;
  type: "course" | "subject";
};

const AcademicModal: React.FC<CommonModalProps> = ({ onClose, onCreate, courses, editingData, type }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("Dummy Description");
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [subjectId, setSubjectId] = useState("");``

  useEffect(() => {
    if (editingData) {
      setName(editingData.name || "");
      setCourseId(editingData.courseId || "");
      setSubjectId(editingData.subjectId || "");
      setTitle(editingData.title || "");
      setDescription(editingData.description || "");
    } else {
      setName("");
      setCourseId("");
      setTitle("");
      setDescription("");
    }
  }, [editingData]);

  const handleCreateOrUpdate = () => {
    if (type === "course" && title) {
      onCreate({ courseId, name: title, courseDet: description });
    } else if (type === "subject" && name && courseId) {
      onCreate({ name, courseId });
    }
    onClose();
  };

  return (
    <div className="academic-modal">
      <div className="academic-modal__main-container">
        <div className="academic-modal__main-container__header">
          <span className="academic-modal__main-container__header__title">
            {type === "course" ? (editingData ? "Edit Course" : "Create Course") : editingData ? "Edit Subject" : "Create Subject"}
          </span>
          <button className="academic-modal__main-container__header__close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="academic-modal__main-container__body">
          <form>
            {type === "course" ? (
              <>
                <div className="academic-modal__main-container__body__form-group">
                  <input
                    type="text"
                    id="id"
                    name="id"
                    placeholder="Course ID"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                  />
                </div>
                <div className="academic-modal__main-container__body__form-group">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Course Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="academic-modal__main-container__body__form-group">
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Course Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="academic-modal__main-container__body__form-group">
                  <input
                    type="text"
                    id="id"
                    name="id"
                    placeholder="Subject ID"
                    value={subjectId}
                    onChange={(e) => setCourseId(e.target.value)}
                  />
                </div>
                <div className="academic-modal__main-container__body__form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Subject Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="academic-modal__main-container__body__form-group">
                  <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
                    <option value="">Select Course</option>
                    {courses?.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </form>
        </div>
        <div className="academic-modal__main-container__footer">
          <button onClick={handleCreateOrUpdate}>
            {type === "course" ? (editingData ? "Update Course" : "Create Course") : editingData ? "Update Subject" : "Create Subject"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcademicModal;
