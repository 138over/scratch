Overview
---
Tyler Sticka wrote a few blog entries on working with CSS Grid, 
[First CSS Grid Layout by Cloudfour](https://cloudfour.com/thinks/first-css-grid-layout/) and 
[Breaking out with CSS Grid by Cloudfour](https://cloudfour.com/thinks/breaking-out-with-css-grid-layout/)  

* Given those blog entries as a starting point  
* Then convert to use react styled-components

Getting Started
---

```
# ------------------------------------------------------------------------
# Environment
# macos:  10.12.6
# node:   v8.9.3
# npm:    5.5.1
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
