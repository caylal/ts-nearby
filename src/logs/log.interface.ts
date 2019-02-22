export interface ILog {
    error(message?: any, ...optionalParams: any[]): void
    warn(message?: any, ...optionalParams: any[]): void
    info(message?: any, ...optionalParams: any[]): void
    log(message?: any, ...optionalParams: any[]): void
}

export enum Level {
    OFF,
    ERROR,
    WARN,
    INFO,
    // DEBUG,
    ON,
}
const DEFAULT_OPTIONS: Options = {
    name: 'default',
    level: Level.WARN
}
export class Options {
    name: string = DEFAULT_OPTIONS.name
    level: Level = DEFAULT_OPTIONS.level
}