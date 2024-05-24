@echo off
REM call npx wdio run .\config\wdio.android.conf.js | tee .\report\%consoleLogReportFolder%\consoleLog.txt

setlocal

echo Checking port 4723 and kill process there
REM call .\killNode.cmd
call killHangedPort.cmd

echo Run test
set consoleLogReportFolder=report_%DATE:~0,4%_%DATE:~5,2%_%DATE:~8,2%_%TIME:~0,2%_%TIME:~3,2%_%TIME:~6,2%
mkdir .\report\%consoleLogReportFolder%
echo consoleLog folder is .\report\%consoleLogReportFolder%\
call npx wdio run .\config\wdio.android.conf.js --spec ..\test\specs\HappyPathTestPO.js

echo Generate Allure report 
call .\GenerateAllureReport.cmd

echo Copy consolelog file to Allure Report folder
cd /d .\allure-report

FOR /F "delims=" %%i IN ('dir /b /ad-h /t:c /od') DO SET report_folderLog=%%i

echo Most recent Allure Report: %report_folderLog%
echo ConsoleLog folder is .\report\%consoleLogReportFolder%\
copy /y ..\report\%consoleLogReportFolder%\consoleLog.txt ..\allure-report\%report_folderLog%\

endlocal