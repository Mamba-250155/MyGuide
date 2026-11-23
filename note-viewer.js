document.addEventListener("DOMContentLoaded", function () {

    console.log("MyGuide Note Viewer loaded");


    // =========================================
    // ELEMENTS
    // =========================================

    const pdfViewer = document.getElementById("pdfViewer");
    const backButton = document.getElementById("backButton");

    const noteTitle = document.getElementById("noteTitle");
    const courseName = document.getElementById("courseName");

    const sidebarName = document.getElementById("sidebarName");
    const sidebarDepartment = document.getElementById("sidebarDepartment");
    const userInitial = document.getElementById("userInitial");


    // =========================================
    // USER DATA
    // =========================================

    const fullname = localStorage.getItem("fullname");
    const username = localStorage.getItem("username");
    const department = localStorage.getItem("department");


    const name = fullname || username || "Student";


    sidebarName.textContent = name;

    sidebarDepartment.textContent =
        department || "Computer Science";


    userInitial.textContent =
        name.charAt(0).toUpperCase();


    // =========================================
    // URL PARAMETERS
    // =========================================

    const urlParams =
        new URLSearchParams(window.location.search);


    const pdf =
        urlParams.get("pdf");

    const title =
        urlParams.get("title");

    const course =
        urlParams.get("course");


    console.log("PDF:", pdf);
    console.log("Title:", title);
    console.log("Course:", course);


    // =========================================
    // NOTE TITLE
    // =========================================

    if (title) {

        noteTitle.textContent = title;

        document.title =
            "MyGuide | " + title;
    }


    // =========================================
    // COURSE
    // =========================================

    if (course) {

        courseName.textContent = course;

    }


    // =========================================
    // PDF
    // =========================================

    if (pdf) {

        pdfViewer.src = pdf;

    } else {

        console.warn("No PDF supplied.");

        pdfViewer.srcdoc = `
            <!DOCTYPE html>

            <html>

            <body style="
                margin:0;
                height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                font-family:Arial,sans-serif;
                background:#f5f7fb;
                color:#6b7280;
                text-align:center;
            ">

                <div>

                    <h2 style="
                        color:#374151;
                        margin-bottom:8px;
                    ">
                        No Note Selected
                    </h2>

                    <p>
                        Please return to Notes
                        and select a lecture note.
                    </p>

                </div>

            </body>

            </html>
        `;

    }


    // =========================================
    // BACK BUTTON
    // =========================================

    backButton.addEventListener("click", function () {

        window.location.href = "notes.html";

    });

});