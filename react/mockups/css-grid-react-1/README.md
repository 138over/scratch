Overview
---
Tyler Sticka wrote this [First CSS Grid Layout by Cloudfour](https://cloudfour.com/thinks/first-css-grid-layout/) blog entry  

* Given the blog entry as a starting point  
* Then convert to use react styled-components

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