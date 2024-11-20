# npm install on Linux
If you're getting a access error while running `npm install` on linux, run `sudo chmod -R 777 .` in the project folder.

# Creating database
`createdb -U postgres emailsyncer`

# .env Example
use `psql --help` "Connection options" for local defaults
```
PORT=3001

POSTGRES_USER=postgres
POSTGRES_PASSWORD=
POSTGRES_HOST=/var/run/postgresql
POSTGRES_DB=postgres
POSTGRES_PORT=5433

WORKER_CRON=1 * * * * *
DELETE_CRON=* 1 * * * *
DAYS_AGO=30

MEDIA_INDEX_LIMIT=50

DL_DIR=/Users/joshua.campbell/desktop/downloads
```

# Setting Up systemd
## Create systemd service
`sudo nano /etc/systemd/system/email-syncer.service`
```
[Unit]
Description=email-syncer

[Service]
Type=simple
User=jcampbell
ExecStart=bash /home/jcampbell/node/email-syncer/start.sh

[Install]
WantedBy=multi-user.target
```
`sudo systemctl enable --now email-syncer`
`sudo journalctl -xfu email-syncer`

### Create start bash script
`sudo nano start.sh`
```
#! /bin/bash
source ${HOME}/.bashrc

cd /home/jcampbell/node/email-syncer
/usr/bin/npm run all
```

`sudo ln -s /home/jambel-campbell/.nvm/versions/node/v16.13.1/bin/node /usr/bin/node`

NOTE: `whereis node` 

if `Error: getaddrinfo ENOTFOUND db`
then `service docker stop`

# bash-script
```
alias email-syncer-db="psql -d email-syncer -U postgres"
alias email-syncer-logs="sudo journalctl -xfu email-syncer"
alias email-syncer="sudo systemctl restart email-syncer && email-syncer-logs"
```
