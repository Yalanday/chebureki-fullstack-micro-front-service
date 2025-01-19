# Базовый образ с Node.js
FROM node:16-slim

# Рабочая директория в контейнере
WORKDIR /app

# Копируем все файлы проекта в контейнер (включая package.json)
COPY . .

# Устанавливаем зависимости
RUN npm install

# Собираем проект (если нужно)
RUN npm run build

# Открываем порт 3001
EXPOSE 3001

# Запускаем сервер через Node.js
CMD ["npm", "start"]


# docker build -t back-1 .
# docker run -p 3001:3001 back-1
