#!/bin/bash
curl -k -w 'Total: %{time_total}\n' -s "https://localhost:4433/tiny?[1-10]" -o /dev/null
