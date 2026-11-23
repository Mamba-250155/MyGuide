document.addEventListener("DOMContentLoaded", () => {

// ==========================================
// GET USER INFORMATION
// ==========================================

const fullname =
    localStorage.getItem("fullname") || "Student";

const level =
    localStorage.getItem("level") || "100";

const department =
    localStorage.getItem("department") || "Computer Science";

const username =
    localStorage.getItem("username") || "User";


// ==========================================
// DISPLAY USER INFORMATION
// ==========================================

document.querySelectorAll(".hero-name").forEach(el => {
    el.textContent = fullname;
});

document.querySelectorAll(".username").forEach(el => {
    el.textContent = username;
});

document.querySelectorAll(".user-level").forEach(el => {
    el.textContent = level + " Level";
});

document.querySelectorAll(".department-name").forEach(el => {
    el.textContent = department;
});


// ==========================================
// USER AVATAR
// ==========================================

const initial = fullname.charAt(0).toUpperCase();

const avatar = document.getElementById("avatar");
const profileInitial = document.getElementById("profile-initial");

if (avatar) {
    avatar.textContent = initial;
}

if (profileInitial) {
    profileInitial.textContent = initial;
}


// ==========================================
// DYNAMIC GREETING
// ==========================================

const hour = new Date().getHours();

let greeting;

if (hour < 12) {
    greeting = "Good Morning";
} else if (hour < 17) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}

const welcomeMessage =
    document.getElementById("welcome-message");

if (welcomeMessage) {
    welcomeMessage.innerHTML =
        `${greeting}, <span class="hero-name"></span> 👋`;

    welcomeMessage.querySelector(".hero-name").textContent =
        fullname;
}


// ==========================================
// COURSES CARD NAVIGATION
// ==========================================

const coursesCard = document.getElementById("coursesCard");

if (coursesCard) {
    coursesCard.addEventListener("click", () => {
        window.location.href = "courses.html";
    });
}


// ==========================================
// MYGUIDE SIDEBAR CONTROLS
// ==========================================

const sidebar = document.getElementById("sidebar");
const collapseBtn = document.querySelector(".collapse-btn");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const backdrop = document.getElementById("sidebar-backdrop");

if (sidebar && collapseBtn && mobileMenuBtn && backdrop) {

    const mobileQuery = window.matchMedia("(max-width: 768px)");

    function closeMobileMenu() {
        document.body.classList.remove("mobile-menu-open");

        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }

    function updateCollapseButton() {
        const collapsed =
            document.body.classList.contains("sidebar-collapsed");

        collapseBtn.textContent =
            collapsed ? "⟫ Expand" : "⟪ Collapse";
    }

    // Desktop sidebar collapse / expand
    collapseBtn.addEventListener("click", () => {

        if (mobileQuery.matches) {
            closeMobileMenu();
            return;
        }

        document.body.classList.toggle("sidebar-collapsed");

        updateCollapseButton();
    });

    // Mobile menu open / close
    mobileMenuBtn.addEventListener("click", () => {

        const isOpen =
            document.body.classList.toggle("mobile-menu-open");

        mobileMenuBtn.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        mobileMenuBtn.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );
    });

    // Close menu when backdrop is clicked
    backdrop.addEventListener("click", closeMobileMenu);

    // Close menu with Escape
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMobileMenu();
        }
    });

    // Close menu after selecting a sidebar link on mobile
    sidebar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            if (mobileQuery.matches) {
                closeMobileMenu();
            }
        });
    });

    // Reset mobile menu when screen size changes
    mobileQuery.addEventListener("change", closeMobileMenu);

    updateCollapseButton();

} else {
    console.error(
        "MyGuide sidebar: Check that sidebar, collapse button, mobile menu button, and backdrop exist in dashboard.html."
    );
}

console.log("MyGuide dashboard initialized successfully.");


});
