class Headers {
    constructor(color, userName) {
        this.color = color;
        this.username = userName;
    }
    
    render(isLoggedIn) {
        const head = document.querySelector('.header');
        if (isLoggedIn) {
             head.classList.add('header_login');
             this.username = userName; 
        }
            else {
                head.classList.remove('header_login');
            }
        }
}

export default Headers;