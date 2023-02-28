
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData  ={ firstName: firstName, lastName: lastName, email: email, password: password }
        console.log(userData)
    }

    const handleReset = (e) => {
        e.preventDefault()
        const resetData  ={ firstName: "", lastName: lastName, email: email, password: password }

    }

    return (<>
        <h1>SignUp</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 2, width: '50ch' },
                display: "block",
                justifyContent: 'center',
                width: '50%'

            }}
            noValidate
            autoComplete="off"
        >

            <TextField
                variant="outlined"
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <TextField
                variant="outlined"
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <br />

            <TextField
                variant="outlined"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
            <Button variant="outlined">Reset</Button>

        </Box>

    </>);
}

export default SignUp;