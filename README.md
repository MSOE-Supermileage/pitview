# SuperMileage Web
The web service for the SuperMileage car. Displays things such as speed and RPM on a live browser window.
Live production url: http://supermileage.azurewebsites.net/

### About
- This is the cloud based service running Node.JS
- The android phone sends the data to here so the pit is able to view the data live!
- Sends the data over a cellular network up into the cloud
- Every push to the production branch is a live deploy to the cloud

### Requirements
- Node.JS
- Git

### How to Clone
#### Installing the plugins
1. Install the NodeEclipse plugin in eclipse: http://www.nodeclipse.org/updates/
2. Install EGit into eclipse: http://download.eclipse.org/egit/updates
3. Install an HTML editor for eclipse:
	- Goto Help > Eclipse Marketplace, search for html editor and install

#### Cloning the project
1. Create a new Node.JS project with the name SM-Web and all the default selections
2. Create a new file in the project and name it with your name
3. Make sure you delete your README.md file in the project!
4. Right click on the project > Team > Share Project...
5. Click Use or create repository in parent folder or project
6. Click on the project and click Create Repository and click Finish
7. Right click on the project > Team > Commit...
8. Add a commit message and ONLY select the file with your name, then click Commit and Push
9. Click New Remote, name it master and put the URI as: https://github.com/MSOE-Supermileage/SM-Web.git and click Finish
10. Click Next and it should give you an error: non-fast-forward, thats OK! Click Finish
11. Right click on the project > Team > Pull, it should successfully pull the current code from the repo
12. Now delete your file with your name and commit and push!
13. You are now all set up to begin pushing commits to the repo!