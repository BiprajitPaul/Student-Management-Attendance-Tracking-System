import React from 'react'
import styled from 'styled-components';
import { Typography, Grid, Box, Avatar, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import ClassIcon from '@mui/icons-material/Class';
import NumbersIcon from '@mui/icons-material/Numbers';

const StudentProfile = () => {
  const { currentUser, response, error } = useSelector((state) => state.user);

  if (response) { console.log(response) }
  else if (error) { console.log(error) }

  const sclassName = currentUser.sclassName
  const studentSchool = currentUser.school

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <ProfileCard>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
          <Avatar sx={{
            width: 100, height: 100,
            fontSize: '2.5rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00e5ff, #0097a7)',
            mb: 2
          }}>
            {String(currentUser.name).charAt(0)}
          </Avatar>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#e8e8f0' }}>
            {currentUser.name}
          </Typography>
          <RoleBadge>Student</RoleBadge>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InfoItem>
              <InfoIcon style={{ background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff' }}>
                <NumbersIcon sx={{ fontSize: 20 }} />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Roll Number</InfoLabel>
                <InfoValue>{currentUser.rollNum}</InfoValue>
              </InfoContent>
            </InfoItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoItem>
              <InfoIcon style={{ background: 'rgba(124, 77, 255, 0.1)', color: '#7c4dff' }}>
                <ClassIcon sx={{ fontSize: 20 }} />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Class</InfoLabel>
                <InfoValue>{sclassName.sclassName}</InfoValue>
              </InfoContent>
            </InfoItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoItem>
              <InfoIcon style={{ background: 'rgba(105, 240, 174, 0.1)', color: '#69f0ae' }}>
                <SchoolIcon sx={{ fontSize: 20 }} />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>School</InfoLabel>
                <InfoValue>{studentSchool.schoolName}</InfoValue>
              </InfoContent>
            </InfoItem>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoItem>
              <InfoIcon style={{ background: 'rgba(124, 77, 255, 0.1)', color: '#7c4dff' }}>
                <BadgeIcon sx={{ fontSize: 20 }} />
              </InfoIcon>
              <InfoContent>
                <InfoLabel>Role</InfoLabel>
                <InfoValue>Student</InfoValue>
              </InfoContent>
            </InfoItem>
          </Grid>
        </Grid>
      </ProfileCard>
    </Container>
  )
}

export default StudentProfile

const ProfileCard = styled.div`
  padding: 40px;
  background: rgba(26, 26, 46, 0.7);
  border: 1px solid rgba(124, 77, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(12px);
`;

const RoleBadge = styled.span`
  display: inline-block;
  padding: 4px 14px;
  border-radius: 16px;
  background: rgba(0, 229, 255, 0.12);
  color: #00e5ff;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 8px;
  border: 1px solid rgba(0, 229, 255, 0.2);
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(124, 77, 255, 0.04);
  border: 1px solid rgba(124, 77, 255, 0.06);
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoLabel = styled.span`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
`;

const InfoValue = styled.span`
  font-size: 0.95rem;
  color: #e8e8f0;
  font-weight: 500;
`;