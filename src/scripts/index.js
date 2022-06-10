// ---------------------------------------------------- constants
const burger = document.querySelector(".burger");
const menuPopup = document.querySelector(".popup");
const page = document.querySelector(".page");

// ---------------------------------------------------- functions
function openPopup(popup) {
    popup.classList.add("popup_opened");
    addCloseListeners();
}

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    deleteCloseListeners();
}

function setCloseListeners() {
    const popups = document.querySelectorAll(".popup");
    popups.forEach((popup) => {
        popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup_opened")) {
                closePopup(popup);
            }
            if (evt.target.classList.contains("popup__close-button")) {
                closePopup(popup);
            }
        });
    });
}

const handleEscape = (evt) => {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
};

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: "horizontal",
    loop: true,

    pagination: {
        el: ".reviews__slider-feedback-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".reviews__slider-feedback-button-next",
        prevEl: ".reviews__slider-feedback-button-prev",
    },
});

const swiperReview = new Swiper(".swiperReview", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    direction: "horizontal",
    loop: true,

    pagination: {
        el: ".reviews__slider-feedback-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".reviews__slider-feedback-button-next",
        prevEl: ".reviews__slider-feedback-button-prev",
    },
});

// ---------------------------------------------------- listeners
burger.addEventListener("click", () => {
    openPopup(menuPopup);
});

const addCloseListeners = () => {
    page.addEventListener("keydown", handleEscape);
};

const deleteCloseListeners = () => {
    page.removeEventListener("keydown", handleEscape);
};
// ---------------------------------------------------- execution

setCloseListeners();
