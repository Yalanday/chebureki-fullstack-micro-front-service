# Базовый образ с Node.js
FROM node:16-slim

# Рабочая директория в контейнере
WORKDIR /app

# Копируем собранные файлы в контейнер
COPY dist/ .

# Устанавливаем http-server для обслуживания статических файлов
RUN npm install -g http-server

# Открываем порт 4178
EXPOSE 4178

# Запускаем http-server на порту 4178 с разрешением CORS
CMD ["http-server", ".", "-p", "4178", "--cors"]


# docker build -t fr-6 .  
# docker run -p 4178:4178 fr-6   