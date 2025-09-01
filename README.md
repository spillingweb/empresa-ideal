# Empresa Ideal

A simple Laravel + Inertia + React + Typescript app displaying a list of clients, and allowing users to create, update and delete clients.

## How to install

Clone repository and cd into project folder

Run the following commands to install PHP dependencies, create a local .env variable, create clients in the database and install React dependencies:

```
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
npm install

```
If project is located in Herd folder, serve application by running

```
composer run dev
```

Otherwise, run the application in your preferred way (it might be neccessary to change the APP_URL in .env variable)

## Tecnical choices

### Backend
- I chose not to use a Laravel + React starter kit to have better control of project dependencies
- Inertia.js and Ziggy for a more fluid communication between frontend and backend
- ClientFactory and ClientSeeder to populate the database
- Url search params to filter clients table from database
- Laravel's Precognition functionality to implement live validation in forms, based on rules in custom form requests
- Custom form error messages for spanish language
- Pagination functionality to display 15 rows at a time
- Made use of HandleInertiaRequest middleware to fetch flash messages in case of success or error in form submisison

### Frontend
- Use of CSS modules for more control of styling, and a cleaner HTML markup than Tailwind
- Flexbox, media queries and javascript window.innerwidth used to obtain a responsive layout
- A logical HTML structure with header, nav, main and footer, for accessability and SEO purpose
- App is accessible to keyboard users
- Custom React hooks for the table filtering by search params and also to fetch the current window width with the js event handler 'resize'
- Sorting functionality on table
- Responsive Homepage image, to give better performance and less data use
- Display flash messages of success and error in toast messages that disappeared after 3 seconds
- Search in client table debounced by 0.5s
- Colors stored as root variables in app.css, to facilitate color scheme changes
- Used colors from company logo and a complementary one as secondary
- Components separated into folders Pages, Layouts and Components, with a dedicated folder for UI components, for better reusability

## Enjoy the app!
