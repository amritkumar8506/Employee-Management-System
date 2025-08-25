<!-- Live Demo Badge -->
<p align="center">
  <a href="https://employeee-mangement-system.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Demo-Netlify-green?logo=netlify" alt="Live Demo">
  </a>
</p>

<!-- Technology Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwindcss&logoColor=white" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Vite-4-purple?logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Context_API-React-61dafb" alt="Context API">
  <img src="https://img.shields.io/badge/LocalStorage-Storage-orange" alt="LocalStorage">
  <img src="https://img.shields.io/badge/React_Icons-Icons-green" alt="React Icons">
</p>

# 🖥️ Employee Management System (EMS)

![GitHub repo size](https://img.shields.io/github/repo-size/amritkumar8506/Employee-Management-System)
![GitHub stars](https://img.shields.io/github/stars/amritkumar8506/Employee-Management-System)
![GitHub forks](https://img.shields.io/github/forks/amritkumar8506/Employee-Management-System)
![GitHub issues](https://img.shields.io/github/issues/amritkumar8506/Employee-Management-System)
![GitHub license](https://img.shields.io/github/license/amritkumar8506/Employee-Management-System)

> A **React + TailwindCSS Employee Task Management System** with admin and employee dashboards, task tracking, and localStorage-based authentication.

---

## 🌟 Features

### Admin Dashboard

- Assign and manage tasks for employees
- View employee task statuses: **New, Active, Completed, Failed**
- Update employee info
- Responsive and modern UI with Tailwind CSS
- Logout and user management.

### Employee Dashboard

- View personal tasks and status
- Task counters: **New, Active, Completed, Failed**
- Update task status directly from dashboard
- Responsive design for desktop & mobile

### Authentication

- Admin login (email & password)
- Employee login (email & password)
- Data persistence using **localStorage**

---

## 🛠️ Technology Stack

- **Frontend:** React.js, Tailwind CSS
- **State Management:** Context API
- **Storage:** localStorage
- **Icons:** React Icons (AiFillEye, AiFillEyeInvisible, LogOut)

---

## 🚀 Installation & Setup

1️⃣ Clone the repository:

```bash
git clone https://github.com/amritkumar8506/Employee-Management-System.git

2️⃣ Navigate to project folder:

cd EmployeeMS_project/ems

3️⃣ Install dependencies:

npm install

4️⃣ Start the development server:

npm run dev


🔑 Login Credentials

Admin:

▪️Email: admin@gmail.com
▪️Password: 123

Employees:

▪️Email: Amrit@gmail.com
▪️Password: 123

➡️ (Other employee accounts are defined in src/utils/localStorage.jsx)

📌 Notes

All data is stored in LocalStorage.

To reset the app data, clear your browser LocalStorage.