console.log("scipt loaded");

function enterMyGuide(){
   let fullname = document.getElementById("fullname").value;
    let username = document.getElementById("username").value;
    let faculty = document.getElementById("faculty").value;
    let department = document.getElementById ("department").value;
    let level = document.getElementById("level").value;

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


  // SAVE TO LOCAL STORAGE
  localStorage.setItem("fullname", fullname);
  localStorage.setItem("username", username);
  localStorage.setItem("faculty", faculty);
  localStorage.setItem("department", department);
  localStorage.setItem("level", level);

  console.log("Data saved");
  console.log("Redirecting...");

  // Open Dashboad
  window.location.href="dashboard.html";

}
