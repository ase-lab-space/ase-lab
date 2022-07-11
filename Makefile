.DEFAULT_GOAL := run

.PHONY: build
build:
	docker build --no-cache -t ase-lab-frontend .

.PHONY: run
up: build
	docker run -it --rm -p 8080:8080 --name ase-lab-frontend-server ase-lab-frontend

.PHONY: kill
kill:
	docker kill ase-lab-frontend-server
