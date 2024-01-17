
// import React from 'react';

// import Button from '@mui/material/Button';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { selectClasses } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
// import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 813,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 3,

};
const customModal = {
    position: 'absolute',
    top: '21%',
    left: '77%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '-1px solid rgb(0, 0, 0)',
    background: '#6d5e63',
    padding: '34px'
};
const customButtonStyle = {
    backgroundColor: '#dd0000',

};
const cencelButtonStyle = {
    background: "#444",
    marginLeft: 15
}


const Header = () => {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [userData, setUserdata] = React.useState({
        first_name: "",
        last_name: "",
        father_name: "",
        fathergotra: "",
        mother_name: "",
        mothergotra: "",
        email: "",
        password: "",
        education: "",
        gender: "",
        city: "",
        looking_for: "",
        dob: ""
    })
    const LoginhandleClose = () => setData(false);
    const [value, setValue] = React.useState('female');
    const [age, setAge] = React.useState('');
    const [city, setCity] = React.useState('')
    const [education, setEducation] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [looking_for, setLooking_for] = React.useState('');
    const [show, setShow] = React.useState(false);
    const [buttonshow, setButtonshow] = React.useState(true);
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [fathername, setFathername] = React.useState('');
    const [mothername, setMothername] = React.useState('');
    const [fathergotra, setFathergotra] = React.useState('');
    const [mothergotra, setMothergotra] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [selectedValue, setSelectedValue] = React.useState('');

   
    const handleemailchange = (event) => {
        setEmail(event.target.value)
    }
    const handlepasswordchange = (event) => {
        setPassword(event.target.value)
    }
    const handlefirstnamechange = (event) => {
        setFirstname(event.target.value)
    }
    const handlelastnamechange = (event) => {
        setLastname(event.target.value)
    }
    const handlefathernamechange = (event) => {
        setFathername(event.target.value)
    }
    const handlemothernamechange = (event) => {
        setMothername(event.target.value)
    }
    const handlefathergotrachange = (event) => {
        setFathergotra(event.target.value)
    }
    const handlemothergotrachange = (event) => {
        setMothergotra(event.target.value)
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleChange = (e) => {
        console.log("e at line 129",e)
         const{name ,value} = e.target;
         console.log("event",name,value)
         setUserdata((prevdata) =>({
            ...prevdata,
            [name]:value,
         }))

    };
    const LoginhandleOpen = () => {

        // setOpen(true);
        setData(true)

    }
    const handlecityChange = (event) => {
        setUserdata({city : event.target.value});
    }

    const handleeducatiochange = (event) => {
        setUserdata({education : event.target.value});
    }

   

    const handledobChange = (event) => {
        setUserdata({dob : event.target.value});
    };
    const genderhandleChange = (event) => {
        setUserdata({dob : event.target.value});
    };
    const lookinghandleChange = (event) => {
        setLooking_for(event.target.value);
    };

    const handleSubmit = (event) => {
        
        console.log("api is calling");
        event.preventDefault();

        // axios.post('http://localhost:3000/users', payload).then((res) => {
        //     console.log(firstname);
        //   if(res.status=== 200){
        //     localStorage.setItem("userToken",res.data.token)
        //     // navigate("/signup")
        //   }
        // })

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(userData)
        })
            .then((res) => {
                const response = res.json()
                console.log(response)
            })
            .then(response => { response.json() })

            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    const selectonehandleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        console.log('Selected Value:', value);
    };
    return (


        <div className="header">


            <div className="content-wrapper">
                <div className="background-image" style={{
                    backgroundImage: "url('../../public/shaadi-desktop-banner-v1.jpg')",
                    backgroundSize: 'cover',
                    width: '1921px',
                    height: '511px'
                }}>
                    <div className='buttonDiv'>

                        <Button variant="contained" className="overlay-button" onClick={LoginhandleOpen} >Login</Button>
                        <Button className="overlay-button" variant="contained" onClick={handleOpen} >Join Now</Button>
                    </div>
                    <div style={{
                        height: '50px',
                        borderRadius: '25px',
                        width: '154px',
                        marginTop: '13px'
                    }}>
                        <div>

                            <FormControl sx={{ minWidth: 240, margin: '10px' }}>
                                <InputLabel id="pet-label">Select a pet</InputLabel>
                                <Select
                                    labelId="pet-label"
                                    id="pet-select"
                                    className='addsearch'
                                    value={selectedValue}
                                    onChange={handleChange}
                                    placeholder="Select a pet…"
                                    IconComponent={KeyboardArrowDown}
                                    sx={{
                                        backgroundColor: '#f0f0f0',
                                        padding: '1px',
                                        [`& .${selectClasses.indicator}`]: {
                                            transition: '0.2s',
                                            [`&.${selectClasses.expanded}`]: {
                                                transform: 'rotate(-180deg)',
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value="dog">Dog</MenuItem>
                                    <MenuItem value="cat">Cat</MenuItem>
                                    <MenuItem value="fish">Fish</MenuItem>
                                    <MenuItem value="bird">Bird</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <Select className='addsearch'
                            value={selectedValue}
                            onChange={handleChange}
                            placeholder="Select a pet…"
                            IconComponent={KeyboardArrowDown}
                            sx={{
                                width: 240,
                                backgroundColor: '#f0f0f0',
                                margin: '10px',
                                padding: '1px',
                                [`& .${selectClasses.indicator}`]: {
                                    transition: '0.2s',
                                    [`&.${selectClasses.expanded}`]: {
                                        transform: 'rotate(-180deg)',
                                    },
                                },
                            }}
                        >
                            <MenuItem value="dog">Men</MenuItem>
                            <MenuItem value="cat">Woman</MenuItem>
                        </Select>
                        <Select className='addsearch'
                            value={selectedValue}
                            onChange={handleChange}
                            placeholder="Select a pet…"
                            IconComponent={KeyboardArrowDown}
                            sx={{
                                width: 240,
                                backgroundColor: '#f0f0f0',
                                margin: '10px',
                                padding: '1px',
                                [`& .${selectClasses.indicator}`]: {
                                    transition: '0.2s',
                                    [`&.${selectClasses.expanded}`]: {
                                        transform: 'rotate(-180deg)',
                                    },
                                },
                            }}
                        >
                            <MenuItem value="dog">Men</MenuItem>
                            <MenuItem value="cat">Woman</MenuItem>
                        </Select>
                        <Select className='addsearch'
                            value={selectedValue}
                            onChange={handleChange}
                            placeholder="Select a pet…"
                            IconComponent={KeyboardArrowDown}
                            sx={{
                                width: 240,
                                backgroundColor: '#f0f0f0',
                                margin: '10px',
                                padding: '1px',
                                [`& .${selectClasses.indicator}`]: {
                                    transition: '0.2s',
                                    [`&.${selectClasses.expanded}`]: {
                                        transform: 'rotate(-180deg)',
                                    },
                                },
                            }}
                        >
                            <MenuItem value="dog">Men</MenuItem>
                            <MenuItem value="cat">Woman</MenuItem>
                        </Select>

                        <Button className="search-button" variant="contained" onClick={handleOpen} >Search</Button>

                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <div>
                            <form onSubmit={handleSubmit}>
                                <Box sx={style}>
                                    <div className="top-text">
                                        <Typography className='top-text'>REGISTER NEW MEMBER</Typography>
                                        <div className='iconbutton'>
                                            <IconButton
                                                edge="end"
                                                color="inherit"
                                                onClick={handleClose}
                                                aria-label="close"
                                            >
                                                <CloseIcon className='closeicon' />
                                            </IconButton>
                                        </div>



                                    </div>
                                    <Grid container >
                                        <Box
                                            component="form"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <div>

                                                <TextField
                                                    id="outlined-password-input"
                                                    label="First Name"
                                                    type=""
                                                    value={userData.first_name}
                                                    name='first_name'
                                                    onChange={handleChange}

                                                />

                                                <TextField
                                                    id="outlined-password-input"
                                                    label="Last Name"
                                                    type=""
                                                    name='last_name'
                                                    value={userData.last_name}
                                                    onChange={handleChange}

                                                />
                                                <TextField
                                                    id="outlined-password-input"
                                                    label="Father Name"
                                                    type=""
                                                    name='father_name'
                                                    value={userData.father_name}
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    id="outlined-password-input"
                                                    label="Mother Name"
                                                   name='mothername'
                                                    type=""
                                                    value={userData.mother_name}
                                                    onChange={handleChange}

                                                />
                                                <TextField
                                                    id="outlined-password-input"
                                                    label="Father Gotra"
                                                    type=""
                                                    name='fathergotra'
                                                    value={userData.fathergotra}
                                                    onChange={handleChange}

                                                />
                                                <TextField
                                                    id="outlined-password-input"
                                                    label="Mother Gotra"
                                                    type=""
                                                    value={userData.mothergotra}
                                                    onChange={handleChange}
                                                    name='mothergotra'
                                                />


                                            </div>
                                            <div>

                                            </div>
                                        </Box>
                                        <Grid item xs={6}>
                                            <div className='gender'>
                                                <FormControl>
                                                    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                                                    <RadioGroup
                                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                                        name="controlled-radio-buttons-group"
                                                        value={gender}
                                                        onChange={genderhandleChange}
                                                    >
                                                        <div className='radioButton'>
                                                            <FormControlLabel value="female" control={<Radio />} label="Female" row />
                                                            <FormControlLabel value="male" control={<Radio />} label="Male" row />
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>

                                            </div>
                                            <div>
                                                <FormControl>
                                                    <FormLabel id="demo-controlled-radio-buttons-group">Looking for</FormLabel>
                                                    <RadioGroup
                                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                                        name="controlled-radio-buttons-group"
                                                        value={looking_for}
                                                        onChange={lookinghandleChange}
                                                    >
                                                        <div className='radioButton'>
                                                            <FormControlLabel value="female" control={<Radio />} label="Female" row />
                                                            <FormControlLabel value="male" control={<Radio />} label="Male" row />
                                                        </div>
                                                    </RadioGroup>
                                                </FormControl>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DemoContainer components={['DatePicker']}>
                                                    <DatePicker label="Date of Birth"   onChange={handledobChange}/>
                                                </DemoContainer>
                                            </LocalizationProvider>

                                        </Grid>
                                    </Grid>
                                    <div className='city'>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                                            <Select
                                                labelId="employee-role-label"
                                                id="city"
                                                value={city}
                                                label="city"
                                                onChange={handlecityChange}
                                            >
                                                <MenuItem value="front-end">datia </MenuItem>
                                                <MenuItem value="back-end">Gwalior</MenuItem>
                                                <MenuItem value="QA">dabra</MenuItem>
                                            </Select>

                                        </FormControl>
                                    </div>


                                    <div className='education'>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Education</InputLabel>
                                            <Select
                                                labelId="employee-role-label"
                                                id="education"
                                                value={education}
                                                label="education"
                                                onChange={handleeducatiochange}
                                            >
                                                <MenuItem value="front-end">Masters </MenuItem>
                                                <MenuItem value="back-end">Bachelor</MenuItem>
                                                <MenuItem value="QA">High school</MenuItem>
                                                <MenuItem value="QA">Higher secondary</MenuItem>
                                            </Select>

                                        </FormControl>

                                    </div>
                                    {show ?
                                        <TextField className='email'
                                            id="outlined-password-input"
                                            label="Email Address"
                                            type=""
                                            name='email'
                                            value={userData.email}
                                            onChange={handleChange}
                                        />
                                        : null}

                                    <div className='Password'>
                                        {show ?
                                            <TextField className='email'
                                                id="outlined-password-input"
                                                label="Password"
                                                type=""
                                                name='password'
                                                value={userData.password}
                                                onChange={handleChange}

                                            /> : null}
                                    </div>

                                    {buttonshow ? <Button variant="contained" style={customButtonStyle} onClick={() => {
                                        setShow(true);
                                        setButtonshow(false);
                                    }}>
                                        Signup with gmail
                                    </Button> : null}

                                    {show ? <Button type="submit" variant="contained" style={customButtonStyle}>
                                        Submit
                                    </Button> : null}


                                    {show ? <Button variant="contained" style={cencelButtonStyle} onClick={() => {
                                        setShow(false);
                                        setButtonshow(true);
                                    }}
                                    >Cancel</Button> : null}
                                </Box>
                            </form>
                        </div>
                    </Modal>


                    <Modal
                        open={data}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 400 }} style={customModal}>
                            <TextField className='login'
                                id="outlined-password-input"
                                label="Email Address"
                                type=""
                                value={email}
                                onChange={handleemailchange}

                            />
                            <div className='city'>
                                <TextField className='login'
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={handlepasswordchange}

                                /></div>
                            <Button variant="contained" style={customButtonStyle}>
                                Submit
                            </Button>
                            <Button variant="contained" style={cencelButtonStyle}>Cancel</Button>

                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Header;
