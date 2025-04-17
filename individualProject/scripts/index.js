import { loadEvents } from "./display-blog.js";

document.addEventListener("DOMContentLoaded", () => {
  loadEvents("blogContainer");

  // Modal close
  document.getElementById("modalClose").addEventListener("click", () => {
    document.getElementById("eventModal").style.display = "none";
  });
});