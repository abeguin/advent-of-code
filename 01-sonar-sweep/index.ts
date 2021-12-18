import fs from 'fs';
import { prepareData, prepareDataForPart2 } from './prepareData';
import { countLargerThanPrevious } from './count';

const filename = 'inputs.txt';

/**
 * Main function, handle the input data and print the result in the console
 * @param err
 * @param data
 */
const main = (err: Error | null, data: string): void => {
    if (err) {
        return console.error(err);
    }
    //const d: number[] = prepareData(data);
    const d: number[] = prepareDataForPart2(data);
    const count = countLargerThanPrevious(d);
    console.log(`result: ${count}`);
};

fs.readFile(filename, 'utf8', main);



