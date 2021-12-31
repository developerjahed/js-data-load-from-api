
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>displayData(data));
const ul=document.getElementById('users');
function displayData(data){
    for(const user of data){
     console.log(user.name)
     const li=document.createElement('li');
    li.innerText=`Name: ${user.name}
     Email: ${user.email}`;
    ul.appendChild(li);
    }
    
}