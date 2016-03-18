# slept
```
npm i srph/slept -g
```
a proof-of-concept to monitor your sleeping (like the nsa) through the cli

## usage
```bash
Usage:
  slept [command]

Options:
  -h, --help     Display usage
  -v, --version  Display version

Example:
  slept add 8
  slept undo
```

## how it works
it simply logs the start time and end time of your sleep. this is simply by inputting the number of hours you sleep.

## problems
- are we supposed to tackle or can we tackle cases where you go to different timezones?
- metrics:
  - can we log and make conclusions based on our sleep duration?
  - can we log and make conclusions based on the sleep timing?