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
- can we properly show a breakdown graph for:
  - amount of sleep per given timeframe
  - average sleep timeframe

These are solvable, but it doesn't simply "work" because I have very bad sleeping habits.