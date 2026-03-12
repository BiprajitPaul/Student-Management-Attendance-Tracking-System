import { useSelector } from 'react-redux';
import { Container, Paper, Box, Avatar, Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <ProfileCard>
                <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
                    <Avatar sx={{ 
                        width: 100, height: 100, 
                        fontSize: '2.5rem', 
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #7c4dff, #651fff)',
                        mb: 2 
                    }}>
                        {String(currentUser.name).charAt(0)}
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#e8e8f0' }}>
                        {currentUser.name}
                    </Typography>
                    <RoleBadge>Administrator</RoleBadge>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <InfoItem>
                            <InfoIcon><EmailIcon sx={{ fontSize: 20 }} /></InfoIcon>
                            <InfoContent>
                                <InfoLabel>Email</InfoLabel>
                                <InfoValue>{currentUser.email}</InfoValue>
                            </InfoContent>
                        </InfoItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InfoItem>
                            <InfoIcon><SchoolIcon sx={{ fontSize: 20 }} /></InfoIcon>
                            <InfoContent>
                                <InfoLabel>School</InfoLabel>
                                <InfoValue>{currentUser.schoolName}</InfoValue>
                            </InfoContent>
                        </InfoItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InfoItem>
                            <InfoIcon><BadgeIcon sx={{ fontSize: 20 }} /></InfoIcon>
                            <InfoContent>
                                <InfoLabel>Role</InfoLabel>
                                <InfoValue>Admin</InfoValue>
                            </InfoContent>
                        </InfoItem>
                    </Grid>
                </Grid>
            </ProfileCard>
        </Container>
    )
}

export default AdminProfile

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
  background: rgba(124, 77, 255, 0.12);
  color: #b388ff;
  font-size: 0.75rem;
  font-weight: 600;
  margin-top: 8px;
  border: 1px solid rgba(124, 77, 255, 0.2);
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
  background: rgba(124, 77, 255, 0.1);
  color: #7c4dff;
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

//         "&:hover": {
//             backgroundColor: "#3f1068",
//         }
//     }
// }