@echo off
for %%a in (D:\Code\HexoBlog\source\assets\*.png) do (cwebp.exe -q 80 %%a -o %%~na.png.webp)
for %%a in (D:\Code\HexoBlog\source\assets\*.jpg) do (cwebp.exe -q 80 %%a -o %%~na.jpg.webp)
pause