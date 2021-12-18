import fs from 'fs';
import { prepareData } from './prepareData';
import { Action } from './command';
import { Submarine } from './submarine';

const filename = 'inputs.txt';

const main = (err: Error | null, data: string): void => {
    if (err) {
        return console.error(err);
    }
    const d: Action[] = prepareData(data);
    const submarine = new Submarine();
    d.forEach(action => {
        submarine[action.command](action.value);
    })
    console.log(submarine.toString());
    console.log(submarine.result);
};

fs.readFile(filename, 'utf8', main);
