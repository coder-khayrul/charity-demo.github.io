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

    } else {
      // If selected value is not "Weekly", hide the donation_toggle_area
      donation_toggle_area.style.display = "none";

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

  //***================SCRIPT FOR HERO SECTION DONATION POPUP======================*** */

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

  //****=================================SLIDER THREE TITLE================== ***//
  let hs_title = document.querySelector(".slider3 h2");

  const markup_handler = () => {
    const updateTitle = () => {
      if (window.matchMedia("(min-width: 991px)").matches) {
        hs_title.innerHTML = `Discover the <span>Power of Giving, <br> Join Us</span> in Changing Lives`;
      } else {
        hs_title.innerHTML = `Discover the <span>Power of Giving, Join Us</span> in Changing Lives`;
      }
    };

    // Initial update
    updateTitle();

    // Event listener for window resize
    window.addEventListener("resize", updateTitle);
  };

  markup_handler(); // Call the function to initialize

  //***********Script For Upcomming Event Countdown Timer */

  // Add event listeners for hover effects
  document.querySelectorAll('.upcoming_event').forEach(eventBox => {
    eventBox.addEventListener('mouseover', () => {
      // Add yellow-background class to the specific items
      eventBox.querySelectorAll('.event_info_item').forEach(item => {
        if (item.closest('li').style.backgroundColor === 'rgb(255, 193, 7)') { // Yellow in RGB
          item.classList.add('yellow-background');
        }
      });
    });

    eventBox.addEventListener('mouseout', () => {
      // Remove yellow-background class when not hovered
      eventBox.querySelectorAll('.event_info_item').forEach(item => {
        item.classList.remove('yellow-background');
      });
    });
  });




  //***Script for gallery Image lightbox */
  const lightbox_popup = document.querySelector(".gallery_lightbox");
  const lightbox_inner = document.querySelector(".lightbox_wrapper");
  const lightbox_close_button = document.querySelector(".lightbox_close")
  const galleryImage = document.querySelectorAll(".gallery_image img");
  const lightbox_selected_image = document.querySelector(".lightbox_image img")
  const gallery_image_download = document.querySelector(".img_download_btn");
  const lightbox_image_headline = document.querySelector(".image_headline")
  //headline for gallery image 
  const image_headlines = [
    "Supporting Children’s Dreams",
    "Education for Every Child",
    "Medical Aid for Those in Need",
    "Bringing Hope to the Homeless",
    "Disaster Relief: Rebuilding Lives",
    "Bringing Joy to Orphaned Children",
    "Access to Clean Water for All",
    "Empowering Youth Through Skills Training"

  ]

  lightbox_close_button.addEventListener("click", () => {
    lightbox_popup.style.animation = "fade_out 1s ease-in forwards"
    lightbox_inner.style.animation = "slide_left 1s ease-in forwards"

  })

  galleryImage.forEach((image, index) => {
    image.addEventListener("click", () => {
      lightbox_popup.style.animation = "fade_in 1s ease-in forwards";
      lightbox_inner.style.animation = "slide_right 1s ease-in forwards";
      lightbox_selected_image.src = image.src;
      gallery_image_download.href = image.src
      lightbox_image_headline.textContent = image_headlines[index]

    })
  })




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


  //HERO SECTION SCRIPT 
  var swiper_hero_slider = new Swiper(".hero_slider", {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-prev_hero_slider",
      prevEl: "swiper-button-next_hero_slider",
    },
  });

  //============================OUR CAUSE SECTION PRODUCT SLIDERS================
  var cause_slider1 = new Swiper(".cause_slider1", {

    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-nextCS1",
      prevEl: ".swiper-button-prevCS1",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var cause_slider2 = new Swiper(".cause_slider2", {

    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-nextCS2",
      prevEl: ".swiper-button-prevCS2",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var cause_slider3 = new Swiper(".cause_slider3", {

    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-nextCS3",
      prevEl: ".swiper-button-prevCS3",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var cause_slider4 = new Swiper(".cause_slider4", {

    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-nextCS4",
      prevEl: ".swiper-button-prevCS4",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
  var cause_slider5 = new Swiper(".cause_slider5", {

    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-nextCS5",
      prevEl: ".swiper-button-prevCS5",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });



  //DONNER SECTION SLIDER

  var DonnerSlider = new Swiper(".donner_slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next_ds",
      prevEl: ".swiper-button-prev_ds",
    },
    breakpoints: {
      450: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 7,
        spaceBetween: 15,
      },
    },
  });


  //Testimonial Slider SECTION SLIDER

  var testimonialSlider = new Swiper(".testimonial_slider", {

    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next_ts",
      prevEl: ".swiper-button-prev_ts",
    },
    pagination: {
      el: ".swiper-pagination_ts",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
    },
  });

})