import React, { useState } from "react";
import Input from "../components/input";
import axiosInstance from "../api/axiosInstance";
import { AUTH_LOG_OUT, AUTH_SING_UP } from "../api/APIUrls";

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    courseProgramme: "",
    title: "",
    fullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    nicNumber: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post(AUTH_SING_UP, {
        formData,
      })
      console.log(33, response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(57, formData);


  return (
    <div className="registration">
      <div className="registration__form-container">
        <h2 className="registration__form-container-title">Register Online</h2>
        <p className="registration__form-container-instruction">Instructions: Fields marked with a <span className="text-red-500">*</span> are mandatory.</p>

        <form className="registration__form-container__form" onSubmit={handleSubmit}>
          <div className="registration__form-container__form__group">
            <Input
              label="Course/ Programme"
              type="select"
              name="courseProgramme"
              value={formData.courseProgramme}
              onChange={handleChange}
            />
            <Input
              label="Title"
              type="select"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <Input
              label="Full Name"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <Input
              label="Date of Birth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            <Input
              label="Email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              label="Phone number"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <Input
              label="NIC Number"
              type="text"
              name="nicNumber"
              value={formData.nicNumber}
              onChange={handleChange}
            />
            <Input
              label="Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="registration__captcha-container">
            <label className="registration__label">Are you a Robot? <span>*</span></label>
            <div className="registration__captcha">{'Need Captcha Widget Here'}</div>
          </div>

          <p className="registration__terms">
            By clicking the Register button, you agree to abide by the <a href="#" className="text-blue-500 underline">Terms & Conditions</a>.
          </p>

          <button type="submit" className="registration__submit">REGISTER NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;