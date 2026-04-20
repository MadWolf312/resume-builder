function generateResume() {
  document.getElementById("r-name").innerText =
    document.getElementById("name").value;

  document.getElementById("r-email").innerText =
    document.getElementById("email").value;

  document.getElementById("r-skills").innerText =
    document.getElementById("skills").value;

  document.getElementById("r-exp").innerText =
    document.getElementById("experience").value;

  // 📸 Фото
  const file = document.getElementById("photo").files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById("r-photo").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function downloadPDF() {
  const element = document.getElementById("resume");

  html2pdf().from(element).save("resume.pdf");
}