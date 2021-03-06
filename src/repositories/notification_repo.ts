import SQLRepo from './base/sql_repository';
import { IContext } from 'src/typings/common';
import { Notification } from '../typings/models';

export default class NotificationRepository extends SQLRepo<Notification> {
    public constructor(context?: IContext) {
        super('Notification', context);
    }
}
