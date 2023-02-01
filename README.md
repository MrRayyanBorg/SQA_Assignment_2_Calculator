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

You can check and run the linter on your local machine by running `npx eslint .` command on the root of the project and fix errors according to the output.

Test Plans and Types of Testing
-------------------------------

SQA Strategy v.1
----------------

In order to ensure the quality and functionality of our Calculator project, we will be implementing the following SQA strategy:

* **Unit Testing:** We will be writing unit tests for all functions and methods in the calculator using Jest. This will ensure that all individual components of the calculator are working as intended.

* **Integration Testing:** We will be conducting integration testing to ensure that all the functions and methods are working together as a cohesive unit. We will be testing all possible inputs and scenarios to ensure that the calculator can handle edge cases and unexpected inputs.

* **Functional Testing:** We will be testing the calculator's functionality to ensure that it can perform all the necessary mathematical operations (addition, subtraction, multiplication, and division).

* **Usability Testing:** We will be testing the calculator's usability by using it ourselves, as well as by observing others using it. This will help us identify any usability issues and improve the overall user experience.

* **Regression Testing:** We will be conducting regression testing to ensure that any updates or changes made to the calculator do not negatively impact any existing functionality.

* **Acceptance Testing:** We will be conducting acceptance testing to ensure that the calculator meets all the requirements and specifications outlined in the project.

Given that the project is a small one and we only have 3 weeks to deliver it, testing will be done by both Rayyan and Jesus.

Sprint Planning and PM Tool
---------------------------

**Sprint Planning:**
* In order to deliver the project within the 3 week timeframe, we will be using a modified Agile methodology, specifically Scrum.
* Our sprints will be 3 days long, and we will be using GitHub Issues to track the tasks that need to be worked on.
* Each sprint will begin with a planning meeting, where we will go over the goals for the sprint and assign tasks to each team member.
* We will also set up a daily stand-up meeting where we will discuss progress, any blockers and assign tasks for the day.
* At the end of each sprint, we will have a retrospective meeting to review the work done, identify any improvements that can be made, and plan for the next sprint.

**PM Tool:**
* We will be using GitHub for project management, specifically GitHub Issues to track our tasks and progress.
* We will be using the Kanban board view for our GitHub Issues to visualize the workflow and progress.
* We will also be using GitHub's built-in project management features such as milestones and labels to track the progress and status of tasks.
* Additionally, we will be using GitHub's code review feature to review and merge code changes.
* Communication within the team will be done via Slack.

Retrospective and Process Improvements
--------------------------------------

The Retrospective and Process Improvements section of our project will involve regularly reviewing and assessing the progress and effectiveness of our development process. At the end of each sprint, we hold a retrospective meeting where the team will discuss what went well during the sprint, what didn't go well, and identify areas for improvement.

We have used the feedback and insights gained from these retrospectives to make necessary adjustments to our process and workflow in order to optimize our efficiency and effectiveness. Additionally, we will also continuously monitor and analyze metrics such as sprint velocity and code quality to identify any potential issues and make improvements.

To facilitate this process, we have used github to track our progress, assign tasks, and document our retrospectives and process improvements. This will allow us to easily refer back to previous retrospectives and track the progress of our process improvements over time.

Pull Requests and Code Review
-----------------------------

In order to ensure the quality and maintainability of our codebase, all changes to the codebase must be made through pull requests. Before a pull request is merged, it must be reviewed by at least one other team member. This process helps to catch any issues or errors before they are committed to the main branch, and also promotes team collaboration and knowledge sharing.

The following guidelines should be followed when creating and reviewing pull requests:

* Pull requests must be made to the main branch. This is to ensure that only tested and reviewed code is committed to the main branch.
* Pull requests should be made early and often. This allows team members to review and provide feedback on changes as they are being made, rather than waiting until the end of a sprint or feature development.
* All pull requests must be reviewed by at least one other team member. This ensures that at least two sets of eyes have looked over the code before it is merged, and helps to catch any errors or issues that may have been missed by the original developer.
* Code review should focus on overall code quality, maintainability, and adherence to coding standards. This includes checking for things like proper indentation, comments, and naming conventions, as well as checking for any potential bugs or errors in the code.
* All feedback should be constructive and actionable. If a team member finds an issue or error in the code, they should provide specific feedback on how to fix it, rather than just pointing out the problem.
* All feedback should be addressed before the pull request is merged. If a team member finds an issue or error in the code, the original developer should address it and provide an explanation of the changes they made to fix it.
* All pull requests should be tested thoroughly before being merged. This includes running automated tests, as well as manually testing the code to ensure that it behaves as expected.

UI Testing and Accessibility Audit
----------------------------------

UI testing for the calculator involved checking the visual layout, buttons, and overall user interface to ensure it was intuitive and user-friendly. The tests were performed manually and with automated tools to check for consistency across different devices and screen sizes.

Accessibility was a key concern during development, and an accessibility audit was performed to ensure that the calculator was usable for individuals with disabilities. This included testing for keyboard accessibility, screen reader compatibility, and sufficient color contrast for users with visual impairments. The code was also reviewed to ensure it met the Web Content Accessibility Guidelines (WCAG) 2.0 standards.

As a result of the tests and audit, any issues were identified and fixed, such as adding alt text for images and providing alternative text for screen readers. The calculator was tested extensively to ensure that it was accessible and usable for all users, regardless of their abilities.

In addition to the UI and accessibility tests, functional testing was also performed to ensure that the calculator worked as expected. This involved testing basic operations such as addition, subtraction, multiplication, and division, as well as more complex calculations. The results were verified against known results to ensure accuracy.

To further improve the user experience, user testing was conducted with a small group of individuals to gather feedback on the calculator’s ease of use and overall design. The feedback was used to make any necessary improvements, such as adjusting the layout for better readability or adding additional features based on user requests.

In conclusion, the UI testing, accessibility audit, functional testing, and user testing were crucial steps in the development of the calculator to ensure that it met both technical and user requirements. The tests and audits helped identify and fix any issues, improve the overall design, and ensure that the calculator was accessible and usable for all users.

CI/CD Pipeline and Integration Tests
------------------------------------

A Continuous Integration/Continuous Deployment (CI/CD) pipeline was established to automate the testing and deployment of the calculator. This pipeline was integrated with the source code repository and triggered automatically every time changes were pushed to the codebase.

The CI/CD pipeline consisted of multiple stages, including:

Build: The code was built and compiled to ensure it was free of syntax errors and ready for testing.

Unit Tests: Automated unit tests were run to validate the individual functions and components of the calculator. These tests helped catch any issues early in the development process.

Integration Tests: Integration tests were performed to ensure that the different components of the calculator worked together as expected. This stage was crucial in verifying that the calculator functioned correctly and avoided any issues that might arise from conflicting code.

Deployment: Once the tests were completed successfully, the calculator was deployed to a production environment where it was accessible to end users.

The CI/CD pipeline provided several benefits, such as faster and more frequent releases, improved code quality, and reduced manual effort. It also allowed for quick identification and resolution of any issues that might arise during development.

In addition to the CI/CD pipeline, manual testing was also performed to verify the calculator's functionality and catch any issues that might not have been caught by automated tests. This included functional testing, UI testing, and accessibility testing to ensure that the calculator met all technical and user requirements.

To further improve the testing process, test automation was used to increase test coverage and reduce manual effort. Automated tests were written for repeatable and predictable scenarios, such as basic mathematical operations, to ensure that the calculator functioned as expected in different environments.

In conclusion, the CI/CD pipeline and integration tests were crucial in the development of the calculator, as they helped ensure that the calculator was reliable, accurate, and accessible for all users. The tests and pipeline helped catch any issues early in the development process, reducing the risk of defects and ensuring a high-quality product for end users.

Regular Contributions and Planning
----------------------------------

The team used the following strategy for regular contributions and planning:

Agile Methodology: The team adopted an Agile development methodology, which allowed for regular and incremental deliveries of the calculator. This approach allowed the team to quickly respond to changing requirements and incorporate feedback from users.

Sprints: The team used sprints to break down work into smaller, manageable chunks. Sprints typically lasted 2-3 days, and at the end of each sprint, the team reviewed and demonstrated the work that had been completed.

Backlog Management: The team used a product backlog to prioritize and manage work items. The backlog contained a prioritized list of features, bug fixes, and other tasks that needed to be completed. This helped the team prioritize work and ensure that the most important tasks were completed first.

Retrospectives: After each sprint, the team held a retrospective to reflect on the work that had been completed and identify any areas for improvement. This helped the team continuously improve and evolve their processes over time.

Regular Planning: The team held regular planning sessions to determine the work that would be completed in the upcoming sprints. This helped ensure that the team had a clear understanding of the work that needed to be done and that they had the resources and capacity to complete it.

In conclusion, the team's strategy for regular contributions and planning helped ensure that the calculator was developed efficiently and effectively. The Agile methodology, sprints, backlog management, stand-up meetings, retrospectives, and regular planning all contributed to the success of the project and helped the team deliver a high-quality product for end users.

Conclusion
-------------------

(Wrap up the readme with a conclusion)
