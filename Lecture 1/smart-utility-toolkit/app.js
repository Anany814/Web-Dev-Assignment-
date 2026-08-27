const { isEven, isOdd, describeNumber } = require('./modules/isEven');
const logger = require('./modules/logger');

logger.info('Starting app.js');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function(num) {
  if (isEven(num)) {
    logger.success(describeNumber(num));
  } else {
    logger.warn(describeNumber(num));
  }
});

console.log('');
logger.info('isEven(4) -> ' + isEven(4));
logger.info('isOdd(7)  -> ' + isOdd(7));
logger.info('isEven(9) -> ' + isEven(9));

logger.success('Done.');
