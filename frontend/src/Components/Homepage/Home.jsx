import React, { useState, useEffect } from "react";
const Home = () => {

    const [data, setdata] = useState({
        age: 8,
    });

    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy

        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    age: data.Age,
                });
            })
        );
    }, []);

    return (
        <div>
            <p>{data.age}</p>
            <h2>Health App</h2>

            <form>
                <label>Age</label>
                <br />
                <input type="number" name="Age" min="1" max="120"></input>
                <br />

                <label>Weight (kg)</label>
                <br />
                <input type="number" name="Weight" min="5" max="250"></input>
                <br />

                <label>Height (cm)</label>
                <br />
                <input type="number" name="Height" min="10" max="300" step="0.01"></input>
                <br />
                
                <label>Race</label>
                <br />
                <select name="gender">
                    <option value="White">White</option>
                    <option value="Asian">Asian</option>
                    <option value="Black">Black</option>
                    <option value="Indigenous">Indigenous</option>
                    <option value="Other">Other</option>
                </select>
                <br />

                <label>Gender</label>
                <br />

                <select name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <br />

                <label>How many hours do you workout a week?</label>
                <br />
                <input type="number" name="Hours" min="0" max="24"></input>

                <br/>

                <label>Do you smoke?</label>
                <br />
                <input type="checkbox"></input>

                <br/>

                <label>Spirometer data:</label>
                <br/>
                <input type="number"></input>
                <p>If you need help to determine spirometer data, click <a href="https://www.healthline.com/health/spirometry#procedure">Here</a></p>

                <br />

                <label>Heart rate:</label>
                <input type="number" name="Heart-rate" min="1" max="150"></input>
                <br/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Home