process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim();
    if (cmd === 'pwd') {
        process.stdout.write(process.cwd());
    } else if (cmd === 'date') {
        var date = new Date();
        console.log(date.toUTCString());
        // process.stdout.write(date);
    } else {
        process.stdout.write('You typed: ' + cmd);
    }
   
    process.stdout.write('\nprompt > ');
});