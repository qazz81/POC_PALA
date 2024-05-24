@echo off

setlocal

set process=node.exe

tasklist /fi "imagename eq %process%"
taskkill /f /im %process%

if errorlevel 1 (
    echo %process% process is not running.
) else (
    
    echo %process% process has been killed.
)

endlocal