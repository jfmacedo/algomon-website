// Event 1: Quiz: "Which Algomon are you?"
document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quizForm");
    const quizResult = document.getElementById("quizResult");
  
    if (quizForm) {
      quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const selectedElement = document.getElementById("element").value;
  
        let message = "";
  
        switch (selectedElement) {
          case "fire":
            message = "🔥 You are Flamaris! Brave, impulsive and full of energy.";
            break;
          case "water":
            message = "💧 You are Piscyra! Sensitive, intuitive and magical.";
            break;
          case "earth":
            message = "🌱 You are Terracorn! Strong, disciplined and determined.";
            break;
          case "air":
            message = "🌬️ You are Aurelibra! Graceful, balanced and fair.";
            break;
        }
  
        quizResult.textContent = message;
      });
    }
  });
  
  // Event 2: Mouseover on gallery images
  const bunnyImages = document.querySelectorAll(".gallery img");
  bunnyImages.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1.1)";
    });
  });
  
  // Event 3: Click on login button
  const loginButton = document.querySelector(".login button");
  if (loginButton) {
    loginButton.addEventListener("click", () => {
      alert("🔐 Login feature coming soon!");
    });
  }
    
  document.getElementById('personalityQuiz').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const answers = [
      document.querySelector('input[name="q1"]:checked')?.value,
      document.querySelector('input[name="q2"]:checked')?.value,
      document.querySelector('input[name="q3"]:checked')?.value,
      document.querySelector('input[name="q4"]:checked')?.value,
      document.querySelector('input[name="q5"]:checked')?.value
    ];
  
    const counts = { fire: 0, water: 0, earth: 0, air: 0 };
  
    answers.forEach(el => { if (el) counts[el]++; });
  
    const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  
    const algomons = {
      fire: {
        name: 'You are 🔥 Flamaris',
        desc: 'Impulsive and brave, Flamaris is driven by emotion! Always ready to act before thinking, he faces any challenge head-on. While not a natural leader, his vibrant energy inspires everyone around him.',
        img: 'rabbit5.jpg'
      },
      earth: {
        name: 'You are 🌱 Terracorn',
        desc: 'Strong, disciplined, and reliable, Terracorn observes quietly before taking action. When needed, he wields his mighty hammer to protect those he cares about. Loyal and grounded, he’s the rock of the group.',
        img: 'rabbit6.jpg'
      },
      air: {
        name: 'You are 🌬️ Aurelibra',
        desc: 'Elegant and diplomatic, Aurelibra always seeks harmony. With graceful wings and a calm gaze, she solves conflicts with wisdom and empathy. She is the peaceful heart of the team.',
        img: 'rabbit7.jpg'
      },
      water: {
        name: 'You are 💧 Piscyra',
        desc: 'Sensitive and mysterious, Piscyra lives in a world of dreams. Deeply in touch with emotions and intuition, she feels what others cannot say. Though gentle in appearance, her blue trident holds surprising power.',
        img: 'rabbit4.jpg'
      }
    };
  
    const result = algomons[winner];
    document.getElementById('resultDisplay').innerHTML = `
      <h3>${result.name}</h3>
      <p>${result.desc}</p>
      <img src="${result.img}" alt="${result.name}" style="max-width:200px; margin-top:10px; border-radius:15px;">
    `;
  });
  
  
  