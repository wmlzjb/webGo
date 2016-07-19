export const SET_LOGIN = 'SET_LOGIN';
export const setLogin = (user) => {
    return {
        type: SET_LOGIN,
        user
    }
}
export const postLogin = (user) => {
    return (dispatch, getState) => {
        if (user.name && user.pwd) {
            alert('当前登录用户：' + user.name);
        } else {
            alert('请输入用户名密码');
        }
    }
}