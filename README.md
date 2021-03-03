# parser
Parser scripts to read the Cassandra DB and extract transactions

- stored in ethereum user's home
- produces parser.log
- take logtodb.TMPL as imput file template with ethereum accounts of interest
- launched manualy as user ethereum: nohup ./watchdog.sh
- hard to kill: aim with kill -9 at watchdog.sh then update.sh and maybe parser.py
- watchdog.sh script to make sure it is respawned
- the python script verify the presence of ethereum geth ipc file to check ethereum is running
- start parsing at the block number in block.txt file

## Dependencies
- python3
- apt install python3-cassandra python3-blist
