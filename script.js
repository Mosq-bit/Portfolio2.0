document.addEventListener('DOMContentLoaded', function() {
            const terminal = document.getElementById('terminal');
            const commandInput = document.getElementById('command-input');
            const currentTime = document.getElementById('current-time');
            
            // Обновляем текущее время
            function updateTime() {
                const now = new Date();
                currentTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
            
            setInterval(updateTime, 1000);
            updateTime();
            
            // Данные портфолио
            const portfolioData = {
                name: "Алексей Ващилин",
                role: "Фронтенд-разработчик",
                about: "Я Алексей Ващилин, Фронтенд-разработчик с 2-летним опытом, специализируюсь на фронтенд-разработке. Имею опыт работы с современными веб-технологиями и инструментами. Использую ИИ в разработке для повышения эффективности. Стремлюсь к профессиональному росту, хочу влиться в команду, где смогу развивать свои навыки и приносить пользу. Готов к сложным задачам и постоянному обучению. Имею глубокое понимание принципов создания адаптивных и доступных веб-интерфейсов.",
                projects: [
                    {
                        title: "Проект Lorem",
                        year: "2024",
                        description: "Адаптивный лендинг для IT-компании. Реализована анимация элементов, валидация формы, адаптивная верстка.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/Project_LOREM/"
                    },
                    {
                        title: "Проект Шаблон",
                        year: "2024",
                        description: "Универсальный шаблон сайта с настраиваемыми компонентами. Использованы CSS Grid и Flexbox.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/Test-project/"
                    },
                    {
                        title: "Проект Alto",
                        year: "2025",
                        description: "Интернет-магазин музыкального оборудования. Реализована корзина, фильтрация товаров.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/Alto/"
                    },
                    {
                        title: "Проект Blog",
                        year: "2025",
                        description: "Персональный блог с системой комментариев. Верстка по готовому дизайну.",
                        tags: ["HTML", "CSS", "JavaScript", "Верстка по образцу"],
                        link: "https://mosq-bit.github.io/Blog/"
                    },
                    {
                        title: "Проект Vela",
                        year: "2025",
                        description: "Сайт для яхт-клуба с интерактивной картой и галереей.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/vela/"
                    },
                    {
                        title: "Проект Crhoy",
                        year: "2025",
                        description: "Корпоративный сайт с системой управления контентом.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/Crhoy/"
                    },
                    {
                        title: "Проект Атлант Газ",
                        year: "2025",
                        description: "Сайт компании по продаже газового оборудования.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/-/"
                    },
                    {
                        title: "Проект InHouse",
                        year: "2025",
                        description: "Платформа для поиска недвижимости с интерактивной картой.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma", "SwiperJS"],
                        link: "https://mosq-bit.github.io/InHouse/"
                    },
                    {
                        title: "Проект Dj",
                        year: "2025",
                        description: "Сайт для диджея с музыкальным плеером и галереей мероприятий.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma", "SwiperJS"],
                        link: "https://mosq-bit.github.io/DJ/"
                    },
                    {
                        title: "Проект Velocity",
                        year: "2025",
                        description: "Сайт автосервиса с системой записи и калькулятором услуг.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/Velocity/"
                    },
                             {
                        title: "Проект EasyFest",
                        year: "2025",
                        description: "Сайт организации праздника.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/EasyFest/"
                    },
                            {
                        title: "Проект Art",
                        year: "2025",
                        description: "Сайт надувных шаров.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/Art/"
                    },
                             {
                        title: "Проект Surfing School",
                        year: "2025",
                        description: "Сайт Школы Серфинга.",
                        tags: ["HTML", "CSS", "JavaScript", "Figma"],
                        link: "https://mosq-bit.github.io/Serfing-School/"
                    }
                            
                ],
                skills: {
                    "Технические": ["JavaScript", "HTML/CSS", "React", "Node.js", "Git"],
                    "Дизайн": ["UI/UX", "Figma", "Adobe XD", "Прототипирование"],
                    "Языки": ["Русский (родной)", "Английский (B2)"]
                },
                contacts: {
                    "Email": "mailto:naijek@gmail.com",
                    "GitHub": "https://github.com/Mosq-bit",
                    "LinkedIn": "https://linkedin.com/in/алексей-ващилин-4891b1358/",
                    "Телефон": "tel:+79265452477"
                }
            };
            
            // Создание сообщения
            function createMessage(sender, content) {
                const templateId = sender === 'ai' ? 'ai-message-template' : 'user-message-template';
                const template = document.getElementById(templateId).content.cloneNode(true);
                
                template.querySelector('.message-content').innerHTML = content;
                template.querySelector('.message-time').textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                
                terminal.appendChild(template);
                terminal.scrollTop = terminal.scrollHeight;
            }
            
            // Показать эффект набора текста
            function showTyping() {
                const typingElement = document.createElement('div');
                typingElement.className = 'typing';
                typingElement.innerHTML = `
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                `;
                
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message ai-message';
                messageDiv.innerHTML = `
                    <div class="message-header">
                        <span class="message-sender">AI Ассистент</span>
                        <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                `;
                messageDiv.querySelector('.message-header').after(typingElement);
                
                terminal.appendChild(messageDiv);
                terminal.scrollTop = terminal.scrollHeight;
                
                return { messageDiv, typingElement };
            }
            
            // Обработка команд
            function processCommand(command) {
                command = command.trim().toLowerCase();
                
                // Показываем эффект набора
                const { messageDiv, typingElement } = showTyping();
                
                // Имитируем задержку ответа
                setTimeout(() => {
                    // Удаляем эффект набора
                    messageDiv.removeChild(typingElement);
                    
                    let response = '';
                    
                    // Обработка различных команд
                    if (command === '/help' || command === 'помощь') {
                        response = `
                            Доступные команды:<br><br>
                            <span class="command">/about</span> — Обо мне<br>
                            <span class="command">/projects</span> — Мои проекты<br>
                            <span class="command">/skills</span> — Мои навыки<br>
                            <span class="command">/contact</span> — Контакты<br>
                            <span class="command">/clear</span> — Очистить чат<br><br>
                            Можете просто задать вопрос, например: "Чем ты занимаешься?"
                        `;
                    } 
                    else if (command === '/about' || command === 'обо мне' || command.includes('кто ты')) {
                        response = `
                            <strong>${portfolioData.name}</strong><br>
                            ${portfolioData.role}<br><br>
                            ${portfolioData.about}
                        `;
                    }
                    else if (command === '/projects' || command === 'проекты') {
                        response = '<strong>Мои проекты:</strong><br><br>';
                        
                        portfolioData.projects.forEach(project => {
                            const projectTemplate = document.getElementById('project-template').content.cloneNode(true);
                            projectTemplate.querySelector('.project-title').textContent = project.title;
                            projectTemplate.querySelector('.project-year').textContent = project.year;
                            projectTemplate.querySelector('.project-description').textContent = project.description;
                            
                            const tagsContainer = projectTemplate.querySelector('.project-tags');
                            project.tags.forEach(tag => {
                                const tagElement = document.createElement('span');
                                tagElement.textContent = tag;
                                tagsContainer.appendChild(tagElement);
                            });
                            
                            projectTemplate.querySelector('.project-link').href = project.link;
                            
                            const projectDiv = document.createElement('div');
                            projectDiv.appendChild(projectTemplate);
                            response += projectDiv.innerHTML;
                        });
                    }
                    else if (command === '/skills' || command === 'навыки') {
                        response = '<strong>Мои навыки:</strong><br><br>';
                        response += '<div class="skills-container">';
                        
                        for (const [category, skills] of Object.entries(portfolioData.skills)) {
                            response += `
                                <div class="skill-category">
                                    <h4>${category}</h4>
                                    <ul>
                                        ${skills.map(skill => `<li>${skill}</li>`).join('')}
                                    </ul>
                                </div>
                            `;
                        }
                        
                        response += '</div>';
                    }
                    else if (command === '/contact' || command === 'контакты') {
                        response = '<strong>Мои контакты:</strong><br><br>';
                        response += '<div class="contact-info">';
                        
                        for (const [name, value] of Object.entries(portfolioData.contacts)) {
                            const icon = getContactIcon(name);
                            response += `
                                <div class="contact-item">
                                    ${icon}
                                    <a href="${value}" target="_blank">${name}</a>
                                </div>
                            `;
                        }
                        
                        response += '</div>';
                    }
                    else if (command === '/clear' || command === 'очистить') {
                        terminal.innerHTML = `
                            <div class="message ai-message">
                                <div class="message-header">
                                    <span class="message-sender">AI Ассистент</span>
                                    <span class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                                <div class="message-content">
                                    Чат очищен. Введите <span class="command">/help</span> для списка команд.
                                </div>
                            </div>
                        `;
                        return;
                    }
                    else if (command.includes('привет') || command.includes('hello')) {
                        response = 'Привет! Чем могу помочь? Введите <span class="command">/help</span> для списка команд.';
                    }
                    else if (command.includes('как дела') || command.includes('how are you')) {
                        response = 'У меня всё отлично! Готов рассказать вам о моем создателе. 😊';
                    }
                    else {
                        response = 'Извините, я не понял ваш запрос. Введите <span class="command">/help</span> для списка доступных команд.';
                    }
                    
                    // Добавляем ответ в сообщение
                    const contentDiv = document.createElement('div');
                    contentDiv.className = 'message-content';
                    contentDiv.innerHTML = response;
                    messageDiv.appendChild(contentDiv);
                    
                    // Прокручиваем чат вниз
                    terminal.scrollTop = terminal.scrollHeight;
                }, 1000 + Math.random() * 1000); // Случайная задержка для реалистичности
            }
            
            // Получаем иконку для контакта
            function getContactIcon(name) {
                const icons = {
                    'Email': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
                    'GitHub': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.3.8 2.6v3.9c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>`,
                    'LinkedIn': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
                    'Телефон': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>`
                };
                
                return icons[name] || '';
            }
            
            // Обработка ввода пользователя
            commandInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const command = commandInput.value.trim();
                    if (command) {
                        createMessage('user', command);
                        processCommand(command);
                        commandInput.value = '';
                    }
                }
            });
            
            // Фокус на поле ввода при клике в любом месте терминала
            terminal.addEventListener('click', function() {
                commandInput.focus();
            });
            
            // Автофокус на поле ввода при загрузке
            commandInput.focus();
        });





