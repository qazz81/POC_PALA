@echo off

REM setlocal
REM setlocal EnableDelayedExpansion
echo Run test
echo %DATE:~0,4%
set consoleLogReportFolder=%DATE:~0,4%_%DATE:~5,2%_%DATE:~8,2%_%TIME:~0,2%_%TIME:~3,2%_%TIME:~6,2%
mkdir .\report\%consoleLogReportFolder%
echo consoleLog folder is .\report\%consoleLogReportFolder%\
REM call npx wdio run .\config\wdio.android.conf.js && > .\report\%consoleLogReportFolder%\consoleLog.txt

FOR /F "delims=" %%i IN ('dir /b /o-d /a-d') DO (
	SET oldestFileDateTime=%%~ti
	SET oldestFile=%%i
)
rem Extract time part and convert to 24-hour format with seconds
set oldestFileTime=%oldestFileDateTime:~11,8%
set amPm=%oldestFileDateTime:~17,2%
set hour=%oldestFileTime:~0,2%
if /i "%amPm%"=="PM" (
    set /a hour=10%oldestFileTime:~0,2%+12-1000
)
set oldestFileTime=%oldestFileDateTime:~0,4%_%oldestFileDateTime:~5,2%_%oldestFileDateTime:~8,2%_%hour%_%oldestFileTime:~3,3%
echo Oldest file name: %oldestFile%
echo Oldest file time in 24h format with seconds: %oldestFileTime%
echo ">>>"

endlocal