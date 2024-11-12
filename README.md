
# WorkWise

WorkWise is a web application developed to manage departments and employees within an organization. This app allows users to add, edit, delete, and manage departments and employees. Employees’ ages are automatically calculated based on their date of birth, enhancing ease of record-keeping.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Screenshots](#screenshots)

## Project Overview

WorkWise provides an interface for organizational users to manage department and employee records. The system allows:
- Adding, editing, and deleting departments.
- Adding, editing, and deleting employees.
- Auto-calculating employees' ages based on their date of birth.

## Features

### Department Management
- **Add New Department**: Add new departments with required fields: `Department Code` and `Department Name`.
- **Edit Department**: Modify details of existing departments.
- **Delete Department**: Remove departments as needed.

### Employee Management
- **Add New Employee**: Create employee records with fields: `First Name`, `Last Name`, `Email Address`, `Date of Birth`, `Age` (auto-calculated), `Salary`, and `Department`.
- **Edit Employee**: Update employee details.
- **Delete Employee**: Remove employee records when necessary.

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: .NET Core
- **Database**: SQL Server 2014 or higher
- **API Communication**: RESTful API using ADO.NET libraries for database interaction

## Getting Started

### Prerequisites

Ensure you have the following software installed:
- Node.js
- .NET Core SDK
- SQL Server 2014 or higher

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd WorkWise
   ```

2. **Backend Setup**:
   - Open the `.NET Core` project in your IDE.
   - Configure the connection string for SQL Server in `appsettings.json`.
   - Run database migrations to set up the initial database schema.

3. **Frontend Setup**:
   ```bash
   cd client
   npm install
   npm start
   ```

4. **Run the application**:
   - Start the backend server.
   - Start the React frontend.
   - The application should be available at `http://localhost:3000`.

## API Documentation

The backend exposes RESTful endpoints for interacting with departments and employees.

- **Departments**:
  - `GET /api/departments`: Retrieve a list of all departments.
  - `POST /api/departments`: Create a new department.
  - `PUT /api/departments/{id}`: Update an existing department.
  - `DELETE /api/departments/{id}`: Delete a department.

- **Employees**:
  - `GET /api/employees`: Retrieve a list of all employees.
  - `POST /api/employees`: Create a new employee.
  - `PUT /api/employees/{id}`: Update an existing employee.
  - `DELETE /api/employees/{id}`: Delete an employee.

## Screenshots

### Home Page
![Home Page](path/to/home-page-screenshot.png)

### All Departments
![All Departments](path/to/all-departments-screenshot.png)

### Create Department
![Create Department](path/to/create-department-screenshot.png)

### Update Department
![Update Department](path/to/update-department-screenshot.png)

### Delete Department
![Delete Department](path/to/delete-department-screenshot.png)

### Employee Creation Form
![Employee Creation Form](path/to/employee-creation-form-screenshot.png)

## Notes

- **Age Calculation**: Employee age is calculated automatically based on the provided Date of Birth.
- **Error Handling**: Proper error handling is implemented to ensure smooth user experience.
- **Validation**: All forms include validation for required fields and correct data formats.

## License

This project is licensed under the MIT License.

---

Thank you for using WorkWise!
