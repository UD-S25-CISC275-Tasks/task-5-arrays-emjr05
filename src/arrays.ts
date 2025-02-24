/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let length: number = numbers.length;
    if (!length) {
        return [];
    }
    return [numbers[0], numbers[length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let triple: number[] = [...numbers];
    return triple.map((numbers: number): number => numbers * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((strings: string): number =>
        Number(strings) ? Number(strings) : 0,
    );
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let removedDollars: string[] = amounts.map((money: string): string =>
        money[0] === "$" ? money.replace("$", "") : money,
    );
    return removedDollars.map((money: string): number =>
        Number(money) ? Number(money) : 0,
    );
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let shouted: string[] = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
    return shouted.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return shortWords.reduce((inital: number) => inital + 1, 0);
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    return colors.every(
        (color: string): boolean =>
            color === "blue" || color === "red" || color === "green",
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let total: number = addends.reduce(
        (currTotal: number, num: number) => currTotal + num,
        0,
    );
    return String(total) + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let index: number = values.findIndex((num: number): boolean => num < 0);
    if (index < 0) {
        let sum: number = values.reduce(
            (currTotal: number, value: number) => currTotal + value,
            0,
        );
        return [...values, sum];
    }
    let tempNums: number[] = [...values];
    tempNums.splice(index, tempNums.length - index);
    let sum: number = tempNums.reduce(
        (currTotal: number, value: number) => currTotal + value,
        0,
    );
    let injected: number[] = [...values];
    injected.splice(index + 1, 0, sum);
    return injected;
}
