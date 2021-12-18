export enum Command {
    forward,
    up,
    down
}

export type CommandStrings = keyof typeof Command;

export type Action = {
    command: CommandStrings;
    value: number;
}
