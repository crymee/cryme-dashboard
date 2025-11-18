import { Injectable } from '@angular/core';
import { pino } from 'pino';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {
    private readonly logger = pino();

    info(msg: any) {
        this.logger.info(msg);
    }

    warn(msg: any) {
        this.logger.warn(msg);
    }

    error(msg: any) {
        this.logger.error(msg);
    }
}
