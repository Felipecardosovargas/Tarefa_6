   // Lista de tarefas
   const tasks = [];

   // Função para adicionar uma nova tarefa
   function addTask(name) {
       if (name.trim() === "") {
           alert("O nome da tarefa não pode estar vazio!");
           return;
       }
       const newTask = {
           name: name,
           createdAt: new Date().toLocaleString(),
           completed: false,
       };
       tasks.push(newTask);
       renderTasks();
   }

   // Função para marcar uma tarefa como concluída
   function completeTask(index) {
       tasks[index].completed = true;
       renderTasks();
   }

   // Função para listar as tarefas pendentes (renderização na tela)
   function renderTasks() {
       const taskList = document.getElementById("taskList");
       taskList.innerHTML = ""; // Limpa a lista antes de renderizar novamente
       tasks.forEach((task, index) => {
           const taskDiv = document.createElement("div");
           taskDiv.className = `task ${task.completed ? "completed" : ""}`;
           taskDiv.innerHTML = `
               <span>${task.name} <br><small>${task.createdAt}</small></span>
               ${
                   !task.completed
                       ? `<button class="complete" onclick="completeTask(${index})">Concluir</button>`
                       : ""
               }
           `;
           taskList.appendChild(taskDiv);
       });
   }

   // Adicionar tarefa ao clicar no botão
   document.getElementById("addTaskButton").addEventListener("click", () => {
       const taskInput = document.getElementById("taskInput");
       addTask(taskInput.value);
       taskInput.value = ""; // Limpa o campo de entrada
   });

   // Adicionar tarefa ao pressionar Enter no campo de entrada
   document.getElementById("taskInput").addEventListener("keypress", (event) => {
       if (event.key === "Enter") {
           const taskInput = document.getElementById("taskInput");
           addTask(taskInput.value);
           taskInput.value = ""; // Limpa o campo de entrada
       }
   });