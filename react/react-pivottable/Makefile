# ------------------------------------------------------------------------
# website       https://react-pivottable.js.org
# source        https://github.com/plotly/react-pivottable.git
# git tag       2ce4713
# activity      Nov 26 2017
# issues        
# 
# dependencies
#   * node  v8.9.2
#   * npm   v5.5.1
#
# ports
#   this package uses webpack, default port is 8080. updated local 
#   ./webpack.config.js to use port 3000 and copy into react-pivottable
#   during 'make install' step
# ------------------------------------------------------------------------
GIT_TAG = 2ce4713
PORT    = 3000


install:
	if [ ! -d react-pivottable ]; then make clone; fi
	cd react-pivottable && git checkout $(GIT_TAG)
	cp webpack.config.js react-pivottable
	cd react-pivottable && npm install

clone:
	echo 'react-pivottable/' > .gitignore
	git clone https://github.com/plotly/react-pivottable.git

clean:
	rm -rf react-pivottable

start:
	cd react-pivottable && npm start &

# ------------------------------------------------------------------------
# for this to work, you have to have already quit chrome...
# ------------------------------------------------------------------------
chrome: 
	open -a "Google Chrome" --args --auto-open-devtools-for-tabs http://localhost:$(PORT)

stop:
	kill -HUP $(shell lsof -t -i:$(PORT))

