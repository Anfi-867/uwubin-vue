import { logger, handle500, handle404 } from './core/Utils';
import { uri } from './Config';

import { default as express, json, Request, Response, Express } from 'express';
import { default as CORS } from 'cors';
import { default as mongoose } from 'mongoose';
import { default as Router } from './core/routes/index';

const App: Express = express();
const PORT: string = process.env.PORT || '6969';

App.use(CORS());
App.use(json());
App.use(Router);
App.use(handle404);
App.use(handle500);

mongoose
	.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
	.then(() => {
		return logger.log({
			message: 'Successfully connected to MongoDB',
			logLevel: 'success',
		});
	})
	.catch((e) => {
		return logger.log({ message: e, logLevel: 'error' });
	});

App.get('/', (req: Request, res: Response) => {
	return res.status(200).json({
		message: 'Welcome to uwubin',
	});
});

App.listen(PORT, () => {
	return logger.log({
		message: `Now listening on port ${PORT} (http://localhost:${PORT})`,
		logLevel: 'success',
	});
});
