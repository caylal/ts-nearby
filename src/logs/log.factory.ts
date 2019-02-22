import {logConfig} from '../config/cfg.config'
import {ILog, Level} from './log.interface'
import {ConsoleLog} from './log.console'

export interface LogList {
    [key: string]: ILog
}
export class LogFactory {
    private static logs: LogList = {};
    private static DEFAULT_KEY: string = 'default';

    static get(name: string | object): ILog {
        let result: ILog;
        let key: string;
        if(!!name && typeof name === 'string') {
            key = !!name ? name : LogFactory.DEFAULT_KEY
        }else {
            const t: any = <any>name;
            key = t.name || t.constructor.name || LogFactory.DEFAULT_KEY
        }
        if(!LogFactory.logs[key]){
            let lschema = logConfig[key];
            if(!lschema) {
                lschema = logConfig[LogFactory.DEFAULT_KEY]
            }

            const level = !!lschema.level ? lschema.level : 'on';
            const type = !!lschema.type ? lschema.type : 'console';
            if(type === 'console') {
                result = new ConsoleLog({
                    name: key,
                    level: LogFactory.transLevel(level)
                });
                LogFactory.logs[key] = result;
            }
        } else {
            result = LogFactory.logs[key];
        }

        return result;
    }

    private static transLevel(level: string): Level {
        let result: Level = Level.OFF;
        switch (level.toLowerCase()) {
            case 'on': 
                result = Level.ON;
                break;
            case 'info': 
                result = Level.INFO;
                break;
            case 'warn':
                result = Level.WARN;
                break;
            case 'error':
                result = Level.ERROR;
                break;
            default:
                result = Level.OFF
                break;
        }
        return result;
    }
}