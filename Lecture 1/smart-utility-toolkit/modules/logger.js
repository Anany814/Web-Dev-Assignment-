function getTime() {
  const now = new Date();
  const date = now.toLocaleDateString('en-CA');
  const time = now.toTimeString().split(' ')[0];
  return '\x1b[2m[' + date + ' ' + time + ']\x1b[0m';
}

function info(msg) {
  console.log(getTime() + ' \x1b[36m[INFO]\x1b[0m  ' + msg);
}

function success(msg) {
  console.log(getTime() + ' \x1b[32m[SUCCESS]\x1b[0m ' + msg);
}

function warn(msg) {
  console.log(getTime() + ' \x1b[33m[WARN]\x1b[0m  ' + msg);
}

function error(msg) {
  console.log(getTime() + ' \x1b[31m[ERROR]\x1b[0m ' + msg);
}

module.exports = { info, success, warn, error };
