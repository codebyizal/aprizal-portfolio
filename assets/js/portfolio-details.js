const projects = {

    // 1. Decision Support System - Suhe
    "expert-dss": {
        title: "Web-Based Decision Support System",
        category: "Decision Support Systems",
        client: "Academic / Information System Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Suhe (SPK)/Login.png",
            "assets/img/Project/Suhe (SPK)/dashboard.png",
            "assets/img/Project/Suhe (SPK)/Hasil.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 2. Expert System - Sapnah
    "expert-system": {
        title: "Web-Based Expert System",
        category: "Expert System",
        client: "Academic / Information System Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Sapnah (Sispak)/Login.png",
            "assets/img/Project/Sapnah (Sispak)/Dashboard.png",
            "assets/img/Project/Sapnah (Sispak)/Hasil Diagnosa.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 3. Healthcare System - Nuke
    "emr": {
        title: "Web-Based Electronic Medical Record System",
        category: "Healthcare Systems",
        client: "Healthcare Information System Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Nuke (EMR)/Login.png",
            "assets/img/Project/Nuke (EMR)/Dashboard.png",
            "assets/img/Project/Nuke (EMR)/Data Pasien.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 4. Queue Management - Linda
    "queue": {
        title: "Web-Based Online Queue Management System",
        category: "Queue Management",
        client: "Academic / Web Application Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Linda (Antrian Online)/Login.png",
            "assets/img/Project/Linda (Antrian Online)/Daftar.png",
            "assets/img/Project/Linda (Antrian Online)/Scan QR.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 5. Business Website - Lidya
    "business": {
        title: "Web-Based Notary Management System",
        category: "Business Websites",
        client: "Information System Development Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Lidya (Notaris)/Login.png",
            "assets/img/Project/Lidya (Notaris)/Dashboard.png",
            "assets/img/Project/Lidya (Notaris)/Data.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 6. Administration System - Pipah
    "other-pipah": {
        title: "Web-Based Administration System",
        category: "Administration Systems",
        client: "Information System Development Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Pipah (TU)/Login.png",
            "assets/img/Project/Pipah (TU)/dahboard.png",
            "assets/img/Project/Pipah (TU)/surat.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 7. Decision Support System - Fernanda
    "dss-fernanda": {
        title: "Web-Based Decision Support System",
        category: "Decision Support Systems",
        client: "Academic / Information System Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/fernanda (SPK)/login.png",
            "assets/img/Project/fernanda (SPK)/dashbord.png",
            "assets/img/Project/fernanda (SPK)/proses SAW.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 8. Information System - Azka
    "other-azka": {
        title: "Web-Based Information System",
        category: "Other Systems",
        client: "Academic / Information System Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Azka/Website.png",
            "assets/img/Project/Azka/Dashboard.png",
            "assets/img/Project/Azka/register.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    },


    // 9. Student Counseling System - Alfhan
    "other-alfhan": {
        title: "Web-Based Student Counseling System",
        category: "Other Systems",
        client: "Academic / Information System Project",
        date: "-",
        url: "",

        images: [
            "assets/img/Project/Alfhan (Bimbingan Konesling)/Login.png",
            "assets/img/Project/Alfhan (Bimbingan Konesling)/Dashboard.png",
            "assets/img/Project/Alfhan (Bimbingan Konesling)/Data Pelanggaran Siswa.png"
        ],

        overview: [
            "Project overview will be added soon."
        ],

        features: []
    }

};


// Get project ID from URL
const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");
const project = projects[projectId];


// Display project details
document.addEventListener("DOMContentLoaded", () => {

    const pageTitle = document.getElementById("page-title");
    const pageHeading = document.getElementById("page-heading");
    const breadcrumbTitle = document.getElementById("breadcrumb-title");

    const projectName = document.getElementById("project-name");
    const projectCategory = document.getElementById("project-category");
    const projectClient = document.getElementById("project-client");
    const projectDate = document.getElementById("project-date");

    const projectUrl = document.getElementById("project-url");
    const projectUrlItem = document.getElementById("project-url-item");

    const imageContainer = document.getElementById("project-images");
    const overviewContainer = document.getElementById("project-overview");
    const featuresContainer = document.getElementById("project-features");
    const featuresList = document.getElementById("features-list");

    const projectNotFound = document.getElementById("project-not-found");
    const backToPortfolio = document.getElementById("back-to-portfolio");

    // Check project availability
    if (!project) {

        document.title = "Project Not Found | Aprizal Wahyudi";

        document.querySelector(".row.gy-4").style.display = "none";

        if (projectNotFound) {
            projectNotFound.style.display = "block";
        }

        if (backToPortfolio) {
            backToPortfolio.style.display = "none";
        }

        return;
    }


    // Page title
    document.title = `${project.title} | Aprizal Wahyudi`;

    pageTitle.textContent = document.title;
    pageHeading.textContent = project.title;
    breadcrumbTitle.textContent = project.title;


    // Project information
    projectName.textContent = project.title;
    projectCategory.textContent = project.category;
    projectClient.textContent = project.client;
    projectDate.textContent = project.date;


    // Project URL
    if (project.url) {

        projectUrl.href = project.url;
        projectUrl.textContent = "View Project";

    } else {

        projectUrlItem.style.display = "none";

    }


    // Project images
    imageContainer.innerHTML = project.images.map((image, index) => `
        <div class="swiper-slide">
            <img
                src="${image}"
                class="img-fluid"
                alt="${project.title} - Screenshot ${index + 1}"
                loading="${index === 0 ? "eager" : "lazy"}"
            >
        </div>
    `).join("");


    // Project overview
    overviewContainer.innerHTML = project.overview
        .map(description => `<p>${description}</p>`)
        .join("");


    // Project features
    if (project.features && project.features.length > 0) {

        featuresContainer.style.display = "block";

        featuresList.innerHTML = project.features.map(feature => `
            <div class="col-md-6">
                <div class="feature-item">
                    <i class="bi bi-check-circle-fill"></i>
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            </div>
        `).join("");

    } else {

        featuresContainer.style.display = "none";

    }


    // Initialize Swiper after loading images
    const swiperElement = document.querySelector(".portfolio-details-slider");

    if (swiperElement && typeof Swiper !== "undefined") {

        const swiperConfig = swiperElement.querySelector(".swiper-config");

        const config = swiperConfig
            ? JSON.parse(swiperConfig.textContent)
            : {};

        new Swiper(swiperElement, config);

    }

});
