import React, { useState } from "react";
import Input from "../components/input";
import axiosInstance from "../api/axiosInstance";
import { AUTH_LOG_OUT, AUTH_SING_UP } from "../api/APIUrls";
import { courses, titles } from "../constants";

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    courseProgramme: "",
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    nicNumber: "",
    address: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(22, { name, value });

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
              options={courses}
              onChange={handleChange}
            />
            <Input
              label="Title"
              type="select"
              name="title"
              value={formData.title}
              options={titles}
              onChange={handleChange}
            />
            <Input
              label="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <Input
              label="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
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
            <Input
              label="Password"
              type="text"
              name="password1"
              value={formData.password1}
              onChange={handleChange}
            />
            <Input
              label="Confirm Password"
              type="text"
              name="password2"
              value={formData.password2}
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