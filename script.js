function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

 // Certificate Modal Functionality
  document.addEventListener('DOMContentLoaded', function() {
    // Get all certificate images
    const certificates = document.querySelectorAll('.certificate-img');
    const modal = document.getElementById('certificate-modal');
    const closeBtn = document.querySelector('.close');
    const pdfViewer = document.getElementById('pdf-viewer');
    
    // Open modal when certificate is clicked
    certificates.forEach(cert => {
      cert.addEventListener('click', function() {
        const pdfUrl = this.getAttribute('data-pdf');
        pdfViewer.src = pdfUrl;
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent background scrolling
      });
    });
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
      pdfViewer.src = ""; // Clear the iframe
      document.body.style.overflow = "auto"; // Re-enable scrolling
    });
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
        pdfViewer.src = ""; // Clear the iframe
        document.body.style.overflow = "auto"; // Re-enable scrolling
      }
    });
  });