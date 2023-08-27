let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click',function(){
    let item = document.createElement('li');
    item.innerText = inp.value;
    
    // To create delete button for add list item
    let delBtn =document.createElement('button');
    delBtn.innerText = 'delete';
    delBtn.classList.add('delete');
    item.appendChild(delBtn);
    // ul ke andar hame list add krna hai kise add krna hai item ko
    ul.appendChild(item);
    
    // console.log("Clicked button");
    // Add value
    // console.log(inp.value);
    // To remove the add task from palceholder
    inp.value = "";
});

ul.addEventListener('click',function(event){
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('deleted');
    }
    else{
        console.log('Do not Delete');
    }
});