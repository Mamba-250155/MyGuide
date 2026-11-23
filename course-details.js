// ===============================
// GET SELECTED COURSE
// ===============================

const selectedCourse =
    localStorage.getItem("selectedCourse");

const faculty =
    localStorage.getItem("faculty");

const department =
    localStorage.getItem("department");

const level =
    localStorage.getItem("level");


// ===============================
// FIND COURSE
// ===============================

let course;

const facultyCourses =
    courseDatabase[faculty];


if (facultyCourses) {

    const departmentCourses =
        facultyCourses[department];


    if (departmentCourses) {

        const levelCourses =
            departmentCourses[level];


        if (levelCourses) {

            course =
                levelCourses.find(item =>
                    item.code === selectedCourse
                );

        }

    }

}


// ===============================
// UPDATE PAGE
// ===============================

if (course) {

    document.getElementById("courseCode").textContent =
        course.code;


    document.getElementById("courseTitle").textContent =
        course.title;


    document.getElementById("courseDepartment").textContent =
        department;


    document.getElementById("courseLevel").textContent =
        `${level} Level`;


    document.getElementById("courseSemester").textContent =
        course.semester;


    document.getElementById("courseUnits").textContent =
        `${course.units} Units`;

}
else {

    console.log("Course not found");

}


// ===============================
// UPDATE SIDEBAR
// ===============================

const username =
    localStorage.getItem("username") || "Student";


const userInitial =
    username.charAt(0).toUpperCase();


document.getElementById("sidebarName").textContent =
    username;


document.getElementById("userInitial").textContent =
    userInitial;


document.getElementById("sidebarDepartment").textContent =
    department;

// ===============================
// RESOURCE BUTTONS
// ===============================

document
    .getElementById("notesButton")
    .addEventListener("click", () => {

        window.location.href = "notes.html";

    });