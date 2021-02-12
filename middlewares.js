import multer from "multer";    // 비디오 업로드시 url로 리턴
import routes from './routes';

const multerVideo = multer({ dest: "uploads/videos/"});

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = 'Wetube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};

// single : 하나의 파일, arg로 html input의 name attr 값
export const uploadVideo = multerVideo.single("videoFile");