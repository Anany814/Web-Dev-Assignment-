const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const historyFile = path.join(__dirname, 'dice-history.txt');
const rolls = parseInt(process.argv[2]) || 5;

function rollDice() {
  const byte = crypto.randomBytes(1)[0];
  return (byte % 6) + 1;
}

const diceArt = {
  1: ['┌─────┐', '│     │', '│  ●  │', '│     │', '└─────┘'],
  2: ['┌─────┐', '│ ●   │', '│     │', '│   ● │', '└─────┘'],
  3: ['┌─────┐', '│ ●   │', '│  ●  │', '│   ● │', '└─────┘'],
  4: ['┌─────┐', '│ ● ● │', '│     │', '│ ● ● │', '└─────┘'],
  5: ['┌─────┐', '│ ● ● │', '│  ●  │', '│ ● ● │', '└─────┘'],
  6: ['┌─────┐', '│ ● ● │', '│ ● ● │', '│ ● ● │', '└─────┘']
};

console.log('Rolling dice ' + rolls + ' time(s)...\n');

const results = [];

for (let i = 1; i <= rolls; i++) {
  const value = rollDice();
  results.push(value);

  console.log('Roll #' + i + ':');
  diceArt[value].forEach(function(line) {
    console.log('  ' + line);
  });
  console.log('Dice Rolled: ' + value + '\n');

  const entry = '[' + new Date().toISOString() + '] Dice Rolled: ' + value + '\n';
  fs.appendFileSync(historyFile, entry);
}

const total = results.reduce(function(sum, r) { return sum + r; }, 0);
console.log('Results: [' + results.join(', ') + ']');
console.log('Total: ' + total + '  Average: ' + (total / results.length).toFixed(2));
console.log('History saved to dice-history.txt');
