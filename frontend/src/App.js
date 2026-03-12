import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Homepage from './pages/Homepage';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import LoginPage from './pages/LoginPage';
import ChooseUser from './pages/ChooseUser';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c4dff',
      light: '#b388ff',
      dark: '#651fff',
    },
    secondary: {
      main: '#00e5ff',
      light: '#6effff',
      dark: '#00b8d4',
    },
    background: {
      default: '#0f0f1a',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#e8e8f0',
      secondary: 'rgba(255, 255, 255, 0.55)',
    },
    error: {
      main: '#ff5252',
    },
    success: {
      main: '#69f0ae',
    },
    warning: {
      main: '#ffd740',
    },
    divider: 'rgba(124, 77, 255, 0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Poppins", sans-serif',
    h1: { fontWeight: 700, letterSpacing: '-0.5px' },
    h2: { fontWeight: 700, letterSpacing: '-0.5px' },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, letterSpacing: '0.5px' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(124, 77, 255, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 600,
          padding: '8px 20px',
        },
        contained: {
          boxShadow: '0 2px 8px rgba(124, 77, 255, 0.25)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(124, 77, 255, 0.35)',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid rgba(124, 77, 255, 0.08)',
          padding: '14px 16px',
        },
        head: {
          fontWeight: 600,
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          color: 'rgba(255, 255, 255, 0.55)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(124, 77, 255, 0.04) !important',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0f0f1a',
          borderRight: '1px solid rgba(124, 77, 255, 0.08)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f0f1a',
          borderBottom: '1px solid rgba(124, 77, 255, 0.08)',
          boxShadow: '0 1px 12px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: '2px 8px',
          '&:hover': {
            backgroundColor: 'rgba(124, 77, 255, 0.08)',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(124, 77, 255, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(124, 77, 255, 0.4)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#7c4dff',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 8,
          fontSize: '0.75rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(124, 77, 255, 0.08)',
        },
      },
    },
  },
});

const App = () => {
  const { currentRole } = useSelector(state => state.user);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        {currentRole === null &&
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/choose" element={<ChooseUser />} />

            <Route path="/Adminlogin" element={<LoginPage role="Admin" />} />
            <Route path="/Studentlogin" element={<LoginPage role="Student" />} />
            <Route path="/Teacherlogin" element={<LoginPage role="Teacher" />} />

            <Route path='*' element={<Navigate to="/" />} />
          </Routes>}

        {currentRole === "Admin" &&
          <>
            <AdminDashboard />
          </>
        }

        {currentRole === "Student" &&
          <>
            <StudentDashboard />
          </>
        }

        {currentRole === "Teacher" &&
          <>
            <TeacherDashboard />
          </>
        }
      </Router>
    </ThemeProvider>
  )
}

export default App