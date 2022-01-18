import React from 'react';
import {useState} from "react"

const Inquiry = () => {

    const [contactInfo,setContactInfo]= useState( { 
        name: "",
        email:"",
        remarks:""
    }
    );

    const onChange = (e) => {
        setContactInfo( {...contactInfo,[e.target.id]:e.target.value});
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(contactInfo);
    };


    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name"> Name  </label>
                <input  id="name" type="text" 
                placeholder="Name"
                value={contactInfo.name}
                onChange={onChange}
                className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">  Email </label>
                <input id="email" type="email"
                value={contactInfo.email}
                placeholder="Email"
                className="form-control"
                onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="remarks"> Remarks  </label>
                <input id="remarks" type="text"
                value={contactInfo.remarks}
                className="form-control"
                placeholder="Remarks"
                onChange={onChange}/>
            </div>
            <button className="btn btn-primary mt-2"
            disabled={ !contactInfo.name || !contactInfo.email }
            onClick={onSubmit}> 
            Submit 
            </button>
        </form>
    );
};

export default Inquiry;