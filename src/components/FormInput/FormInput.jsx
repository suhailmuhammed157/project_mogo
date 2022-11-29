import "./Forminput.scss";

import React from "react";

const FormInput = (props) => {
    return (
        <div className="form-input">
            <label>{props.label}</label>
            <input
                required={props.required}
                name={props.name}
                placeholder={props.placeholder}
                pattern={props.pattern}
                onChange={props.onChange}
                type={props.type}
                value={props.value}
            />
            <span>{props.errorMessage}</span>
        </div>
    );
};

export default FormInput;
