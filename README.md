# POC_PALA Project

## Description

The POC_PALA project is a proof-of-concept (POC) for testing applications across various platforms using the WebdriverIO test framework. This project supports testing on Desktop WEB, Android and iOS WEB, and Android and iOS mobile applications. While not all locators are provided for every platform, collaboration with the development team is essential to create more stable and robust tests. The project also includes Allure and Spec report modules for enhanced reporting capabilities.

## Project Structure

- **Config Folder**: Contains configuration files for running tests on different platforms.
- **Allure-report & Allure-results**: Directories for storing Allure reports and results.
- **Test Folder**: Contains test-related files:
  - **data**: Collected data for parameterizing tests.
  - **helpers**: Helper methods for reuse in tests.
  - **pageObjects**: Page Object files for the application.
  - **specs**: Test scripts:
    - `happyPathTestPO.js`: Test cases based on Page Objects for login, play game, and logout scenarios.
    - `createNewUser.js`: Test for creating a new user using helper methods.
    - `accountBalance.js`: Test for checking the user's balance.
    - `recPlayAppiumTest.js`: Example demonstrating that the framework can work with the Rec & Play plugin from Chrome.
    - `test.js`: Test with locators inside.

## Running Tests

- **RunAndroidAPPKillNodeGenerateReport.cmd**: Script for running tests on the Android app and preparing an Allure report. Modify line 14 to specify the test or set of tests to be executed.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/POC_PALA.git
    ```
2. Navigate to the project directory:
    ```bash
    cd POC_PALA
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. **Running Tests**:
    - For Android App:
        ```bash
        ./RunAndroidAPPKillNodeGenerateReport.cmd
        ```
    - Modify the script if needed to specify different tests or configurations.

2. **Viewing Reports**:
    - Allure Report:
        ```bash
        allure serve
        ```
