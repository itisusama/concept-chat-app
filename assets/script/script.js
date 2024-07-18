let users = document.querySelector('.users-list')

let chatUser = [
    {name: 'John', avatar: 'fa-solid fa-user'},
    {name: 'Don', avatar: 'fa-solid fa-user'},
    {name: 'Ron', avatar: 'fa-solid fa-user'}
]

let clutter = '';

chatUser.forEach(function(obj){
    clutter += `<i class="${obj.avatar}" id="${obj.name}"></i> &nbsp; <button class="user-btn">${obj.name}</button> <br/>`;
})

users.innerHTML = clutter;

document.getElementById('send-btn').addEventListener('click', function() {
    // Get the value from the textarea
    let message = document.getElementById('exampleFormControlTextarea1').value;

    // Set the innerHTML of the message-area to the value from the textarea
    document.querySelector('.message-area').innerHTML += message + "<br/>" ;
});