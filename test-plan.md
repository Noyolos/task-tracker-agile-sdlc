# Test Plan

This test plan describes the test cases used to check the main features of the Task Tracker web application.

## Testing Scope

The testing focuses on the core features implemented in Iteration 1 and Iteration 2:

- Add task
- View task list
- Delete task
- Edit task
- Assign task to user
- Change task status
- Filter task by status
- Save task data using localStorage

## Test Environment

The application was tested using a web browser. Since the Task Tracker uses browser localStorage, no database server or backend setup was required.

| Item | Description |
|---|---|
| Application Type | Web application |
| Technologies | HTML, CSS, JavaScript |
| Storage | Browser localStorage |
| Testing Method | Manual testing |
| Browser | Google Chrome / Microsoft Edge |

## Test Cases

| Test Case ID | Feature | Test Steps | Expected Result | Status |
|---|---|---|---|---|
| TC01 | Add Task | Enter a task title and description, then click Add Task. | The task should appear in the task list. | Pass |
| TC02 | Add Task Validation | Leave the task title empty and click Add Task. | The system should show a validation message asking the user to enter a task title. | Pass |
| TC03 | View Task List | Add several tasks to the application. | All created tasks should be displayed in the task list. | Pass |
| TC04 | Delete Task | Click the Delete button on a task. | The selected task should be removed from the task list. | Pass |
| TC05 | Edit Task | Click Edit on a task, change its details, and submit the form. | The task should be updated with the new details. | Pass |
| TC06 | Assign User | Enter a name in the Assigned To field when creating a task. | The assigned user's name should be displayed on the task card. | Pass |
| TC07 | Default Unassigned User | Create a task without entering an assigned user. | The task should show the assigned user as Unassigned. | Pass |
| TC08 | Change Status to To Do | Click the To Do button on a task. | The task status should change to To Do. | Pass |
| TC09 | Change Status to In Progress | Click the In Progress button on a task. | The task status should change to In Progress. | Pass |
| TC10 | Change Status to Done | Click the Done button on a task. | The task status should change to Done. | Pass |
| TC11 | Filter by To Do | Select To Do from the status filter. | Only To Do tasks should be displayed. | Pass |
| TC12 | Filter by In Progress | Select In Progress from the status filter. | Only In Progress tasks should be displayed. | Pass |
| TC13 | Filter by Done | Select Done from the status filter. | Only Done tasks should be displayed. | Pass |
| TC14 | View All Tasks | Select All Tasks from the status filter. | All tasks should be displayed again. | Pass |
| TC15 | localStorage Save | Add a task and refresh the browser page. | The task should still be visible after refresh. | Pass |
| TC16 | localStorage Update | Edit a task and refresh the browser page. | The updated task details should still be visible after refresh. | Pass |
| TC17 | localStorage Delete | Delete a task and refresh the browser page. | The deleted task should not appear again. | Pass |
| TC18 | Empty State | Delete all tasks or apply a filter with no matching task. | The system should display a message saying no tasks were found. | Pass |
| TC19 | Cancel Edit | Click Edit on a task, then click Cancel. | The form should return to create task mode without changing the task. | Pass |
| TC20 | UI Responsiveness | Open the application on a smaller screen size. | The layout should remain readable and usable. | Pass |

## Testing Summary

The Task Tracker application was tested manually using a web browser. The main features worked as expected, including task creation, task listing, task deletion, task editing, assigned user display, status updates, filtering, and localStorage persistence.

The testing process confirmed that the application met the basic requirements of the assignment. Iteration 1 delivered the minimum viable version, while Iteration 2 improved the application by adding editing, status tracking, filtering, validation, and better user interface design.

## Issues Found and Fixes

| Issue | Description | Fix |
|---|---|---|
| Empty task title | Users could try to submit a task without entering a title. | A validation message was added to remind users to enter a task title. |
| Older task data missing new fields | Tasks created in Iteration 1 did not have assigned user or status fields. | A data migration step was added in JavaScript to provide default values such as Unassigned and To Do. |
| Task list unclear when no tasks exist | The task list could look empty without explanation. | An empty state message was added to inform users when no tasks are available. |

## Conclusion

Overall, the testing results show that the Task Tracker application is functional and stable for the required assignment scope. The application supports the main task management features and demonstrates improvement between Iteration 1 and Iteration 2.
