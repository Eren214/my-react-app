import React, { useState, useEffect} from 'react';
import { Button } from "react-bootstrap";


function Staff(){
    const [staff, setStaff] = useState([]);
    const [formFields,setFormfields] =  useState([]);
    useEffect(() =>{
        fetch("http://localhost:9000/employees")
        .then(response => response.json())
        .then(data => {
            setFormfields(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);
    const onClickView=(event, item)=>{
        fetch("http://localhost:9000/employees/" + item.id)
        .then(response => response.json())
        .then(data => {
            setStaff(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    }

    const handleChange = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormfields(values=>({...values, [fieldName]: fieldValue}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9000/employees")
        .then(response => response.json())
        .then(data => {
            setFormfields(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    }
    }


    return (
        <div>
        <h1>List of Staff</h1>
        <form onClick={handleSubmit}>
            <input type="text" name="name" value={formFields.name} placeholder='name' onChange={handleChange}/>
            <input type="text" name="title" value={formFields.title} placeholder='title' onChange={handleChange}/>
            <input type="text" name="gender" value={formFields.gender} placeholder='gender' onChange={handleChange}/>
            <input type="text" name="age" value={formFields.age} placeholder='age' onChange={handleChange}/>
            <input type="submit"/>
        </form>
        {staff.map((item)=>{
            return (
                <div className="card my-2 p-2">
                    <div>Name : {item.name}</div>
                    <div>Title : {item.title}</div>
                    <div>Gender : {item.gender}</div>
                    <div>Age: {item.age}</div>
                    <Button onClick={(event) => onClickView(event, item)} >View</Button>
                </div>
            );
        })}
    </div>
    );
}

export default Staff;