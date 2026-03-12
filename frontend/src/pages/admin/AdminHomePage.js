import { Container, Grid, Paper, Typography, Box } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
import { getAllStudents } from '../../redux/studentRelated/studentHandle';
import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const AdminHomePage = () => {
    const dispatch = useDispatch();
    const { studentsList } = useSelector((state) => state.student);
    const { sclassesList } = useSelector((state) => state.sclass);
    const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        dispatch(getAllStudents(adminID));
        dispatch(getAllSclasses(adminID, "Sclass"));
        dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    const numberOfStudents = studentsList && studentsList.length;
    const numberOfClasses = sclassesList && sclassesList.length;
    const numberOfTeachers = teachersList && teachersList.length;

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#e8e8f0', mb: 0.5 }}>
                        Dashboard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.45)' }}>
                        Welcome back, {currentUser.name}
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard color="#7c4dff">
                            <StatIconBox color="#7c4dff">
                                <PeopleAltIcon sx={{ fontSize: 28 }} />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Total Students</StatLabel>
                                <StatValue>
                                    <CountUp start={0} end={numberOfStudents} duration={2.5} />
                                </StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard color="#00e5ff">
                            <StatIconBox color="#00e5ff">
                                <SchoolIcon sx={{ fontSize: 28 }} />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Total Classes</StatLabel>
                                <StatValue>
                                    <CountUp start={0} end={numberOfClasses} duration={3} />
                                </StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <StatCard color="#69f0ae">
                            <StatIconBox color="#69f0ae">
                                <PersonIcon sx={{ fontSize: 28 }} />
                            </StatIconBox>
                            <StatContent>
                                <StatLabel>Total Teachers</StatLabel>
                                <StatValue>
                                    <CountUp start={0} end={numberOfTeachers} duration={2.5} />
                                </StatValue>
                            </StatContent>
                        </StatCard>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Paper sx={{ 
                            p: 3, 
                            display: 'flex', 
                            flexDirection: 'column',
                            background: 'rgba(26, 26, 46, 0.6)',
                            border: '1px solid rgba(124, 77, 255, 0.08)',
                            borderRadius: 3,
                        }}>
                            <SeeNotice />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};


const StatCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background: rgba(26, 26, 46, 0.7);
  border: 1px solid rgba(124, 77, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    border-color: ${props => props.color ? `${props.color}30` : 'rgba(124, 77, 255, 0.2)'};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const StatIconBox = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color ? `${props.color}15` : 'rgba(124, 77, 255, 0.1)'};
  color: ${props => props.color || '#7c4dff'};
  flex-shrink: 0;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
`;

const StatValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #e8e8f0;
  line-height: 1;
`;

export default AdminHomePage