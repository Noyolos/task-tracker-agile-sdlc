# 🍽️ Restaurant Operations Task Tracker

A web-based restaurant task tracking system for managing daily internal restaurant operations such as kitchen preparation, cleaning duties, stock checking, service setup, and staff task assignment.

This project was developed for the **BAI21113 Software Engineering Assignment**. It demonstrates **Agile SDLC**, **Scrum**, **iterative and incremental development**, and **GitHub collaboration practices** through two short development iterations.

---

## 📋 Table of Contents

- [Team Members and Roles](#-team-members-and-roles)
- [Problem Statement](#-problem-statement)
- [Product Vision and Scope](#-product-vision-and-scope)
- [System Overview](#-system-overview)
- [User Stories](#-user-stories)
- [Features Implemented](#-features-implemented)
- [How to Run the System](#-how-to-run-the-system)
- [Technology Stack](#-technology-stack)
- [Scrum Process Summary](#-scrum-process-summary)
- [Iteration / Sprint Overview](#-iteration--sprint-overview)
- [GitHub Usage](#-github-usage)
- [Individual Contributions](#-individual-contributions)
- [Future Enhancements](#-future-enhancements)
- [Documentation](#-documentation)
- [Project Status](#-project-status)

---

## 👥 Team Members and Roles

| Name | Role / Responsibility |
|---|---|
| TAN LE PIN | GitHub repository setup, core application development, Iteration 1 implementation, Iteration 2 implementation, version tagging, pull request merging, and final project coordination |
| DHINESH | README documentation, user stories, test plan, iteration plan documentation, pull request submission, and GitHub collaboration |

---

## 🎯 Problem Statement

Small restaurants often manage daily operational tasks through verbal instructions, paper notes, or messaging apps. This can create several problems:

- Staff may forget assigned duties during busy service hours.
- Managers may find it difficult to track whether tasks are still pending or completed.
- Task responsibility may be unclear when multiple staff members are working together.
- Paper-based or verbal tracking can be lost, duplicated, or misunderstood.

The restaurant needs a simple internal task tracking system that helps staff record tasks, assign responsibility, update progress, and keep task records available after refreshing the browser.

---

## 🌟 Product Vision and Scope

**Vision Statement**

To provide a simple and easy-to-use restaurant operations task tracker that helps restaurant staff manage daily work more clearly and efficiently.

**In Scope**

- Create restaurant operation tasks
- View task list
- Edit existing task details
- Delete completed or unnecessary tasks
- Assign tasks to staff or staff position
- Change task status to `To Do`, `In Progress`, or `Done`
- Filter tasks by status
- Save task data using browser `localStorage`
- Improve user interface for clearer task tracking

**Out of Scope / Future Releases**

- Full user registration and login
- Online customer reservation system
- Payment processing
- Real-time database or multi-device sync
- Email or SMS notification
- Advanced role-based access control

> Note: The assignment brief states that a fully complete system is not required. Therefore, this project focuses on the core task management workflow and demonstrates improvement through two iterations.

---

## 📱 System Overview

The **Restaurant Operations Task Tracker** is a lightweight web application built using HTML, CSS, and JavaScript. It runs directly in a web browser and stores task data using browser `localStorage`.

**Main Workflow**

1. The user creates a restaurant operation task.
2. The user enters task details or service instructions.
3. The user assigns the task to a staff member or position, such as `Ben - Chef`.
4. The user selects the task status.
5. The task appears on the Operations Board.
6. The user can edit, delete, or update the task status.
7. The data remains saved after the page is refreshed.

**Example Restaurant Tasks**

- Check kitchen stock level
- Prepare ingredients for dinner service
- Clean dining area before opening
- Follow up customer table booking
- Update daily sales record
- Check supplier delivery
- Report broken kitchen equipment
- Assign closing duties to staff

---

## 📖 User Stories

| ID | User Story | Priority | Iteration | Status |
|---|---|---|---|---|
| US01 | As a user, I want to create a restaurant operation task so that daily duties can be recorded. | High | Iteration 1 | ✅ Complete |
| US02 | As a user, I want to view all created tasks so that I can check current restaurant work. | High | Iteration 1 | ✅ Complete |
| US03 | As a user, I want to delete tasks so that completed or unnecessary duties can be removed. | High | Iteration 1 | ✅ Complete |
| US04 | As a user, I want task data to remain after refreshing the page so that records are not lost. | High | Iteration 1 | ✅ Complete |
| US05 | As a user, I want to edit task details so that restaurant task information can be updated. | Medium | Iteration 2 | ✅ Complete |
| US06 | As a user, I want to assign a task to a staff member or position so that responsibility is clear. | Medium | Iteration 2 | ✅ Complete |
| US07 | As a user, I want to change task status so that work progress can be tracked. | Medium | Iteration 2 | ✅ Complete |
| US08 | As a user, I want to filter tasks by status so that I can quickly find tasks by progress. | Medium | Iteration 2 | ✅ Complete |

**Acceptance Criteria Example**

US01 - Create Task:

- Given the user is on the task tracker page
- When the user enters a task title and submits the form
- Then the task should appear in the task list
- And the task should be saved in browser localStorage

US07 - Change Task Status:

- Given a task already exists
- When the user clicks `To Do`, `In Progress`, or `Done`
- Then the task status should update immediately
- And the updated status should remain after refreshing the page

---

## ✨ Features Implemented

### ✅ Iteration 1 Features

Iteration 1 focused on building the minimum viable version of the system.

- Basic restaurant task creation form
- Task list display
- Delete task function
- Browser localStorage saving
- Basic user interface

### ✅ Iteration 2 Features

Iteration 2 improved the first working version by adding more complete task management features.

- Edit existing tasks
- Assign task to restaurant staff or position
- Task status options: `To Do`, `In Progress`, `Done`
- Status filter
- Form validation for empty task title
- Improved task card layout
- Task status counters
- More restaurant-focused wording and examples

---

## 🚀 How to Run the System

**Prerequisites**

- A modern web browser such as Chrome, Edge, Firefox, or Safari
- No server installation required

**Steps to Run**

1. Clone or download the repository.

```bash
git clone https://github.com/Noyolos/Restaurant-Operations-Task-Tracker.git
```

2. Open the project folder.

```bash
cd Restaurant-Operations-Task-Tracker
```

3. Open `index.html` in a web browser.

4. Use the system:

- Enter a restaurant task title
- Add task details
- Enter assigned staff or position
- Select task status
- Click `Add Task`
- Edit, delete, filter, or update task status as needed

**Testing Suggestions**

- Submit an empty task title to test validation
- Add a task and refresh the page to test localStorage
- Edit a task and check whether the updated value is saved
- Change task status and use the filter dropdown
- Delete a task and refresh the page to confirm it is removed

---

## 🛠 Technology Stack

| Component | Technology | Purpose |
|---|---|---|
| Structure | HTML5 | Page structure and form elements |
| Styling | CSS3 | Layout, task card design, responsive interface |
| Logic | JavaScript | Form handling, validation, DOM updates, task actions |
| Storage | Browser localStorage | Save task data in the browser |
| Version Control | Git and GitHub | Collaboration, commits, branches, pull requests, and tags |

**Why Vanilla JavaScript?**

- Lightweight and easy to run
- No installation or build process required
- Suitable for a small academic web application
- Helps demonstrate fundamental JavaScript and DOM manipulation skills

---

## 📊 Scrum Process Summary

The team selected **Scrum** as the Agile SDLC methodology. Scrum was suitable because the project could be divided into short development iterations, with each iteration delivering a working increment.

**Scrum Artifacts**

- Product backlog: documented through user stories
- Iteration backlog: divided into Iteration 1 and Iteration 2 tasks
- Increment: working system delivered after each iteration

**Scrum Activities Applied**

- Sprint planning: selected user stories for each iteration
- Development work: implemented features in feature branches
- Sprint review: checked completed features at the end of each iteration
- Retrospective: identified improvements for the next iteration

---

## 🏃 Iteration / Sprint Overview

| Stage | Date | Tag / Milestone | Goal | Main Deliverables |
|---|---|---|---|---|
| Initial Setup | 2026-05-16 | Initial commit | Set up project structure | Basic repository and documentation setup |
| Iteration 1 | 2026-05-16 | `v0.1-iteration1` | Build minimum viable task tracker | Add, view, delete, and save tasks |
| Iteration 2 | 2026-05-16 | `v0.2-iteration2` | Improve task management features | Edit, assign staff, status tracking, filtering, validation, UI improvement |
| Documentation Update | 2026-05-19 | Documentation commits | Complete assignment documentation | README, user stories, test plan, iteration plan |
| Final Submission | 2026-05-25 | `v1.0-final-submission` | Prepare final submitted version | Restaurant context refinement and final task tracker polish |

### Iteration 1 Summary

**Sprint Goal:** Develop a basic working restaurant task tracker.

**Completed User Stories:** US01, US02, US03, US04

**Review Outcome:** The team delivered a minimum viable version where users could add, view, delete, and save tasks.

### Iteration 2 Summary

**Sprint Goal:** Improve the system with task management features that make the application more complete.

**Completed User Stories:** US05, US06, US07, US08

**Review Outcome:** The system became more useful by supporting task editing, staff assignment, task status updates, status filtering, validation, and improved UI.

---

## 🔧 GitHub Usage

GitHub was used to show collaboration and version control evidence.

**Version Control Workflow**

```text
Issue -> Branch -> Commit -> Pull Request -> Review -> Merge -> Tag
```

**Branching Strategy**

| Branch | Purpose |
|---|---|
| `main` | Stable final version of the application |
| `feature/iteration1-basic-task-tracker` | Iteration 1 development |
| `feature/iteration2-task-improvements` | Iteration 2 development |
| `docs/update-readme` | README documentation update |
| `docs/user-stories-test-plan` | User stories and test plan documentation |
| `docs/iteration-plan` | Iteration plan documentation |

**Tags / Releases**

| Tag | Purpose |
|---|---|
| `v0.1-iteration1` | Marks the completed Iteration 1 increment |
| `v0.2-iteration2` | Marks the completed Iteration 2 increment |
| `v1.0-final-submission` | Marks the final submitted version |

**Collaboration Evidence**

- GitHub repository created for project management
- Issues used to divide work into tasks
- Feature branches used for separate development work
- Pull requests used for review and merge process
- Tags used to mark iteration milestones
- GitHub Projects board used to track task progress

---

## 👨‍💻 Individual Contributions

### TAN LE PIN

**Responsibilities**

- Set up GitHub repository
- Implemented core application features
- Developed Iteration 1 basic task tracker
- Developed Iteration 2 improvements
- Managed version tags and final submission update
- Supported pull request merging and project coordination

**Evidence**

- Application files: `index.html`, `style.css`, `app.js`
- Feature branches and commits
- Iteration tags: `v0.1-iteration1`, `v0.2-iteration2`, `v1.0-final-submission`

### DHINESH

**Responsibilities**

- Prepared README documentation
- Added user stories
- Added test plan
- Added iteration plan
- Supported GitHub collaboration and documentation updates

**Evidence**

- Documentation files: `README.md`, `user-stories.md`, `test-plan.md`, `iteration-plan.md`
- Documentation branches and pull requests

---

## 🔮 Future Enhancements

The current system focuses on the assignment scope and core task tracking features. Future versions may include:

- User registration and login
- Role-based permissions for manager and staff
- Due date and priority fields
- Task search by staff or keyword
- Category filter such as Kitchen, Service, Cleaning, Inventory, and Cashier
- Dashboard summary for total tasks and completed tasks
- Cloud database for multi-device access
- Notification reminders for pending tasks

---

## 📄 Documentation

Supporting documents included in this repository:

- [User Stories](user-stories.md)
- [Test Plan](test-plan.md)
- [Iteration Plan](iteration-plan.md)

---

## ✅ Project Status

**Status:** Completed and delivered

The project completed two required iterations and includes the main restaurant operations task tracking features. It demonstrates Agile SDLC, Scrum planning, iterative and incremental development, GitHub collaboration, pull requests, commits, project board tracking, and version tags.

**Last Updated:** May 25, 2026
