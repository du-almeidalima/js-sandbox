// document.addEventListener("click", (e) => {
//   const isDropdownBtn = e.target.matches("[data-dropdown-button]");
//   console.log(e.target);

//   if (!isDropdownBtn && e.target.closest("[data-dropdown]") != null) {
//     console.log("hey!");
//     return;
//   }

//   let currentDropdown

//   if (isDropdownBtn) {
//     currentDropdown = e.target.closest('[data-dropdown]');
//     currentDropdown.classList.toggle('dropdown--active')
//   }

//   document.querySelectorAll("[data-dropdown].dropdown--active").forEach((dropdown) => {
//     dropdown !== currentDropdown && dropdown.classList.remove('dropdown--active')
//   });
// });
