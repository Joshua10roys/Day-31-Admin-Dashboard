import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentsList } from '../../data/studentsData.js';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


// function component for create student
export default function CreateStudent() {

    const navigate = useNavigate();

    // useStates for input fields
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [mark, setMark] = useState("")
    const [status, setStatus] = useState("")
    const [workExperience, setWorkExperience] = useState("")
    const [joinDate, setJoinDate] = useState("")

    // onClick function
    const addStudent = () => {

        let index = StudentsList.length;
        let id = (index + 1).toString();

        const newStudent = {
            id, name, age, gender, phone, email, mark, status, workExperience, joinDate
        };

        StudentsList.splice(index, 0, newStudent);

        alert('New Student Added Successful');
        navigate('/home/students');
    };

    return (
        <Paper sx={{ minHeight: '90vh', backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', p: 2 }}>
            <Container component={Paper} sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* title & description */}
                <Typography variant='h5' sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    Add New Student
                </Typography>
                <Box sx={{ typography: 'body1' }}>&#x2772;fill the below form and click add&#x2773;</Box>

                {/* form */}
                <Grid container paddingY={3} paddingX={5} rowSpacing={4} columnSpacing={6}>

                    {/* name */}
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            fullWidth
                            id="name"
                            name="name"
                            label="Name"
                            autoComplete="given-name"
                            variant="standard"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Grid>

                    {/* age */}
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            id="age"
                            name="age"
                            label="Age"
                            autoComplete="given-age"
                            variant="standard"
                            onChange={(event) => setAge(event.target.value)}
                        />
                    </Grid>

                    {/* gender */}
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth required variant="standard">
                            <InputLabel id="gender">Gender</InputLabel>
                            <Select labelId="gender" id="gender" name="gender" defaultValue="" onChange={(event) => setGender(event.target.value)}>
                                <MenuItem value='male'>Male</MenuItem>
                                <MenuItem value='female'>Female</MenuItem>
                                <MenuItem value='others'>Others</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* phone */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            id="phone"
                            name="phone"
                            label="Phone No."
                            autoComplete="phone"
                            variant="standard"
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </Grid>

                    {/* email */}
                    <Grid item xs={12} sm={5}>
                        <TextField
                            required
                            fullWidth
                            id="email"
                            name="email"
                            label="Email Id"
                            autoComplete="email"
                            variant="standard"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Grid>

                    {/* mark */}
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            id="mark"
                            name="mark"
                            label="Mark"
                            autoComplete="mark"
                            variant="standard"
                            onChange={(event) => setMark(event.target.value)}
                        />
                    </Grid>

                    {/* employment status */}
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth required variant="standard">
                            <InputLabel id="status">Employment Status</InputLabel>
                            <Select labelId="status" id="status" name="status" defaultValue="" onChange={(event) => setStatus(event.target.value)}>
                                <MenuItem value='employed'>Employed</MenuItem>
                                <MenuItem value='unemployed'>Unemployed</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* work experience */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            id="workExperience"
                            name="workExperience"
                            label="Work Experience"
                            autoComplete="workExperience"
                            variant="standard"
                            onChange={(event) => setWorkExperience(event.target.value)}
                        />
                    </Grid>

                    {/* join date */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            id="joinDate"
                            name="joinDate"
                            label="Date Joined"
                            autoComplete="joinDate"
                            placeholder='DD-MM-YYYY'
                            variant="standard"
                            onChange={(event) => setJoinDate(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant='contained' onClick={addStudent} >Add Student</Button>
                    </Grid>

                </Grid>
            </Container>
        </Paper>
    );
}