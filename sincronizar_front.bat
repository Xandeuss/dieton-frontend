@echo off
echo Sincronizando Frontend com GitHub...
git add .
git commit -m "Sincronizacao manual do front"
git push origin main
echo Pronto! O Netlify vai atualizar o site em alguns segundos.
pause
