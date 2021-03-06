import routes from "../routes";
import Video from "../models/Video"

export const home = async (req, res) => {
    try {
        // 최신 순 정렬
        const videos = await Video.find({}).sort({ _id: -1});
        res.render('home', { pageTitle: 'Home', videos });
    } catch(e) {
        console.log(`Error: ${e}`);
        res.render('home', { pageTitle: 'Home', videos: [] });
    }
}

export const search = (req, res) => {
    const { query: { term: searchingBy } } = req;
    res.render('search', { pageTitle: 'Search', searchingBy, videos });
}

export const getUpload = (req, res) => {
    res.render('upload', { pageTitle: 'Upload' });
}

export const postUpload = async (req, res) => {
    const { 
        body: { title, description },
        file: { path } 
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    // TODO : Upload and save video
    res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id);
        res.render('videoDetail', { pageTitle: video.title, video });
    } catch(e) {
        console.log(`Error: ${e}`);
        res.redirect(routes.home);
    }
}

export const getEditVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        const video = await Video.findById(id)
        res.render('editVideo', { pageTitle: `Edit - ${video.title}`, video });
    } catch(e) {
        console.log(`Error : ${e}`);
        res.redirect(routes.home);
    }
}

export const postEditVideo = async (req, res) => {
    const {
        params: { id },
        body: { title, description }
    } = req;
    console.log(id);
    try {
        await Video.findOneAndUpdate({ _id: id }, { title, description });
        res.redirect(routes.videoDetail(id));
    } catch(e) {
        console.log(`Error : ${e}`);
        res.redirect(routes.home);
    }
}

export const deleteVideo = async (req, res) => {
    const {
        params: { id }
    } = req;
    try {
        await Video.findOneAndRemove({ _id: id });
    } catch(e) {
        console.log(`Error : ${e}`);
    }
    res.redirect(routes.home);
}
