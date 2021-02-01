import express from "express";
// middlewares
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import { localsMiddleware } from "./middlewares";
// routers
import globalRouter from './routers/globalRouter';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
// routes
import routes from './routes';

const app = express();

// view engine 설정
app.set('view engine', 'pug');

// middleware 설정
// morgan : logger
// helmet : securiry
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
// 동영상 재생 관련
app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    return next();
    });
app.use(morgan('dev'));
// Local Middleware 설정
app.use(localsMiddleware)

// Router 적용
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// to use app.js from init.js
// somebody import app.js then send "app" (was declaired)
export default app;