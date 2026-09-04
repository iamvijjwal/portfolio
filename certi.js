document.addEventListener("DOMContentLoaded", () => {

    const allCert = document.getElementById("allcert");

    if (!allCert) return;


    const certificates = [

    // ==========================================
    // ST. ANTHONY'S SECONDARY SCHOOL
    // ==========================================

    {
        image: "certificates/ANTHONY_CERT (1).jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_CERT (2).jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_CERT (3).jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_CERT (4).jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_CERT.jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_III.jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_IV.jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_TALENT_HUNT.jpg",
        title: "Talent Hunt Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_V.jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_VC.jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_VC_MP.jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_VI.jpg",
        title: "School Certificate",
        organization: "St. Anthony's Secondary School",
        year: "2021"
    },

    {
        image: "certificates/ANTHONY_YATT.jpg",
        title: "Certificate of Participation",
        organization: "YATT",
        year: "2021"
    },


    // ==========================================
    // FIRST AID / CPR
    // ==========================================

    {
        image: "certificates/CPR.jpg",
        title: "First Aid & CPR Training",
        organization: "Sarvodaya",
        year: "2021"
    },


    // ==========================================
    // DAV CENTENARY COLLEGE
    // ==========================================

    {
        image: "certificates/DAV_CERT (3).jpg",
        title: "Certificate of Completion",
        organization: "DAV Centenary College, Faridabad",
        year: "2022"
    },

    {
        image: "certificates/DAV_CERT.jpg",
        title: "Certificate of Participation",
        organization: "DAV Centenary College, Faridabad",
        year: "2022"
    },

    {
        image: "certificates/DAV_CERT (2).jpg",
        title: "Certificate of Participation",
        organization: "DAV Centenary College, Faridabad",
        year: "2022"
    },


    // ==========================================
    // ST. JOHN'S SCHOOL
    // ==========================================

    {
        image: "certificates/JOHNS_ACTIVITY.jpg",
        title: "Activity Certificate",
        organization: "St. John's School",
        year: "2022"
    },

    {
        image: "certificates/JOHNS_SPORTS (1).jpg",
        title: "Sports Certificate",
        organization: "St. John's School",
        year: "2022"
    },

    {
        image: "certificates/JOHNS_SPORTS (2).jpg",
        title: "Sports Certificate",
        organization: "St. John's School",
        year: "2022"
    },


    // ==========================================
    // NCC
    // ==========================================

    {
        image: "certificates/NCC (1).jpg",
        title: "Certificate of Appreciation",
        organization: "NCC",
        year: "2022"
    },

    {
        image: "certificates/NCC (2).jpg",
        title: "Certificate of Appreciation",
        organization: "NCC",
        year: "2022"
    },

    {
        image: "certificates/NCC (3).jpg",
        title: "Certificate of Appreciation",
        organization: "NCC",
        year: "2022"
    },

    {
        image: "certificates/NCC_A_cert.jpg",
        title: "NCC Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },

    {
        image: "certificates/NCC_B_Cert.jpg",
        title: "NCC Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },

    {
        image: "certificates/NCC_C_cert.jpg",
        title: "NCC Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },

    {
        image: "certificates/NCC_CAMP_ATC142.jpg",
        title: "NCC Camp Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },

    {
        image: "certificates/NCC_CAMP_CATC162.jpg",
        title: "NCC Camp Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },

    {
        image: "certificates/NCC_CAMP_EBSB.jpg",
        title: "NCC Camp Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },

    {
        image: "certificates/NCC_CAMP_SNIC.jpg",
        title: "NCC Camp Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },

    {
        image: "certificates/NCC_CAMP_YAMS.jpg",
        title: "NCC Camp Certificate",
        organization: "National Cadet Corps",
        year: "2022"
    },


    // ==========================================
    // OTHER CERTIFICATES
    // ==========================================


    {
        image: "certificates/Python.jpg",
        title: "Python Certificate",
        organization: "Python",
        year: "2023"
    },

    {
        image: "certificates/Python_dreamer.jpg",
        title: "Python Certificate",
        organization: "Dreamer",
        year: "2023"
    },



    // ==========================================
    // TECHNICIA
    // ==========================================

    {
        image: "certificates/TECHNICIA.jpg",
        title: "Technicia Certificate",
        organization: "Technicia",
        year: "2023"
    },

    {
        image: "certificates/TECHNICIA_Conference_ICPR.png",
        title: "Conference Certificate",
        organization: "Technicia Conference",
        year: "2023"
    },

    {
        image: "certificates/TECHNICIA_Conference_ICSSR.jpg",
        title: "Conference Certificate",
        organization: "Technicia Conference",
        year: "2023"
    },


    // ==========================================
    // INDIAN RED CROSS SOCIETY
    // ==========================================

    {
        image: "certificates/YRC.jpg",
        title: "Certificate of Appreciation",
        organization: "Indian Red Cross Society",
        year: "2023"
    }

];


    /* Create inner grid */

    const grid = document.createElement("div");

    grid.className = "all-certificates-grid";


    certificates.forEach(cert => {

        const card = document.createElement("div");

        card.className = "all-certificate-item";


        card.innerHTML = `
            <div class="all-certificate-image">

                <img
                    src="${cert.image}"
                    alt="${cert.title}"
                    loading="lazy"
                >

            </div>

            <div class="all-certificate-info">

                <h3>${cert.title}</h3>

                <p>${cert.organization}</p>

                <span>${cert.year}</span>

                <a
                    href="${cert.image}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Certificate →
                </a>

            </div>
        `;


        grid.appendChild(card);

    });


    allCert.appendChild(grid);

});