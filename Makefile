lint:
	npx eslint .
start:
	vagrant ssh -c 'cd /vagrant && npm start'
test:
	npm test
setup:
	npm ci
build:
	vagrant up
