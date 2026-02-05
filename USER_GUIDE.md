# 🎓 Smart Proctor Hub - Complete Guide

## Quick Start

Open `index.html` in your browser to access the application.

---

## 📍 Landing Page - Role Selection

When you first open the website, you'll see the **Role Selection Page** with three buttons:

```
┌─────────────────────────────────────────┐
│   SMART PROCTOR HUB                     │
│   Sri Krishna Institute of Technology   │
│                                         │
│  Select Your Role to Continue           │
│                                         │
│  [👨‍🎓 Student] [👨‍🏫 Proctor] [👨‍💼 Admin]  │
└─────────────────────────────────────────┘
```

---

## 🔐 Login Pages

### Student Login
- Navigate to: `index.html` → Click "Student"
- Email: `student@example.com` (or any email)
- Password: (any password works)
- Redirects to: Home Page → Dashboard

### Proctor Login
- Navigate to: `index.html` → Click "Proctor"
- Email: `proctor@example.com` (or any email)
- Password: (any password works)
- Redirects to: Proctor Dashboard

### Admin Login
- Navigate to: `index.html` → Click "Admin"
- Email: `admin@example.com` (or any email)
- Password: (any password works)
- Redirects to: Admin Dashboard

---

## 🎯 Student Features

### Dashboard
- **Active Courses:** 5
- **Upcoming Exams:** 3
- **Your GPA:** 3.8
- **Attendance:** 92%

### Navigation Menu
- Home
- Dashboard
- Exams (with exam details and scheduling)
- Profile (student information)
- Logout

### Pages Available
- Student Home Page (institution info)
- Student Dashboard (main stats)
- Exams Page (exam details)
- Profile Page (student info)
- About Page
- Contact Page

---

## 👨‍🏫 Proctor Features

### Dashboard
- **Total Students:** 45 (students under supervision)
- **Exams Today:** 3 (exams to monitor)
- **Exams Completed:** 120 (monitored exams)
- **Alerts:** 2 (system alerts)

### Navigation Menu
- Dashboard (main stats)
- My Students (student list table)
- Monitor Exams (exam monitoring)
- Profile (proctor info)
- Logout

### Main Features
1. **Students Under Supervision Table:**
   - USN
   - Name
   - Email
   - Attendance %
   - Status (Active/Inactive)

2. **Recent Exam Monitoring:**
   - Exam Name
   - Date
   - Number of Students
   - Monitoring Status (Completed/In Progress)

3. **Monitoring Capabilities:**
   - View all students assigned to proctor
   - Track exam monitoring sessions
   - View student attendance

---

## 💰 Admin Features

### Dashboard
- **Total Fee Received:** ₹95L
- **Total Students:** 400
- **Pending Fees:** ₹15L
- **Total Proctors:** 25

### Navigation Menu
- Dashboard (main stats)
- Fee Management (fee tables)
- All Students (student management)
- Reports (generate reports)
- Logout

### Main Features
1. **Fee Payment Status Table:**
   - USN
   - Student Name
   - Total Fee Amount
   - Amount Paid
   - Amount Pending
   - Status (Paid/Partial/Pending)

2. **Recent Transactions:**
   - Student Name
   - Transaction Date
   - Transaction ID
   - Amount Paid (shown in green)

3. **Fee Management:**
   - Send payment reminders
   - Track payment status
   - View transaction history
   - Generate fee reports

4. **Student Management:**
   - View all students
   - Track fee payments
   - Send notifications

---

## 🎨 Color Scheme

| Role | Color | Badge Color |
|------|-------|-------------|
| Student | Green (#2d5016) | Primary Green |
| Proctor | Light Green (#5a8c3e) | Forest Green |
| Admin | Red (#c41e3a) | Crimson |

---

## 📊 Data Tables

### Proctor Dashboard - Students Table
```
USN      | Name          | Email                  | Attendance | Status
---------|---------------|------------------------|------------|--------
BCS21001 | John Doe      | john.doe@skit.edu.in   | 92%        | Active
BCS21002 | Jane Smith    | jane.smith@skit.edu.in | 88%        | Active
BCS21003 | Alex Johnson  | alex.johnson@skit.edu.in| 85%       | Inactive
```

### Admin Dashboard - Fee Status Table
```
USN      | Name      | Total Fee | Paid      | Pending   | Status
---------|-----------|-----------|-----------|-----------|--------
BCS21001 | John Doe  | ₹3,50,000 | ₹3,50,000 | ₹0        | Paid
BCS21002 | Jane Smith| ₹3,50,000 | ₹2,50,000 | ₹1,00,000 | Partial
BCS21003 | Alex J.   | ₹3,50,000 | ₹0        | ₹3,50,000 | Pending
```

---

## 🔄 Navigation Flow

```
┌─────────────────────┐
│ Role Selection Page │
└──────────┬──────────┘
           │
     ┌─────┼─────┐
     │     │     │
     ▼     ▼     ▼
 Student Proctor Admin
 Login   Login   Login
     │     │     │
     ▼     ▼     ▼
  Home  Proctor Admin
  Page  Dashboard Dashboard
     │     │     │
     └─────┴─────┘
         │
    [Logout All Roles]
         │
         ▼
   Role Selection Page
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Alt + L` | Logout |
| `Alt + D` | Go to Dashboard (any role) |

---

## 💾 Data Storage

- All data stored in **localStorage**
- Data persists during browser session
- Clears on logout
- Demo data resets on each logout

---

## 🐛 Demo Data

### Pre-filled Information

**Students:**
- John Doe (BCS21001) - 92% Attendance
- Jane Smith (BCS21002) - 88% Attendance
- Alex Johnson (BCS21003) - 85% Attendance

**Courses:**
- Data Structures & Algorithms
- Web Development Fundamentals
- Database Management Systems

**Fee Records:**
- Total Fee per Student: ₹3,50,000
- Payment statuses vary (Paid/Partial/Pending)

---

## ✅ Validation

- Email validation enabled
- Required field validation
- Password confirmation not required (demo mode)
- Form reset on successful login

---

## 📱 Responsive Design

- ✅ Mobile-friendly (works on all devices)
- ✅ Tablet optimized
- ✅ Desktop full-featured
- ✅ Automatic layout adjustment

---

## 🚀 How to Use

1. **Open Website:** Open `index.html` in any web browser
2. **Select Role:** Choose between Student, Proctor, or Admin
3. **Login:** Enter any email and password
4. **Explore:** Use the navigation menu to explore features
5. **Logout:** Click Logout or press Alt+L

---

**Website is fully functional and ready for use!**

For technical support, check the browser console (F12) for any JavaScript errors.
