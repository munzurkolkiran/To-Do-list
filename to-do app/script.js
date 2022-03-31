const clear = document.getElementById('clear');
const submit = document.getElementById('submit');
const container = document.getElementById('container');
const text = document.getElementById('text')

text.addEventListener("keyup", function(event) { // for enter
    event.preventDefault();
    if (event.keyCode === 13) {
        submit.click();
    }
});

submit.addEventListener('click', () => {

    if (text.value.trim() !== '') {
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);

        const todo = document.createElement('div');
        todo.classList.add('text');
        todo.innerText = text.value;
        content.appendChild(todo);

        const x = document.createElement('button');
        x.classList.add('x');
        x.innerHTML = 'x';
        content.appendChild(x);

        const done = document.createElement('button');
        done.classList.add('done');
        done.innerHTML = 'done';
        content.appendChild(done);

        const date = document.createElement('span');
        date.classList.add('date');
        const currentDate = new Date();
        const day = currentDate.getMonth();

        console.log(day)
        date.innerHTML = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
        content.appendChild(date);


        text.value = ''

        done.addEventListener('click', () => { // linethrough
            todo.classList.toggle('active');
        });

        x.addEventListener('click', () => { // delete 
            container.removeChild(content)
        });
        clear.addEventListener('click', () => { // clear all list

            const allContent = document.querySelectorAll('.content');
            allContent.forEach((e) => {
                container.removeChild(content);
            });
        });
    } else if (text.value.trim() === '') {
        text.value = '';
    }
});

clear.addEventListener('click', () => {
    text.value = '';
});