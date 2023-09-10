let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value;

    console.log(taskName);

    if (taskName.trim() !== '') {
        const task = {
            id: Date.now(),
            name: taskName,
            completed: false
        };

        tasks.push(task);
        renderTasks();
        taskInput.value = '';
    }
}


const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask()
    }
});


function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function markCompeleted(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });
    renderTasks();
    updateCompleteTask(id);


}
function updateCompleteTask(id) {
    const taskElement = document.getElementById(id);
    if (taskElement) {
        const task = tasks.find(task => task.id === id);
        if (task.completed) {
            taskElement.classList.add('completed');
        } else {
            taskElement.classList.remove('completed');
        }
    }
}


function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
  
        const listItem = document.createElement('li');
        listItem.setAttribute('id', task.id);

        const taskName = document.createElement('span');
        taskName.innerHTML = task.name;

        const completeButton = document.createElement('i');
        completeButton.classList.add('bx', 'bx-check', 'compelete-btn');
        completeButton.addEventListener('click', () => markCompeleted(task.id))

     
        const deleteButton = document.createElement('i');
        deleteButton.classList.add('bx', 'bxs-trash', 'delete-btn');
        deleteButton.addEventListener('click', () => deleteTask(task.id))

        listItem.appendChild(taskName);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

    });
}
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.setAttribute('id', task.id);

        const taskName = document.createElement('span');
        taskName.innerHTML = task.name;

        const completeButton = document.createElement('i');
        completeButton.classList.add('bx', 'bx-check', 'compelete-btn');
        completeButton.addEventListener('click', () => markCompeleted(task.id));

        const editButton = document.createElement('i');
        editButton.classList.add('bx', 'bx-edit', 'edit-btn'); // Add edit icon
        editButton.addEventListener('click', () => editTask(task.id)); // Add event listener for editing

        const deleteButton = document.createElement('i');
        deleteButton.classList.add('bx', 'bxs-trash', 'delete-btn');
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        listItem.appendChild(taskName);
        listItem.appendChild(completeButton);
        listItem.appendChild(editButton); // Add the edit icon to the list item
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

// Add an editTask function to handle editing the task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newTaskName = prompt('Edit the task:', task.name);
        if (newTaskName !== null) {
            task.name = newTaskName;
            renderTasks();
        }
    }
}
let userName = ''; // Added a variable to store the user's name

function startTaskTracker() {
    const userNameInput = document.getElementById('userNameInput');
    userName = userNameInput.value.trim();

    if (userName !== '') {
        // Hide the welcome page
        document.querySelector('.welcome-page').style.display = 'none';

        // Display the Task Tracker section
        document.getElementById('taskApp').style.display = 'block';

        // Update the welcome message in the Task Tracker
        const welcomeMessage = document.querySelector('.todo-app h1');
        welcomeMessage.textContent = `Task Tracker - Welcome, ${userName}!`;

        // Focus on the task input field
        document.getElementById('taskInput').focus();
    }
}

// Rest of your code for addTask, deleteTask, markCompeleted, editTask, and renderTasks

renderTasks(); // Initial rendering of tasks



renderTasks()     