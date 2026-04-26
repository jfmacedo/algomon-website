const characters = [
  {
    name: "Flamaris",
    subtitle: "Fire Element Warrior",
    image: "assets/images/flamaris.png",
    weaponImage: "assets/images/flamaris-weapon.png",
    weaponName: "Flaming Axe",
    elementImage: "assets/images/fire-element.png",
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
    image: "assets/images/terracorn.png",
    weaponImage: "assets/images/terracorn-weapon.png",
    weaponName: "Earth Hammer",
    elementImage: "assets/images/earth-element.png",
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
    image: "assets/images/aurelibra.png",
    weaponImage: "assets/images/aurelibra-weapon.png",
    weaponName: "Celestial Sword",
    elementImage: "assets/images/air-element.png",
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
    image: "assets/images/piscyra.png",
    weaponImage: "assets/images/piscyra-weapon.png",
    weaponName: "Blue Trident",
    elementImage: "assets/images/water-element.png",
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

const worlds = [
  {
    name: "Algomon Treehouse",
    image: "assets/images/world-treehouse.png"
  },
  {
    name: "Elemental Armory",
    image: "assets/images/world-armory.png"
  },
  {
    name: "Crystal Clearing",
    image: "assets/images/world-crystal.png"
  },
  {
    name: "Algomon Garden",
    image: "assets/images/world-garden.png"
  }
];

let currentWorld = 0;

const worldImg = document.getElementById("worldImage");
const worldTitle = document.getElementById("worldTitle");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateWorld() {
  worldImg.style.opacity = "0";
  worldImg.style.transform = "scale(0.95)";

  setTimeout(() => {
    worldImg.src = worlds[currentWorld].image;
    worldTitle.textContent = worlds[currentWorld].name;

    worldImg.style.opacity = "1";
    worldImg.style.transform = "scale(1)";
  }, 200);
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentWorld--;
    if (currentWorld < 0) currentWorld = worlds.length - 1;
    updateWorld();
  });

  nextBtn.addEventListener("click", () => {
    currentWorld++;
    if (currentWorld >= worlds.length) currentWorld = 0;
    updateWorld();
  });
}