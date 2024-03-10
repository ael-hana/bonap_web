function checkAuthentication() {
    const urlBase = window.location.href.includes("localhost") ?"http://localhost:3000" :"https://api.thebonap.com";

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