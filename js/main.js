document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("content-container");
    const searchInput = document.getElementById("search-input");

    const modalTitle = document.getElementById("infoModalLabel");
    const modalImg = document.getElementById("modal-img");
    const modalDescription = document.getElementById("modal-description");
    const infoModal = new bootstrap.Modal(document.getElementById("infoModal"));

    const contentItems = [
        { title: "כוויה תרמית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.53.23_66534a54.jpg", description: "נגרמת על ידי חשיפה לחום גבוה, כמו אש, מים רותחים, שמן חם או אדים.\n" },
        { title: "כוויה כימית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.47.50_3504d8dc.jpg", description: "נגרמת מחשיפה לחומרים כימיים חריפים, כמו חומצות או בסיסים חזקים.\n" },
        { title: "כוויה חשמלית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.58.23_d949c73c.jpg", description: "נגרמת ממעבר של זרם חשמלי דרך הגוף.\n" },
        { title: "כוויה קורנית", imgSrc: "../WhatsApp Image 2024-12-18 at 15.53.34_0d9e192b.jpg", description: "נגרמת מחשיפה לטמפרטורות נמוכות מאוד, שגורמות לקיפאון של הרקמות.\n" },
        { title: "כוויה מקרינה", imgSrc: "../WhatsApp Image 2024-12-18 at 15.45.00_c6aaf58d.jpg", description: "נגרמת מחשיפה לקרינה, כמו קרני שמש (UV), קרינת רנטגן או קרינה רדיואקטיבית.\n" },
        { title: "כוויה כתוצאה מחיכוך", imgSrc: "../WhatsApp Image 2024-12-18 at 15.50.19_66bc27ae.jpg", description: "נגרמת ממגע מהיר ועוצמתי בין העור לבין משטח קשה.\n" },
        { title: "כוויה מקרינה רפואית", imgSrc: "../WhatsApp Image 2024-12-18 at 16.05.44_eeba7747.jpg", description: "נגרמת כתופעת לוואי של טיפול בקרינה לחולי סרטן.\n" },
        { title: "כוויה ממים חמים", imgSrc: "../WhatsApp Image 2024-12-18 at 15.49.44_448aafb9.jpg", description: "תת-סוג של כוויה תרמית, נגרמת ממגע עם נוזלים חמים.\n" },
        { title: "כוויה מקול קורתי", imgSrc: "../WhatsApp Image 2024-12-18 at 15.48.54_208fefa1.jpg", description: "נגרמת מחשיפה פתאומית לקול קורתי (ARC) או לפיצוץ, כמו ריתוך או אש מתלקחת.\n" },
        { title: "כוויה בשאיפה", imgSrc: "../download.jpeg", description: "נגרמת משאיפת עשן או חומרים רעילים במהלך שריפה.\n" }
    ];

    function renderContent(items) {
        contentContainer.innerHTML = ""; // מנקה את התוכן הקיים
        items.forEach((item, index) => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

            const card = document.createElement("div");
            card.className = "card content-card";
            card.setAttribute("data-index", index);

            const img = document.createElement("img");
            img.className = "card-img-top";
            img.src = item.imgSrc;
            img.alt = item.title;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            title.className = "card-title";
            title.textContent = item.title;

            const description = document.createElement("p");
            description.className = "card-text";
            description.textContent = item.description;

            cardBody.appendChild(title);
            cardBody.appendChild(description);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);

            contentContainer.appendChild(col);

            // הוספת אנימציה לאחר זמן קצר
            setTimeout(() => {
                card.classList.add("fade-in");
            }, index * 100); // עיכוב כדי ליצור אפקט של כניסה הדרגתית
        });
    }

    // פונקציית חיפוש
    window.filterContent = () => {
        const query = searchInput.value.trim().toLowerCase();
        const filteredItems = contentItems.filter(item =>
            item.title.toLowerCase().includes(query)
        );
        renderContent(filteredItems);
    };

    // הצגת התוכן בתחילה
    renderContent(contentItems);
});
