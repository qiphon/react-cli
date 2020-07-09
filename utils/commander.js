const {print} = require('./print')
let defaultOptions = [
    {
        command: ['-h', '--help'],
        description: 'show all options '
    }
]
const noCallback = () => {
    throw new Error('commander options need a action !')
    process.exit(-1)
}
/**
 * @fileoverview 将指定的输入命令转出去，执行响应的输出
 * @param {string[]} args 执行参数
 * @param {object[]} options 参数对应的执行选项 
 * @param {string[]|string} options[].option  匹配的动作
 * @param {string} options[].description  匹配的动作的描述
 * @param {function} options[].action(options[]option)  匹配的动作的动作
 */
const commander = (args, options=defaultOptions) =>{
    const [cmd, opt] = args
    if(options.length){
        defaultOptions = [...options, ...defaultOptions]
    }
    if(cmd === '-h' || cmd === '--help'){
        return showOptions()
    }
    if(cmd){
        let match = false
        options.forEach(({option, command, action=noCallback}) =>{
            if(typeof command === 'string' && command === cmd){
                match = true
                return action(opt)
            }else if(command instanceof Array && command.includes(cmd)){
                match = true
                return action(opt)
            }
        })
        if(!match){
            print.warn(`\n command ${cmd} is not supported!`)
            return showOptions()
        }
    }else{
        print.warn(`\n please input you command!`)
        showOptions()
    }
}

/**
 * @fileoverview 展示所有的options
 */
function showOptions() {
    let output = '\n usage: react-cli <command> [option] \t\n\n';
    defaultOptions.forEach(({option, description, command})=>{
        output += `  ${command} ${option || '\t'} \t ${description||''} \n`
    })
    print.log(output)
}

module.exports = commander