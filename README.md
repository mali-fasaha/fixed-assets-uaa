# Fixed Assets Uaa

This application was generated using JHipster 6.4.1, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v6.4.1](https://www.jhipster.tech/documentation-archive/v6.4.1).

This is a "uaa" application intended to be part of a microservice architecture, please refer to the [Doing microservices with JHipster][] page of the documentation for more information.

This is also a JHipster User Account and Authentication (UAA) Server, refer to [Using UAA for Microservice Security][] for details on how to secure JHipster microservices with OAuth2.
This application is configured for Service Discovery and Configuration with the JHipster-Registry. On launch, it will refuse to start if it is not able to connect to the JHipster-Registry at [http://localhost:8761](http://localhost:8761). For more information, read our documentation on [Service Discovery and Configuration with the JHipster-Registry][].

## Development

To start your application in the dev profile, simply run:

    ./mvnw

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Doing API-First development using openapi-generator

[OpenAPI-Generator]() is configured for this application. You can generate API code from the `src/main/resources/swagger/api.yml` definition file by running:

```bash
./mvnw generate-sources
```

Then implements the generated delegate classes with `@Service` classes.

To edit the `api.yml` definition file, you can use a tool such as [Swagger-Editor](). Start a local instance of the swagger-editor using docker by running: `docker-compose -f src/main/docker/swagger-editor.yml up -d`. The editor will then be reachable at [http://localhost:7742](http://localhost:7742).

Refer to [Doing API-First development][] for more details.

## Building for production

### Packaging as jar

To build the final jar and optimize the fixedAssetsUaa application for production, run:

    ./mvnw -Pprod clean verify

To ensure everything worked, run:

    java -jar target/*.jar

Refer to [Using JHipster in production][] for more details.

### Packaging as war

To package your application as a war in order to deploy it to an application server, run:

    ./mvnw -Pprod,war clean verify

## Testing

To launch your application's tests, run:

    ./mvnw verify

For more information, refer to the [Running tests page][].

### Code quality

Sonar is used to analyse code quality. You can start a local Sonar server (accessible on http://localhost:9001) with:

```
docker-compose -f src/main/docker/sonar.yml up -d
```

You can run a Sonar analysis with using the [sonar-scanner](https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner) or by using the maven plugin.

Then, run a Sonar analysis:

```
./mvnw -Pprod clean verify sonar:sonar
```

If you need to re-run the Sonar phase, please be sure to specify at least the `initialize` phase since Sonar properties are loaded from the sonar-project.properties file.

```
./mvnw initialize sonar:sonar
```

or

For more information, refer to the [Code quality page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.

For example, to start a postgresql database in a docker container, run:

    docker-compose -f src/main/docker/postgresql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/postgresql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw -Pprod verify jib:dockerBuild

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[jhipster homepage and latest documentation]: https://www.jhipster.tech
[jhipster 6.4.1 archive]: https://www.jhipster.tech/documentation-archive/v6.4.1
[doing microservices with jhipster]: https://www.jhipster.tech/documentation-archive/v6.4.1/microservices-architecture/

[Using UAA for Microservice Security]: https://www.jhipster.tech/documentation-archive/v6.4.1/using-uaa/[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v6.4.1/development/
[Service Discovery and Configuration with the JHipster-Registry]: https://www.jhipster.tech/documentation-archive/v6.4.1/microservices-architecture/#jhipster-registry
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v6.4.1/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v6.4.1/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v6.4.1/running-tests/
[Code quality page]: https://www.jhipster.tech/documentation-archive/v6.4.1/code-quality/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v6.4.1/setting-up-ci/

[openapi-generator]: https://openapi-generator.tech
[swagger-editor]: https://editor.swagger.io
[doing api-first development]: https://www.jhipster.tech/documentation-archive/v6.4.1/doing-api-first-development/

## Setup

The following keys need to be setup to enable connection to database
    - PG_DATABASE_DEV_USER
    - PG_DATABASE_DEV_PASSWORD
    - JHIPSTER_REGISTRY_USERNAME
    - JHIPSTER_REGISTRY_PASSWORD
    - JHIPSTER_SECURITY_AUTH_JWT_SECRET
    - JHIPSTER_SECURITY_AUTH_JWT_BASE64-SECRET
    
Ensure the postgresql instance is running on port : 58211

The postgresql instance might require access rights to the path: 
    /var/lib/postgresql/data/
    
Ideally the app is meant to persist data to a containerised postgresql instance. Simply running the command
    
    docker-compose -f src/main/docker/app.yml up -d
    
will result in a postgresql instance being set up on port 585857
