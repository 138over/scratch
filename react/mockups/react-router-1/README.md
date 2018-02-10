Overview
---
Continuing with the CSS Grid and Styled Components mockup... add [react application routing](https://reacttraining.com/react-router/core/guides/philosophy)  

Getting Started
---

```
# ------------------------------------------------------------------------
# Environment
#   MacOS:    10.12.6
#   Node:     v8.9.3
#   NPM:      5.5.1
#   Chrome:   64.0.3282.140
#
# Chrome Extensions
#   React Developer Tools 3.1.0
# ------------------------------------------------------------------------
    
# bootstrap the react application 
    npm install
    
# stop anything running on port 3000, including chrome browser
    kill -HUP $(lsof -t -i:3000)
    
# start application on node server
    BROWSER="none" PORT="3000" npm start
    
# launch chrome browser. chrome must not be running for this command to work
    open -a "Google Chrome" --args --auto-open-devtools-for-tabs http://localhost:3000
    
# shutdown server and browser
    kill -HUP $(lsof -t -i:3000)
    
```

![React Router 4 Screenshot](https://github.com/138over/scratch/blob/master/react/mockups/react-router-1/react-router-1.gif)

