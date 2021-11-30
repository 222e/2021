@echo off

:: get the path
cd /d %~dp0
:: auto submit
git add . 
 git commit -m "%date:~0,10%,%time:~0,8%" 
::  git commit -m "%commitMessage%" 
git push origin master
@echo Done,

SET daoTime=5
:dao
set /a daoTime=daoTime-1
ping -n 2 -w 500 127.1>nul
cls
echo Done ,exit soon: %daoTime%seconds
if %daoTime%==0 (exit) else (goto dao)



