// Ex 1
// 1. A branch is a way to work on a feature without effecting the existing code and it's good because you still have a stable system if something goes wrong.
// 2. Main is the basic branch that holds the system and feature branch is a copy on main that you can test stuff on it without effecting main.
// 3. No it just starts a new starter from the point you are holding
// 4. No
// 5. That the new branch starts a new pointer from the point you are holding.

// Ex 2
// 1. git checkout -b fix/login-error
// 2. got switch fix/login-error
// 3. git checkout main
// 4. Yes they do same thing it's just a more modern way to do it

// Ex 3
// 1. It points on the branch you are on now
// 2. It's gonna move th the main branch
// 3. No it points on the branch you are using now.
// 4. conflict

// Ex 4
// 1. git checkout main
// 2. git checkout main >>> git merge feature/signup-form >>> git branch -d feature/signup-form
// 3. git branch -d feature/signup-form
// 4. Esthetic reasons
// 5. The branch that you are on will get all of the changes meaning it will the changes from main.

// Ex 5
// 1. git checkout -b feature/notification.
// 2. git add . >>> git commit -m "Add notification bell icon" >>> git log
// 3. git status
// 4. git checkout main
// 5. git checkout feature/notification >>> git add . >>> git commit -m "Finished the notification feature" >>> git log >>> git status >>> git checkout main >>> git merge
// 6. because we created a new pointer
// 7. The whole system can get messed up
// 8.
