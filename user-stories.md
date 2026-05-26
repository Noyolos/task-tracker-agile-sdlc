User Stories
This document contains the product backlog user stories for the Task Tracker web application. These user stories describe the main features needed by users and support the Agile development process.

Product Backlog
User Story 1: Create Task
As a user, I want to create a new task so that I can record work that needs to be completed.

Acceptance criteria:

The user can enter a task title.
The user can enter a task description.
The task is added to the task list.
The task is saved in browser localStorage.
User Story 2: View Task List
As a user, I want to view all created tasks so that I can check my current workload.

Acceptance criteria:

The user can see all saved tasks.
Each task displays its title and description.
The task list updates after a new task is added.
User Story 3: Delete Task
As a user, I want to delete a task so that I can remove tasks that are no longer needed.

Acceptance criteria:

Each task has a delete button.
The selected task is removed from the task list.
The deleted task is also removed from localStorage.
User Story 4: Edit Task
As a user, I want to edit an existing task so that I can update task details when the requirements change.

Acceptance criteria:

The user can select a task to edit.
The form displays the existing task details.
The user can update the task title, description, assigned user, and status.
The updated task is saved correctly.
User Story 5: Assign Task to User
As a user, I want to assign a task to a user so that responsibility for the task is clear.

Acceptance criteria:

The user can enter an assigned person's name.
The assigned user is displayed in the task list.
If no name is entered, the task is shown as unassigned.
User Story 6: Change Task Status
As a user, I want to change the status of a task so that I can track its progress.

Acceptance criteria:

The user can select a task status.
The available statuses are To Do, In Progress, and Done.
The selected status is displayed on the task card.
The status can be updated after the task is created.
User Story 7: Filter Tasks by Status
As a user, I want to filter tasks by status so that I can quickly find tasks based on their progress.

Acceptance criteria:

The user can select a status filter.
The task list only displays tasks that match the selected status.
The user can return to viewing all tasks.
User Story 8: Save Task Data
As a user, I want my task data to remain after refreshing the page so that I do not lose my task records.

Acceptance criteria:

Task data is saved using browser localStorage.
Tasks remain visible after the page is refreshed.
Updated task details are also saved.
Iteration Planning
Iteration 1 User Stories
The first iteration focused on the minimum viable version of the Task Tracker.

Included user stories:

User Story 1: Create Task
User Story 2: View Task List
User Story 3: Delete Task
User Story 8: Save Task Data
Iteration 2 User Stories
The second iteration improved the application by adding more advanced task management features.

Included user stories:

User Story 4: Edit Task
User Story 5: Assign Task to User
User Story 6: Change Task Status
User Story 7: Filter Tasks by Status
Backlog Summary
Priority	User Story	Iteration
High	Create Task	Iteration 1
High	View Task List	Iteration 1
High	Delete Task	Iteration 1
High	Save Task Data	Iteration 1
Medium	Edit Task	Iteration 2
Medium	Assign Task to User	Iteration 2
Medium	Change Task Status	Iteration 2
Medium	Filter Tasks by Status	Iteration 2
