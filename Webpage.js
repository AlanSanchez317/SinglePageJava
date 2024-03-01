document.body.style.margin = "0";
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.documentElement.style.scrollBehavior = 'smooth'; // Enables smooth scrolling to sections

let navbar = document.createElement('nav');
navbar.style.backgroundColor = '#FFC0CB';
navbar.style.overflow = 'hidden';
navbar.style.display = 'flex';
navbar.style.justifyContent = 'center';
navbar.style.alignItems = 'center';
navbar.style.padding = '50px 0';
navbar.style.boxShadow = '0 2px 4px rgba(0,0,0,.1)';
navbar.style.fontSize = '24px';

function createNavLink(text, href = "#") {
  let link = document.createElement('a');
  link.textContent = text;
  link.href = href;
  link.style.color = text === "Celeste" ? '#FF6347' : '#555';
  link.style.margin = '0 25px';
  link.style.textDecoration = 'none';
  link.style.fontWeight = 'bold';
  link.style.transition = 'color 0.3s'; // Smooth transition for hover effects
  link.onmouseover = () => link.style.color = '#000';
  link.onmouseout = () => link.style.color = text === "Celeste" ? '#FF6347' : '#555';
  return link;
}

navbar.appendChild(createNavLink("About", "#about"));
navbar.appendChild(createNavLink("Celeste"));
navbar.appendChild(createNavLink("Images", "#characters"));
document.body.appendChild(navbar);

let aboutSection = document.createElement('div');
aboutSection.id = 'about'; // ID for smooth scroll targeting
aboutSection.style.backgroundColor = '#f0f0f0';
aboutSection.style.padding = '20px';
aboutSection.style.margin = '40px auto';
aboutSection.style.width = '80%';
aboutSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
aboutSection.style.borderRadius = '8px';

let aboutHeading = document.createElement('h2');
aboutHeading.textContent = "About the Game";
aboutHeading.style.marginBottom = '20px';
aboutHeading.style.textAlign = 'center';
aboutHeading.style.fontSize = '36px';
aboutHeading.style.color = '#4a0000';

let aboutText = document.createElement('p');
aboutText.textContent = "Celeste is an indie platformer video game that combines challenging gameplay with a deeply emotional narrative. Developed by Maddy Makes Games, the game was released in 2018 and centers around a young woman named Madeline as she attempts to climb the titular Celeste Mountain. The gameplay is renowned for its precision-based platforming mechanics, requiring players to navigate through a series of increasingly difficult levels filled with obstacles and puzzles. Alongside its tight gameplay, Celeste tackles themes of mental health, self-discovery, and the struggle against one's inner demons, as Madeline faces both physical and emotional challenges. The game's story, pixel art style, and soundtrack have been praised for their cohesiveness and the way they complement the gameplay, making Celeste not only a test of skill but also an impactful narrative experience.";
aboutText.style.marginBottom = '20px';
aboutText.style.fontSize = '26px';
aboutText.style.textAlign = 'center';
aboutText.style.color = '#4a0000';
aboutText.style.fontFamily = "'Georgia', serif";

let aboutImage = document.createElement('img');
aboutImage.src = "./Images/aboutphoto.png";
aboutImage.style.width = '100%';
aboutImage.style.maxWidth = '400px';
aboutImage.style.height = 'auto';
aboutImage.style.display = 'block';
aboutImage.style.marginBottom = '20px';
aboutImage.style.marginLeft = 'auto';
aboutImage.style.marginRight = 'auto';

aboutSection.appendChild(aboutHeading);
aboutSection.appendChild(aboutText);
aboutSection.appendChild(aboutImage);
document.body.appendChild(aboutSection);

let charactersSection = document.createElement('div');
charactersSection.id = 'characters'; // ID for smooth scroll targeting
charactersSection.style.backgroundColor = '#f0f0f0';
charactersSection.style.padding = '20px';
charactersSection.style.margin = '40px auto';
charactersSection.style.width = '80%';
charactersSection.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
charactersSection.style.borderRadius = '8px';

let charactersHeading = document.createElement('h2');
charactersHeading.textContent = "Images";
charactersHeading.style.marginBottom = '20px';
charactersHeading.style.textAlign = 'center';
charactersHeading.style.color = '#4a0000';
charactersHeading.style.fontSize = '28px';
charactersHeading.style.fontFamily = "'Georgia', serif";

let gallery = document.createElement('div');
gallery.style.display = 'grid';
gallery.style.gridTemplateColumns = 'repeat(3, 1fr)'; // Creates a 3x3 grid for images
gallery.style.gap = '10px';

function addImageToGallery(src) {
  let img = document.createElement('img');
  img.src = src;
  img.style.width = '100%';
  img.style.height = '200px';
  img.style.objectFit = 'cover'; // Ensures images cover the grid area
  gallery.appendChild(img);
}

const imageUrls = [ // Images
  "./Images/photo.jpeg",
  "./Images/photo2.jpeg",
  "./Images/photo3.jpeg",
  "./Images/photo5.jpg",
  "./Images/photo6.jpeg",
  "./Images/photo7.jpeg",
  "./Images/photo8.jpeg",
  "./Images/photo12.jpg",
  "./Images/photo10.jpg"
];

imageUrls.forEach(url => addImageToGallery(url)); //Adds the image to the gallery
charactersSection.appendChild(charactersHeading);
charactersSection.appendChild(gallery);
document.body.appendChild(charactersSection);

let footer = document.createElement('div'); // Creates the footer
footer.style.backgroundColor = '#333';
footer.style.color = '#f2f2f2';
footer.style.textAlign = 'center';
footer.style.padding = '10px';
footer.style.width = '100%';
footer.textContent = "Alan Sanchez Celeste One Page Javascript Website © Me 2024";
document.body.appendChild(footer);
