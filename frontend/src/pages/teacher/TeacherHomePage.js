import { Container, Grid, Paper } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import CountUp from 'react-countup';
import styled from 'styled-components';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { getClassStudents, getSubjectDetails } from '../../redux/sclassRelated/sclassHandle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const TeacherHomePage = () => {
    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);
    const { subjectDetails, sclassStudents } = useSelector((state) => state.sclass);

    const classID = currentUser.teachSclass?._id
    const subjectID = currentUser.teachSubject?._id

    useEffect(() => {
        dispatch(getSubjectDetails(subjectID, "Subject"));
        dispatch(getClassStudents(classID));
    }, [dispatch, subjectID, classID]);

    const numberOfStudents = sclassStudents && sclassStudents.length;
    const numberOfSessions = subjectDetails && subjectDetails.sessions

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <WelcomeText>Dashboard / Welcome back, {currentUser.name}</WelcomeText>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard>
                            <StatIconBox style={{ background: 'rgba(124, 77, 255, 0.1)', color: '#7c4dff' }}>
                                <PeopleAltIcon />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Class Students</StatLabel>
                                <StatValue><CountUp start={0} end={numberOfStudents} duration={2.5} /></StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard>
                            <StatIconBox style={{ background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff' }}>
                                <MenuBookIcon />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Total Lessons</StatLabel>
                                <StatValue><CountUp start={0} end={numberOfSessions} duration={5} /></StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard>
                            <StatIconBox style={{ background: 'rgba(105, 240, 174, 0.1)', color: '#69f0ae' }}>
                                <QuizIcon />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Tests Taken</StatLabel>
                                <StatValue><CountUp start={0} end={24} duration={4} /></StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatCard>
                            <StatIconBox style={{ background: 'rgba(255, 167, 38, 0.1)', color: '#ffa726' }}>
                                <AccessTimeIcon />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Total Hours</StatLabel>
                                <StatValue><CountUp start={0} end={30} duration={4} suffix=" hrs" /></StatValue>
                            </StatContent>
                        </StatCard>
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

export default TeacherHomePage