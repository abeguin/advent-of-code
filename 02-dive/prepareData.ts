import { Action } from './command';

export const prepareData = (input: string): Action[] => input.split('\n')
    .map(v => {
        const [ command = '', value = '' ] = v.split(' ');
        return {
            command,
            value: parseInt(value),
        } as Action;
    })
    .filter(n => !isNaN(n.value));
