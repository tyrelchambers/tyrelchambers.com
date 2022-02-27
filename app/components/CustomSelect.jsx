import React from "react";
import Select from "react-select";

const CustomSelect = ({ isMulti, options, name, ...props }) => {
  return (
    <Select
      isMulti={isMulti}
      options={options}
      className="custom-select"
      name={name}
      styles={{
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isFocused ? "rgb(63 63 70)" : "",
        }),
      }}
      {...props}
    />
  );
};

export default CustomSelect;
