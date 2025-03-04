import React from "react";

type InputProps = {
  label: string;
  type: string;
};

const Input: React.FC<InputProps> = ({ label, type = 'text' }) => {
  return (
    <div className="input">
      <div className="input__container">
        <label className="input__label">
          {label}
        </label>

        {type !== 'select' && (
          <input
            type={type}
            className="input__value"
          />
        )}

        {type === 'select' && (
          <select className="input__select">
            <option value="">Select an option</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Input;