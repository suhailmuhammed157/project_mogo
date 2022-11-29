import "./Popup.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";

import axios from "axios";

const Popup = (props) => {

    const initialState={
        name: "",
        email: "",
        comment: "",
    }

    const [values, setValues] = useState(initialState);

    const [submitted,setSubmitted] = useState(false)

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "name",
            errorMessage:'name should be 3-16 characters',
            required:true,
            pattern:'^([0-9]*[a-zA-Z]){3,}[0-9]*$',
            label: "Name",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "email",
            errorMessage:'email should be a valid email',
            required:true,
            label: "Email",
        },
        {
            id: 3,
            name: "comment",
            type: "text",
            placeholder: "comment",
            errorMessage:'Please enter more than 5 characters',
            required:true,
            pattern:'^([0-9]*[a-zA-Z]){5,}[0-9]*$',
            label: "Comment",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await submitForm(values)
        console.log(result);
        setSubmitted(true);
        setValues(initialState)
    };

    const onChange = (e) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const submitForm = async (data)=>{
        try{            
            const result = await axios.post('http://localhost:3000/comment-module/comment',data)
           return result;
        }catch(e){
            console.log(e)
        }

    }

    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="popup-heading">
                    <h2>Make a comment</h2>
                    <FontAwesomeIcon
                        icon={faClose}
                        size="2x"
                        className="close-btn"
                        onClick={() => props.handleClick(false)}
                    />
                </div>
                {submitted && <div className="success-message">
                    <h1>We have received your comment. Thanks!</h1>
                </div>}
                <div className="popup-form">
                    <form onSubmit={handleSubmit}>
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}

                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
};

export default Popup;
