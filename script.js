
	VanillaTilt.init(document.querySelector(".glass"), {
		max: 25,
		speed: 800
	});
	
	//It also supports NodeList
	//VanillaTilt.init(document.querySelectorAll(".glass"));



function menuToggle(){
    const toggleMenu = document.querySelector('.toggle');
    const section = document.querySelector('section');
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
}

	document.addEventListener("DOMContentLoaded", () => {
		// Crop form submission
		document.getElementById('cropForm').addEventListener('submit', function(event) {
			event.preventDefault();
			addCrop();
			alert("The Crop details was submitted");
		});
	
		// Task form submission
		document.getElementById('taskForm').addEventListener('submit', function(event) {
			event.preventDefault();
			addTask();
			alert("The Task details was submitted");
		});
	
		// Resource form submission
		document.getElementById('resourceForm').addEventListener('submit', function(event) {
			event.preventDefault();
			addResource();
			alert("The Resource details was submitted");
		});
	});
	
	function addCrop() {
		const cropName = document.getElementById('cropName').value;
		const cropType = document.getElementById('cropType').value;
		const cropQuantity = document.getElementById('cropQuantity').value;
		const plantingDate = document.getElementById('plantingDate').value;
		const harvestDate = document.getElementById('harvestDate').value;
	
		const cropItem = document.createElement('li');
		cropItem.innerHTML = `
			<span>Crop Name: ${cropName}</span>,
			<span>Crop Type: ${cropType}</span>,
			<span>Quantity: ${cropQuantity} kg</span><br>
			<span>Planting Date: ${plantingDate}</span>,
			<span>Harvest Date: ${harvestDate}</span><br>
			<button onclick="deleteItem(this)">Delete</button>
		`;
		document.getElementById('cropList').appendChild(cropItem);
		updateDashboardCounts();
		document.getElementById('cropForm').reset();
	}
	
	function addTask() {
		const taskDescription = document.getElementById('taskDescription').value;
		const taskDate = document.getElementById('taskDate').value;
		const assignedTo = document.getElementById('assignedTo').value;
		const taskPriority = document.getElementById('taskPriority').value;
	
		const taskItem = document.createElement('li');
		taskItem.innerHTML = `
			<span>Task Name: ${taskDescription}</span>,
			<span>Task Date: ${taskDate}</span>,
			<span>Assigned To: ${assignedTo}</span>,
			<span>Priority: ${taskPriority}</span><br>
			<button onclick="deleteItem(this)">Delete</button>
		`;
		document.getElementById('taskList').appendChild(taskItem);
		updateDashboardCounts();
		document.getElementById('taskForm').reset();
	}
	
	function addResource() {
		const resourceName = document.getElementById('resourceName').value;
		const resourceQuantity = document.getElementById('resourceQuantity').value;
		const resourceType = document.getElementById('resourceType').value;
	
		const resourceItem = document.createElement('li');
		resourceItem.innerHTML = `
			<span>Resource Name: ${resourceName}</span>,
			<span>Quantity: ${resourceQuantity}</span>,
			<span>Resource Type: ${resourceType}</span><br>
			<button onclick="deleteItem(this)">Delete</button>
		`;
		document.getElementById('resourceList').appendChild(resourceItem);
		updateDashboardCounts();
		document.getElementById('resourceForm').reset();
	}
	
	function deleteItem(button) {
		button.parentElement.remove();
		updateDashboardCounts();
	}
	
	function updateDashboardCounts() {
		document.getElementById('totalCrops').textContent = document.getElementById('cropList').children.length;
		document.getElementById('totalTasks').textContent = document.getElementById('taskList').children.length;
		document.getElementById('totalResources').textContent = document.getElementById('resourceList').children.length;
	}
	