import {Box, Container, Text, Input, Select} from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import axios from 'axios'

const Home = () => {

    const [age, setAge] = useState();
    const [height, setHeight] = useState();
    const [race, setRace] = useState();
    const [gender, setGender] = useState();
    const [fev1, setFev1] = useState();
    const [fvc, setFvc] = useState();
    const [data, setData] = useState({age: 0, height: 0, race: "White", gender: "Male", fev1: 0, fvc: 0});

    function handleSubmit(e) {
        e.preventDefault()
        setData({age:age, height:height, race:race, gender:gender, fev1:fev1, fvc:fvc})
    }

    useEffect(() => {
        console.log(data);
        axios.post("/calculate", data)
            .then(response => {
            console.log(response)
            })
            .catch(error => {
            console.log(error)
            });

    }, [data]);

    return (
        <Box>
            <Container>

                <Text m={5} fontSize={[30, 40, 60, 65]} textAlign="center">
                Health App
                </Text>

                <Text m={2} fontSize={[10, 15, 20, 25]} textAlign="center">Please enter some basic info that will be accessed</Text>
                <form onSubmit={handleSubmit}>
                    <Container my={3}>
                        <label>Age</label>
                        <br />
                        <Input type="number" name="Age" min="1" max="120" placeholder='Enter age here' onChange={(e) => setAge(e.target.value)}></Input>
                        <br />
                    </Container>

                    <Container my={3}>
                        <label>Height (cm)</label>
                        <br />
                        <Input type="number" name="Height" min="10" max="300" step="0.01" placeholder="Enter height in cm" onChange={(e) => setHeight(e.target.value)}></Input>
                        <br />
                    </Container>
                    
                    <Container my={5}>
                        <label>Race</label>
                        <br />
                        <Select name="race" onChange={(e) => setRace(e.target.value)}>
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
                        <Select name="gender" onChange={(e) => setGender(e.target.value)}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Select>   
                    </Container>

                    <Container my={5}>
                        <label>Spirometer FEV1:</label>
                        <br/>
                        <Input type="number" name="fev1" placeholder='Enter data here' onChange={(e) => setFev1(e.target.value)}></Input>
                        <p>If you need help to determine spirometer data, click <a href="https://www.healthline.com/health/spirometry#procedure">Here</a></p>
                    </Container>

                    <Container my={5}>
                        <label>Spirometer FVC:</label>
                        <br/>
                        <Input type="number" name="fvc" placeholder='Enter data here' onChange={(e) => setFvc(e.target.value)}></Input>
                        <p>If you need help to determine spirometer data, click <a href="https://www.healthline.com/health/spirometry#procedure">Here</a></p>
                    </Container>
                    
                    <Input className="#2B6CB0" type="submit" value="Submit" my={5}></Input>
                </form>

            </Container>
        </Box>
    )
}

export default Home