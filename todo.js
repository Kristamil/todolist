var addbtn=document.getElementById('add-btn');
var todo_input=document.getElementById('todo-input');
var list=document.getElementById('list');
addbtn.addEventListener('click',function(){
    var todo=todo_input.value;

    var item=document.createElement('DIV');
    item.classList.add('item');
    var item_text=document.createElement('DIV');
    item_text.classList.add('item_text');
    item_text.textContent=todo;

    var edit_input=document.createElement('INPUT');
    edit_input.classList.add('edit_input');
    edit_input.classList.add('hide');
    edit_input.name='edit_input';
    edit_input.type='text';
    edit_input.value=todo;

    var edit_input_btn=document.createElement('BUTTON');
    edit_input_btn.textContent='UPDATE';
    edit_input_btn.classList.add('action_btn');
    edit_input_btn.classList.add('update_btn');
    edit_input_btn.classList.add('hide');
    edit_input_btn.type='button';

    var action_btns=document.createElement('DIV');
    action_btns.classList.add('action_btns');

     var edit_btn=document.createElement('BUTTON');
     edit_btn.classList.add('action_btn');
     edit_btn.classList.add('edit_btn');
     edit_btn.textContent='EDIT';

     //edit todo
     edit_btn.addEventListener('click',function(){
         edit_input.classList.remove('hide');
         item_text.classList.add('hide');
         edit_input_btn.classList.remove('hide');
         edit_input_btn.addEventListener('click',function(){
             item_text.textContent=edit_input.value;
             edit_input.classList.add('hide');
             item_text.classList.remove('hide');
             edit_input_btn.classList.add('hide');        
         });
     });
        var remove_btn=document.createElement('BUTTON');
        remove_btn.classList.add('action_btn');
        remove_btn.classList.add('remove_btn');
        remove_btn.textContent='REMOVE';

        remove_btn.addEventListener('click',function(){
            item.parentNode.removeChild(item);
        });
        action_btns.append(edit_input_btn);
        action_btns.append(edit_btn);
        action_btns.append(remove_btn);
        item.append(item_text);
        item.append(edit_input);
        item.append(action_btns);
        list.append(item);

        todo_input.value='';


});