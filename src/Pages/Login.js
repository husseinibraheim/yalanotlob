import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    Button
} from '@mui/material';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = { email: email, password: password }
        console.log(userData)
    }
    return (<>
        <Grid >
            <Paper elevation={5} sx={{ padding: "30px", margin: "20px auto", width: "470px", height: "50vh" }}>
                <h2 align="center">Login</h2>
                <TextField
                    label="email"
                    placeholder='Enter your email'
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mt: 4 }}>

                </TextField>
                <TextField
                    sx={{ mt: 4 }}
                    label="password"
                    placeholder='Enter your password'
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                >

                </TextField>
                <br />
                <br />

                <FormControl component="fieldset">
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Remember me"
                        labelPlacement="end"
                    />

                </FormControl>
                <br />
                <Grid align="center">
                    <Button type='submit' color='primary' variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>Login</Button>
                    <Button type='submit' color='primary' variant="outlined" sx={{ mt: 2, ml: 5 }} >Register</Button>
                </Grid>


            </Paper>


        </Grid>



    </>);
}

export default Login;