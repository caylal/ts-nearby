import { ILog, Options, Level } from './log.interface'
import { formatTime } from '../utils/util'



export abstract class LogBase implements ILog {
    protected _level: Level;
    protected _name: string;
    constructor(options: Options) {
        let { name, level } = options;
        this._name = name;
        this._level = level;
    }
    
  get level(): Level { return this._level; }
  get name(): string { return this._name; }

  abstract error(message?: any, ...optionalParams: any[]): void
  abstract warn(message?: any, ...optionalParams: any[]): void
  abstract info(message?: any, ...optionalParams: any[]): void
  // abstract debug(message?: any, ...optionalParams: any[])
  abstract log(message?: any, ...optionalParams: any[]): void

  isErrorEnabled = (): boolean => this.level >= Level.ERROR;
  isWarnEnabled = (): boolean => this.level >= Level.WARN;
  isInfoEnabled = (): boolean => this.level >= Level.INFO;
  // isDebugEnabled = (): boolean => this.level >= Level.DEBUG;
  isLogEnabled = (): boolean => this.level >= Level.ON;

  protected rebuildArguments(arg: IArguments){
    arg.length += 1;
    let index = arg.length - 2,
      insertIndex = index;
    while(index >= 0) {
      if(insertIndex > 0) {
        insertIndex = index - 2;
        if(insertIndex < 0) {
          insertIndex = 0;     
        }
      }

      arg[index + 1] = arg[index]
      if(index === insertIndex){
        arg[index] = this.name + ' ' + formatTime(new Date()) + ' ' + this.getLevel(this.level) + ':';
        break;
      }
      index --;
    }
  }

  protected getLevel(level: Level): string{
    let result: string = 'log';
    switch(level) {
      case Level.ERROR:
        result = "error";
        break;
      case Level.INFO:
        result = "info";
        break;
      case Level.WARN: 
        result = "warn";
        break;
      default:
        result = "log";
        break;
    }
    return result;
  }
}