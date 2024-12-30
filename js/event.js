
/**loading animation script**/
window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Hide the preloader
    document.body.style.overflow = "revert-layer"
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

  window.addEventListener("scroll", () => {
    let currentScrollTop = window.scrollY;
  
    if (currentScrollTop < lastScrollTop && currentScrollTop > 0) {
      header.classList.add(toggleClass);
      top_header.style.display = "none";
      news_section.style.display = "none";
      header_info_section.style.display = "none";
    } else {
      header.classList.remove(toggleClass);
      top_header.style.display = "block";
      news_section.style.display = "block";
      handleResize();
    }
    lastScrollTop = currentScrollTop;
  });
  
  const handleResize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      header_info_section.style.display = "none";
    } else {
      header_info_section.style.display = "block";
    }
  };
  
  window.addEventListener("resize", handleResize);
  handleResize(); // Initial call to handle resize
  


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

  //**======================TOP HEADER currency DROPDOWN ================== */

  const currency_area = document.querySelector(".currency_dropdown");
  const dropdown_c_elements = currency_area.querySelectorAll(".option_dropdown a");
  const selected_c_item = currency_area.querySelector(".selected_item");

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


  //**=====================MOBILE MENU currency HANDLER====================== */

  const currency_items = document.querySelectorAll(".menu_currency li a");
  const currency_array = Array.from(currency_items);

  currency_array.forEach(item => {
      item.addEventListener("click", () => {
          item.classList.add("active");
          currency_array.forEach(otherItem => {
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
      if (!mobile_menu_area_wrapper.contains(event.target) && !mobile_menu_open_btn.contains(event.target) &&
        !donate_popup.contains(event.target) &&
        !volunteer_popup.contains(event.target)) {
        closeMenu();
      }
    }
  });

  //***SCRIPT OF DONATE POPUP */
  const volunteer_popup = document.querySelector(".volunteer_popup")
  const volunteer_wrapper = document.querySelector(".volunteer_wrapper")
  const volunteer_popup_close = document.querySelector(".volunteer_close")
  const volunteer_popup_open = document.querySelectorAll(".volunteer_btn ")

  volunteer_popup_open.forEach(volunteer_btn => {
    volunteer_btn.addEventListener("click", () => {

      volunteer_popup.style.animation = "fade_in 1s ease-in forwards"
      volunteer_wrapper.style.animation = "slide_right 1s ease-in forwards"

    })
  })
  volunteer_popup_close.addEventListener("click", () => {

      volunteer_popup.style.animation = "fade_out 1s ease-in forwards"
      volunteer_wrapper.style.animation = "slide_left 1s ease-in forwards"

  })


  //***SCRIPT OF DONATE POPUP */
  const donate_popup = document.querySelector(".donation_popup")
  const donate_wrapper = document.querySelector(".donation_wrapper")
  const donate_popup_close = document.querySelector(".d_popup_close")
  const donate_popup_open = document.querySelectorAll(".donate_btn")

  donate_popup_open.forEach(donate_btn => {
    donate_btn.addEventListener("click", () => {

      donate_popup.style.animation = "fade_in 1s ease-in forwards"
      donate_wrapper.style.animation = "slide_right 1s ease-in forwards"

    })
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



// upcomming button popup
const upcomingBtn = document.getElementById('upcoming-btn');
const calendarPopup = document.getElementById('calendar-popup');

upcomingBtn.addEventListener('click', function() {
  if (calendarPopup.style.display === 'none' || calendarPopup.style.display === '') {
    calendarPopup.style.display = 'block';
  } else {
    calendarPopup.style.display = 'none';
  }
});

window.addEventListener('click', function(event) {
  if (!calendarPopup.contains(event.target) && !upcomingBtn.contains(event.target)) {
    calendarPopup.style.display = 'none';
  }
});



//filter option script
// Function to handle click event on list items
document.querySelectorAll('.event_filter ul').forEach(function(ul) {
    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI' && !e.target.hasAttribute('disabled')) {
            const filterValue = e.target.closest('.event_filter').querySelector('.filter_value');
            filterValue.textContent = e.target.textContent;

            // Remove 'selected' class from previous items
            ul.querySelectorAll('li').forEach(function(li) {
                li.classList.remove('selected');
            });

            // Add 'selected' class to the clicked item
            e.target.classList.add('selected');
        }
    });
});





  //**========================BOTTOM TO TOP BUTTON HANDLER ===========================*/

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#F74F22 ${scrollValue}%, #ededed ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

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