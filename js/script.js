let widthTel = document.getElementById("telephone").getBoundingClientRect();
document.getElementById("messages").style.width = widthTel.width * 0.9 +"px";




let totalElapsedTime = 0;
        const interval = setInterval(() => {
            totalElapsedTime++;
            document.getElementById('totalTime').textContent = `Total Time: ${totalElapsedTime} seconds`;
        }, 1000);

        function addTodo() {
            const todoInput = document.getElementById('todoInput');
            const todoList = document.getElementById('todoList');

            if (todoInput.value.trim() !== "") {
                const li = document.createElement('li');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'checkbox';

                const taskText = document.createElement('span');
                taskText.textContent = todoInput.value;

                const startTime = new Date();
                const timeDisplay = document.createElement('span');
                timeDisplay.className = 'time-display';
                timeDisplay.textContent = `Commence à: ${startTime.toLocaleTimeString()}`;

                checkbox.onchange = () => {
                    if (checkbox.checked) {
                        const endTime = new Date();
                        const elapsedTime = Math.round((endTime - startTime) / 1000);
                        timeDisplay.textContent = `Terminer en: ${elapsedTime} secondes`;
                    } else {
                        timeDisplay.textContent = `Commence à: ${startTime.toLocaleTimeString()}`;
                    }
                };

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.className = 'delete-btn';
                deleteBtn.onclick = () => li.remove();

                li.appendChild(checkbox);
                li.appendChild(taskText);
                li.appendChild(timeDisplay);
                li.appendChild(deleteBtn);
                todoList.appendChild(li);

                todoInput.value = "";
            } else {
                alert('La tache est vide!!! Veuillez vous entrer une tache');
            }
        }
