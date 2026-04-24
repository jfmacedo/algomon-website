document.getElementById("quizForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const answer = document.querySelector('input[name="q1"]:checked');
  
    if (!answer) {
      alert("Choose an option!");
      return;
    }
  
    let result = "";
  
    switch(answer.value) {
      case "fire":
        result = "🔥 Flamaris - Brave and fierce!";
        break;
      case "water":
        result = "🌊 Piscyra - Calm and intuitive!";
        break;
      case "earth":
        result = "🌿 Terracorn - Strong and loyal!";
        break;
      case "air":
        result = "🌬️ Aurelibra - Balanced and wise!";
        break;
    }
  
    document.getElementById("result").innerText = result;
  });