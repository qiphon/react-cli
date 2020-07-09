const commander = require('./commander')
// const {program} = require('commander') 
const {print, helloText} = require('./print')

// commander usage
// program
//     .version(helloText)
//     .usage(`[cmd] <options>`)
//     .arguments('<cmd> [env]')
//     .action((cmd, options)=> {
//         console.log(cmd, 'options', options)
//         let hanlder = cmdEvent[cmd]
//         if(!hanlder){
//             print.warn(`command ${cmd} is not supported!`)
//             program.help()
//             return 
//         }
//         hanlder(options)
//     })
// program.parse(argv);
module.exports = {
    print,
    helloText,
    commander,
}