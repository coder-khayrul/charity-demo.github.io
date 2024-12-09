
const mobileMenuClose = document.querySelector(".menu_close_btn")
const mobileMenuWrapper = document.querySelector(".mobile_menu_wrapper")
const mobileMenuArea = document.querySelector(".mobile_menu")
const mobileMenuOpen = document.querySelector(".mobile_menu_btn")

mobileMenuOpen.addEventListener("click", () => {
    mobileMenuArea.classList.add("menu_open")
    mobileMenuArea.classList.remove("menu_close")

})

mobileMenuClose.addEventListener("click", () => {
    mobileMenuArea.classList.add("menu_close")
    mobileMenuArea.classList.remove("menu_open")

})