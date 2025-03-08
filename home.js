import {connecApi} from "./api.js";
import {addTask, displayTask,deleteTask,taskDone,todo} from "./dom.js";
async function main() {
    try {
        const todosStorage = localStorage.getItem("todos");
        if (todosStorage) {
            todo.push(...JSON.parse(todosStorage)); // Charger la liste des tâches
            todo.forEach(displayTask); // Afficher les tâches stockées
        }

        addTask();
        deleteTask();
        taskDone();
        
    } catch (e) {
        console.error('An error occurred:', e.message);
    }
}

main();
