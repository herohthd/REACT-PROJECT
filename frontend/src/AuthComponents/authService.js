class AuthService {
    logout(){
        localStorage.removeItem('user');
        // window.localStorage.clear();
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}

export default new AuthService();