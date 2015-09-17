rem 请将此bat文件放在要修改的$MAHOME中执行！
@echo off&setlocal enabledelayedexpansion
set /p newip=请输入IP(例如"192.168.1.65"):
set /p newport=请输入PORT(例如"8089"):
set newurl=%newip%:%newport%
set /p newds=请输入数据源名称(例如"nc65"):
echo 您输入的地址是%newurl%
echo 您输入的数据源名称是%newds%
pause

echo 更新开始。。。
set mh=%~dp0

rem 更新conf/configure/../datasource.xml
for /f "tokens=*" %%i in ('dir /ad /b "%mh%conf\configure"') do (
IF EXIST %mh%conf\configure\%%i\datasources.xml (
cd/d %mh%conf\configure\%%i
echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_123.xml
for /f "skip=1 delims=" %%A in (%mh%conf\configure\%%i\datasources.xml) do (
set var=%%A
(echo "%%A"|findstr /i "<url>")&&set "var=        <url>http://%newurl%</url>"
 echo !var! >>New_123.xml)
del datasources.xml
ren New_123.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%A in (%mh%conf\configure\%%i\datasources.xml) do (
set var=%%A
(echo "%%A"|findstr /i "<ncds>")&&set "var=        <ncds>%newds%</ncds>"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%Z in (%mh%conf\configure\%%i\datasources.xml) do (
set "var=%%Z"
(echo "%%Z"|findstr /i "<//")&&set "var=<^!--注释-->"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%Z in (%mh%conf\configure\%%i\datasources.xml) do (
set "var=%%Z"
(echo "%%Z"|findstr /i "ECHO 处于关闭状态。")&&set "var=<^!--注释-->"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%Z in (%mh%conf\configure\%%i\datasources.xml) do (
set "var=%%Z"
(echo "%%Z"|findstr /i "<--")&&set "var=<^!--注释-->"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

))

rem 更新conf/configure/sso/../datasource.xml
for /f "tokens=*" %%j in ('dir /ad /b "%mh%conf\configure\sso"') do (
IF EXIST %mh%conf\configure\sso\%%j\datasources.xml (
cd/d %mh%conf\configure\sso\%%j
echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_123.xml
for /f "skip=1 delims=" %%A in (%mh%conf\configure\sso\%%j\datasources.xml) do (
set var=%%A
(echo "%%A"|findstr /i "<url>")&&set "var=        <url>http://%newurl%</url>"
 echo !var! >>New_123.xml)
del datasources.xml
ren New_123.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%A in (%mh%conf\configure\sso\%%j\datasources.xml) do (
set var=%%A
(echo "%%A"|findstr /i "<ncds>")&&set "var=        <ncds>%newds%</ncds>"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%Z in (%mh%conf\configure\sso\%%j\datasources.xml) do (
set "var=%%Z"
(echo "%%Z"|findstr /i "<//")&&set "var=<^!--注释-->"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%Z in (%mh%conf\configure\sso\%%j\datasources.xml) do (
set "var=%%Z"
(echo "%%Z"|findstr /i "ECHO 处于关闭状态。")&&set "var=<^!--注释-->"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%Z in (%mh%conf\configure\sso\%%j\datasources.xml) do (
set "var=%%Z"
(echo "%%Z"|findstr /i "<--")&&set "var=<^!--注释-->"
echo !var! >>New_1234.xml)
del datasources.xml
ren New_1234.xml datasources.xml

))

rem 更新conf/configure/../WAServerConfig.xml
for /f "tokens=*" %%i in ('dir /ad /b "%mh%conf\configure"') do (
IF EXIST %mh%conf\configure\%%i\WAServerConfig.xml (
cd/d %mh%conf\configure\%%i
echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_123.xml
for /f "skip=1 delims=" %%A in (%mh%conf\configure\%%i\WAServerConfig.xml) do (
set var=%%A
(echo "%%A"|findstr /i "<serviceip>")&&set "var=      <serviceip>%newip%</serviceip>"
 echo !var! >>New_123.xml)
del WAServerConfig.xml
ren New_123.xml WAServerConfig.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_123.xml
for /f "skip=1 delims=" %%A in (%mh%conf\configure\%%i\WAServerConfig.xml) do (
set var=%%A
(echo "%%A"|findstr /i "<serviceport>")&&set "var=      <serviceport>%newport%</serviceport>"
 echo !var! >>New_123.xml)
del WAServerConfig.xml
ren New_123.xml WAServerConfig.xml

echo ^<?xml version="1.0" encoding="UTF-8"?^>>New_1234.xml
for /f "skip=1 delims=" %%A in (%mh%conf\configure\%%i\WAServerConfig.xml) do (
set var=%%A
(echo "%%A"|findstr /i "<systemdatasource>")&&set "var=      <systemdatasource>%newds%</systemdatasource>"
echo !var! >>New_1234.xml)
del WAServerConfig.xml
ren New_1234.xml WAServerConfig.xml

))

echo 更新成功。