@echo off
cls
echo ******************************************
echo *********   Abwba IOT DataBase   *********
echo ******************************************

if not exist %cd%\data (
    md %cd%\data
    echo creat data folder for MongoDB!
)

echo.
echo Start MongoDB ...
%cd%\bin\mongod.exe --dbpath %cd%\data
echo.

pause