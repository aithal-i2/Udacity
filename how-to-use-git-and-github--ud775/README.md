## Git

Git is a free and open source distributed version control system

## GitHub

GitHub is a web-based Git repository hosting service offering distributed revision control and source code management functionality of Git

---

### Github Flow
Create a branch -> Add commits -> Open Pull Request -> Review Code -> Deploy -> Merge

---

### Commands
- Create a new repository : 'git init'
- Create a copy of an existing repository : 'git clone'
- Add one or more files to be tracked : 'git add'
- Commit changes to head : 'git commit'
- Compare versions
..* Compare between working directory and staging area : 'git diff'
..* Compare between staging area and commit : 'git diff --staged'
..* Compare between commits : 'git diff commit1 commit2'
- View list of commits : 'git log'
- Send changes to the master branch of your remote repository : 'git push'
- List the files you've changed and those you still need to add or commit : 'git status'
- List all remote repositories : 'git remote -v'
- List all the branches in your repo, and also tell you what branch you're currently in : 'git branch'
- Create a new branch and switch to it : 'git checkout -b <branchname> '
- To merge a different branch into your active branch: 'git merge <branchname> '
- Delete branch : 'git branch -d <branchname> '
- Fetch and merge changes on the remote server to the working directory : 'git pull'

---

| Working directory | ->' git add '-> | Staging area | ->' git commit '->| Head |->' git push '-> | repository |

---

### When does a merge conflict occur?
Edit Collision: This is the most common type of conflict. It happens when two branches have changed the same part of the same file, and then those branches are merged together.
Removed file conflict: Removed file conflicts occur when one person edits a file, and another person deletes that file in their branch.

### Fork
A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.
Forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.
