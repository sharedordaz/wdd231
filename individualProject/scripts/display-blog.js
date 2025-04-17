export async function loadEvents(containerId) {
    const container = document.getElementById(containerId);
    //console.log(container);
  
    try {
      const res = await fetch("scripts/blog.json");
      const events = await res.json();
      //console.log(events);
  
      // Save to localStorage
      localStorage.setItem("studyGroupEvents", JSON.stringify(events));
  
      // Create cards dynamically
      events.forEach((event, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <h3>${event.title}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Speaker:</strong> ${event.speaker}</p>
          <p>${event.description}</p>
          <button data-index="${index}" class="more-btn">More Info</button>
        `;
        container.appendChild(card);
      });
  

    } catch (err) {
      console.error("Failed to fetch events:", err);
      container.innerHTML = "<p>Failed to load events. Please try again later.</p>";
    }
  }
  
  
  