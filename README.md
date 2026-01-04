# Community Care

Веб-сайт организации, оказывающей помощь людям в сложных жизненных ситуациях.

## Технологии

- Nuxt 4
- Vue 3
- Bootstrap 5
- TypeScript

## Разработка

Установите зависимости:

```bash
npm install
```

Запустите dev-сервер:

```bash
npm run dev
```

Сайт будет доступен на `http://localhost:3000`

## Деплой на GitHub Pages

Проект настроен для автоматического деплоя на GitHub Pages через GitHub Actions.

### Настройка

1. Убедитесь, что ваш репозиторий называется `communitycare` (или измените `baseURL` в `nuxt.config.ts`)
2. В настройках репозитория GitHub:
   - Перейдите в Settings → Pages
   - В разделе "Source" выберите "GitHub Actions"
3. Запушьте код в ветку `main` - деплой запустится автоматически

### Ручной деплой

Для ручного деплоя выполните:

```bash
npm run generate
```

Затем загрузите содержимое папки `.output/public` на GitHub Pages.

## Структура проекта

- `app/components/` - Vue компоненты
- `app/layouts/` - Layouts
- `app/pages/` - Страницы
- `app/assets/` - Статические ресурсы (CSS, изображения)
- `public/` - Публичные файлы

## Лицензия

Все права защищены © 2024
