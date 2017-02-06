## Heroku logs
First, visit this page: https://talktomebot.herokuapp.command

Run this command
```
heroku logs --app talktomebot
```
Here are the first few lines of output from the logs:
```
~/workspace/talktomebot (documentation) $ heroku logs --app talktomebot
2017-02-06T20:50:18.891803+00:00 heroku[web.1]: Unidling
2017-02-06T20:50:18.892068+00:00 heroku[web.1]: State changed from down to starting
2017-02-06T20:50:20.090867+00:00 heroku[web.1]: Starting process with command `npm start`
...
```
