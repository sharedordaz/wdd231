import { courses } from "./array.js";


function createCourseCard(course) {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    if (course.completed) {
        courseCard.classList.add('completed'); // Styling for completed courses
    }

    courseCard.innerHTML = `
        <h3>${course.title} (${course.subject} ${course.number})</h3>
    `;

    return courseCard;
}

// Function to update the courses display dynamically
function updateCourseDisplay(courseList) {
    const courseContainer = document.getElementById("courseContainer");
    courseContainer.innerHTML = '';  // Clear the current list

    let totalCredits = 0;

    courseList.forEach(course => {
        const courseCard = createCourseCard(course);
        courseContainer.appendChild(courseCard);
        totalCredits += course.completed ? course.credits : 0;
    });

    const totalCreditsDisplay = document.getElementById("total-credits");
    totalCreditsDisplay.textContent = `Total Credits: ${totalCredits}`;
}

// Function to filter and display courses based on subject
function filterCourses(subject) {
    //console.log(courses[1])
    let filteredCourses = courses;
    if (subject !== 'All') {
        filteredCourses = courses.filter(course => course.subject === subject);
    }

    let counter = filteredCourses.length;
    document.getElementById("numCourses").textContent = counter;
    updateCourseDisplay(filteredCourses);
}

// Event listeners for filter buttons inside #course-card container
document.getElementById("all-courses-btn").addEventListener('click', () => filterCourses('All'));
document.getElementById("wdd-courses-btn").addEventListener('click', () => filterCourses('WDD'));
document.getElementById("cse-courses-btn").addEventListener('click', () => filterCourses('CSE'));

// Initialize display with all courses
updateCourseDisplay(courses);