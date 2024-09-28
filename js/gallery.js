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


//custmize lightbox


lightbox.option({
    
    'disableScrolling': true
  })

//***FOR ADDING VIDEO GALLERY SECTION */
;
// Array containing your local video files and their details
let arrVideos = [
    { data: 'video-01.mp4', name: 'Bringing Hope to the Homeless' },
    { data: 'video-02.mp4', name: 'Supporting Children’s Dreams' },
    { data: 'video-03.mp4', name: 'Disaster Relief: Rebuilding Lives' },
    { data: 'video-04.mp4', name: 'Access to Clean Water for All' },
    { data: 'video-05.mp4', name: 'Education for Every Child' },
    { data: 'video-06.mp4', name: 'Warm Clothes for Cold Nights' },
    { data: 'video-07.mp4', name: 'Building Homes, Building Futures' },
    { data: 'video-08.mp4', name: 'Protecting Our Planet, One Step at a Time' }
  ];
  
  // Current video element
  let currentVideo = document.getElementById('current-video');
  currentVideo.src = `img/gallery_videos/${arrVideos[0].data}`;
  let currentVideoTitle = document.querySelector(".video_title");
  currentVideoTitle.textContent = arrVideos[0].name; // Set initial title
  
  // Add gallery items dynamically
  let gallery = document.querySelector('.gallery');
  gallery.innerHTML = ``;
  
  for (let i = 0; i < arrVideos.length; i++) {
    gallery.innerHTML += `
      <div class="gallery__item" data="${arrVideos[i].data}" title="${arrVideos[i].name}">
        <video class="gallery__item__video" src="img/gallery_videos/${arrVideos[i].data}" width="120" height="80" muted></video>
      </div>`;
  }
  
  // Add event listeners to play the clicked video and show title
  gallery.addEventListener('click', (e) => {
    let selectedVideo;
    let selectedTitle;
  
    // When click on .gallery__item element
    if (e.target.classList.contains('gallery__item')) {
      selectedVideo = e.target.getAttribute('data');
      selectedTitle = e.target.getAttribute('title');
    }
  
    // When click on .gallery__item__video element
    if (e.target.classList.contains('gallery__item__video')) {
      selectedVideo = e.target.getAttribute('src');
      selectedTitle = e.target.parentElement.getAttribute('title');
    }
  
    // When click on .gallery__item__span element
    if (e.target.classList.contains('gallery__item__span')) {
      for (let i = 0; i < arrVideos.length; i++) {
        if (arrVideos[i].name === e.target.innerText) {
          selectedVideo = `img/gallery_videos/${arrVideos[i].data}`;
          selectedTitle = arrVideos[i].name;
          break;
        }
      }
    }
  
    // Update current video and title if selected
    if (selectedVideo) {
      currentVideo.src = selectedVideo;
      currentVideo.play();
      currentVideoTitle.textContent = selectedTitle; // Update title
    }
  });
  
// // Array containing your local video files and their details
// let arrVideos = [
//     { data: 'video-01.mp4', name: 'Bringing Hope to the Homeless' },
//     { data: 'video-02.mp4', name: 'Bringing Hope to the Homeless' },
//     { data: 'video-03.mp4', name: 'Video 3' },
//     { data: 'video-04.mp4', name: 'Video 3' },
//     { data: 'video-05.mp4', name: 'Video 3' },
//     { data: 'video-06.mp4', name: 'Video 3' },
//     { data: 'video-07.mp4', name: 'Video 3' },
//     { data: 'video-08.mp4', name: 'Video 3' }
//   ];
  
//   // Current video element
//   let currentVideo = document.getElementById('current-video')
//   currentVideo.src = `img/gallery_videos/${arrVideos[0].data}`
//   let currentVideoTitle = document.querySelector(".video_title")
//   // Add gallery items dynamically
//   let gallery = document.querySelector('.gallery')
//   gallery.innerHTML = ``
  
//   for (let i = 0; i < arrVideos.length; i++) {
//     gallery.innerHTML += `
//       <div class="gallery__item" data="${arrVideos[i].data}">
//         <video class="gallery__item__video" src="img/gallery_videos/${arrVideos[i].data}" width="120" height="80" muted></video>
//         <span class="gallery__item__span">${arrVideos[i].name}</span>
//       </div>`
//       currentVideoTitle.setAttribute('name',`${arrVideos[i].name}`)
//   }
  
//   // Add event listeners to play the clicked video
//   gallery.addEventListener('click', (e) => {
//     // When click on .gallery__item element
//     if (e.target.classList.contains('gallery__item')) {
//       currentVideo.src = `img/gallery_videos/${e.target.getAttribute('data')}`
//       currentVideo.play()
//       currentVideoTitle.textContent = e.target.getAttribute('name');
//     }
//     // When click on .gallery__item__video element
//     if (e.target.classList.contains('gallery__item__video')) {
//       let data = e.target.getAttribute('src')
//       currentVideo.src = data
//       currentVideo.play()
//     }
//     // When click on .gallery__item__span element
//     if (e.target.classList.contains('gallery__item__span')) {
//       for (let i = 0; i < arrVideos.length; i++) {
//         if (arrVideos[i].name === e.target.innerText) {
//           currentVideo.src = `img/gallery_videos/${arrVideos[i].data}`
//           currentVideo.play()
//         }
//       }
//     }
//   })
  


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