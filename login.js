console.log("script loaded");

// ================================
// FACULTY → DEPARTMENT SYSTEM
// ================================

const departments = {

    "Computing": [
        "Computer Science",
        "Information Technology",
        "Cyber Security",
        "Software Engineering"
    ],

    "Engineering": [
        "Civil Engineering",
        "Electrical Engineering",
        "Mechanical Engineering"
    ],

    "Social Sciences": [
        "Economics",
        "Political Science",
        "Mass Communication",
        "Sociology"
    ],

    "Management Sciences": [
        "Accounting",
        "Banking and Finance",
        "Business Administration",
        "Marketing"
    ],

    "Arts": [
        "English",
        "History",
        "International studies and Diplomacy"
    ],

    "Education": [
        "Educational Management",
        "Guidance and Counselling",
        "Education and Biology",
        "Education and Mathematics"
    ]

};


// ================================
// UPDATE DEPARTMENT DROPDOWN
// ================================

function updateDepartments() {

    let faculty = document.getElementById("faculty").value;

    let department = document.getElementById("department");


    // Clear existing departments

    department.innerHTML = `
        <option value="">Select your department</option>
    `;


    // If no faculty has been selected

    if (faculty === "") {
        return;
    }


    // Get departments for selected faculty

    let facultyDepartments = departments[faculty];


    // Add departments to dropdown

    facultyDepartments.forEach(function(dept) {

        let option = document.createElement("option");

        option.value = dept;
        option.textContent = dept;

        department.appendChild(option);

    });

}



// ================================
// ENTER MYGUIDE
// ================================

function enterMyGuide() {

    let fullname = document.getElementById("fullname").value.trim();

    let username = document.getElementById("username").value.trim();

    let faculty = document.getElementById("faculty").value;

    let department = document.getElementById("department").value;

    let level = document.getElementById("level").value;


    // ================================
    // VALIDATION
    // ================================

    if (
        fullname === "" ||
        username === "" ||
        faculty === "" ||
        department === "" ||
        level === ""
    ) {

        alert("Please complete all fields.");

        return;
    }


    console.log("Validation passed");


    // ================================
    // SAVE TO LOCAL STORAGE
    // ================================

    localStorage.setItem("fullname", fullname);

    localStorage.setItem("username", username);

    localStorage.setItem("faculty", faculty);

    localStorage.setItem("department", department);

    localStorage.setItem("level", level);


    console.log("Data saved");

    console.log("Redirecting...");


    // ================================
    // OPEN DASHBOARD
    // ================================

    window.location.href = "dashboard.html";

}
