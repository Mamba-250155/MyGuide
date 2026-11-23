function toggleMode(){
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("light")? "light" : "dark";
    localStorage.setItem("theme",theme);
}
const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    document.body.className = savedTheme;

}else{
    document.body.className = "dark"; //default mode
}
function enterApp(){
   window.location.href="loginpage.html";
}
