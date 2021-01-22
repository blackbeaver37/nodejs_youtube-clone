import express from "express";
// middlewares
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
// routers
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
// routes
import routes from './routes';

const app = express();

// middleware 설정
// morgan : logger
// helmet : securiry
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan('dev'));

// Router 적용
app.use('/', globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// to use app.js from init.js
// somebody import app.js then send "app" (was declaired)
export default app;