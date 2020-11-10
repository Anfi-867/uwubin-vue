import { NextFunction, Request, Response } from 'express';
import { Logger } from 'log-smth';
import { resolve } from 'path';

// Logger
const logger: Logger = new Logger({
    timestamps: true,
    defaultLog: 'info',
    logFileOptions: {
        logFile: true,
        logLevels: ['warn', 'error'],
        logDirPath: resolve(__dirname, '..', 'logs'),
        logStack: false,
        fileType: 'txt',
        pipeText: true,
    },
});

//

// Middleware

// Handle 404
const handle404 = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).type('text/plain').send('This is a 404');
};

// Handle 500
const handle500 = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).type('text/plain').send('This is a 500');
};
//

export { logger, handle404, handle500 };
