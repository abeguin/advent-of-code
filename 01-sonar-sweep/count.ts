/**
 * Count the number of number larger than the previous in an array of number
 * @param data
 */
export const countLargerThanPrevious = (data: number[]) => {
    let counter = 0;
    data.reduce((p, c) => {
        if (c < p) {
            counter++;
        }
        return c;
    }, 0);
    const [ last, ...others] = data.reverse();
    console.log(last);
    return data.length - 1 - counter;
};
