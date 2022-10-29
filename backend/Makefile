VENV ?= venv

.PHONY: venv
venv:
	python3 -m venv $(VENV)
	$(VENV)/bin/python -m pip install --upgrade pip
	$(VENV)/bin/pip install -r requirements.txt
.PHONY: lint

run:
	$(VENV)/bin/python main.py