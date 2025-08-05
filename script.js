const hamburgerBtn = document.getElementById("hamburgerBtn");
const sideBar = document.getElementById("sidebar");
const previewBtn = document.getElementById("previewBtn");

const sideNav = document.getElementById("sideNav");
const dashTab = document.getElementById("dash-tab");
const menuNav = document.getElementById("menuNav");

sideNav.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    sideBar.querySelector(".current-tab").classList.remove("current-tab");
    e.target.classList.add("current-tab");
    sideBar.classList.remove("show");
  }
});

menuNav.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    sideNav.querySelector(".current-tab").classList.remove("current-tab");
    dashTab.classList.add("current-tab");

    menuNav.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    sideBar.classList.remove("show");
  }
});

hamburgerBtn.addEventListener("click", () => {
  if (sideBar.classList.contains("show")) {
    sideBar.classList.remove("show");
  } else {
    sideBar.classList.add("show");
  }
});

previewBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("⏳ CSV preview coming soon.");
});    

// document.getElementById('csvFile').addEventListener('change', function(event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function(e) {
//                 const csvText = e.target.result;
//                 displayCsvInTable(csvText);
//             };
//             reader.readAsText(file);
//         }
//     });

//     function displayCsvInTable(csvText) {
//         const rows = csvText.split('\n').filter(row => row.trim() !== ''); // Split by line, remove empty lines
//         if (rows.length === 0) return;

//         const table = document.createElement('table');
//         table.border = '1'; // Add border for basic styling

//         // Create header row
//         const headerRow = table.insertRow();
//         const headers = rows[0].split(',');
//         headers.forEach(headerText => {
//             const th = document.createElement('th');
//             th.textContent = headerText.trim();
//             headerRow.appendChild(th);
//         });

//         // Create data rows
//         for (let i = 1; i < rows.length; i++) {
//             const dataRow = table.insertRow();
//             const cells = rows[i].split(',');
//             cells.forEach(cellText => {
//                 const td = document.createElement('td');
//                 td.textContent = cellText.trim();
//                 dataRow.appendChild(td);
//             });
//         }

//         const container = document.getElementById('csvTableContainer');
//         container.innerHTML = ''; // Clear previous content
//         container.appendChild(table);
//     }


