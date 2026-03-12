import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Paper,
  Box,
  Container,
  CircularProgress,
  Backdrop,
  Typography,
} from '@mui/material';
import { AccountCircle, School, Group } from '@mui/icons-material';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const ChooseUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { status, currentUser, currentRole } = useSelector(state => state.user);;

  const [loader, setLoader] = useState(false)
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState("");

  const navigateHandler = (role) => {
    if (role === "Admin") {
      navigate("/Adminlogin");
    } else if (role === "Student") {
      navigate("/Studentlogin");
    } else if (role === "Teacher") {
      navigate("/Teacherlogin");
    }
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
    else if (status === 'error') {
      setLoader(false)
      setMessage("Network Error")
      setShowPopup(true)
    }
  }, [status, currentRole, navigate, currentUser]);

  return (
    <StyledContainer>
      <GlowOrb />
      <GlowOrb2 />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#e8e8f0', mb: 1 }}>
            Choose Your Role
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            Select how you want to sign in to the system
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={() => navigateHandler("Admin")}>
              <StyledPaper elevation={0}>
                <IconWrapper color="#7c4dff">
                  <AccountCircle sx={{ fontSize: 40 }} />
                </IconWrapper>
                <StyledTypography>Admin</StyledTypography>
                <StyledDescription>
                  Manage the entire system — students, teachers, classes, and subjects.
                </StyledDescription>
                <ArrowHint>→</ArrowHint>
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={() => navigateHandler("Student")}>
              <StyledPaper elevation={0}>
                <IconWrapper color="#00e5ff">
                  <School sx={{ fontSize: 40 }} />
                </IconWrapper>
                <StyledTypography>Student</StyledTypography>
                <StyledDescription>
                  View attendance, check marks, and explore your academic progress.
                </StyledDescription>
                <ArrowHint>→</ArrowHint>
              </StyledPaper>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div onClick={() => navigateHandler("Teacher")}>
              <StyledPaper elevation={0}>
                <IconWrapper color="#69f0ae">
                  <Group sx={{ fontSize: 40 }} />
                </IconWrapper>
                <StyledTypography>Teacher</StyledTypography>
                <StyledDescription>
                  Take attendance, assign marks, and manage your class students.
                </StyledDescription>
                <ArrowHint>→</ArrowHint>
              </StyledPaper>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
        Please Wait
      </Backdrop>
      <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </StyledContainer>
  );
};

export default ChooseUser;

const StyledContainer = styled.div`
  background: #0f0f1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const GlowOrb = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 77, 255, 0.1) 0%, transparent 70%);
  top: -150px;
  left: -100px;
`;

const GlowOrb2 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
  bottom: -100px;
  right: -100px;
`;

const StyledPaper = styled(Paper)`
  && {
    padding: 36px 28px;
    text-align: center;
    background: rgba(26, 26, 46, 0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(124, 77, 255, 0.1);
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-6px);
      border-color: rgba(124, 77, 255, 0.3);
      box-shadow: 0 12px 40px rgba(124, 77, 255, 0.15);
    }

    &:hover span.arrow {
      opacity: 1;
      transform: translateX(4px);
    }
  }
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  background: ${props => props.color ? `${props.color}15` : 'rgba(124, 77, 255, 0.1)'};
  color: ${props => props.color || '#7c4dff'};
  border: 1px solid ${props => props.color ? `${props.color}25` : 'rgba(124, 77, 255, 0.15)'};
`;

const StyledTypography = styled.h2`
  margin-bottom: 8px;
  font-size: 1.4rem;
  font-weight: 700;
  color: #e8e8f0;
`;

const StyledDescription = styled.p`
  color: rgba(255, 255, 255, 0.45);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 12px;
`;

const ArrowHint = styled.span`
  display: inline-block;
  color: #7c4dff;
  font-size: 1.2rem;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateX(0);
`;