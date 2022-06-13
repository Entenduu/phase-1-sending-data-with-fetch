// Add your code here
function submitData(name,email) {
    const formData = {
        name: name,
        email: email
    }

    const configurationObject = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': "application/json",
        },
        body: JSON.stringify(formData)
    }

    const element = document.getElementsByTagName('body');



    return fetch('http://localhost:3000/users', 
    configurationObject)
    .then((res) => res.json())
    .then((obj) => document.body.innerHTML = obj.id)
    .catch((error) => {
        alert('Unauthorized Access');
        document.body.innerHTML = error.message;
        
    })
}