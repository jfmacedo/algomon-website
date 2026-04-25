const characters = [
  {
    name: "Flamaris",
    subtitle: "Fire Element Warrior",
    image: "flamaris.png",
    weaponImage: "flamaris-weapon.png",
    weaponName: "Flaming Axe",
    elementImage: "fire-element.png",
    elementName: "Fire",
    story: "Flamaris is a brave fire Algomon with an impulsive spirit. He carries a flaming axe and faces every challenge with courage and determination.",
    stats: {
      power: 90,
      health: 75,
      speed: 70,
      magic: 80
    }
  },
  {
    name: "Terracorn",
    subtitle: "Earth Element Guardian",
    image: "terracorn.png",
    weaponImage: "terracorn-weapon.png",
    weaponName: "Earth Hammer",
    elementImage: "earth-element.png",
    elementName: "Earth",
    story: "Terracorn is a strong and protective Algomon connected to the earth. His powerful hammer represents discipline, loyalty, and defense.",
    stats: {
      power: 88,
      health: 95,
      speed: 45,
      magic: 60
    }
  },
  {
    name: "Aurelibra",
    subtitle: "Air Element Duelist",
    image: "aurelibra.png",
    weaponImage: "aurelibra-weapon.png",
    weaponName: "Celestial Sword",
    elementImage: "air-element.png",
    elementName: "Air",
    story: "Aurelibra is graceful, balanced, and strategic. With her wings and sword, she uses the power of air to move with elegance and precision.",
    stats: {
      power: 78,
      health: 70,
      speed: 95,
      magic: 85
    }
  },
  {
    name: "Piscyra",
    subtitle: "Water Element Mystic",
    image: "piscyra.png",
    weaponImage: "piscyra-weapon.png",
    weaponName: "Blue Trident",
    elementImage: "water-element.png",
    elementName: "Water",
    story: "Piscyra is a dreamy and intuitive water Algomon. Her trident channels magical water energy, making her calm, sensitive, and powerful.",
    stats: {
      power: 70,
      health: 78,
      speed: 68,
      magic: 95
    }
  }
];

let currentCharacter = 0;

const characterName = document.getElementById("characterName");
const characterSubtitle = document.getElementById("characterSubtitle");
const characterImage = document.getElementById("characterImage");
const weaponImage = document.getElementById("weaponImage");
const weaponName = document.getElementById("weaponName");
const elementImage = document.getElementById("elementImage");
const elementName = document.getElementById("elementName");
const characterStory = document.getElementById("characterStory");

const powerValue = document.getElementById("powerValue");
const healthValue = document.getElementById("healthValue");
const speedValue = document.getElementById("speedValue");
const magicValue = document.getElementById("magicValue");

const powerBar = document.getElementById("powerBar");
const healthBar = document.getElementById("healthBar");
const speedBar = document.getElementById("speedBar");
const magicBar = document.getElementById("magicBar");

const prevButton = document.getElementById("prevCharacter");
const nextButton = document.getElementById("nextCharacter");

function updateCharacter() {
  const character = characters[currentCharacter];

  characterName.textContent = character.name;
  characterSubtitle.textContent = character.subtitle;
  characterImage.style.opacity = 0;
characterImage.style.transform = "scale(0.9)";

setTimeout(() => {
  characterImage.src = character.image;

  characterImage.style.opacity = 1;
  characterImage.style.transform = "scale(1)";
}, 200);
  characterImage.alt = character.name;

  weaponImage.src = character.weaponImage;
  weaponImage.alt = `${character.name} weapon`;
  weaponName.textContent = character.weaponName;

  elementImage.src = character.elementImage;
  elementImage.alt = `${character.elementName} element`;
  elementName.textContent = character.elementName;

  characterStory.textContent = character.story;

  powerValue.textContent = `${character.stats.power}%`;
  healthValue.textContent = `${character.stats.health}%`;
  speedValue.textContent = `${character.stats.speed}%`;
  magicValue.textContent = `${character.stats.magic}%`;

  powerBar.style.width = `${character.stats.power}%`;
  healthBar.style.width = `${character.stats.health}%`;
  speedBar.style.width = `${character.stats.speed}%`;
  magicBar.style.width = `${character.stats.magic}%`;
}

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => {
    currentCharacter--;

    if (currentCharacter < 0) {
      currentCharacter = characters.length - 1;
    }

    updateCharacter();
  });

  nextButton.addEventListener("click", () => {
    currentCharacter++;

    if (currentCharacter >= characters.length) {
      currentCharacter = 0;
    }

    updateCharacter();
  });

  updateCharacter();
}