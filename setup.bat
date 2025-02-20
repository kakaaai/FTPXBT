@echo off
setlocal enabledelayedexpansion

:: Colors for Windows console
set "BLUE=[94m"
set "GREEN=[92m"
set "RED=[91m"
set "RESET=[0m"

:: Print functions
:print_status
echo %BLUE%==^>%RESET% %~1
exit /b

:print_success
echo %GREEN%==^>%RESET% %~1
exit /b

:print_error
echo %RED%==^>%RESET% %~1
exit /b

:: Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% neq 0 (
    call :print_error "npm is not installed. Please install Node.js and npm first."
    exit /b 1
)

:: Install dependencies
call :print_status "Installing dependencies..."
call npm install
if %ERRORLEVEL% neq 0 (
    call :print_error "Failed to install dependencies"
    exit /b 1
)

:: Initialize project directories
call :print_status "Initializing project directories..."
call npm run setup:dirs
if %ERRORLEVEL% neq 0 (
    call :print_error "Failed to initialize directories"
    exit /b 1
)

:: Setup fonts
call :print_status "Setting up fonts..."
call npm run setup:fonts
if %ERRORLEVEL% neq 0 (
    call :print_error "Failed to setup fonts"
    exit /b 1
)

:: Generate placeholder images
call :print_status "Generating placeholder images..."
call npm run setup:images
if %ERRORLEVEL% neq 0 (
    call :print_error "Failed to generate images"
    exit /b 1
)

:: Create .env file if it doesn't exist
if not exist .env (
    call :print_status "Creating .env file..."
    copy .env.example .env >nul
)

call :print_success "Setup complete! You can now run 'npm run dev' to start the development server."
call :print_success "Visit http://localhost:3000 to see your website."

endlocal