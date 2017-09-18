var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var inputArr = data.toString().trim().split(' ');
    var cmd = inputArr[0];
    var arg = inputArr.slice(1).join(' ');
    if (commands[cmd]) {
        commands[cmd](arg);
    } else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
});