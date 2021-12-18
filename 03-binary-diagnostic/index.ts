import * as fs from 'fs';
import { prepareData } from './prepareData';
import { epsilon, gamma } from './diagnose';
import { bitsToNumber } from './bits';


const main = (err: Error | null, data: string) => {
    if (err) {
        return console.error(err);
    }
    const d = prepareData(data);
    const g = gamma(d);
    const e = epsilon(d);

    const gNumber = bitsToNumber(g);
    const eNumber = bitsToNumber(e);

    console.log(`result: ${gNumber * eNumber}`);
};

fs.readFile('inputs.txt', 'utf8', main);
