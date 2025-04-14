async function loadDiscoverCards() {
  try {
    const response = await fetch('scripts/discover.json');
    const data = await response.json();

    const container = document.querySelector('.discover-grid');
    container.innerHTML = ''; // Clear existing content

    data.items.forEach(item => {
      const card = document.createElement('section');
      card.classList.add('discover-card');

      const title = document.createElement('h2');
      title.textContent = item.title;

      const figure = document.createElement('figure');
      const img = document.createElement('img');
      img.src = `images/discover/${item.image}`;
      img.alt = item.title;
      figure.appendChild(img);

      const address = document.createElement('address');
      address.textContent = item.address;

      const description = document.createElement('p');
      description.textContent = item.description;

      const button = document.createElement('button');
      button.textContent = 'Learn More';

      card.appendChild(title);
      card.appendChild(figure);
      card.appendChild(address);
      card.appendChild(description);
      card.appendChild(button);

      container.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading discover cards:', error);
  }
}

document.addEventListener('DOMContentLoaded', loadDiscoverCards);
