import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TeachersData } from '../../data/teachersData';
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


// function component for create teacher
export default function CreateTeacher() {

    const navigate = useNavigate();

    // useStates for input fields
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")
    const [field, setField] = useState("")
    const [yearsOfExperience, setYearsOfExperience] = useState("")
    const [studentsRating, setStudentsRating] = useState("")

    // onClick function
    const addTeacher = () => {

        let index = TeachersData.length;
        let id = (index + 1).toString();

        const newTeacher = {
            id, name, age, gender, phone, email, department, field, yearsOfExperience, studentsRating
        };

        TeachersData.splice(index, 0, newTeacher);

        alert('New Teacher Added Successful');
        navigate('/home/teachers');
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
                    <Grid item xs={12} sm={4}>
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

                    {/* department */}
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth required variant="standard">
                            <InputLabel id="department">Department</InputLabel>
                            <Select labelId="department" id="department" name="department" defaultValue=""
                                onChange={(event) => setDepartment(event.target.value)}>
                                <MenuItem value='admin'>Admin</MenuItem>
                                <MenuItem value='teaching'>Teaching</MenuItem>
                                <MenuItem value='placement'>Placement</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* field */}
                    <Grid item xs={12} sm={4}>
                        <FormControl fullWidth required variant="standard">
                            <InputLabel id="field">Field</InputLabel>
                            <Select labelId="field" id="field" name="field" defaultValue=""
                                onChange={(event) => setField(event.target.value)}>
                                <MenuItem value='developer'>Developer</MenuItem>
                                <MenuItem value='testing'>Testing</MenuItem>
                                <MenuItem value='security'>Security</MenuItem>
                                <MenuItem value='network'>Network</MenuItem>
                                <MenuItem value='support'>Support</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* yearsOfExperience */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            id="yearsOfExperience"
                            name="yearsOfExperience"
                            label="Experience"
                            autoComplete="yearsOfExperience"
                            variant="standard"
                            onChange={(event) => setYearsOfExperience(event.target.value)}
                        />
                    </Grid>

                    {/* studentsRating */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            fullWidth
                            id="studentsRating"
                            name="studentsRating"
                            label="Students Rating"
                            autoComplete="studentsRating"
                            variant="standard"
                            onChange={(event) => setStudentsRating(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant='contained' onClick={addTeacher} >Add Teacher</Button>
                    </Grid>

                </Grid>
            </Container>
        </Paper>
    );
}