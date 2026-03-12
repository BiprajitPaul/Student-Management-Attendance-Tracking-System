# 🎓 Student Management & Attendance Tracking System

A comprehensive web-based Student Management and Attendance Tracking System designed for Tripura University. This full-stack application provides role-based access control for Administrators, Teachers, and Students with modern UI/UX and robust backend architecture.

## ✨ Features

### 🔐 Authentication & Authorization
- **Multi-role authentication** (Admin, Teacher, Student)
- **Secure password hashing** using bcrypt
- **Role-based access control** with protected routes
- **Session management** with Redux state persistence

### 👨‍💼 Admin Features
- **Student Management**: Register, update, delete students
- **Teacher Management**: Hire, assign subjects, manage teacher profiles
- **Class Management**: Create and manage classes
- **Subject Management**: Add subjects, assign to classes and teachers
- **Notice Board**: Create, update, delete notices
- **Complaint Management**: View and manage student complaints
- **Analytics Dashboard**: Visual representations of data with charts

### 👨‍🏫 Teacher Features
- **Class Management**: View assigned classes and students
- **Attendance Tracking**: Mark student attendance for subjects
- **Student Performance**: View and update exam results
- **Notice Viewing**: Access school notices
- **Complaint System**: Submit complaints to administration

### 👨‍🎓 Student Features
- **Personal Dashboard**: View personal information and statistics
- **Attendance Viewing**: Check attendance records by subject
- **Exam Results**: View marks and performance metrics
- **Notice Board**: Read school announcements
- **Complaint System**: Submit complaints to administration
- **Subject Information**: View enrolled subjects and teachers

## 🚀 Tech Stack

### Frontend
- **React.js** - Frontend framework
- **Material-UI (MUI)** - Component library with dark theme
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Recharts** - Data visualization and charts
- **Styled Components** - CSS-in-JS styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Student-Management-System/
│
├── 📁 frontend/                    # React.js frontend application
│   ├── 📁 public/                  # Static files
│   ├── 📁 src/
│   │   ├── 📁 components/          # Reusable UI components
│   │   │   ├── AccountMenu.js      # User account dropdown
│   │   │   ├── CustomBarChart.js   # Data visualization
│   │   │   ├── CustomPieChart.js   # Pie chart component
│   │   │   ├── TableTemplate.js    # Reusable table component
│   │   │   └── ...
│   │   ├── 📁 pages/               # Application pages
│   │   │   ├── 📁 admin/           # Admin dashboard pages
│   │   │   │   ├── AdminDashboard.js
│   │   │   │   ├── classRelated/   # Class management
│   │   │   │   ├── studentRelated/ # Student management
│   │   │   │   ├── teacherRelated/ # Teacher management
│   │   │   │   └── ...
│   │   │   ├── 📁 student/         # Student portal pages
│   │   │   ├── 📁 teacher/         # Teacher portal pages
│   │   │   └── ...
│   │   ├── 📁 redux/               # State management
│   │   │   ├── store.js            # Redux store configuration
│   │   │   ├── userRelated/        # User state management
│   │   │   ├── studentRelated/     # Student state management
│   │   │   └── ...
│   │   ├── App.js                  # Main application component
│   │   └── index.js               # Application entry point
│   └── package.json               # Frontend dependencies
│
├── 📁 backend/                     # Node.js backend application
│   ├── 📁 controllers/             # Request handlers
│   │   ├── admin-controller.js     # Admin operations
│   │   ├── student_controller.js   # Student CRUD operations
│   │   ├── teacher-controller.js   # Teacher management
│   │   ├── class-controller.js     # Class operations
│   │   ├── subject-controller.js   # Subject management
│   │   ├── notice-controller.js    # Notice board operations
│   │   └── complain-controller.js  # Complaint system
│   ├── 📁 models/                  # MongoDB schemas
│   │   ├── adminSchema.js          # Admin data model
│   │   ├── studentSchema.js        # Student data model
│   │   ├── teacherSchema.js        # Teacher data model
│   │   ├── sclassSchema.js         # Class data model
│   │   ├── subjectSchema.js        # Subject data model
│   │   ├── noticeSchema.js         # Notice data model
│   │   └── complainSchema.js       # Complaint data model
│   ├── 📁 routes/
│   │   └── route.js               # API endpoints definition
│   ├── index.js                   # Server entry point
│   ├── package.json              # Backend dependencies
│   └── .env                      # Environment variables
│
└── README.md                     # Project documentation
```

## 🗄️ Database Schema

### Collections Overview
- **admins**: School administrators with system-wide access
- **students**: Student records with attendance and exam data
- **teachers**: Teacher profiles with subject assignments
- **sclasses**: Class/Grade definitions
- **subjects**: Subject information linked to classes
- **notices**: School announcements and notices
- **complains**: Student/Teacher complaint system

### Key Relationships
- **Students** belong to **Classes** and **Schools**
- **Teachers** are assigned to **Subjects** and **Classes**
- **Subjects** are linked to specific **Classes**
- **Attendance** records tie **Students** to **Subjects** with dates
- **Exam Results** connect **Students** with **Subject** performance

## 🔧 Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/student-management-system.git
cd student-management-system
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
touch .env

# Add your MongoDB connection string to .env
echo "MONGO_URL=your_mongodb_connection_string" > .env

# Start the backend server (development mode)
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
# Navigate to frontend directory (from project root)
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend application will run on `http://localhost:3000`

### 4. Environment Variables

#### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017/studentManagement
PORT=5000
```

#### Frontend (.env) - Optional
```env
REACT_APP_API_URL=http://localhost:5000
```

## 🚦 API Endpoints

### Authentication
- `POST /AdminLogin` - Admin login
- `POST /StudentLogin` - Student login
- `POST /TeacherLogin` - Teacher login

### Student Management
- `POST /StudentReg` - Register new student
- `GET /Students/:id` - Get all students by school
- `GET /Student/:id` - Get student details
- `PUT /Student/:id` - Update student information
- `DELETE /Student/:id` - Delete student
- `PUT /UpdateExamResult/:id` - Update exam results
- `PUT /StudentAttendance/:id` - Mark attendance

### Teacher Management
- `POST /TeacherReg` - Register new teacher
- `GET /Teachers/:id` - Get all teachers by school
- `GET /Teacher/:id` - Get teacher details
- `PUT /TeacherSubject` - Assign subject to teacher
- `DELETE /Teacher/:id` - Delete teacher

### Class Management
- `POST /SclassCreate` - Create new class
- `GET /SclassList/:id` - Get all classes by school
- `GET /Sclass/:id` - Get class details
- `GET /Sclass/Students/:id` - Get students in class
- `DELETE /Sclass/:id` - Delete class

### Subject Management
- `POST /SubjectCreate` - Create new subject
- `GET /AllSubjects/:id` - Get all subjects by school
- `GET /ClassSubjects/:id` - Get subjects by class
- `GET /FreeSubjectList/:id` - Get unassigned subjects

### Notices & Complaints
- `POST /NoticeCreate` - Create notice
- `GET /NoticeList/:id` - Get notices by school
- `PUT /Notice/:id` - Update notice
- `DELETE /Notice/:id` - Delete notice
- `POST /ComplainCreate` - Submit complaint
- `GET /ComplainList/:id` - Get complaints by school

## 🎨 UI/UX Features

- **Dark Theme**: Modern dark theme with purple accent colors
- **Responsive Design**: Mobile-friendly interface
- **Material-UI Components**: Professional component library
- **Data Visualization**: Interactive charts and graphs
- **Role-based Navigation**: Different interfaces for each user type
- **Real-time Updates**: Dynamic data updates using Redux

## 🔐 Security Features

- **Password Encryption**: bcrypt hashing with salt rounds
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured for secure cross-origin requests
- **Role-based Access**: Route protection based on user roles
- **Error Handling**: Comprehensive error handling and user feedback

## 📊 Key Functionalities

### Attendance Management
- Daily attendance marking by teachers
- Attendance percentage calculation
- Subject-wise attendance tracking
- Date range attendance reports

### Academic Performance
- Exam result management
- Grade calculation and display
- Subject-wise performance tracking
- Performance analytics and charts

### Administrative Tools
- Bulk operations for student/teacher management
- Class and subject assignment
- Notice board management
- Complaint resolution system

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👥 Authors

- **Development Team** - *Initial work* - Tripura University

## 🙏 Acknowledgments

- Tripura University for project requirements
- Material-UI for the excellent component library
- MongoDB team for the robust database solution
- React community for continuous innovation

## 📞 Support

For support, email support@tripurauniversity.edu or create an issue in this repository.

---

**Built with ❤️ for Tripura University**