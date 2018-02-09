# ------------------------------------------------------------------------
# website       https://reactabular.js.org
# source        https://github.com/reactabular/reactabular
# git tag       fc50391
# activity      Dev 22 2017
# issues        
#
# references
#   https://survivejs.com/blog/reactabular-interview/
#   https://medium.com/netscape/the-case-for-monorepos-907c1361708a
#   https://medium.com/@glasmeyer/thoughts-about-package-modularization-d9631f7a41f1
#
# dependencies
#   * node  v8.9.2
#   * npm   v5.5.1
#   * react-dnd-html5-backend https://www.npmjs.com/package/react-dnd-html5-backend
#
# ports
# ------------------------------------------------------------------------
GIT_TAG = fc50391
PORT    = 8080

install:
	if [ ! -d reactabular ]; then make clone; fi
	cd reactabular && git checkout $(GIT_TAG)
	cd reactabular && npm install

clone:
	echo 'reactabular/' > .gitignore
	git clone https://github.com/reactabular/reactabular.git

clean:
	rm -rf reactabular

start:
	(sleep 3 && open http://localhost:$(PORT)/#/examples/all-features)&
	cd reactabular && npm start

stop:
	kill -HUP $(shell lsof -t -i:$(PORT))

