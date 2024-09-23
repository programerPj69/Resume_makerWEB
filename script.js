document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const experience = document.getElementById('experience').value;
    const company = document.getElementById('company').value;
    const description = document.getElementById('description').value;

    // Generate resume template
    const resumeHtml = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>

        <h2>Education</h2>
        <p>${education}, ${institution} (${year})</p>

        <h2>Experience</h2>
        <p>${experience} at ${company}</p>
        <p>${description}</p>
    `;

    // Show the resume preview
    document.getElementById('resumePreview').innerHTML = resumeHtml;
});

// Handle download as PDF
document.getElementById('downloadBtn').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Collect the resume data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const institution = document.getElementById('institution').value;
    const year = document.getElementById('year').value;
    const experience = document.getElementById('experience').value;
    const company = document.getElementById('company').value;
    const description = document.getElementById('description').value;

    // Generate the PDF content
    doc.setFontSize(18);
    doc.text(name, 10, 10);

    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 10, 20);
    doc.text(`Phone: ${phone}`, 10, 30);

    doc.setFontSize(16);
    doc.text('Education', 10, 50);
    doc.setFontSize(12);
    doc.text(`${education}, ${institution} (${year})`, 10, 60);

    doc.setFontSize(16);
    doc.text('Experience', 10, 80);
    doc.setFontSize(12);
    doc.text(`${experience} at ${company}`, 10, 90);
    doc.text(description, 10, 100);

    // Save the PDF
    doc.save(`${name}_Resume.pdf`);
});
