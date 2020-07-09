const colors = require('colors/safe');
const figlet = require('figlet')
const package = require('../package.json')


// console.log(package.version)
const helloText = colors.bold.cyan(`\n 🕛version: ${package.version} \t 👦author: qiphon \n`) +
    colors.rainbow(figlet.textSync(`REACT CLI`));
const print = {
    log(...text){
        console.log(colors.green(...text))
    },
    error(...text){
        console.error(colors.red(...text))
    },
    warn(...text){
        console.warn(colors.yellow(...text))
    },
    info(...text){
        console.info(colors.gray(...text))
    },
    hello(){
        console.log(helloText)
    }
}

module.exports = {
    print,
    helloText,
}