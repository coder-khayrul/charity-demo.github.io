
/**loading animation script**/
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    preloader.style.display = 'none'; // Hide the preloader
    document.body.style.overflow = "revert-layer"
     },4000)
}); 

const spans = document.querySelectorAll('.preloader_text span');
    let currentIndex = 0; 

    function animateLetters() {
    
      spans.forEach(span => span.classList.remove('zoomed'));

      if (currentIndex < spans.length) {
     
        spans[currentIndex].classList.add('zoomed');

        currentIndex++;

        setTimeout(animateLetters, 500);
      } else {
       
        setTimeout(() => {

          currentIndex = 0;

          animateLetters();
        }, 500); 
      }
    }

    // Start the animation
    animateLetters();



document.addEventListener('DOMContentLoaded', () => {

    //****STICKY HEADER HANDLER */
    const header = document.querySelector("header");
    const toggleClass = "sticky_animation";
    const top_header = document.querySelector(".top_header")
    const news_section = document.querySelector(".scrolling_news");
    const header_info_section = document.querySelector(".header_info_area")


    let lastScrollTop = 0;

    $(window).on("scroll", () => {
        let currentScrollTop = $(window).scrollTop();

        if (currentScrollTop < lastScrollTop && currentScrollTop > 0) {

            header.classList.add(toggleClass);
            top_header.style.display = "none";
            news_section.style.display = "none";
            header_info_section.style.display = "none";

        } else {

            header.classList.remove(toggleClass);
            top_header.style.display = "block";
            news_section.style.display = "block";
            window.addEventListener("resize", () => {
                if (window.matchMedia("(max-width: 767px)").matches) {
                    header_info_section.style.display = "none";
                } else {
                    header_info_section.style.display = "block";
                }
            })
            window.dispatchEvent(new Event('resize'));
        }

        lastScrollTop = currentScrollTop;
    });



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

    // Function to close the menu
    function closeMenu() {
        mobile_menu_area.style.animation = "fade_out 1s ease-in forwards";
        mobile_menu_area_wrapper.style.animation = "slide_left 1s ease-in forwards";
    }

    // Open menu event listener
    mobile_menu_open_btn.addEventListener("click", () => {
        mobile_menu_area.style.animation = "fade_in 1s ease-in forwards";
        mobile_menu_area_wrapper.style.animation = "slide_right 1s ease-in forwards";
        mobile_menu_area_wrapper.classList.add("show_menu")
    });

    // Close menu event listener
    mobile_menu_close_btn.addEventListener("click", closeMenu);

    // Event listener to close menu when clicking outside of the menu wrapper

    document.body.addEventListener("click", (event) => {
        if (mobile_menu_area_wrapper.className.includes("show_menu")) {
            if (!mobile_menu_area_wrapper.contains(event.target) && !mobile_menu_open_btn.contains(event.target)) {
                closeMenu();
            }
        }
    });

    //***SCRIPT OF DONATE POPUP */
    const volunteer_popup = document.querySelector(".volunteer_popup")
    const volunteer_wrapper = document.querySelector(".volunteer_wrapper")
    const volunteer_popup_close = document.querySelector(".volunteer_close")
    const volunteer_popup_open = document.querySelector(".volunteer_btn ")

    volunteer_popup_open.addEventListener("click", () => {

        volunteer_popup.style.animation = "fade_in 1s ease-in forwards"
        volunteer_wrapper.style.animation = "slide_right 1s ease-in forwards"

    })
    volunteer_popup_close.addEventListener("click", () => {

        volunteer_popup.style.animation = "fade_out 1s ease-in forwards"
        volunteer_wrapper.style.animation = "slide_left 1s ease-in forwards"

    })


    //***SCRIPT OF DONATE POPUP */
    const donate_popup = document.querySelector(".donation_popup")
    const donate_wrapper = document.querySelector(".donation_wrapper")
    const donate_popup_close = document.querySelector(".d_popup_close")
    const donate_popup_open = document.querySelector(".donate_btn")

    donate_popup_open.addEventListener("click", () => {

        donate_popup.style.animation = "fade_in 1s ease-in forwards"
        donate_wrapper.style.animation = "slide_right 1s ease-in forwards"

    })
    donate_popup_close.addEventListener("click", () => {

        donate_popup.style.animation = "fade_out 1s ease-in forwards"
        donate_wrapper.style.animation = "slide_left 1s ease-in forwards"

    })


    //***SCRIPT OF EVENT BOOKING POPUP */
    const event_popup = document.querySelector(".event_form_popup")
    const event_wrapper = document.querySelector(".event_form_popup_wrapper")
    const event_popup_close = document.querySelector(".event_popup_close")
    const event_popup_open = document.querySelectorAll(".event_booking_btn ")

    event_popup_open.forEach(event_btn => {
        event_btn.addEventListener("click", () => {

            event_popup.style.animation = "fade_in 1s ease-in forwards"
            event_wrapper.style.animation = "slide_right 1s ease-in forwards"

        })
        event_popup_close.addEventListener("click", () => {

            event_popup.style.animation = "fade_out 1s ease-in forwards"
            event_wrapper.style.animation = "slide_left 1s ease-in forwards"

        })
    })
    //***SCRIPT FOR AMOUNT SELECTION */
    const amounts = document.querySelectorAll(".chooes_amount_wrapper button");
    const amount_show_input = document.querySelector("#amount_input");
    const amount_array = Array.from(amounts);

    amount_array.forEach((amt, index) => {
        amount_show_input.readOnly = true;
        amt.addEventListener("click", (e) => {

            e.preventDefault();
            amount_array.forEach(otherAmt => {
                otherAmt.classList.remove("selected");
            });

            amt.classList.add("selected");

            total_amount = amount_show_input.value = amt.textContent.substring(1);
            amount_show_input.readOnly = index !== amount_array.length - 1;


            if (index === amount_array.length - 1) {
                amount_show_input.focus();
            }

        });
    });


    //**SCRIPT FOR DONATION STATUS MANAGING */
    const donation_manage_input = document.querySelector("#donation_qantity_input");
    const donation_toggle_area = document.querySelector(".how_offen_donation");

    // Add event listener to the select element
    donation_manage_input.addEventListener("change", function () {
        // Check if the selected value is "Weekly"
        if (this.value === "Weekly" || this.value === "Monthly") {
            // If selected value is "Weekly", display the donation_toggle_area
            donation_toggle_area.style.display = "flex";
            console.log(this.value)
        } else {
            // If selected value is not "Weekly", hide the donation_toggle_area
            donation_toggle_area.style.display = "none";
            console.log(this.value)
        }
    });


    //nested item handler
    const parent_items = document.querySelectorAll(".dropdowm_p");

    parent_items.forEach(p_item => {
        let inner_menu_item = p_item.querySelector(".inner_items_area");
        let inner_menu_close = p_item.querySelector(".back_page");

        if (inner_menu_close && inner_menu_item) {

            inner_menu_close.addEventListener("click", (event) => {
                event.stopPropagation();
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
    //**MOBILE SEARCH POPUP HANDLER */
    const sm_search_popup = document.querySelector(".mobile_search_popup")
    const sm_search_close = document.querySelector(".mobile_search_close")
    const sm_search_open = document.querySelector(".sm_search_icon")
    const sm_search_wrapper = document.querySelector(".mobile_search_wrapper")

    sm_search_open.addEventListener("click", () => {

        sm_search_popup.style.animation = "fade_in 1s ease-in forwards"
        sm_search_wrapper.style.animation = "slide_right 1s ease-in forwards"

    })
    sm_search_close.addEventListener("click", () => {

        sm_search_popup.style.animation = "fade_out 1s ease-in forwards"
        sm_search_wrapper.style.animation = "slide_left 1s ease-in forwards"

    })

    //**event sidebar handler */
    const sidebarHandlerButton = document.querySelector(".sidebar_show");
    const eventSideBar = document.querySelector("aside");
    const aside_close = document.querySelector(".aside_close_btn");

    sidebarHandlerButton.addEventListener("click", () => {
        eventSideBar.classList.add("aside_active");
        eventSideBar.classList.remove("aside_remove");
    });

    // This event handles clicks outside the sidebar
    document.addEventListener("click", (e) => {
        // If the click is outside the sidebar and not on the toggle button
        if (!eventSideBar.contains(e.target) && !sidebarHandlerButton.contains(e.target) && eventSideBar.className === ("aside_active")) {
            eventSideBar.classList.add("aside_remove");
            eventSideBar.classList.remove("aside_active");
        }
    });
    aside_close.addEventListener("click", () => {
        eventSideBar.classList.add("aside_remove");
            eventSideBar.classList.remove("aside_active");
    })

    //timer handling script
    //cout down for offer
    let dayValue = document.querySelectorAll(".day");
    let hrsValue = document.querySelectorAll(".hrs");
    let minValue = document.querySelectorAll(".min");
    let secValue = document.querySelectorAll(".sec");

    // Set the date you're counting down to (replace with your desired date)
    const countdownDate = new Date("Dec 10, 2024 04:04:40").getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function () {
        // Get the current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const timeRemaining = countdownDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the HTML elements with the calculated values
        dayValue.forEach(box => {
            box.textContent = formatTime(days);
        })
        hrsValue.forEach(box => {
            box.textContent = formatTime(hours);
        })
        minValue.forEach(box => {
            box.textContent = formatTime(minutes)
        })
        secValue.forEach(box => {
            box.textContent = formatTime(seconds);
        })


        // If the countdown is over, display a message or perform any action
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            // You can add a message or perform an action when the countdown is over
            console
        }
    }, 1000);

    // Function to format time values with leading zeros
    function formatTime(value) {
        return value < 10 ? "0" + value : value;
    }



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
    });

    //MAIN MENU "BLOG" MEGA MENU SLIDER
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
    });

})