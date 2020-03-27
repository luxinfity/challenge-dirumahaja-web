import SQLRepo from './base/sql_repository';
import { IContext } from 'src/typings/common';
import { Log } from '../typings/models';

export default class UserRepository extends SQLRepo<Log> {
    public constructor(context?: IContext) {
        super('Log', context);
    }
}