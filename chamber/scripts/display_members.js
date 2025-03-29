document.addEventListener('DOMContentLoaded', async () => {
    const membersContainer = document.querySelector('.business_container');
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    
    // Fetch member data
    let members = [];
    
    try {
        const response = await fetch('scripts/members.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        members = await response.json();
        displayMembers(members, 'grid');
    } catch (error) {
        console.error('Error loading member data:', error);
        membersContainer.innerHTML = '<p>Error loading member data. Please try again later.</p>';
    }
    
    // View toggle functionality
    gridViewBtn.addEventListener('click', () => {
        membersContainer.className = 'grid-view';
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
        updateCardClasses('grid');
    });
    
    listViewBtn.addEventListener('click', () => {
        membersContainer.className = 'list-view';
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
        updateCardClasses('list');
    });
    
    // Display members function
    function displayMembers(members, viewType) {
        membersContainer.innerHTML = '';
        
        members.forEach(member => {
            const card = document.createElement('div');
            card.className = `business_container ${viewType}-view`;
            
            // Determine membership level text
            let membershipText = '';
            switch(member.membershipLevel) {
                case 1:
                    membershipText = 'Member';
                    break;
                case 2:
                    membershipText = 'Silver Member';
                    break;
                case 3:
                    membershipText = 'Gold Member';
                    break;
                default:
                    membershipText = 'Member';
            }
            
            // Create card content
            card.innerHTML = `
                ${member.image ? `<img src="images/${member.image}" alt="${member.name} logo">` : ''}
                <h2>${member.name} <span class="membership-badge membership-${member.membershipLevel}">${membershipText}</span></h2>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                ${member.website ? `<p><strong>Website:</strong> <a href="${member.website}" class="website" target="_blank">Visit Site</a></p>` : ''}
                ${member.description ? `<p class="description">${member.description}</p>` : ''}
            `;
            
            membersContainer.appendChild(card);
        });
    }
    
    // Update card classes when view changes
    function updateCardClasses(viewType) {
        const cards = document.querySelectorAll('.business_container');
        cards.forEach(card => {
            card.className = `business_container ${viewType}-view`;
        });
    }
});