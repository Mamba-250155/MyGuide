// GET STUDENT INFORMATION

const username = localStorage.getItem("username") || "Student";
const faculty = localStorage.getItem("faculty") || "Computing";
const department = localStorage.getItem("department") || "ComputerScience";
const level = localStorage.getItem("level") || "100";


// UPDATE SIDEBAR PROFILE

document.getElementById("sidebarName").textContent = username;

document.getElementById("userInitial").textContent =
    username.charAt(0).toUpperCase();

document.getElementById("sidebarDepartment").textContent =
    department;


// UPDATE PAGE INFORMATION

document.getElementById("courseInfo").textContent =
    `${department} • ${level} Level`;


// GET COURSES CONTAINER

const coursesContainer =
    document.getElementById("coursesContainer");


// LOAD STUDENT COURSES

const studentCourses =
    courseDatabase[faculty]?.[department]?.[level] || [];


// UPDATE NUMBER OF COURSES

document.getElementById("courseCount").textContent =
    studentCourses.length;


// CREATE COURSE CARDS

studentCourses.forEach(course => {

    const card = document.createElement("div");

    card.classList.add("course-card");

    card.innerHTML = `

        <div class="course-top">

            <div class="course-icon">
                📘
            </div>

            <div>

                <h3>${course.code}</h3>

                <p>${course.title}</p>

            </div>

        </div>


        <div class="course-info">

            <span>${course.units} Units</span>

            <span>${course.semester}</span>

        </div>


        <div class="course-footer">

            <button>
                View Resources
            </button>

        </div>

    `;


    // CLICK EVENT

    card.addEventListener("click", () => {

        localStorage.setItem(
            "selectedCourse",
            course.code
        );

        window.location.href =
            "course-details.html";

    });


    // ADD CARD TO PAGE

    coursesContainer.appendChild(card);

});


// DISPLAY COURSES BY SEMESTER

function displayCourses(selectedSemester) {

    coursesContainer.innerHTML = "";

    const filteredCourses =
        studentCourses.filter(
            course => course.semester === selectedSemester
        );


    filteredCourses.forEach(course => {

        const card =
            document.createElement("div");

        card.className = "course-card";


        card.innerHTML = `

            <div class="card-icon">
                📘
            </div>

            <div class="course-info">

                <h3>${course.code}</h3>

                <p>${course.title}</p>

            </div>

            <div class="course-footer">

                <button>
                    View Resources →
                </button>

            </div>

        `;


        // CLICK EVENT

        card.addEventListener("click", () => {

            localStorage.setItem(
                "selectedCourse",
                course.code
            );

            window.location.href =
                "course-details.html";

        });


        coursesContainer.appendChild(card);

    });

}


// SEMESTER BUTTONS

const firstSemesterBtn =
    document.querySelector("#firstSemesterBtn");

const secondSemesterBtn =
    document.querySelector("#secondSemesterBtn");


firstSemesterBtn.addEventListener("click", () => {

    displayCourses("1st semester");

});


secondSemesterBtn.addEventListener("click", () => {

    displayCourses("2nd semester");

});