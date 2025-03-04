import React from "react";
import Input from "../components/input";

const Registration: React.FC = () => {
  return (
    <div className="registration">
      <div className="registration__form-container">
        <h2 className="registration__form-container-title">Register Online</h2>
        <p className="registration__form-container-instruction">Instructions: Fields marked with a <span className="text-red-500">*</span> are mandatory.</p>

        <form className="registration__form-container__form">
          <div className="registration__form-container__form__group">
            <Input label="Course/ Programme" type='select'/>
            <Input label="Title" type="select" />
            <Input label="Full Name" type='text' />
            <Input label="Date of Birth" type='date' />
            <Input label="Email" type="text" />
            <Input label="Phone number" type="text" />
            <Input label="NIC Number" type="text" />
            <Input label="Address" type="text" />
          </div>

          <div className="registration__captcha-container">
            <label className="registration__label">Are you a Robot? <span>*</span></label>
            <div className="registration__captcha">{'Need Captcha Widget Here'}</div>
          </div>

          <p className="registration__terms">
            By clicking the Register button, you agree to abide by the <a href="#" className="text-blue-500 underline">Terms & Conditions</a>.
          </p>

          <button className="registration__submit">REGISTER NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
