# Используем готовый образ с nginx
FROM nginx:alpine

# Копируем наш HTML-файл в стандартную папку nginx
COPY . /usr/share/nginx/html/

# Открываем порт 80 внутри контейнера
EXPOSE 80