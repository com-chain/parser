#!/bin/bash
PARSER_DIR="$HOME/parser"
while true
do
  # if geth is not running, wait, checking every min
  while [ ! -e "$HOME/.ethereum/geth.ipc" ]
  do
    sleep 60 # or less like 0.2
  done
lastBlock=`geth --exec "eth.blockNumber" attach`
firstBlock=`cat "$PARSER_DIR/block.txt"`
if [ $lastBlock -ge $firstBlock ] 
then
	echo "Parsing $firstBlock - $lastBlock"
	cat "$PARSER_DIR/logtodb.TMPL" | sed s/LBLOCK/$lastBlock/g | sed s/FBLOCK/$firstBlock/g > "$PARSER_DIR/logtodb"
	geth --exec 'loadScript("'"$PARSER_DIR"'/logtodb")' attach | "$PARSER_DIR/parser.py"
	nextBlock=`expr $lastBlock + 1`
	echo $nextBlock > "$PARSER_DIR"/block.txt
fi
#sleep 2
done
