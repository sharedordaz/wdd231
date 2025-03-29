const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModifiedDate = new Date(document.lastModified);

// Format the last modified date as a string
const formattedLastModifiedDate = `${lastModifiedDate.getMonth() + 1}-${lastModifiedDate.getDate()}-${lastModifiedDate.getFullYear()}`;

// Output the results
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = `Last modified: ${formattedLastModifiedDate}`;