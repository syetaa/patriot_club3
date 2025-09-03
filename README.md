This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Kino+



1. Общая информация о проекте
«Кино+» — веб-приложение для поиска и просмотра информации о фильмах и сериалах. Пользователи могут регистрироваться, просматривать популярные фильмы, добавлять их в избранное и получать детальную информацию о каждом фильме.
Стек технологий:
•	Frontend: Next.js, CSS-модули, React
•	Backend: FastAPI
•	База данных: PostgreSQL
•	Аутентификация: JWT (access и refresh токены)
•	Документация API: Swagger

2. Архитектура приложения
Frontend
•	Главная страница: отображает популярные фильмы и слайдеры
•	Страница фильма: показывает название, год выпуска, постер, описание, жанр, режиссера, рейтинг
•	Страница избранного: список фильмов, добавленных пользователем
•	Контекст авторизации: хранит токен и информацию о текущем пользователе
Backend
•	Пользователи: регистрация, логин, получение данных о текущем пользователе
•	Фильмы: список всех фильмов, получение деталей фильма
•	Избранное: добавление и удаление фильмов из списка пользователя
•	API эндпоинты защищены JWT, refresh-токен используется для обновления access-токена

3. Эндпоинты API
Пользователи
1.	Регистрация
o	URL: /auth/register
o	Метод: POST
o	Параметры: email, password
o	Ответ: JSON с access_token и refresh_token
2.	Логин
o	URL: /auth/login
o	Метод: POST
o	Параметры: email, password
o	Ответ: JSON с access_token, refresh_token устанавливается в cookie
3.	Получение данных текущего пользователя
o	URL: /auth/me
o	Метод: GET
o	Параметры: access_token в заголовке Authorization
o	Ответ: JSON с информацией о пользователе (id, email, дата регистрации)
Фильмы
1.	Список всех фильмов
o	URL: /movies
o	Метод: GET
o	Ответ: JSON массив фильмов с полями id, title, year, poster, genre, director, rating
2.	Детали фильма
o	URL: /movies/{id}
o	Метод: GET
o	Параметры: id фильма
o	Ответ: JSON с полным описанием фильма
Избранное
1.	Добавление фильма в избранное
o	URL: /favorites
o	Метод: POST
o	Параметры: id фильма, токен пользователя
o	Ответ: статус операции
2.	Получение списка избранного пользователя
o	URL: /favorites
o	Метод: GET
o	Параметры: токен пользователя
o	Ответ: JSON массив фильмов, добавленных пользователем

4. Структура базы данных
Таблица users
•	id: integer, primary key
•	email: string, уникальный
•	password_hash: string
•	created_at: timestamp
Таблица movies
•	id: integer, primary key
•	title: string
•	year: integer
•	poster: string
•	description: text
•	genre: string
•	director: string
•	rating: float
Таблица favorites
•	id: integer, primary key
•	user_id: foreign key -> users.id
•	movie_id: foreign key -> movies.id

5. Примеры использования
Добавление фильма в избранное:
1.	Пользователь нажимает кнопку "Добавить в избранное" на странице фильма
2.	Frontend отправляет POST-запрос на /favorites с id фильма и токеном пользователя
3.	Backend проверяет токен и добавляет запись в таблицу favorites
Получение списка избранного:
1.	Frontend делает GET-запрос на /favorites с токеном пользователя
2.	Backend возвращает массив фильмов, сохраненных пользователем


