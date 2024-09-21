document.addEventListener('DOMContentLoaded', function () {
	const addTaskButton = document.getElementById('add-task-button');
	const newTaskInput = document.getElementById('new-task');
	const column1 = document.querySelector('.column1'); // Select the .column1 div
	const moveAllButton = document.getElementById('move-all-button'); // Move All button

	// Function to add a task
	function addTask() {
		const taskText = newTaskInput.value.trim(); // Get the input value and trim any extra spaces

		if (taskText) {
			// Create a new list item
			const newItem = createTaskItem(taskText);
			column1.appendChild(newItem); // Append the new list item to the .column1 div
			newTaskInput.value = ''; // Clear the input field after adding the task
		}
	}

	// Function to create a task item with a remove button
	function createTaskItem(taskText) {
		const newItem = document.createElement('li');
		newItem.classList.add('task-item'); // Add a class for styling

		const taskContent = document.createElement('span');
		taskContent.textContent = taskText;

		const removeButton = document.createElement('button');
		removeButton.textContent = 'X';
		removeButton.classList.add('remove-button'); // Add a class for styling

		// Add an event listener to the 'X' button to remove the task
		removeButton.addEventListener('click', function () {
			newItem.remove(); // Remove the list item when 'X' is clicked
		});

		newItem.appendChild(taskContent);
		newItem.appendChild(removeButton);
		return newItem; // Return the new list item
	}

	// Add event listener for the Add Task button
	addTaskButton.addEventListener('click', addTask);

	// Event listener for the "Enter" key on the input field
	newTaskInput.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			addTask();
		}
	});

	// Move all tasks from column1 to column2
	moveAllButton.addEventListener('click', function () {
		const tasks = Array.from(column1.querySelectorAll('li')); // Get all tasks in column1
		const column2 = document.querySelector('.column2'); // Select the column2 div

		tasks.forEach((task) => {
			const taskText = task.querySelector('span').textContent; // Get task text
			const newTask = createTaskItem(taskText); // Create a new task item
			column2.appendChild(newTask); // Move the new task to column2
			task.remove(); // Remove the original task from column1
		});
	});
});
