import routes from "../routes";

export const getJoin = (req, res) => {
    res.render('join', { pageTitle: 'Join' });
}

export const postJoin  = (req, res) => {
    // 계정 생성 정보
    const {
        body: { name, email, password, password2 }
    } = req;

    // 입력한 확인비밀번호가 맞는지 확인
    if(password !== password2) {
        res.status(400) // Bad Request
        console.log('Post /join password and password2 were not same');
        res.render('join', { pageTitle: 'Join' });
    } else {
        // TODO : Register User
        // TODO : Log User In
        res.redirect(routes.home);
    }
}

export const getLogin = (req, res) => {
    res.render('login', { pageTitle: 'Login' });
}

export const postLogin = (req, res) => {
    res.redirect(routes.home);
}

export const logout = (req, res) => {
    // TODO : Process Logout
    res.redirect(routes.home);
}

export const userDetail = (req, res) => {
    res.render('userDetail', { pageTitle: 'User Detail' });
}
export const editProfile = (req, res) => {
    res.render('editProfile', { pageTitle: 'Edit Profile' });
}
export const changePassword = (req, res) => {
    res.render('changePassword', { pageTitle: 'Change Password' });
}