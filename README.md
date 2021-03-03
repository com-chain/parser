# parser
Parser scripts to read the Cassandra DB and extract transactions

-stored in ethereum user's home
-produces parser.log
-take logtodb.TMPL as imput file template with ethereum accounts of interest
-launched manualy: nohup watchdog.sh
-hard to kill: aim at watchdog.sh and update.sh and parser.py
-watchdog script to make sure it is respawned
-verify the presence of ethereum geth ipc file to check ethereum is running
-start parsing at the block number in block.txt file
