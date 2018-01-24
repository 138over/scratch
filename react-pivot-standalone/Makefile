# ------------------------------------------------------------------------
# website       http://davidguttman.github.io/react-pivot/
# source        https://github.com/davidguttman/react-pivot
# downloads     https://github.com/davidguttman/react-pivot/tree/master/dist
# git tag       dad853f
# activity      jul 28 2017
# issues        https://github.com/davidguttman/react-pivot/issues/47
# ------------------------------------------------------------------------

GOPATH := $(shell pwd)
PORT    = 3000

start:
	go run server.go $(PORT) &
	sleep 2 && open http://localhost:$(PORT)

stop:
	kill -HUP $(shell lsof -t -i:$(PORT))

