import { WebApp } from '@twa-dev/sdk';

WebApp.ready(); // Инициализация
const user = WebApp.initDataUnsafe.user; // Данные пользователя

console.log(`Привет, ${user.first_name}!`);