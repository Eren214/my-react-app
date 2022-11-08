import React, { useState, useEffect} from 'react';


function CityList(){
    const [cities, setCities] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:9000/cities')
        .then(response => response.json())
        .then(data => {
            setCities(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    return (
        <div>
            <h1>List of Cities</h1>
            <select>
            {cities.map((item)=>{
                return (
                 <option>{item.name}</option>
                );
            })}
            </select>
        </div>
    );
}

export default CityList;