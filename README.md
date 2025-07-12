# pixels-guide
guideline pixel
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Pixels Leveling Guide</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Pixels Leveling Guide</h1>

    <div class="calculator">
      <label>Current Level:
        <input type="number" id="currentLevel" min="1" max="100" />
      </label>
      <label>Target Level:
        <input type="number" id="targetLevel" min="1" max="100" />
      </label>
      <button onclick="calculate()">Calculate</button>

      <div id="results">
        <!-- hasil kalkulasi akan muncul di sini -->
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: #ffffff;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.calculator {
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-top: 4px;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  background-color: #2c2c2c;
  color: #fff;
}

button {
  padding: 10px 20px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#results {
  margin-top: 20px;
}

function calculate() {
  const current = parseInt(document.getElementById('currentLevel').value);
  const target = parseInt(document.getElementById('targetLevel').value);
  const resultArea = document.getElementById('results');

  if (isNaN(current) || isNaN(target) || target <= current) {
    resultArea.innerHTML = "<p>Please enter valid level values.</p>";
    return;
  }

  // Misalnya, setiap level butuh EXP = level * 100
  let totalExp = 0;
  for (let i = current; i < target; i++) {
    totalExp += i * 100;
  }

  // Misalnya: 1 item memberikan 200 exp dan harga per item = 50 coin
  const itemExp = 200;
  const itemCost = 50;

  const itemNeeded = Math.ceil(totalExp / itemExp);
  const totalCost = itemNeeded * itemCost;

  resultArea.innerHTML = `
    <p>Total EXP needed: <strong>${totalExp}</strong></p>
    <p>Items needed: <strong>${itemNeeded}</strong></p>
    <p>Total cost: <strong>${totalCost}</strong> coins</p>
  `;
}
