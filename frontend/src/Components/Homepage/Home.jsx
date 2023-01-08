import {Box, Container, Text, Input, Select} from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import axios from 'axios'

const Home = () => {

    const [age, setAge] = useState(0);
    const [height, setHeight] = useState(0);
    const [race, setRace] = useState("Caucasian");
    const [gender, setGender] = useState("male");
    const [fev1, setFev1] = useState(0);
    const [data, setData] = useState({age: 0, height: 0, race: "Caucasian", gender: "male", fev1: 0});
    const [conclusion, setConclusion] = useState("none");

    function handleSubmit(e) {
        e.preventDefault()
        setData({age:age, height:height, race:race, gender:gender, fev1:fev1},
            axios.post("/calculate", data)
            .then(response => {
            setConclusion(response.data.result)
            })
            .catch(error => {
            console.log(error)
            }))
    }

    useEffect(() => {
        setData({age:age, height:height, race:race, gender:gender, fev1:fev1})
    }, [age, height, race, gender, fev1]);

    if (conclusion == "none") {
        return (
            <Box>
                <Container>
    
                    <Text m={5} fontSize={[40, 45, 50, 55]} textAlign="center">
                    Spirometry Test
                    </Text>
    
                    <Text m={2} fontSize={[10, 15, 20, 25]} textAlign="center">Please measure your FEV1 with a spirometer and fill out the form. We can interprete the results. </Text>
                    <form onSubmit={handleSubmit}>
                        <Container my={3}>
                            <label>Age</label>
                            <br />
                            <Input type="number" name="Age" min="0" max="120" placeholder='Enter age here' onChange={(e) => setAge(e.target.value)}></Input>
                            <br />
                        </Container>
    
                        <Container my={3}>
                            <label>Height (cm)</label>
                            <br />
                            <Input type="number" name="Height" min="0" max="300" step="0.01" placeholder="Enter height in cm" onChange={(e) => setHeight(e.target.value)}></Input>
                            <br />
                        </Container>
                        
                        <Container my={5}>
                            <label>Ethnicity</label>
                            <br />
                            <Select name="race" onChange={(e) => setRace(e.target.value)}>
                                <option value="Caucasian">Caucasian</option>
                                <option value="African American">African American</option>
                                <option value="Mexican American">Mexican American</option>
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
                        
                        <Input className="#2B6CB0" type="submit" value="Submit" my={5}></Input>
                    </form>
    
                </Container>
            </Box>
        )
    }

    else {
        return (
            <Box>
                <Container>
    
                    <Text m={5} fontSize={[40, 45, 50, 55]} textAlign="center">
                    Spirometry Test
                    </Text>
    
                    <Text m={2} fontSize={[10, 15, 20, 25]} textAlign="center">Please measure your FEV1 with a spirometer and fill out the form. We can interprete the results. </Text>
                    <form onSubmit={handleSubmit}>
                        <Container my={3}>
                            <label>Age</label>
                            <br />
                            <Input type="number" name="Age" min="0" max="120" placeholder='Enter age here' onChange={(e) => setAge(e.target.value)}></Input>
                            <br />
                        </Container>
    
                        <Container my={3}>
                            <label>Height (cm)</label>
                            <br />
                            <Input type="number" name="Height" min="0" max="300" step="0.01" placeholder="Enter height in cm" onChange={(e) => setHeight(e.target.value)}></Input>
                            <br />
                        </Container>
                        
                        <Container my={5}>
                            <label>Ethnicity</label>
                            <br />
                            <Select name="race" onChange={(e) => setRace(e.target.value)}>
                                <option value="Caucasian">Caucasian</option>
                                <option value="African American">African American</option>
                                <option value="Mexican American">Mexican American</option>
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
                        
                        <Input className="#2B6CB0" type="submit" value="Submit" my={5}></Input>
                    </form>

                    <Text m={2} fontSize={[10, 15, 20, 25]} textAlign="center">Conclusion: Your FEV1 is {conclusion}</Text>
    
                </Container>
            </Box>
        )
    }
    
}

export default Home