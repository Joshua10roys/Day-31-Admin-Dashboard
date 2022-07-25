import * as React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import Stack from '@mui/material/Stack';


// function component for editing teacher
export default function EditTeacher() {

    const navigate = useNavigate();

    const { id } = useParams();

    const teacher = TeachersData.find((teacher) => { if (teacher.id === id) { return teacher } });
    const index = TeachersData.map(teacher => teacher.id).indexOf(id);

    // useStates for input fields
    const [name, setName] = useState(teacher.name)
    const [age, setAge] = useState(teacher.age)
    const [gender, setGender] = useState(teacher.gender)
    const [phone, setPhone] = useState(teacher.phone)
    const [email, setEmail] = useState(teacher.email)
    const [department, setDepartment] = useState(teacher.department)
    const [field, setField] = useState(teacher.field)
    const [yearsOfExperience, setYearsOfExperience] = useState(teacher.yearsOfExperience)
    const [studentsRating, setStudentsRating] = useState(teacher.studentsRating)

    // onClick function
    const editTeacher = (teacherId, teacherIndex) => {

        let id = teacherId;

        const newTeacher = { id, name, age, gender, phone, email, department, field, yearsOfExperience, studentsRating };
        TeachersData.splice(teacherIndex, 1, newTeacher);
        alert('Changes Saved Successful');
        navigate('/home/teachers');
    };

    return (
        <Paper sx={{ minHeight: '90vh', backgroundColor: '#F5F5F5', display: 'flex', alignItems: 'center', p: 2 }}>
            <Container component={Paper} sx={{ py: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* title & description */}
                <Typography variant='h5' sx={{ color: 'error.main', fontWeight: 'bold' }}>
                    Edit Teacher
                </Typography>
                <Box sx={{ typography: 'body1' }}>&#x2772;make the required changes and click Save Changes&#x2773;</Box>

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
                            defaultValue={teacher.name}
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
                            defaultValue={teacher.age}
                            autoComplete="given-age"
                            variant="standard"
                            onChange={(event) => setAge(event.target.value)}
                        />
                    </Grid>

                    {/* gender */}
                    <Grid item xs={12} sm={3}>
                        <FormControl fullWidth required variant="standard">
                            <InputLabel id="gender">Gender</InputLabel>
                            <Select labelId="gender" id="gender" name="gender" defaultValue={teacher.gender}
                                onChange={(event) => setGender(event.target.value)}>
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
                            defaultValue={teacher.phone}
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
                            defaultValue={teacher.email}
                            autoComplete="email"
                            variant="standard"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Grid>

                    {/* department */}
                    <Grid item xs={12} sm={3}>
                        <TextField
                            required
                            fullWidth
                            id="department"
                            name="department"
                            label="Department"
                            defaultValue={teacher.department}
                            autoComplete="department"
                            variant="standard"
                            onChange={(event) => setDepartment(event.target.value)}
                        />
                    </Grid>

                    {/* field */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            id="field"
                            name="field"
                            label="Field"
                            defaultValue={teacher.field}
                            autoComplete="field"
                            variant="standard"
                            onChange={(event) => setField(event.target.value)}
                        />
                    </Grid>

                    {/* experience */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            id="yearsOfExperience"
                            name="yearsOfExperience"
                            label="Work Experience"
                            defaultValue={teacher.yearsOfExperience}
                            autoComplete="yearsOfExperience"
                            variant="standard"
                            onChange={(event) => setYearsOfExperience(event.target.value)}
                        />
                    </Grid>

                    {/* studentsRating */}
                    <Grid item xs={12} sm={4}>
                        <TextField
                            required
                            fullWidth
                            id="studentsRating"
                            name="studentsRating"
                            label="Students Rating"
                            defaultValue={teacher.studentsRating}
                            autoComplete="studentsRating"
                            variant="standard"
                            onChange={(event) => setStudentsRating(event.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Stack direction="row" spacing={2}>

                            {/* button edit */}
                            <Button variant="contained" onClick={() => { navigate(-1) }}>
                                Cancal
                            </Button>

                            {/* button save changes */}
                            <Button variant='contained' onClick={() => editTeacher(id, index)} >
                                Save Changes
                            </Button>

                        </Stack>

                    </Grid>

                </Grid>
            </Container>
        </Paper>
    );
}