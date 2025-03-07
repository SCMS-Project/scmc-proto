import React from "react";

type InputProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  options?: { id: number; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const Input: React.FC<InputProps> = ({
  label, name, type = 'text', value, onChange, options,
}) => {

  return (
    <div className="input">
      <div className="input__container">
        {label !== "" && (
          <label className="input__label">
            {label}
          </label>
        )}
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
            onChange={onChange}
          >
            {options?.map((item) => (
              <option
                key={item.id}
                value={item.label}
              >
                {item.label}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default Input;