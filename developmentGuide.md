This part of the documentation was created using/coping the

[contribution guide of FCC:](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md)

## Forking The Project


### Setting up Your system 
 
 - Clone the Cloud9 workspace
 - Use the Cloud9 workspace

### Forking the talktomebot

<ol>
 <li>Go to the top level talktomebot repository: https://github.com/ale-cia/talktomebot</li>
 <li>Click the "Fork" Button in the upper right hand corner of the interface [(More Details Here)](https://help.github.com/articles/fork-a-repo/)</li>
 <li>After the repository has been forked, you will be taken to your copy of the talktomebot repo at yourUsername/talktomebot</li>
</ol>

### Cloning Your Fork

<ol>
<li>Open a Terminal / Command Line / Bash Shell in your projects directory (i.e.: /yourprojectdirectory/)</li>
<li>Clone your fork of talktomebot</li>
</ol>

```shell
$ git clone https://github.com/yourUsername/talktomebot.git
```

(make sure to replace yourUsername with your GitHub Username)

This will download the entire talktomebot repo to your projects directory.

#### Setup Your Upstream

1. Change directory to the new talktomebot directory (`cd talktomebot`)
# 2. Add a remote to the official talktomebot repo: (I don't now if this is right, ask alecia)

```shell
$ git remote add upstream https://github.com/FreeCodeCamp/FreeCodeCamp.git
```

Congratulations, you now have a local copy of the talktomebot repo!


#### Maintaining Your Fork

Now that you have a copy of your fork, there is work you will need to do to keep it current.

##### **Rebasing from Upstream**

Do this prior to every time you create a branch for a PR:

1. Make sure you are on the `development` branch

  > ```shell
  > $ git status
  > On branch development
  > Your branch is up-to-date with 'origin/staging'.
  > ```

  > If your aren't on `development`, resolve outstanding files / commits and checkout the `development` branch

  > ```shell
  > $ git checkout development
  > ```

2. Do A Pull with Rebase Against `development`

  > ```shell
  > $ git pull --rebase upstream development
  > ```

  > This will pull down all of the changes to the official development branch, without making an additional commit in your local repo.

3. (_Optional_) Force push your updated staging branch to your GitHub fork

  > ```shell
  > $ git push origin development --force
  > ```

  > This will overwrite the development branch of your fork.

### Create A Branch

Before you start working, you will need to create a separate branch specific to the issue / feature you're working on. You will push
your work to this branch.

#### Naming Your Branch // this is changed for our project

Name the branch something like `xxx-programmername`  where `xxx` is a short description of the changes or feature you are 
attempting to add. For example `fix-email-login-alecia` would be a branch where you fix something specific to email login.

#### Adding Your Branch

To create a branch on your local machine (and switch to this branch):

```shell
$ git checkout -b [name_of_your_new_branch]
```

and to push to GitHub:

```shell
$ git push origin [name_of_your_new_branch]
```

##### If you need more help with branching, take a look at _[this](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)_.

### Setup Linting // we have a setup for the project


### Setup talktomebot
Once you have FreeCodeCamp cloned, before you start the application, you first need to install all of the dependencies:

```bash
# Install NPM dependencies
npm install

# Install Gulp globally
npm install -g gulp

```
### Only one branch and only one change per commit

### Creating A Pull Request

#### What is a Pull Request?

A pull request (PR) is a method of submitting proposed changes to the talktome
Repo (or any Repo, for that matter). You will make changes to copies of the
files which make up talktomebot in a personal fork, then apply to have them
accepted by talktomebot proper.


#### Important: ALWAYS EDIT ON A BRANCH

Take away only one thing from this document, it should be this: Never, **EVER**
make edits to the `development` branch. ALWAYS make a new branch BEFORE you edit
files. This is critical, because if your PR is not accepted, your copy of
staging will be forever sullied and the only way to fix it is to delete your
fork and re-fork.

#### Methods

There are two methods of creating a pull request for talktomebot:

-   Editing files on a local clone (recommended)


##### Editing via your Local Fork _(Recommended)_

This is the recommended method. Read about [How to Setup and Maintain a Local
Instance of talktomebot](#maintaining-your-fork).

1.  Perform the maintenance step of rebasing `development`.
2.  Ensure you are on the `development` branch using `git status`:

```bash
$ git status
On branch development
Your branch is up-to-date with 'origin/development'.

nothing to commit, working directory clean
```

1.  If you are not on development or your working directory is not clean, resolve
    any outstanding files/commits and checkout development `git checkout development`

2.  Create a branch off of `development` with git: `git checkout -B
    branch/name-here` **Note:** Branch naming is important. Use a name like
    `short-fix-description-programmername` or `short-feature-description-programmername`.

3.  Edit your file(s) locally with the editor of your choice

4.  Check your `git status` to see unstaged files.

5.  Add your edited files: `git add path/to/filename.ext` You can also do: `git
    add .` to add all unstaged files. Take care, though, because you can
    accidentally add files you don't want added. Review your `git status` first.

6.  Commit your edits: `git commit -m "Brief Description of Commit"`. Do not add the issue number in the commit message.

7.  Push your commits to your GitHub Fork: `git push -u origin branch/name-here`

9.  Go to [Common Steps](#common-steps) 


### Common Steps

1.  Once the edits have been committed, you will be prompted to create a pull
    request on your fork's GitHub Page.

2.  By default, all pull requests should be against the talktomebot  repo, `development`
    branch.

3.  Submit a pull  request    from your branch to talktomebot `development` branch.

4.  The title (also called the subject) of your PR should be descriptive of your
    changes and succinctly indicates what is being fixed.

    -   **Do not add the issue number in the PR title or commit message.**

    -   Examples: `Add Test Cases to Bonfire Drop It` `Correct typo in Waypoint
        Size Your Images`

5.  In the body of your PR include a more detailed summary of the changes you
    made and why.

    -   If the PR is meant to fix an existing bug/issue, then, at the end of
        your PR's description, append the keyword `closes` and #xxxx (where xxxx
        is the issue number). Example: `closes #1337`. This tells GitHub to
        close the existing issue, if the PR is merged.

6.  Indicate if you have tested on a local copy of the site or not.


### How We Review and Merge Pull Requests

Free Code Camp has a team of volunteer Issue Moderators. These Issue Moderators routinely go through open pull requests in a process called [Quality Assurance](https://en.wikipedia.org/wiki/Quality_assurance) (QA).

1. If an Issue Moderator QA's a pull request and confirms that the new code does what it is supposed without seeming to introduce any new bugs, they will comment "LGTM" which means "Looks good to me."

2. Another Issue Moderator will QA the same pull request. Once they have also confirmed that the new code does what it is supposed to without seeming to introduce any new bugs, they will merge the pull request.


### How We Close Stale Issues

We will close any issues or pull requests that have been inactive for more than 15 days, except those that match the following criteria:
- bugs that are confirmed
- pull requests that are waiting on other pull requests to be merged
- features that are a part of a GitHub project

### Next Steps

#### If your PR is accepted

Once your PR is accepted, you may delete the branch you created to submit it.
This keeps your working fork clean.

You can do this with a press of a button on the GitHub PR interface. You can
delete the local copy of the branch with: `git branch -D branch/to-delete-name`

#### If your PR is rejected

Don't despair! You should receive solid feedback from the Issue Moderators as to
why it was rejected and what changes are needed.

Many Pull Requests, especially first Pull Requests, require correction or
updating. If you have used the GitHub interface to create your PR, you will need
to close your PR, create a new branch, and re-submit.

If you have a local copy of the repo, you can make the requested changes and
amend your commit with: `git commit --amend` This will update your existing
commit. When you push it to your fork you will need to do a force push to
overwrite your old commit: `git push --force`

Be sure to post in the PR conversation that you have made the requested changes.

### Other resources

-   [Searching for Your Issue on
    GitHub](http://forum.freecodecamp.com/t/searching-for-existing-issues/19139)

-   [Creating a New GitHub
    Issue](http://forum.freecodecamp.com/t/creating-a-new-github-issue/18392)

-   [Select Issues for Contributing Using
    Labels](http://forum.freecodecamp.com/t/free-code-camp-issue-labels/19556)

-   [How to clone the FreeCodeCamp website on a Windows
    pc](http://forum.freecodecamp.com/t/how-to-clone-and-setup-the-free-code-camp-website-on-a-windows-pc/19366)

-   [How to log in to your local FCC site - using
    GitHub](http://forum.freecodecamp.com/t/how-to-log-in-to-your-local-instance-of-free-code-camp/19552)

-   [Writing great git commit
    messages](http://forum.freecodecamp.com/t/writing-good-git-commit-messages/13210)

-   [Contributor Chat Support - For the FCC Repositories, and running a local
    instance](https://gitter.im/FreeCodeCamp/Contributors)





*******************************
https://github.com/agis-/git-style-guide#branches


# we need test and testers (QA)
# ask alecia about upstream setting

code : vanilla javascript

git branch : [mm-dd-yy]-[feature-description] // this is not going to work, because ¿what date?

12-19-16-Add-bootstrap-cards

sass 
****************************


The idea of the project is use:

vanilla javascript: http://vanilla-js.com/

sass: http://www.sassshop.com/

to start the server run:

$ npm start

to visit the page:

https://talk-to-me-bot-<c9username>.c9users.io

to run sass and eslint

$ gulp watch

