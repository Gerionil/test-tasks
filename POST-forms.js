
//ajax 

$( document ).ready(function() {
    $(".test").submit(function(event){
        const formAnswerDiv = document.getElementById('form-answer');
        event.preventDefault();
        
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/posts',
            type:'POST',
            dataType: 'json',
            data: $("#test").serialize,
            // success : function(result) {
            //     // you can see the result from the console
            //     // tab of the developer tools
            //     console.log(result);
                
            // },
            success: function(result){
                formAnswerDiv.append(JSON.stringify(result));
                console.log(JSON.stringify(result));
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
        })
    })
});

// second version 

// const form = document.getElementById('test');
// const formAnswerDiv = document.getElementById('form-answer');
// form.addEventListener('submit',evt =>{
//     evt.preventDefault();

//     const user = {
//         name: form.elements.name.value,
//         age: form.elements.age.value,

//     };
//     saveData(JSON.stringify(user));

//     });

// function saveData(user){
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST','https://jsonplaceholder.typicode.com/posts' );
//     xhr.setRequestHeader('Content-type', 'json')
//     xhr.onload = () =>{
//         console.log(JSON.parse(xhr.responseText));
//         formAnswerDiv.append(`Имя: ${user.name}, Возраст: ${ user.age}, id: ${ xhr.response.name}`);
//     };
//     xhr.onerror = () =>{
//         console.log('Request failed');
//     };
//     xhr.send();
// }


//fetch

// const form = document.getElementById('test');
// const formAnswerDiv = document.getElementById('form-answer');
// form.addEventListener('submit',evt =>{
//     evt.preventDefault();

//     const user = {
//         name: form.elements.name.value,
//         age: form.elements.age.value,

//     };
//     saveData(JSON.stringify(user));

//     });

// function saveData(user){
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: user,
//         // credentials:'include',

//     })

    
//     .then((response) => response.json())
//     // .then((json) => console.log(json));
//     // .then((data) => console.log(data))

//     .then( (data) => formAnswerDiv.append(`Имя: ${data.name}, Возраст: ${ data.age}, id: ${ data.id}`));
    
    
// }





// let arr = [1, 2,3,4,5,8,9];
// let sum = arr.reduce((sum,current) => sum + current, 0);



// let arr = [1, 2,3,4,5,8,9];
// let sum2 = arr.reduce(function(sum,current){
//     return sum + current;
// },0);