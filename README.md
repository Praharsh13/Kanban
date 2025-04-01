# Persistent Kanban Board

This project is a simple Kanban board built with vanilla JavaScript that allows users to add, delete, and drag-and-drop tasks between different boards. The tasks are persisted using the browser's localStorage so that they remain even after a page refresh.

## Features

- **Multiple Boards:**  
  Three boards are available: **To Do**, **In Progress**, and **Done**.

- **Add New Task:**  
  Click the "Add New Task" button to prompt for a new task, which is then added to the **To Do** board.

- **Drag-and-Drop:**  
  Tasks can be dragged within and across boards. When an item is dropped, its new order is saved.

- **Delete Task:**  
  Each task has a delete button ("X") that removes the task and updates the stored data.

- **Persistent Storage:**  
  All tasks are saved to localStorage and reloaded automatically on page refresh.

## Project Structure

- **index.html:**  
  Contains the HTML structure for the Kanban board. Each board's task container is identified by a unique ID (e.g., `to-do-board`, `progress-board`, `done-board`).

- **kanban.css:**  
  Provides a modern, responsive design for the Kanban board using Flexbox, transitions, and hover effects.

- **kanban.js:**  
  Contains all the logic for adding tasks, handling drag-and-drop events, deleting tasks, and saving/loading data from localStorage.

## How It Works

1. **Adding Tasks:**  
   When you click the "Add New Task" button, a prompt appears to enter a task. The task is added to the **To Do** board, and drag events are attached to it.

2. **Drag-and-Drop:**  
   Each task is draggable. When a task is dragged and dropped, the new order is saved automatically to localStorage.

3. **Deleting Tasks:**  
   Clicking the delete button on a task removes it from the board and updates localStorage.

4. **Data Persistence:**  
   The `saveTask()` function gathers tasks from all boards and saves them in localStorage. The `loadTasks()` function reads from localStorage and rebuilds the tasks on page load.

## Setup and Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Praharsh13/Kanban.git
   cd Kanban