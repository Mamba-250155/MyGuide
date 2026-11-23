const form = document.getElementById("setupForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = 
    document.getElementById("name").value;

    const department = 
    document.getElementById("department").value;

    const level =
    document.getElementById("level").value;

    localStorage.setItem("username", name);
    localStorage.setItem("userDepartment", department);
    localStorage.setItem("userLevel", level);

    window.location.href = "dashboard.html";

});

const userName =
localStorage.getItem("userName")
|| "Student";

const userDepartment =
localStorage.getItem("userDepartment")
|| "Computer Science";

const userLevel =
localStorage.getItem("userLevel")
|| "100";