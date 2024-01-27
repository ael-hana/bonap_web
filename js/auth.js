function checkAuthentication() {
    const urlBase = window.location.href.includes("localhost") ?"http://localhost:3000" :"https://bonap-aa43479b1553.herokuapp.com";

    fetch(urlBase+'/restaurants/checktoken', {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => {
        if (!response.ok)
            window.location.href = 'login.html';
    })
    .catch(error => {
        window.location.href = 'login.html';
    });
}
checkAuthentication()