// ==========================================
// GET SELECTED COURSE
// ==========================================

const selectedCourse =
    localStorage.getItem("selectedCourse");


// ==========================================
// GET COURSE INFORMATION
// ==========================================

const faculty =
    localStorage.getItem("faculty");

const department =
    localStorage.getItem("department");

const level =
    localStorage.getItem("level");


// ==========================================
// FIND COURSE
// ==========================================

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


// ==========================================
// UPDATE COURSE INFORMATION
// ==========================================

if (course) {

    document.getElementById("courseCode").textContent =
        course.code;


    document.getElementById("courseTitle").textContent =
        course.title;

}


// ==========================================
// GET NOTES
// ==========================================

const notesContainer =
    document.getElementById("notesContainer");


const notes =
    notesDatabase[selectedCourse] || [];


// ==========================================
// DISPLAY NOTE COUNT
// ==========================================

document.getElementById("notesCount").textContent =
    `${notes.length} ${notes.length === 1 ? "note" : "notes"}`;


// ==========================================
// DISPLAY NOTES
// ==========================================

function displayNotes(noteList) {

    notesContainer.innerHTML = "";


    // ======================================
    // NO NOTES
    // ======================================

    if (noteList.length === 0) {

        notesContainer.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    📚
                </div>

                <h3>
                    No notes yet
                </h3>

                <p>
                    Notes for this course haven't been
                    added yet.
                </p>

            </div>

        `;

        return;

    }


    // ======================================
    // CREATE NOTE CARDS
    // ======================================

    noteList.forEach(note => {

        const noteCard =
            document.createElement("div");


        noteCard.className =
            "note-card";


        noteCard.innerHTML = `

            <div class="note-icon">
                📄
            </div>


            <div class="note-content">

                <h3>
                    ${note.title}
                </h3>


                <p>
                    ${note.description}
                </p>

            </div>


            <div class="note-arrow">
                →
            </div>

        `;


        // ==================================
        // OPEN NOTE VIEWER
        // ==================================

        noteCard.addEventListener("click", () => {

            const viewerURL =
                `note-viewer.html?pdf=${encodeURIComponent(note.file)}&title=${encodeURIComponent(note.title)}&course=${encodeURIComponent(selectedCourse)}`;


            window.location.href =
                viewerURL;

        });


        // ==================================
        // ADD CARD TO PAGE
        // ==================================

        notesContainer.appendChild(noteCard);

    });

}


// ==========================================
// DISPLAY ALL NOTES
// ==========================================

displayNotes(notes);


// ==========================================
// SEARCH NOTES
// ==========================================

const searchInput =
    document.getElementById("searchNotes");


searchInput.addEventListener("input", () => {

    const searchTerm =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredNotes =
        notes.filter(note =>

            note.title
                .toLowerCase()
                .includes(searchTerm)

        );


    displayNotes(filteredNotes);

});


// ==========================================
// BACK BUTTON
// ==========================================

document
    .getElementById("backButton")
    .addEventListener("click", () => {

        window.location.href =
            "course-details.html";

    });
