# Базовый образ с Node.js
FROM node:16-slim

# Рабочая директория в контейнере
WORKDIR /app

# Копируем собранные файлы в контейнер
COPY dist/ .

# Устанавливаем http-server для обслуживания статических файлов
RUN npm install -g http-server

# Открываем порт 4177
EXPOSE 4174

# Запускаем http-server на порту 4177 с разрешением CORS
CMD ["http-server", ".", "-p", "4174", "--cors"]


# docker build -t fr-2 .  
# docker run -p 4174:4174 fr-2   