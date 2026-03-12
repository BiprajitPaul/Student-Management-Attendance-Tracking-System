import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../redux/userRelated/userSlice';
import styled from 'styled-components';
import { Avatar, Typography } from '@mui/material';

const Logout = () => {
    const currentUser = useSelector(state => state.user.currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authLogout());
        navigate('/');
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <LogoutWrapper>
            <LogoutContainer>
                <Avatar sx={{ 
                    width: 72, height: 72, 
                    fontSize: '2rem', 
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #7c4dff, #651fff)',
                    mb: 2 
                }}>
                    {String(currentUser.name).charAt(0)}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#e8e8f0', mb: 0.5 }}>
                    {currentUser.name}
                </Typography>
                <LogoutMessage>Are you sure you want to log out?</LogoutMessage>
                <ButtonRow>
                    <LogoutButtonCancel onClick={handleCancel}>Cancel</LogoutButtonCancel>
                    <LogoutButtonLogout onClick={handleLogout}>Log Out</LogoutButtonLogout>
                </ButtonRow>
            </LogoutContainer>
        </LogoutWrapper>
    );
};

export default Logout;

const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 20px;
`;

const LogoutContainer = styled.div`
  border: 1px solid rgba(124, 77, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(26, 26, 46, 0.7);
  backdrop-filter: blur(12px);
  max-width: 400px;
  width: 100%;
`;

const LogoutMessage = styled.p`
  margin-bottom: 24px;
  font-size: 0.95rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const LogoutButton = styled.button`
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  border: none;
  flex: 1;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

const LogoutButtonLogout = styled(LogoutButton)`
  background: linear-gradient(135deg, #ff5252, #d32f2f);
  box-shadow: 0 2px 8px rgba(255, 82, 82, 0.25);
  &:hover {
    box-shadow: 0 4px 16px rgba(255, 82, 82, 0.35);
  }
`;

const LogoutButtonCancel = styled(LogoutButton)`
  background: rgba(124, 77, 255, 0.15);
  border: 1px solid rgba(124, 77, 255, 0.2);
  color: #b388ff;
  &:hover {
    background: rgba(124, 77, 255, 0.25);
  }
`;
