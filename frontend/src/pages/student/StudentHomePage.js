import React, { useEffect, useState } from 'react'
import { Container, Grid, Paper, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { calculateOverallAttendancePercentage } from '../../components/attendanceCalculator';
import CustomPieChart from '../../components/CustomPieChart';
import { getUserDetails } from '../../redux/userRelated/userHandle';
import styled from 'styled-components';
import SeeNotice from '../../components/SeeNotice';
import CountUp from 'react-countup';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { getSubjectList } from '../../redux/sclassRelated/sclassHandle';

const StudentHomePage = () => {
    const dispatch = useDispatch();

    const { userDetails, currentUser, loading, response } = useSelector((state) => state.user);
    const { subjectsList } = useSelector((state) => state.sclass);

    const [subjectAttendance, setSubjectAttendance] = useState([]);

    const classID = currentUser.sclassName._id

    useEffect(() => {
        dispatch(getUserDetails(currentUser._id, "Student"));
        dispatch(getSubjectList(classID, "ClassSubjects"));
    }, [dispatch, currentUser._id, classID]);

    const numberOfSubjects = subjectsList && subjectsList.length;

    useEffect(() => {
        if (userDetails) {
            setSubjectAttendance(userDetails.attendance || []);
        }
    }, [userDetails])

    const overallAttendancePercentage = calculateOverallAttendancePercentage(subjectAttendance);
    const overallAbsentPercentage = 100 - overallAttendancePercentage;

    const chartData = [
        { name: 'Present', value: overallAttendancePercentage },
        { name: 'Absent', value: overallAbsentPercentage }
    ];
    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <WelcomeText>Dashboard / Welcome back, {currentUser.name}</WelcomeText>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <StatCard>
                            <StatIconBox style={{ background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff' }}>
                                <MenuBookIcon />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Total Subjects</StatLabel>
                                <StatValue><CountUp start={0} end={numberOfSubjects} duration={2.5} /></StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <StatCard>
                            <StatIconBox style={{ background: 'rgba(105, 240, 174, 0.1)', color: '#69f0ae' }}>
                                <AssignmentIcon />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Assignments</StatLabel>
                                <StatValue><CountUp start={0} end={15} duration={4} /></StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ChartContainer>
                            {
                                response ?
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>No Attendance Found</Typography>
                                    :
                                    <>
                                        {loading
                                            ? (
                                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>Loading...</Typography>
                                            )
                                            :
                                            <>
                                                {
                                                    subjectAttendance && Array.isArray(subjectAttendance) && subjectAttendance.length > 0 ? (
                                                        <CustomPieChart data={chartData} />
                                                    )
                                                        :
                                                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>No Attendance Found</Typography>
                                                }
                                            </>
                                        }
                                    </>
                            }
                        </ChartContainer>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 3, background: 'rgba(26, 26, 46, 0.7)', border: '1px solid rgba(124, 77, 255, 0.08)', borderRadius: '16px', backdropFilter: 'blur(12px)' }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

const WelcomeText = styled.p`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 24px;
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: rgba(26, 26, 46, 0.7);
  border: 1px solid rgba(124, 77, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(12px);
`;

const StatIconBox = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 500;
`;

const StatValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #e8e8f0;
`;

const ChartContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(26, 26, 46, 0.7);
  border: 1px solid rgba(124, 77, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(12px);
`;

export default StudentHomePage