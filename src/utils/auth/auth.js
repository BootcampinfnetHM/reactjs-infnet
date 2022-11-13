
const userIsLoggedIn = () => {
    if(true) {
        window.location.href = '/login'
    }
   
}

const login = (email, password) => {
    return 'login'
}

const register = (username, email, password) => {
    return 'login'
}

const logout = () => {
    console.log('logout')
}


module.exports = {
    userIsLoggedIn,
    login,
    register,
    logout
}