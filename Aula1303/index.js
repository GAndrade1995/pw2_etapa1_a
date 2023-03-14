//#region Modulos Externos
const chalk = require('chalk')
const inquirer = require('inquirer')
//#endregion
//#region Modulos Internos
const fs = require('fs')
const { Console } = require('console')
//#endregion
operation()
//#region Operações Iniciais
function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar',
                'Sair'
            ]
        }
    ]).then((answer) =>{
        const action = answer['action']
        if(action === 'Criar Conta'){
            console.log('Criando sua Conta')
        }else if(action === 'Consultar Saldo'){
            console.log('Consultando Saldo')
        }else if(action === 'Depositar'){
            console.log('Depositando')
        }else if(action === 'Sacar'){
            console.log('Sacando')
        }else if(action === 'Sair'){
            console.log(chalk.bgBlue.black('Obrigadopor ultilizar o Contas ETEC'))
            setTimeout(() => {
                process.exit()
            }, 1500);
        }
    })
}
//#endregion