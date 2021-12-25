@echo off
for %%a in (D:\Code\HexoBlog\source\assets\*.png) do (cwebp.exe -q 80 %%a -o %%~na.webp)
pause