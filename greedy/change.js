// 최소 거스름 동전의 개수

function change(money) {
  let count = 0;

  let coins = [500, 100, 50, 10];

  for (let i = 0; i < coins.length; i++) {
    count += Math.floor(money / coins[i]);
    money = money % coins[i];
  }

  return count;
}

module.exports = change;