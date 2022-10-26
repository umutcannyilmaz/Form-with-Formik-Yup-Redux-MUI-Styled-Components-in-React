import React from 'react'
import styled from 'styled-components';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { newMember } from '../redux/form/formSlice';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper'
import validations from './validations';

const Container = styled.div`
margin: 10px auto;
padding: 10px;
width:40%;
min-width:200px;
max-width:300px;
border:1px solid black;
border-radius:20px;
align-item:center
`
const InputDiv = styled.div``

const Label = styled.label`
display:inline-block;
text-align:left;
width:200px
`

const Form = () => {
    const dispatch = useDispatch()
    const { handleSubmit, handleChange, handleBlur, touched, values, errors } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            phonenumber: "",
            gender: "",
            city: "",
        },
        validationSchema: validations,
        onSubmit: values => {
            console.log("formik", values);
            dispatch(newMember(values))
        },
    });

    return (
        <div>
            <Container >
                <Paper variant="elevation4">
                    <form onSubmit={handleSubmit}>
                        <InputDiv>
                            <TextField
                                id="name"
                                label="Name"
                                type="search"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                helperText={touched.name && errors.name}
                            />
                        </InputDiv>
                        <InputDiv>
                            <TextField
                                id="surname"
                                label="Surname"
                                type="search"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.surname}
                                helperText={touched.surname && errors.surname}
                            />
                        </InputDiv>
                        <InputDiv>
                            <TextField
                                id="email"
                                label="E-mail"
                                type="search"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                helperText={touched.email && errors.email}
                            />

                        </InputDiv>
                        <InputDiv>
                            <TextField
                                id="phonenumber"
                                label="Phone Number"
                                type="search"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phonenumber}
                                helperText={touched.phonenumber && errors.phonenumber}
                            />

                        </InputDiv>
                        <InputDiv>

                            <FormControl sx={{ m: 1 }}>
                                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                <RadioGroup
                                    row

                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="gender"
                                    value={values.gender}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
                                </RadioGroup>
                            </FormControl>
                        </InputDiv>

                        <InputDiv>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <InputLabel id="1">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="city"
                                    name='city'
                                    value={values.city}
                                    label="Choose a city"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <MenuItem value="">
                                        <em>Choose a city</em>
                                    </MenuItem>
                                    <MenuItem value="ankara">Ankara</MenuItem>
                                    <MenuItem value="istanbul">İstanbul</MenuItem>
                                    <MenuItem value="izmir">İzmir</MenuItem>
                                </Select>
                                <FormHelperText>{touched.city && errors.city}</FormHelperText>
                            </FormControl>
                        </InputDiv>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
                            Send
                        </Button>

                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default Form;