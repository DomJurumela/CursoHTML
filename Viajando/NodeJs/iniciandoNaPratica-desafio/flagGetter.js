function getFlag(string){
    const argv = process.argv;
    for (let i = 0; i < argv.length; i++){
        if (argv[i] == string){
            i++;
            let value = argv[i].value;
            return argv[i];
        }
    }
    return -1;
}

module.exports = getFlag;