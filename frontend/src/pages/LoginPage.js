import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box, Typography, Checkbox, FormControlLabel, TextField, IconButton, InputAdornment, CircularProgress } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LightPurpleButton } from '../components/buttonStyles';
import styled from 'styled-components';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const LoginPage = ({ role }) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { status, currentUser, response, error, currentRole } = useSelector(state => state.user);;

    const [toggle, setToggle] = useState(false)
    const [loader, setLoader] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rollNumberError, setRollNumberError] = useState(false);
    const [studentNameError, setStudentNameError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (role === "Student") {
            const rollNum = event.target.rollNumber.value;
            const studentName = event.target.studentName.value;
            const password = event.target.password.value;

            if (!rollNum || !studentName || !password) {
                if (!rollNum) setRollNumberError(true);
                if (!studentName) setStudentNameError(true);
                if (!password) setPasswordError(true);
                return;
            }
            const fields = { rollNum, studentName, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }

        else {
            const email = event.target.email.value;
            const password = event.target.password.value;

            if (!email || !password) {
                if (!email) setEmailError(true);
                if (!password) setPasswordError(true);
                return;
            }

            const fields = { email, password }
            setLoader(true)
            dispatch(loginUser(fields, role))
        }
    };

    const handleInputChange = (event) => {
        const { name } = event.target;
        if (name === 'email') setEmailError(false);
        if (name === 'password') setPasswordError(false);
        if (name === 'rollNumber') setRollNumberError(false);
        if (name === 'studentName') setStudentNameError(false);
    };

    useEffect(() => {
        if (status === 'success' || currentUser !== null) {
            if (currentRole === 'Admin') {
                navigate('/Admin/dashboard');
            }
            else if (currentRole === 'Student') {
                navigate('/Student/dashboard');
            } else if (currentRole === 'Teacher') {
                navigate('/Teacher/dashboard');
            }
        }
        else if (status === 'failed') {
            if (role === 'Admin') {
                setMessage("You don't have access to admin panel")
            } else {
                setMessage(response)
            }
            setShowPopup(true)
            setLoader(false)
        }
        else if (status === 'error') {
            if (role === 'Admin') {
                setMessage("You don't have access to admin panel")
            } else {
                setMessage("Network Error")
            }
            setShowPopup(true)
            setLoader(false)
        }
    }, [status, currentRole, navigate, error, response, currentUser, role]);

    const roleColors = {
        Admin: '#7c4dff',
        Student: '#00e5ff',
        Teacher: '#69f0ae',
    };

    const roleColor = roleColors[role] || '#7c4dff';

    return (
        <LoginContainer>
            <GlowOrb color={roleColor} />
            <GlowOrb2 />
            <LoginCard>
                <RoleBadge color={roleColor}>{role}</RoleBadge>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#e8e8f0', mb: 1 }}>
                    Welcome Back
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)', mb: 3 }}>
                    Sign in to your {role.toLowerCase()} account
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ width: '100%' }}>
                    {role === "Student" ? (
                        <>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="rollNumber"
                                label="Roll Number"
                                name="rollNumber"
                                autoComplete="off"
                                type="number"
                                autoFocus
                                error={rollNumberError}
                                helperText={rollNumberError && 'Roll Number is required'}
                                onChange={handleInputChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="studentName"
                                label="Your Name"
                                name="studentName"
                                autoComplete="name"
                                error={studentNameError}
                                helperText={studentNameError && 'Name is required'}
                                onChange={handleInputChange}
                            />
                        </>
                    ) : (
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={emailError}
                            helperText={emailError && 'Email is required'}
                            onChange={handleInputChange}
                        />
                    )}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type={toggle ? 'text' : 'password'}
                        id="password"
                        autoComplete="current-password"
                        error={passwordError}
                        helperText={passwordError && 'Password is required'}
                        onChange={handleInputChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setToggle(!toggle)} edge="end" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                                        {toggle ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Grid container sx={{ display: "flex", justifyContent: "space-between", mt: 1, mb: 1 }}>
                        <FormControlLabel
                            control={<Checkbox value="remember" sx={{ color: 'rgba(255,255,255,0.3)', '&.Mui-checked': { color: roleColor } }} />}
                            label={<span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>Remember me</span>}
                        />
                    </Grid>
                    <LightPurpleButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ 
                            mt: 1, 
                            py: 1.4,
                            fontSize: '0.95rem',
                            background: `linear-gradient(135deg, ${roleColor}, ${roleColor}cc)`,
                            '&:hover': { 
                                background: `linear-gradient(135deg, ${roleColor}cc, ${roleColor})`,
                                transform: 'translateY(-1px)',
                                boxShadow: `0 6px 20px ${roleColor}40`
                            },
                            transition: 'all 0.3s ease'
                        }}
                    >
                        {loader ?
                            <CircularProgress size={24} color="inherit" />
                            : "Sign In"}
                    </LightPurpleButton>
                </Box>
            </LoginCard>
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
        </LoginContainer>
    );
}

export default LoginPage

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f1a;
  position: relative;
  overflow: hidden;
  padding: 20px;
`;

const GlowOrb = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.color || '#7c4dff'}15 0%, transparent 70%);
  top: -100px;
  right: -100px;
`;

const GlowOrb2 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
  bottom: -80px;
  left: -80px;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 40px 36px;
  background: rgba(26, 26, 46, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(124, 77, 255, 0.1);
  position: relative;
  z-index: 1;
  animation: slideUp 0.5s ease-out;
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const RoleBadge = styled.span`
  display: inline-block;
  padding: 5px 14px;
  border-radius: 16px;
  background: ${props => props.color ? `${props.color}18` : 'rgba(124,77,255,0.1)'};
  color: ${props => props.color || '#7c4dff'};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
  border: 1px solid ${props => props.color ? `${props.color}30` : 'rgba(124,77,255,0.2)'};
  text-transform: uppercase;
`;
