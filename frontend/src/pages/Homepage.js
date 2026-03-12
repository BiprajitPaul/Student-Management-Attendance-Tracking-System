import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box } from '@mui/material';
import styled from 'styled-components';
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <GlowOrb1 />
            <GlowOrb2 />
            <GlowOrb3 />
            <ContentContainer>
                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={7}>
                        <StyledPaper>
                            <Badge>Tripura University</Badge>
                            <StyledTitle>
                                Student Management
                                <GradientSpan> & Attendance</GradientSpan>
                                {' '}Tracking System
                            </StyledTitle>
                            <StyledText>
                                Streamline school management, class organization, and add students and faculty.
                                Seamlessly track attendance, assess performance, and provide feedback.
                                Access records, view marks, and communicate effortlessly.
                            </StyledText>
                            <StyledBox>
                                <StyledLink to="/choose">
                                    <LightPurpleButton variant="contained" fullWidth
                                        sx={{ 
                                            py: 1.5, 
                                            fontSize: '1rem',
                                            background: 'linear-gradient(135deg, #7c4dff, #651fff)',
                                            '&:hover': { background: 'linear-gradient(135deg, #651fff, #7c4dff)', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(124, 77, 255, 0.4)' },
                                            transition: 'all 0.3s ease'
                                        }}>
                                        Get Started
                                    </LightPurpleButton>
                                </StyledLink>
                            </StyledBox>
                            <FeatureRow>
                                <FeatureItem>
                                    <FeatureIcon>📊</FeatureIcon>
                                    <FeatureLabel>Attendance</FeatureLabel>
                                </FeatureItem>
                                <FeatureItem>
                                    <FeatureIcon>📝</FeatureIcon>
                                    <FeatureLabel>Marks</FeatureLabel>
                                </FeatureItem>
                                <FeatureItem>
                                    <FeatureIcon>👥</FeatureIcon>
                                    <FeatureLabel>Management</FeatureLabel>
                                </FeatureItem>
                            </FeatureRow>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </ContentContainer>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: #0f0f1a;
`;

const GlowOrb1 = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(124, 77, 255, 0.15) 0%, transparent 70%);
  top: -100px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(30px); }
  }
`;

const GlowOrb2 = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%);
  bottom: -50px;
  left: -50px;
  animation: float2 10s ease-in-out infinite;
  @keyframes float2 {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const GlowOrb3 = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(105, 240, 174, 0.08) 0%, transparent 70%);
  top: 50%;
  right: 20%;
`;

const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 20px;
`;

const StyledPaper = styled.div`
  padding: 48px;
  background: rgba(26, 26, 46, 0.6);
  border-radius: 24px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(124, 77, 255, 0.1);
  max-width: 640px;
  width: 100%;
  animation: fadeIn 0.6s ease-out;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 6px 16px;
  border-radius: 20px;
  background: rgba(124, 77, 255, 0.15);
  color: #b388ff;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
  border: 1px solid rgba(124, 77, 255, 0.2);
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px 0;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #e8e8f0;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.5px;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const GradientSpan = styled.span`
  background: linear-gradient(135deg, #7c4dff, #00e5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StyledText = styled.p`
  color: rgba(255, 255, 255, 0.55);
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 1rem;
  line-height: 1.7;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const FeatureRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 8px;
  justify-content: center;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const FeatureIcon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(124, 77, 255, 0.08);
  border: 1px solid rgba(124, 77, 255, 0.1);
`;

const FeatureLabel = styled.span`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 500;
`;
