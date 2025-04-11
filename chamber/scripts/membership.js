document.addEventListener("DOMContentLoaded", () => {
    // Set current timestamp
    document.getElementById("timestamp").value = new Date().toISOString();
  
    // Animate cards on load
    document.querySelectorAll(".membership-card").forEach((card, i) => {
      card.style.animation = `fadeIn 0.5s ease ${i * 0.3}s forwards`;
    });
  
    // Modal behavior
    document.querySelectorAll("a[href^='#modal']").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const modal = document.querySelector(link.getAttribute("href"));
        modal.classList.add("show");
      });
    });
  
    document.querySelectorAll(".modal a").forEach(close => {
      close.addEventListener("click", (e) => {
        e.preventDefault();
        close.closest(".modal").classList.remove("show");
      });
    });
  });