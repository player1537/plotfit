.MAKEFLAGS += --warn-undefined-variables
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c

ifndef PYTHON
PYTHON := $(firstword $(shell which python2 python2.7 python))
endif

ifndef NPM
NPM := $(firstword $(shell which npm))
endif

ifndef WEBPACK
WEBPACK := $(firstword node_modules/.bin/webpack)
endif

export DJANGO_COLORS := nocolor

ifndef DJANGO_PORT
DJANGO_PORT := 8000
endif

.PHONY: runserver
runserver:
	$(WEBPACK) --config webpack.config.js --watch & \
	$(PYTHON) manage.py runserver 0.0.0.0:$(DJANGO_PORT)

.PHONY: collectstatic
collectstatic:
	$(PYTHON) manage.py collectstatic

.PHONY: makemigrations
makemigrations:
	$(PYTHON) manage.py makemigrations

.PHONY: createsuperuser
createsuperuser:
	$(PYTHON) manage.py createsuperuser

.PHONY: migrate
migrate:
	$(PYTHON) manage.py migrate

.PHONY: depend-python
depend-python:
	$(PYTHON) -m pip install -r requirements.txt

.PHONY: depend-javascript
depend-javascript:
	$(NPM) --no-colors install

.PHONY: clean
clean:
	rm -rf -- raw/ sectioned/
