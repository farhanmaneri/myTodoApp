function addTodo(){
    var input = document.getElementById("todo");
    var list = document.getElementById('list');
    var li  = document.createElement("li");
    var liText = document.createTextNode(input.value);
         li.appendChild(liText);
     list.appendChild(li);
     input.value = " "
     
   

     var delBtn = document.createElement('buttun');
     var delText = document.createTextNode('DELETE');
     delBtn.appendChild(delText);
     li.appendChild(delBtn)
     delBtn.setAttribute('onclick', 'delRow(this)')
     delBtn.setAttribute('class', 'btn del btn-primary')

     var editBtn = document.createElement('buttun');
     var editText = document.createTextNode('EDIT');
     editBtn.appendChild(editText);
     li.appendChild(editBtn)
     editBtn.setAttribute('onclick', 'editItem(this)') 
     editBtn.setAttribute('class', 'btn btn-primary')
}

function delRow(e){
    e.parentNode.remove()
}

function delAll(){
       list.innerHTML = " "
}

function editItem(e){
    e.parentNode.firstChild.nodeValue
    var val = prompt('Enter new value', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;

}

