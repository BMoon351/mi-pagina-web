document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica productos ---
    const cards = [1, 2, 3];

    cards.forEach(id => {
        const cardElement = document.getElementById(`card-${id}`);
        const addButton = document.getElementById(`add-${id}`);
        const removeButton = document.getElementById(`remove-${id}`);
        const textElement = document.getElementById(`text-${id}`);
        
        addButton.addEventListener('click', () => {
            cardElement.classList.add('border', 'border-success', 'shadow');
            addButton.textContent = 'Agregado';
            textElement.classList.add('d-none');
        });

        removeButton.addEventListener('click', () => {
            cardElement.classList.remove('border', 'border-success', 'shadow');
            addButton.textContent = 'Seleccionar';
            textElement.classList.remove('d-none');
        });
    });

    // --- Galería dinámica ---
    const imageUrlInput = document.getElementById('image-url');
    const addImageBtn = document.getElementById('add-image-btn');
    const imageGallery = document.getElementById('image-gallery');

    addImageBtn.addEventListener('click', () => {
        const imageUrl = imageUrlInput.value.trim();
        
        if (imageUrl) {
            const newCol = document.createElement('div');
            newCol.classList.add('col-auto', 'text-center');

            const newImage = document.createElement('img');
            newImage.src = imageUrl;
            newImage.alt = 'Nueva imagen de la galería';
            newImage.classList.add('gallery-item');

            newCol.appendChild(newImage);
            imageGallery.appendChild(newCol);
            
            imageUrlInput.value = '';
        } else {
            alert('Por favor, ingresa una URL de imagen válida.');
        }
    });

    // --- Fondo degradado con el mouse ---
    const body = document.body;
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        const hue = Math.round((x / window.innerWidth) * 360);
        const chroma = Math.round((y / window.innerHeight) * 80);
        const luminance = 70;

        const gradientColor1 = `lch(${luminance}% ${chroma} ${hue})`;
        const gradientColor2 = `lch(${luminance}% ${100 - chroma} ${(hue + 120) % 360})`;

        body.style.background = `linear-gradient(to bottom right, ${gradientColor1}, ${gradientColor2})`;
    });

    // --- Lista de tareas ---
    const removeTaskBtn = document.getElementById('remove-task-btn');
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task-input');
    const addTaskBtn = document.getElementById('add-task-btn');

    removeTaskBtn.addEventListener('click', () => {
        const firstTask = taskList.querySelector('li');
        if (firstTask) firstTask.remove();
    });

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            const newTask = document.createElement('li');
            newTask.classList.add('list-group-item');
            newTask.textContent = taskText;
            taskList.appendChild(newTask);
            newTaskInput.value = '';
        } else {
            alert('Escribe una tarea antes de añadirla.');
        }
    });
});
