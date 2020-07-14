var inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const { exec } = require('child_process');
inquirer
  .prompt([
      { 
          type: 'list',
          name: 'javaVersion',
          message: 'What Java Home Version Do you want ?',
          choices: ['Java 11', 'Java 8 (Hybris)']
    }
    /* Pass your questions in here */
  ])
  .then(answers => {
    if(answers.javaVersion === 'Java 11'){
        exec('setx -m JAVA_HOME "C:/Program Files/Java/jdk-11.0.7"', (error, stdout, stderr) =>{
            if(error){
                console.log(`error: ${error.message}`)
                return;
            }
            if(stderr){
                console.log(`stderr: ${stderr}`)
                return;
            }
            console.log(`stdout: ${stdout}`)
        })
    }
    if(answers.javaVersion === 'Java 8 (Hybris)'){
        exec('setx -m JAVA_HOME "C:/Program Files/Java/jre1.8.0_251"', (error, stdout, stderr) =>{
            if(error){
                console.log(`error: ${error.message}`)
                return;
            }
            if(stderr){
                console.log(`stderr: ${stderr}`)
                return;
            }
            console.log(`stdout: ${stdout}`)
        })
    }
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });