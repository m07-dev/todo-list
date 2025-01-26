/**
 * 
 */
import {connecApi} from "./api.js";
import {addTask, displayTask,deleteTask} from "./dom.js";
async function main() {
    try {
        const todos = await connecApi('https://jsonplaceholder.typicode.com/posts/?_limit=5')
        addTask();
        deleteTask();
        
    } catch (e) {
        console.error('An error occurred:', e.message);
    }
}


main();

