#!/bin/bash
PARSER_DIR="$HOME/parser"

cd "$PARSER_DIR"
while true
do
        update_pid=`pgrep update.sh`
	if [ -z "$update_pid" ]
	then
		nohup "$PARSER_DIR/update.sh" >> "$PARSER_DIR/parser.log" 2>&1 &
		echo restarted update.sh
	fi
sleep 10
done
