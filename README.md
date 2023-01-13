# SQA Assignment 2: Calculator Web App #

Link to our Calculator: https://mrrayyanborg.github.io/SQA_Assignment_2_Calculator/

## Table of Contents ##
1. Introduction
2. Workflow and Standards
3. Coding Standards
4. Linter and Settings
5. Test Plans and Types of Testing
6. SQA Strategy v.1
7. Sprint Planning and PM Tool
8. Retrospective and Process Improvements
9. Pull Requests and Code Review
10. UI Testing and Accessibility Audit
11. CI/CD Pipeline and Integration Tests
12. Regular Contributions and Planning
13. Conclusion

Introduction
------------

This project is a calculator application that performs basic mathematical operations such as addition, subtraction, multiplication, and division. The application is designed to be user-friendly and easy to use. It is built using a combination of JavaScript, HTML, and CSS. The goal of this project is to provide a simple and efficient tool for performing basic mathematical calculations.

Workflow and Standards
----------------------

Our team follows Agile development methodology and we use GitHub Issues for our project management. We have a limited timeframe of 3 weeks to deliver this project, so we will be working in shorter development cycles, with a focus on delivering functional and tested features in a timely manner. We use GitHub for version control and project management, with GitHub Issues set up to track the progress of tasks and issues. Each team member is assigned specific roles and responsibilities, such as developer, tester, and project manager. We have daily stand-up meetings to discuss progress and any blockers.

| Name      | Role |
| ----------- | ----------- |
| Rayyan Borg      | Co-Project Manager & Developer       |
| Jesus Godinho    | Co-Project Manager & Tester            |

We adhere to industry standard coding practices and conventions. We use ESLint for linting and Prettier for code formatting. Our team follows the principles of Test-Driven Development (TDD) and we have a comprehensive suite of unit and integration tests. We use GitHub Actions for our Continuous Integration/Continuous Deployment (CI/CD) pipeline.

We have a well-defined Definition of Done (DoD) and we ensure that all code is thoroughly reviewed before merging into the main branch. We use pull requests for code review and have a checklist in place to ensure all necessary checks are performed before merging. We also have a clear process in place for addressing and resolving conflicts.

We will be using GitHub Issues to manage our work and we will be working in shorter development cycles, with a focus on delivering functional and tested features in a timely manner, to ensure that we meet the deadline.

Coding Standards
----------------

Our team follows a set of coding standards to ensure consistency and maintainability of the codebase. These standards include:

* **Naming conventions for variables, functions, and classes:** We use camelCase for variable and function names, and PascalCase for class names.
* **Indentation:** We use 2 spaces for indentation.
* **Comments:** We use inline comments to explain the purpose of a block of code or to provide additional information about a particular piece of code.
* **Git Commit messages:** We follow the convention of "verb + object" (e.g. "Fix bug in login page" or "Add tests for new feature").
* **File Structure:** We separate the code into different files and folders based on their functionality, this makes it easy to navigate and find the code that we need to work with.
* **Code Review:** Before merging any pull request, we will have at least one other team member review the code.

We also use tools like ESLint and Prettier to help enforce these coding standards, and we have a clear process in place for addressing and resolving any issues that may arise.

Linter and Settings
-------------------

Our team uses ESLint as our linter to catch and prevent errors in our code. ESLint is a powerful linting tool that helps us to maintain a consistent code style and structure, and to identify potential errors and bugs early in the development process.

The workflow eslint.yml is set up to run ESLint on push events to the main branch, and also on pull request events to the same branch, this ensures that the code is linted before being merged. Additionally, the workflow is set to run on a schedule every Tuesday at 14:28.

We have configured ESLint to use the popular airbnb JavaScript style guide as our base configuration, this provides us with a set of well-established coding conventions and best practices that we can follow. Additionally, we also use a set of custom rules that are specific to our project, to further improve the quality of our code.

To ensure that everyone on our team is following the same coding conventions, we have set up a GitHub action that runs ESLint on all files in the repository, and checks for errors or inconsistencies in the code.

You can check and run the linter on your local machine by running 'npx eslint'. command on the root of the project and fix errors according to the output.

Test Plans and Types of Testing
-------------------------------

(Outline the test plans and types of testing used in the project)

SQA Strategy v.1
----------------

(Record the team's discussion on their software quality assurance strategy)

Sprint Planning and PM Tool
---------------------------

(Describe the sprint planning process and the project management tool used)

Retrospective and Process Improvements
--------------------------------------

(Discuss any retrospectives conducted and any improvements made to the processes)

Pull Requests and Code Review
-----------------------------

(Explain the team's strategy for pull requests and code review)

UI Testing and Accessibility Audit
----------------------------------

(Detail any UI testing and accessibility audit done on the project)

CI/CD Pipeline and Integration Tests
------------------------------------

(Provide information on the CI/CD pipeline set up and integration tests)

Regular Contributions and Planning
----------------------------------

(Outline the team's strategy for regular contributions and planning)

Conclusion
-------------------

(Wrap up the readme with a conclusion)
