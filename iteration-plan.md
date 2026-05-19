# Iteration Plan and SDLC Approach

## 1. Project Title

Task Tracker Agile SDLC Project

## 2. Project Overview

The project is a simple web-based Task Tracker application developed for the BAI21113 Software Engineering assignment. The application is designed for internal company use and allows users to manage tasks more easily.

The main features of the Task Tracker include creating tasks, viewing task lists, deleting tasks, editing tasks, assigning tasks to users, changing task status, filtering tasks by status, and saving task data using browser localStorage.

The project was developed using an Agile SDLC approach and GitHub collaboration practices. The team divided the development work into two short iterations to show iterative and incremental development.

## 3. Chosen Agile SDLC Methodology

The selected Agile SDLC methodology for this project is Scrum.

Scrum was chosen because it allows the team to divide the project into short development cycles called sprints. Each sprint focuses on a small set of features, making it easier to plan, develop, test, review, and improve the application step by step.

Although this project is small, Scrum is still suitable because it helps the team organize work clearly using user stories, iteration planning, GitHub issues, branches, pull requests, and review comments.

## 4. Justification for Using Scrum

Scrum was selected for the following reasons:

1. Scrum supports iterative and incremental development.
2. Scrum allows the team to deliver a working version of the system after each iteration.
3. Scrum helps divide the project into manageable tasks.
4. Scrum supports team collaboration through planning, review, and feedback.
5. Scrum works well with GitHub issues, branches, commits, and pull requests.
6. Scrum makes it easier to track progress and show development evidence.

In this project, the team used two short iterations. Iteration 1 focused on the minimum viable version of the Task Tracker, while Iteration 2 improved the system with additional features.

## 5. Product Backlog User Stories

The product backlog contains the main user stories needed for the Task Tracker application.

| User Story ID | User Story | Priority | Iteration |
|---|---|---|---|
| US01 | As a user, I want to create a new task so that I can record work that needs to be completed. | High | Iteration 1 |
| US02 | As a user, I want to view all created tasks so that I can check my current workload. | High | Iteration 1 |
| US03 | As a user, I want to delete a task so that I can remove tasks that are no longer needed. | High | Iteration 1 |
| US04 | As a user, I want my task data to remain after refreshing the page so that I do not lose my task records. | High | Iteration 1 |
| US05 | As a user, I want to edit an existing task so that I can update task details when requirements change. | Medium | Iteration 2 |
| US06 | As a user, I want to assign a task to a user so that responsibility for the task is clear. | Medium | Iteration 2 |
| US07 | As a user, I want to change the task status so that I can track task progress. | Medium | Iteration 2 |
| US08 | As a user, I want to filter tasks by status so that I can quickly find tasks based on progress. | Medium | Iteration 2 |

## 6. Iteration 1 Plan

### Iteration 1 Goal

The goal of Iteration 1 was to create a minimum viable version of the Task Tracker application. The first version needed to be simple but functional.

### User Stories Included

- US01: Create Task
- US02: View Task List
- US03: Delete Task
- US04: Save Task Data

### Features Delivered

The following features were implemented in Iteration 1:

- Add new task
- View task list
- Delete task
- Save tasks using browser localStorage
- Basic user interface

### GitHub Evidence

Iteration 1 was developed using a separate feature branch and pull request.

Branch used:

```text
feature/iteration1-basic-task-tracker
```

Pull request:

```text
Add iteration 1 basic task tracker
```

Tag / milestone:

```text
v0.1-iteration1
```

### Iteration 1 Outcome

At the end of Iteration 1, the team had a working basic Task Tracker. Users could add tasks, view them in a list, delete tasks, and keep the task data after refreshing the browser page.

## 7. Iteration 2 Plan

### Iteration 2 Goal

The goal of Iteration 2 was to improve the Task Tracker by adding more complete task management features and improving the user experience.

### User Stories Included

- US05: Edit Task
- US06: Assign Task to User
- US07: Change Task Status
- US08: Filter Tasks by Status

### Features Delivered

The following features were implemented in Iteration 2:

- Edit existing tasks
- Assign tasks to users
- Add task status: To Do, In Progress, Done
- Change task status
- Filter tasks by status
- Improve form validation
- Improve user interface
- Show task status counters

### GitHub Evidence

Iteration 2 was developed using a separate feature branch and pull request.

Branch used:

```text
feature/iteration2-task-improvements
```

Pull request:

```text
Add iteration 2 task improvements
```

Tag / milestone:

```text
v0.2-iteration2
```

### Iteration 2 Outcome

At the end of Iteration 2, the application became more complete and useful. The Task Tracker changed from a simple task list into a more functional task management tool with editing, assigned users, status tracking, filtering, validation, and improved UI.

## 8. Iterative and Incremental Development

This project applied both iterative and incremental development.

Iterative development means that the team improved the application through repeated development cycles. The team first created a basic version, then reviewed it and improved it in the next iteration.

Incremental development means that new features were added step by step. Instead of building the whole system at once, the team delivered a small working increment in Iteration 1 and then added more features in Iteration 2.

### Iteration 1 Increment

The first increment delivered the basic Task Tracker. It allowed users to create, view, delete, and save tasks.

### Iteration 2 Increment

The second increment built on the first version by adding editing, assigned users, task status, filtering, validation, and improved layout.

This approach helped the team reduce complexity because the project was not developed all at once. Each iteration had a clear goal and a clear set of features.

## 9. GitHub Collaboration Plan

GitHub was used as the main collaboration platform for this assignment. The team used GitHub to manage tasks, branches, commits, pull requests, review comments, and version tags.

The team followed this workflow:

```text
Issue → Branch → Commit → Pull Request → Review → Merge → Tag
```

### GitHub Issues

GitHub Issues were used to define development and documentation tasks. Each issue described what needed to be completed.

Examples of issues include:

- Build basic task creation and task list
- Improve task management with status, editing and filtering
- Update README with project details and run instructions
- Add user stories and test plan
- Add iteration plan documentation

### Branches

Branches were used to separate work from the stable main branch. This helped prevent unfinished changes from affecting the main version of the application.

### Commits

Commits were used to record progress. Each commit included a short message explaining what was changed.

### Pull Requests

Pull requests were used to review changes before merging them into the main branch. This provided evidence of collaboration and code review.

### Tags

Tags were used to mark the completed versions of each iteration.

## 10. Team Responsibilities

| Team Member | Responsibility |
|---|---|
| TAN LE PIN | Set up GitHub repository, implemented Iteration 1, implemented Iteration 2, managed branches, pull requests, merge process, and version tags |
| DHINESH | Updated README documentation, added user stories, added test plan, supported documentation and GitHub collaboration |

## 11. Summary

The project used Scrum with two short iterations to develop the Task Tracker application. Iteration 1 delivered the minimum viable version, while Iteration 2 improved the system with additional task management features.

The team used GitHub issues, branches, commits, pull requests, review comments, and tags to show collaboration and development progress. This approach helped demonstrate Agile SDLC, iterative and incremental development, and collaborative coding practices.
