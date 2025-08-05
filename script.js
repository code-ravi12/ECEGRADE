const subjectsData = {
  "1-1": [
    { name: "Differential Equations", credits: 4 },
    { name: "Engineering Physics", credits: 4 },
    { name: "Engineering Physics Lab", credits: 1.5 },
    { name: "Graphics & Design", credits: 2.5 },
    { name: "Electrical Technology", credits: 4 },
    { name: "Electrical Technology Lab", credits: 1.5 },
    { name: "ILTA", credits: 1 },
    { name: "Programming & Data Structures", credits: 3 },
    { name: "Programming & Data Structures Lab", credits: 1.5 }
  ],
  "1-2": [
    { name: "Mathematical Methods", credits: 4 },
    { name: "OOPS", credits: 2 },
    { name: "OOPS Lab", credits: 1.5 },
    { name: "Computational Lab", credits: 1.5 },
    { name: "English Communication Lab", credits: 2.5 },
    { name: "Electronics Devices & Circuits", credits: 4 },
    { name: "Electronics Devices & Circuits Lab", credits: 1.5 },
    { name: "Network Theory", credits: 4 },
    { name: "Signals & Systems", credits: 4 }
  ],
  "2-1": [
    { name: "Probability & Random Variables", credits: 3 },
    { name: "Control Systems", credits: 3 },
    { name: "Digital Logic Design", credits: 4 },
    { name: "Digital Logic Design Lab", credits: 1.5 },
    { name: "Digital Signal Processing", credits: 4 },
    { name: "Digital Signal Processing Lab", credits: 1.5 },
    { name: "Analog Electronics Circuits", credits: 4 },
    { name: "Analog Electronics Circuits Lab", credits: 1.5 },
    { name: "IOT Lab", credits: 1.5 },
  ],
  "2-2": [
    { name: "EM Waves & Guided Media", credits: 4 },
    { name: "Communication Systems-1", credits: 4 },
    { name: "Communication Systems-1 Lab", credits: 1.5 },
    { name: "Digital System Design", credits: 3 },
    { name: "Digital System Design Lab", credits: 1.5 },
    { name: "Linear Integrated Circuits", credits: 4 },
    { name: "Linear Integrated Circuits Lab", credits: 1.5 },
    { name: "Robotics Lab ", credits: 2.5 },
    { name:"Artificial Intelligence", credits: 1},
  ],
    "3-1": [
        { name: "Computer Networks", credits: 3 },
        { name: "Computer Organization", credits: 3 },
        { name: "English Communication Lab-2", credits: 1.5 },
        { name: "Communication Systems-2", credits: 4 },
        { name: "Communication Systems-2 Lab", credits: 1.5 },
        { name: "Microprocessors Lab", credits: 1.5 },
        { name: "Radio Frequency & Microwave Engineering Lab", credits: 1.5 },
        { name: "Mini Project-1", credits: 1 },
        { name: "Product Design & Innovation Lab", credits: 1 },
        { name: "RF&Microwave Engineering", credits: 2 }
    ],
    "3-2": [
        { name: "English Communication Lab-3", credits: 1.5 },
        { name: "Elective-1", credits: 3 },
        { name: "Elective-2", credits: 3 },
        { name: "Open Elective-1", credits: 3 },
        { name: "Open Elective-2", credits: 3 },
        { name: "Mini Project-2", credits: 1.5 }
    
    ],
    "4-1": [
        { name: "Elective-3", credits: 3 },
        { name: "Elective-4", credits: 3 },
        { name: "Open Elective-3", credits: 4 },
        { name: "Summer Internship", credits: 3 },
        { name: "Project-1", credits: 4 }
    ],
    "4-2": [
        { name: "Community Service", credits: 2 },
        { name: "Elective-5", credits: 3 },
        { name: "Open Elective-4", credits: 4 },
        { name: "Project-2&Dessertion", credits: 6 }
    ]
};

const gradePoints = { EX: 10, A: 9, B: 8, C: 7, D: 6, E: 5, F: 0 };

function loadSubjects() {
  const year = document.getElementById("year").value;
  const sem = document.getElementById("semester").value;
  const key = `${year}-${sem}`;
  const subjects = subjectsData[key];
  if (!subjects) {
    document.getElementById("subjects-table-section").innerHTML = "<p style='color:red;'>Please select year and semester.</p>";
    return;
  }

  let table = `<table><thead><tr>
    <th>Subject</th>
    <th>Credits</th>
    <th>Grade</th>
  </tr></thead><tbody>`;

  subjects.forEach((sub, i) => {
    table += `
      <tr>
        <td class="subject-name">${sub.name}</td>
        <td>${sub.credits}</td>
        <td>
          <select id="grade-${i}" class="grade-select" aria-label="Select grade for ${sub.name}">
            <option value="">--Select--</option>
            <option value="EX" selected>EX</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </td>
      </tr>
    `;
  });

  table += "</tbody></table>";
  document.getElementById("subjects-table-section").innerHTML = table;

  // Animate table rows
  document.querySelectorAll("#subjects-table-section tr").forEach((row, idx) => {
    row.style.opacity = 0;
    setTimeout(() => {
      row.style.transition = "opacity 0.5s";
      row.style.opacity = 1;
    }, 100 + idx * 80);
  });
}

function launchConfetti() {
  const colors = ["#800000", "#FFD700", "#4CAF50", "#2196F3", "#FF4081", "#FF9800"];
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = "";
  const confettiCount = 40;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = (1.2 + Math.random() * 0.8) + "s";
    confetti.style.opacity = 0.7 + Math.random() * 0.3;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiContainer.appendChild(confetti);
  }

  // Remove confetti after animation
  setTimeout(() => { confettiContainer.innerHTML = ""; }, 2000);
}

function calculateSGPA() {
  launchConfetti(); // celebration animation

  const year = document.getElementById("year").value;
  const sem = document.getElementById("semester").value;
  const key = `${year}-${sem}`;
  const subjects = subjectsData[key];

  let totalCredits = 0;
  let totalPoints = 0;
  let valid = true;

  subjects.forEach((sub, i) => {
    const grade = document.getElementById(`grade-${i}`).value;
    if (!grade) {
      alert(`Please select grade for ${sub.name}`);
      valid = false;
    }
    const point = gradePoints[grade];
    totalCredits += sub.credits;
    totalPoints += point * sub.credits;
  });

  if (!valid) return;

  const sgpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById("results").innerHTML = `<h2>SGPA: ${sgpa}</h2>`;

  // Show and animate the congratulations message
  const congrats = document.getElementById("congrats-animation");
  congrats.classList.remove("hidden", "fade-out");
  congrats.querySelector("p").classList.add("big-congrats");

  setTimeout(() => {
    congrats.classList.add("fade-out");
  }, 1800);

  setTimeout(() => {
    congrats.classList.add("hidden");
    congrats.classList.remove("fade-out");
    congrats.querySelector("p").classList.remove("big-congrats");
  }, 3000);
}

// Generate SGPA input fields for all semesters
function generateCGPAInputs() {
  const cgpaInputsDiv = document.getElementById("cgpa-inputs");
  let html = `<table style="width:100%;max-width:500px;margin:auto;"><tr><th>Year</th><th>Semester</th><th>SGPA</th></tr>`;
  const sems = [
    { year: 1, sem: 1 }, { year: 1, sem: 2 },
    { year: 2, sem: 1 }, { year: 2, sem: 2 },
    { year: 3, sem: 1 }, { year: 3, sem: 2 },
    { year: 4, sem: 1 }, { year: 4, sem: 2 }
  ];
  sems.forEach((s) => {
    html += `
      <tr>
        <td>${s.year}</td>
        <td>${s.sem}</td>
        <td><input type="number" step="0.01" min="0" max="10" id="sgpa-${s.year}-${s.sem}" style="width:70px;"></td>
      </tr>
    `;
  });
  html += `</table>`;
  cgpaInputsDiv.innerHTML = html;
}

// Call this on page load
window.onload = function() {
  generateCGPAInputs();
};

// Update downloadPDF to include SGPA table
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // College Heading
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES", 105, 20, { align: "center" });
  doc.setFontSize(14);
  doc.text("ONGOLE CAMPUS", 105, 28, { align: "center" });

  // Year & Semester
  const year = document.getElementById("year").value;
  const sem = document.getElementById("semester").value;
  doc.setFontSize(11);
  doc.text(`Year: ${year || "N/A"}   Semester: ${sem || "N/A"}`, 14, 48);

  // Table Data
  const key = `${year}-${sem}`;
  const subjects = subjectsData && subjectsData[key] ? subjectsData[key] : [];
  const tableRows = [];
  subjects.forEach((sub, i) => {
    const grade = document.getElementById(`grade-${i}`)?.value || "N/A";
    tableRows.push([sub.name, sub.credits, grade]);
  });

  // Table
  doc.autoTable({
    head: [["Subject", "Credits", "Grade"]],
    body: tableRows,
    startY: 54,
    margin: { left: 14, right: 14 },
    styles: { fontSize: 10, cellPadding: 2 },
    headStyles: { fillColor: [128, 0, 0], halign: "center" },
    bodyStyles: { halign: "center" },
    columnStyles: {
      0: { halign: "left", cellWidth: 80 },
      1: { cellWidth: 30 },
      2: { cellWidth: 30 }
    }
  });

  // SGPA Result
  const resultText = document.getElementById("results").textContent;
  const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 12 : 80;
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.text(resultText, 14, finalY);

  // Footer
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text("© 2025 Rajiv Gandhi University of Knowledge Technologies - Ongole", 105, 290, { align: "center" });

  doc.save(`RGUKT_ECE_Y${year}_S${sem}_SGPA_Report.pdf`);
}

// Dark mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
