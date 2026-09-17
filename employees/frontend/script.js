const API_URL = "http://127.0.0.1:8000/api/employees/";

const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");

// READ - Get employees
function loadEmployees() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            table.innerHTML = "";
            // Dashboard counts
document.getElementById("totalEmployees").textContent = data.length;

const itCount = data.filter(employee =>
    employee.department.toLowerCase() === "it"
).length;

document.getElementById("itEmployees").textContent = itCount;
document.getElementById("otherEmployees").textContent = data.length - itCount;

            data.forEach(employee => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${employee.employee_id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.email}</td>
                    <td>${employee.phone}</td>
                    <td>${employee.department}</td>
                    <td>${employee.designation}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.joining_date}</td>
                    <td>
                        <button onclick="editEmployee(${employee.id})">
                            Edit
                        </button>

                        <button onclick="deleteEmployee(${employee.id})">
                            Delete
                        </button>
                    </td>
                `;

                table.appendChild(row);
            });
        });
}


// CREATE - Add employee
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const employee = {
        employee_id: document.getElementById("employee_id").value,
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        department: document.getElementById("department").value,
        designation: document.getElementById("designation").value,
        salary: document.getElementById("salary").value,
        joining_date: document.getElementById("joining_date").value
    };

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    .then(response => response.json())
    .then(data => {
        alert("Employee added successfully!");
        form.reset();
        loadEmployees();
    });
});


// UPDATE - Edit employee
function editEmployee(id) {

    const name = prompt("Enter new name:");

    if (name === null || name.trim() === "") {
        return;
    }

    fetch(API_URL + id + "/", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("Employee updated successfully!");
        loadEmployees();
    });
}


// DELETE - Delete employee
function deleteEmployee(id) {

    fetch(API_URL + id + "/", {
        method: "DELETE"
    })
    .then(() => {
        alert("Employee deleted successfully!");
        loadEmployees();
    });
}


// Load employees when page opens
// SEARCH - Search employee
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {

    const searchText = searchInput.value.toLowerCase();
    const rows = table.getElementsByTagName("tr");

    for (let row of rows) {

        const employeeId = row.cells[0].textContent.toLowerCase();
        const name = row.cells[1].textContent.toLowerCase();

        if (employeeId.includes(searchText) || name.includes(searchText)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
});
loadEmployees();