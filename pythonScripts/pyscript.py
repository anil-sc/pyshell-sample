import sys,json
#argv[0] will be base file name

if len(sys.argv)>1:
  argument = json.dumps({"argument":sys.argv})
  print(argument)
