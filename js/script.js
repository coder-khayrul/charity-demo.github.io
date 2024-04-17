
//***=================TOP HEADER LANGUAGE DROPDOWN HANDLER ===============*/

const language_area = document.querySelector(".language_dropdown");
const dropdown_elements = language_area.querySelectorAll(".option_dropdown li");
const selected_item = language_area.querySelector(".selected_item");
const root_variable = document.querySelector(":root")

dropdown_elements.forEach(item => {
  item.addEventListener("click", () => {
    selected_item.innerHTML = `${item.textContent} <span><i class="fa-solid fa-chevron-down"></i></span>
    </div>`;
    if (item.textContent === "English") {
      root_variable.style.setProperty("--flag-image", 'url("https://flagsapi.com/US/flat/32.png")')
    } else if (item.textContent === "Spanish") {
      root_variable.style.setProperty("--flag-image", 'url("https://flagsapi.com/ES/flat/32.png")')
    } else if (item.textContent === "Franch") {
      root_variable.style.setProperty("--flag-image", 'url("https://flagsapi.com/FR/flat/32.png")')
    } else if (item.textContent === "Arabic") {
      root_variable.style.setProperty("--flag-image", 'url("https://flagsapi.com/SA/flat/32.png")')
    } else if (item.textContent === "Chinies") {
      root_variable.style.setProperty("--flag-image", 'url("https://flagsapi.com/CN/flat/32.png")')
    } else if (item.textContent === "Russian") {
      root_variable.style.setProperty("--flag-image", 'url("https://flagsapi.com/RU/flat/32.png")')
    } else if (item.textContent === "Bangali") {
      root_variable.style.setProperty("--flag-image", 'url("https://flagsapi.com/BD/flat/32.png")')
    }
  })
})

//**======================TOP HEADER CURRANCY DROPDOWN ================== */

const currancy_area = document.querySelector(".currancy_dropdown");
const dropdown_c_elements = currancy_area.querySelectorAll(".option_dropdown a");
const selected_c_item = currancy_area.querySelector(".selected_item");

dropdown_c_elements.forEach(item => {
  item.addEventListener("click", () => {
    selected_c_item.innerHTML = `${item.textContent} <span><i class="fa-solid fa-chevron-down"></i></span>
    </div>`;

  })
})


//**=================increase and decrease button handler ===================**/

//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let inputValue = parseInt(cart_value_input[index].value);

    if (inputValue < 9) {
      cart_value_input[index].value = `0${inputValue + 1}`;
    } else {
      cart_value_input[index].value = inputValue + 1;
    }
  });
});

decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let inputValue = parseInt(cart_value_input[index].value);

    if (inputValue > 1) {
      if (inputValue <= 10) {
        cart_value_input[index].value = `0${inputValue - 1}`;
      } else {
        cart_value_input[index].value = inputValue - 1;
      }
    }
  });
});


//**========================MOBILE MENU LANGUAGE HANDLER==================== */

const language_items = document.querySelectorAll(".menu_language li a");
// Convert NodeList to array
const language_items_array = Array.from(language_items);

language_items_array.forEach(item_ln => {
  item_ln.addEventListener("click", () => {
    // Add "active" class to clicked item
    item_ln.classList.add("active");

    // Remove "active" class from other items
    language_items_array.forEach(otherItem => {
      if (otherItem !== item_ln) {
        otherItem.classList.remove("active");
      }
    });
  });
});


//**=====================MOBILE MENU CURRANCY HANDLER====================== */

const currancy_items = document.querySelectorAll(".menu_currancy li a");
const currancy_array = Array.from(currancy_items);

currancy_array.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    currancy_array.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove("active")
      }
    })
  })
})

//**=======================MOBILE MENU HANDLER===================== */

const mobile_menu_area = document.querySelector(".mobile_menu");
const mobile_menu_area_wrapper = document.querySelector(".mobile_wrapper");
const mobile_menu_close_btn = document.querySelector(".mobile_menu_close");
const mobile_menu_open_btn = document.querySelector(".menu_open");

mobile_menu_open_btn.addEventListener("click", () => {
  mobile_menu_area.style.animation = "fade_in 1s ease-in forwards"

  mobile_menu_area_wrapper.style.animation = "slide_right 1s ease-in forwards"
})
mobile_menu_close_btn.addEventListener("click", () => {
  mobile_menu_area.style.animation = "fade_out 1s ease-in forwards"

  mobile_menu_area_wrapper.style.animation = "slide_left 1s ease-in forwards"
})

//nested item handler
const parent_items = document.querySelectorAll(".dropdowm_p");
console.log(parent_items)
parent_items.forEach(p_item => {
    let inner_menu_item = p_item.querySelector(".inner_items_area");
    let inner_menu_close = p_item.querySelector(".back_page");

    if (inner_menu_close && inner_menu_item) {

        inner_menu_close.addEventListener("click", (event) => {
            event.stopPropagation(); // Stop event propagation
            inner_menu_item.classList.add("slide_left");
            inner_menu_item.classList.remove("slide_right");
        });

        p_item.addEventListener("click", () => {
            inner_menu_item.classList.add("slide_right");
            inner_menu_item.classList.remove("slide_left");
        });
    } else {
        console.log("Inner menu item or close button not found for parent item:", p_item);
    }
});
//**==============SIDE CARD HANDLER============== */


$(".cart_icon").on("click", () => {
  $(".side_cart_wrapper").slideDown();
  $(".side_cart").fadeToggle();
});

$(".cart_close").on("click", () => {
  $(".side_cart_wrapper").slideUp();
  $(".side_cart").fadeToggle();
});


$(document).on("click", (e) => {
  if (!$(".side_cart_wrapper").has(e.target).length && !$(".cart_close").has(e.target).length && $(".side_cart").has(e.target).length) {
    $(".side_cart_wrapper").slideUp();
    $(".side_cart").fadeToggle();
  }
});

$(".estimate_btn").on("click", () => {
  $(".rate_wrapper").slideDown();
  $(".rate_mini_popup").fadeToggle();
});

$(".rate_cancle").on("click", () => {
  $(".rate_wrapper").slideUp();
  $(".rate_mini_popup").fadeToggle();
});
$(".gift_btn").on("click", () => {
  $(".gift_wrap").slideDown();
  $(".gift_mini_popup").fadeToggle();
});

$(".delete_gift").on("click", () => {
  $(".gift_wrap").slideUp();
  $(".gift_mini_popup").fadeToggle();
});
$(".note_btn").on("click", () => {
  $(".popup_div").slideDown();
  $(".mini_popup").fadeToggle();
});

$(".delete_card").on("click", () => {
  $(".popup_div").slideUp();
  $(".mini_popup").fadeToggle();
});



//**========================SWIPER SCRIPTS ===========================*/


//MAIN MENU "CAUSE" MEGA MENU SLIDER

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },
});

//MAIN MENU "BLOG" MEGA MENU SLIDER
var swiper = new Swiper(".mySwiper2", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
});