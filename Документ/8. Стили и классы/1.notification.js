// Создать уведомление

// Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> 
// с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.

// Пример объекта options:
// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
	top: 10, // 10px от верхней границы окна (по умолчанию 0px)
	right: 10, // 10px от правого края окна (по умолчанию 0px)
	html: "Hello!", // HTML-уведомление
	className: "welcome" // дополнительный класс для div (необязательно)
});

// Используйте CSS-позиционирование для отображения элемента в заданных координатах. Исходный документ имеет необходимые стили.

function showNotification(options) {
	const { top, right, html, className } = options;
	const container = document.querySelector('.container');

	const notification = document.createElement('div');
	notification.classList.add('notification');
	notification.innerHTML = html;
	notification.style.top = `${top}px`;
	notification.style.right = `${right}px`;

	if (className) {
		notification.classList.add(className);
	}

	container.append(notification);

	setTimeout(() => notification.remove(), 1500);
}