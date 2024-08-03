import { defineConfig } from 'vite';

export default defineConfig({
  // Указание базового URL, если ваш сайт будет размещен в поддиректории
  base: '/test/', // Замените <repository-name> на имя вашего репозитория на GitHub
  build: {
    // Настройка пути вывода сборки
    outDir: 'docs', // Раньше было 'dist'
  },
  // Дополнительные настройки конфигурации могут быть здесь
});