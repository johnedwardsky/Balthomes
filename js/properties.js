/**
 * Список объектов недвижимости.
 * Чтобы добавить объект, скопируйте блок внутри фигурных скобок {},
 * вставьте его после запятой и измените данные.
 *
 * image: путь к картинке. Можно использовать ссылку или локальный файл (например, 'images/kvartira1.jpg')
 * price: цена
 * title: заголовок карточки
 * meta1: первая характеристика (например, площадь)
 * meta2: вторая характеристика (например, район или этаж)
 * description: краткое описание
 */
const properties = [
    {
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500',
        price: '7 500 000 ₽',
        title: 'Евродвушка в Зеленоградске',
        meta1: '<i class="fas fa-expand"></i> 45 м²',
        meta2: '<i class="fas fa-water"></i> у моря',
        description: 'ЖК "Прибой", идеальна под сдачу. Новый ремонт.'
    },
    {
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500',
        price: '12 300 000 ₽',
        title: 'Центр Калининграда',
        meta1: '<i class="fas fa-expand"></i> 82 м²',
        meta2: '<i class="fas fa-city"></i> Верхнее озеро',
        description: 'Премиум-класс, серый ключ, панорамные окна.'
    },
    {
        image: 'https://images.unsplash.com/photo-1600596542815-2495db9dc2c3?w=500',
        price: '15 000 000 ₽',
        title: 'Дом в Гурьевске',
        meta1: '<i class="fas fa-home"></i> 150 м²',
        meta2: '<i class="fas fa-tree"></i> 8 соток',
        description: 'ИЖС, все коммуникации, 15 минут до центра.'
    }
];

// Функция для отрисовки карточек
function renderProperties() {
    const container = document.getElementById('properties-container');
    if (!container) return; // Если контейнер не найден, выходим

    container.innerHTML = ''; // Очищаем контейнер

    properties.forEach(prop => {
        const cardHTML = `
            <div class="card">
                <div class="card-img">
                    <img src="${prop.image}" alt="${prop.title}">
                    <div class="card-price">${prop.price}</div>
                </div>
                <div class="card-body">
                    <h3>${prop.title}</h3>
                    <div class="card-meta">
                        <span>${prop.meta1}</span>
                        <span>${prop.meta2}</span>
                    </div>
                    <p style="font-size: 14px; color: #555;">${prop.description}</p>
                    <button class="btn btn-primary" onclick="openModal('${prop.title}')" style="width:100%; margin-top:10px;">Подробнее</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Запускаем отрисовку после загрузки страницы
document.addEventListener('DOMContentLoaded', renderProperties);

function openModal(propertyName) {
    // В будущем можно сделать модальное окно. Пока просто скролл к форме.
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth' });
        // Можно предзаполнить какое-то скрытое поле, если нужно
        console.log("Интересует объект: " + propertyName);
    }
}
