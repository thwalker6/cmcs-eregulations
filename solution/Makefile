.PHONY: help
help: ## Show this help.
	@egrep '^[a-zA-Z_\.%-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

regulations: ## Build regulations assets
regulations: ui/regulations/node_modules static-assets/regulations/css/main.css static-assets/regulations/js/main.build.js

ui/regulations/node_modules: ui/regulations/package.json
	cd ui/regulations; \
		npm install;

static-assets/regulations/css/main.css: ui/regulations/css/**/*.scss
	cd ui/regulations; \
		npm run css;

static-assets/regulations/js/main.build.js: ui/regulations/js/main.js ui/regulations/js/src/components/*.vue
	cd ui/regulations; \
		npm run js;

.PHONY: watch
watch: ## Watch regulations static assets and rebuild when they're changed
watch: ui/regulations/node_modules
	cd ui/regulations; \
		(trap 'kill 0' SIGINT; npm run watch-js & npm run watch-css);

.PHONY: storybook
storybook: ## Run storybook for regulations
storybook: ui/regulations/.storybook
	cd ui/regulations; \
		npm run storybook

.PHONY: prototype
prototype: ## Run prototype for regulations
prototype: ui/prototype
	cd ui/prototype; \
		npm run start-container

prototype.clean: ## Stop prototype for regulations
prototype.clean: regulations/static/prototype
	cd regulations/static/prototype; \
		npm run stop-container

.PHONY: lint
lint:
	flake8;

local: ## Start a local environment with parts 400 and 433 loaded.
local: regulations local.docker data.local
	@echo Local environment started. Visit http://localhost:8000

local.docker: ## Start a local environment
local.docker:
	docker-compose up -d; \
		sleep 5; \
		make local.regulations;

local.regulations: ## Run migrations and restart the regulations-core
	docker-compose exec regulations python manage.py migrate; \
		docker-compose restart regulations; \
		sleep 5;

tools/ecfr-parser/build/ecfr-parser: tools/ecfr-parser/*.go tools/ecfr-parser/**/*.go
	cd tools/ecfr-parser; go build -o build/ecfr-parser .

data.prod: ## Load a Part of Title 42. e.g. make data.prod.435 will load Part 435 into prod
data.prod: CORE_URL = https://3iok6sq3ui.execute-api.us-east-1.amazonaws.com/prod/v2/

data.val: ## Load a Part of Title 42. e.g. make data.val.435 will load Part 435 into val
data.val: CORE_URL = https://qavc1ytrff.execute-api.us-east-1.amazonaws.com/val/v2/

data.dev: ## Load a Part of Title 42. e.g. make dev.data.435 will load Part 435 into dev
data.dev: CORE_URL = https://hittwbzqah.execute-api.us-east-1.amazonaws.com/dev/v2/

data.experimental: ## Load a Part of Title 42. e.g. make data.experimental URL=[experimental lambda URL] into dev-experimental
data.experimental: CORE_URL = $(URL)/v2/

data.local: ## Load a Part of Title 42. e.g. make data.local.435 will load Part 435
data.local: CORE_URL = http://localhost:8000/v2/
data.local: export EREGS_USERNAME=RpSS01rhbx
data.local: export EREGS_PASSWORD=UkOAsfkItN

data.%:
	EREGS_API_URL=$(CORE_URL) docker-compose -f docker-compose.yml -f docker-compose.parser.yml up parser

local.stop: ## Stop the local environment, freeing up resources and ports without destroying data.
	docker-compose stop

local.start: ## Start the local environment if stopped using `make local.stop`
	docker-compose start

local.clean: ## Remove the local environment entirely.
	docker-compose down --remove-orphans --volumes

local.createadmin: ## Create a local admin account.
	docker-compose exec regulations python manage.py createsuperuser

local.collectstatic: ## Create static assets.
	docker-compose exec regulations python manage.py collectstatic --noinput

local.opensearch: ## Run a local opensearch environment
	docker-compose -f docker-compose.opensearch.yml up -d

test: ## run the cypress e2e suite
	docker-compose -f docker-compose.yml -f docker-compose.e2e.yml up e2e
test.local: ## run cypress tests locally without docker
	cd ui/e2e; \
		npm install; \
		npm run cypress:run;

local.seed:
	docker-compose exec regulations python manage.py loaddata supplemental_content.category.json
	docker-compose exec regulations python manage.py loaddata supplemental_content.subcategory.json
	docker-compose exec regulations python manage.py loaddata supplemental_content.section.json
	docker-compose exec regulations python manage.py loaddata supplemental_content.supplementalcontent.json

