import {Box, Container, Text, Input, Select} from '@chakra-ui/react'
import React, { useState, useEffect } from "react";

const Home = () => {
    
    const [data, setdata] = useState({
        age: 0,
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
        <Box>
            <Container>

                <Text m={5} fontSize={[30, 40, 60, 65]} textAlign="center">
                Health App
                </Text>

                <Text m={2} fontSize={[10, 15, 20, 25]} textAlign="center">Please enter some basic info that will be accessed</Text>
                <form method='POST' action='/handle_data'>
                    <Container my={3}>
                        <label>Age</label>
                        <br />
                        <Input type="number" name="Age" min="1" max="120" placeholder='Enter age here'></Input>
                        <br />
                    </Container>

                    <Container my={3}>
                        <label>Weight (kg)</label>
                        <br />
                        <Input type="number" name="Weight" min="5" max="250" placeholder="Enter weight in kg"></Input>
                        <br />
                    </Container>

                    <Container my={3}>
                        <label>Height (cm)</label>
                        <br />
                        <Input type="number" name="Height" min="10" max="300" step="0.01" placeholder="Enter height in cm"></Input>
                        <br />
                    </Container>
                    
                    <Container my={5}>
                        <label>Race</label>
                        <br />
                        <Select name="gender">
                            <option value="White">White</option>
                            <option value="Asian">Asian</option>
                            <option value="Black">Black</option>
                            <option value="Indigenous">Indigenous</option>
                            <option value="Other">Other</option>
                        </Select>
                    </Container>

                    <Container my={5}>
                        <label>Gender</label>
                        <br />
                        <Select name="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Select>   
                    </Container>

                    <Container my={5}>
                        <label>How many hours do you workout a week?</label>
                        <br />
                        <Input type="number" name="Hours" min="0" max="24" placeholder='Enter hours of working out'></Input>
                    </Container>


                    <Container my={5}>
                        <label>Do you smoke?</label>
                        <br />
                        <Select name="smoke">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </Select>
                    </Container>

                    <Container my={5}>
                        <label>Spirometer data:</label>
                        <br/>
                        <Input type="number" placeholder='Enter data here'></Input>
                        <p>If you need help to determine spirometer data, click <a href="https://www.healthline.com/health/spirometry#procedure">Here</a></p>
                    </Container>

                    <Container my={5}>
                        <label>Heart rate:</label>
                        <Input placeHolder="Enter heart rate here" type="number" name="Heart-rate" min="1" max="150"></Input>
                        <br/>
                    </Container>
                    
                    <Input className="#2B6CB0" type="submit" value="Submit" my={5}></Input>
                </form>

            </Container>
        </Box>
    )
}

export default Home