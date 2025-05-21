import chalk from 'chalk';
import { program } from 'commander';
import { version } from '../package.json';

export interface IArgvOptions {
    argument?: string;
    path?: string;
}

let argvOptions: IArgvOptions = null;
const commands = () => {
    program
        .version(version)
        .name('node-boilerplate')
        .argument('<argument>', 'Example argument.')
        .usage('[argument] [options]');

    program.parse(process.argv);
    argvOptions = program.opts();
    argvOptions.argument = program.processedArgs[0];
};

const run = async () => {
    try {
        commands();

        // Place your code here

    } catch(error) {
        console.error(chalk.red('NodeCLI tool failed'));
        console.error(error);
    }
};

run();
