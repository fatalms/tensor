# Вёрстка макета "TENSOR SCHOOL"

-   [Макет](https://www.figma.com/file/pWtalJmD6aLSLa437yTVA9/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D0%B4%D0%BB%D1%8F-TENSOR-SCHOOL?node-id=8%3A515)
-   [Прототип](https://www.figma.com/proto/pWtalJmD6aLSLa437yTVA9/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D0%B4%D0%BB%D1%8F-TENSOR-SCHOOL?page-id=0%3A1&node-id=17%3A2008&viewport=256%2C48%2C0.18&scaling=min-zoom&starting-point-node-id=17%3A2008&show-proto-sidebar=1)

## Установка и работа с шаблоном:

-   `npm install`
-   `gulp`

Шаблон начнет работать в режиме разработчика, без сжатия картинок и кода.

## Сборка

-   `gulp build`

Если после выполнения `gulp build` файлы редактировались, действие (`gulp build`) нужно повторить.

## Возможные проблемы и их решения:

### Ошибка node-sass.

Решения:

`npm rebuild node-sass`
и/или
`npm install sass gulp-sass --save-dev`

### Ошибка Python

Решениe:

`npm install --global windows-build-tools`

### Ошибка imagemin

Варианты решения :

-   папки и файлы должны быть названы латиницей без пробелов
-   тег img и его содержимое должны быть записаны в одну строку без переносов
-   в атрибуте src должен быть указан путь к существующей картинке
