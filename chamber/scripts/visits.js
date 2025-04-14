document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('visit-message');
  
    const LAST_VISIT_KEY = 'lastVisit';
    const now = Date.now();
  
    const lastVisit = localStorage.getItem(LAST_VISIT_KEY);
  
    if (!lastVisit) {
      // Primera visita
      messageContainer.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
      const lastVisitTime = parseInt(lastVisit, 10);
      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const diffInMs = now - lastVisitTime;
      const diffInDays = Math.floor(diffInMs / millisecondsInDay);
  
      if (diffInDays < 1) {
        messageContainer.textContent = 'Back so soon! Awesome!';
      } else if (diffInDays === 1) {
        messageContainer.textContent = 'You last visited 1 day ago.';
      } else {
        messageContainer.textContent = `You last visited ${diffInDays} days ago.`;
      }
    }
  
    // Guarda la visita actual
    localStorage.setItem(LAST_VISIT_KEY, now.toString());
  });