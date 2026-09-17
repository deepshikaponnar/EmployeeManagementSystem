# Employee Management System

## Project Description

The Employee Management System is a web-based application used to manage employee information easily. It allows users to add, view, update, delete, and search employee records.

## Features

* Add new employee
* View all employees
* Update employee details
* Delete employee records
* Search employees
* Dashboard with employee count
* REST API for employee management
* SQLite database

## Employee Details

The system stores the following information:

* Employee ID
* Name
* Email
* Phone Number
* Department
* Designation
* Salary
* Joining Date

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* Django
* Django REST Framework

### Database

* SQLite

### Testing

* Postman

### Version Control

* Git
* GitHub

## CRUD Operations

| Operation | Method    | API Endpoint           |
| --------- | --------- | ---------------------- |
| Create    | POST      | `/api/employees/`      |
| Read      | GET       | `/api/employees/`      |
| Update    | PUT/PATCH | `/api/employees/{id}/` |
| Delete    | DELETE    | `/api/employees/{id}/` |

## Project Structure

```text
EmployeeManagementSystem/
│
├── backend/
├── employees/
├── frontend/
├── manage.py
├── README.md
└── .gitignore
```

## How to Run the Project

### 1. Activate Virtual Environment

```bash
venv\Scripts\activate
```

### 2. Start Django Server

```bash
python manage.py runserver
```

### 3. Open the Frontend

Open `frontend/index.html` using VS Code Live Server.

### 4. API

The backend API is available at:

```text
http://127.0.0.1:8000/api/employees/
```

## Project Flow

```text
User
  ↓
Frontend (HTML, CSS, JavaScript)
  ↓
Django REST API
  ↓
SQLite Database
  ↓
Employee Records
```

## Testing

The REST API was tested using Postman for:

* GET
* POST
* PUT
* DELETE

## Conclusion

The Employee Management System provides a simple way to manage employee records through a web interface. The project demonstrates frontend development, backend REST API development, database management, CRUD operations, and API testing.
