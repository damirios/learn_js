// Добавить кнопку закрытия

// Есть список сообщений.

// При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

const panes = document.querySelectorAll('.pane');

panes.forEach(pane => {
    pane.style.position = 'relative';
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.textContent = '[x]';
    removeButton.style.position = 'absolute';
    removeButton.style.zIndex = 2;
    removeButton.style.top = '10px';
    removeButton.style.right = '10px';

    removeButton.addEventListener('click', () => pane.style.display = 'none');
    pane.append(removeButton);
});
