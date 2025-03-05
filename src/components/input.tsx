import React from "react";

type InputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const Input: React.FC<InputProps> = ({ label, name, type = 'text', value, onChange }) => {
  return (
    <div className="input">
      <div className="input__container">
        <label className="input__label">
          {label}
        </label>

        {type !== 'select' && (
          <input
            type={type}
            name={name}
            className="input__value"
            value={value}
            onChange={onChange}
          />
        )}

        {type === 'select' && (
          <select
            className="input__select"
            name={name}
            value={value}
          >
            <option value="">Select an option</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default Input;