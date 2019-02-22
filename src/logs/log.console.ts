import { Options } from './log.interface'
import { LogBase } from './log.base'

export class ConsoleLog extends LogBase {
    constructor(options: Options) {
        super(options)
    }

    public error(message?: any, ...optionalParams: any[]){
        this.rebuildArguments(arguments);
        this.isErrorEnabled() && console.error.apply(console, <any>arguments);
    }
    public warn(message?: any, ...optionalParams: any[]){
        this.rebuildArguments(arguments);
        this.isWarnEnabled() && console.warn.apply(console, <any>arguments);
    }
    public info(message?: any, ...optionalParams: any[]){
        this.rebuildArguments(arguments);
        this.isInfoEnabled() && console.info.apply(console, <any>arguments);
    }
    public log(message?: any, ...optionalParams: any[]){
        this.rebuildArguments(arguments);
        this.isLogEnabled() && console.log.apply(console, <any>arguments);
    }
}
