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
let itemsData = [];

fetch('items.json')
  .then(response => response.json())
  .then(data => {
    itemsData = data;
    console.log("Loaded items:", itemsData);
   renderItemList(); //
  })
  .catch(error => console.error('Failed to load items:', error));

  function renderItemList() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = "<h2>Available Items</h2>";

  itemsData.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${item.name}</strong> - EXP: ${item.exp}, Cost: ${item.cost}`;
    itemList.appendChild(div);
  });
}


