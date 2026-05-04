# Content
[](#)

## Docker-Container
- Is a lightweight, standalone, and executable package that includes everything needed to run a piece of software.
  - Including the code (A spring boot application).
  - Dependencies (like Java runtime, libraries, etc).
  - Libraries.
  - Configurations (ports, environment variables)
#### Key Benefits of Using Docker Containers:
- Portability: Containers can run consistently across different environments (development, testing, production).
- Isolation: Each container runs in its own isolated environment, ensuring that applications do not interfere with each other.
- Scalability: Containers can be easily scaled up or down based on demand.
- Efficiency: Containers share the host system's kernel, making them more lightweight than traditional virtual machines.
- Fast Deployment: Containers can be started and stopped quickly, enabling rapid development and deployment cycles.
- Version Control: Docker images can be versioned, allowing you to track changes and roll back to previous versions if needed.
- Reproducibility: Containers ensure that applications run the same way regardless of where they are deployed, reducing "it works on my machine" issues.
- Resource Optimization: Containers use system resources more efficiently, allowing for higher density of applications on a single host.
- Ecosystem: Docker has a rich ecosystem of tools and services that enhance container management, orchestration, and security.
- Community Support: A large and active community provides extensive resources, tutorials, and support for Docker users.
- Integration with CI/CD: Docker integrates well with continuous integration and continuous deployment pipelines, streamlining the development workflow.
- Microservices Architecture: Docker is well-suited for deploying microservices, allowing each service to run in its own container.
- Simplified Configuration: Dockerfiles and docker-compose files simplify the configuration and setup of complex applications.
- Security: Containers provide an additional layer of security by isolating applications from the host system and each other.
- Easier Maintenance: Containers can be updated, replaced, or rolled back without affecting the host system or other containers.

## Docker-Image
- Is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software.
  - Including the code (A spring boot application).
  - Dependencies (like Java runtime, libraries, etc).
  - Libraries.
  - Configurations (ports, environment variables)
## Docker-Hub
- Is a cloud-based registry service that allows you to store, share, and manage Docker images.
  - It provides a centralized platform for developers to collaborate and distribute their containerized applications.
  - You can find both official images (maintained by Docker) and community-contributed images on Docker Hub.
  - It supports features like automated builds, webhooks, and access control for private repositories.
## Dockerfile
- Is a text file that contains a set of instructions to build a Docker image.
  - It defines the base image, application code, dependencies, environment variables, and commands to run the application.
  - Dockerfiles are used to automate the process of creating Docker images, ensuring consistency and reproducibility across different environments.
  - Each instruction in a Dockerfile creates a new layer in the image, allowing for efficient storage and caching.
  - Common instructions include `FROM`, `COPY`, `RUN`, `CMD`, `EXPOSE`, and `ENV`.
  - By using a Dockerfile, developers can easily share their application setup with others and streamline the deployment process.
  - Example of a simple Dockerfile for a Spring Boot application:
    ```Dockerfile
    # Use an official OpenJDK runtime as a parent image
    FROM openjdk:11-jre-slim

    # Set the working directory in the container
    WORKDIR /app

    # Copy the application JAR file into the container
    COPY target/my-spring-boot-app.jar app.jar

    # Expose the port that the application will run on
    EXPOSE 8080

    # Define the command to run the application
    CMD ["java", "-jar", "app.jar"]
    ```
## Docker-Compose
- Is a tool that allows you to define and manage multi-container Docker applications using a simple YAML file.
  - It enables you to configure services, networks, and volumes in a single file, making it easier to deploy and manage complex applications.
  - With Docker Compose, you can start, stop, and scale multiple containers with a single command.
  - It is particularly useful for development, testing, and staging environments where you need to run multiple interconnected services (e.g., a web application, database, and cache).
  - Example of a simple `docker-compose.yml` file for a Spring Boot application with a PostgreSQL database:
    ```yaml
    version: '3.8'

    services:
      app:
        image: my-spring-boot-app:latest
        ports:
          - "8080:8080"
        environment:
          SPRING_DATASOURCE_URL: jdbc:postgresql://db:5432/mydatabase
          SPRING_DATASOURCE_USERNAME: user
          SPRING_DATASOURCE_PASSWORD: password
        depends_on:
          - db

      db:
        image: postgres:latest
        environment:
          POSTGRES_DB: mydatabase
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
        volumes:
          - db-data:/var/lib/postgresql/data

    volumes:
      db-data:
    ```
- In this example, we define two services: `app` (the Spring Boot application) and `db` (the PostgreSQL database). The `app` service depends on the `db` service, and we also define a volume to persist the database data.
- To start the application, you would run the command `docker-compose up` in the directory containing the `docker-compose.yml` file.
- Docker Compose simplifies the process of managing multi-container applications, making it easier to develop, test, and deploy complex systems.
- For more information, refer to the [official Docker Compose documentation](https://docs.docker.com/compose/).
- To install Docker and Docker Compose, follow the instructions on the [official Docker website](https://docs.docker.com/get-docker/).
- Make sure to have Docker and Docker Compose installed on your machine before using the above examples.
- You can build the Docker image for your Spring Boot application using the following command:
  ```bash
  docker build -t my-spring-boot-app:latest .
  ```
- After building the image, you can run the application using Docker Compose with the command:
  ```bash
    docker-compose up
    ```
- This will start both the Spring Boot application and the PostgreSQL database as defined in the `docker-compose.yml` file.
- To stop the application, you can use the command:
  ```bash
    docker-compose down
    ```
- This will stop and remove the containers, networks, and volumes created by Docker Compose.
- You can also scale the services defined in the `docker-compose.yml` file using the `--scale` option. For example, to scale the `app` service to 3 instances, you can run:
  ```bash
    docker-compose up --scale app=3
    ```
- This will create 3 instances of the Spring Boot application, all connected to the same PostgreSQL database.
- For more advanced configurations and options, refer to the [official Docker Compose documentation](https://docs.docker.com/compose/).
- Remember to customize the `docker-compose.yml` file and Dockerfile according to your application's specific requirements, such as environment variables, ports, and dependencies.
## Publish image on docker hub
- To publish your Docker image on Docker Hub, follow these steps:
  1. Create a Docker Hub account if you don't have one already by visiting [Docker Hub](https://hub.docker.com/).
  2. Log in to your Docker Hub account using the command line:
     ```bash
     docker login
     ```
     Enter your Docker Hub username and password when prompted.
  3. Tag your Docker image with your Docker Hub username and the desired repository name. For example:
     ```bash
     docker tag my-spring-boot-app:latest your-dockerhub-username/my-spring-boot-app:latest
     ```
  4. Push the tagged image to Docker Hub using the following command:
     ```bash
     docker push your-dockerhub-username/my-spring-boot-app:latest
     ```
  5. Once the push is complete, you can verify that your image is available on Docker Hub by visiting your profile page on the Docker Hub website.
## Commands
- docker pull image-name >> pull image from docker hub
- docker images >> list all the images
- docker run image-name >> run the image to create a container if available else pull from docker hub and create container for that image
- docker run -it image-name >> run image in interactive mode
- docker run -d image-name >> run image in diattached mode
- docker ps -a >> list all the container wether stop or running
- docker ps >> list all the running containe
- docker start container_id >> start an existin container by giving container name/ID
- docker stop container_id >> stop a running container by giving container name/ID
- docker rmi image_name >> remove image
- docker rm container_name >> remove container
- docker run --name yourOwnContainerName -e MYSQL_ROOT_PASSWORD=myPassword -d mysql:tag
- Docker run -p portOfHostMachin:portOfContainer image_name >> port binding
- docker logs container_id
- docker exec -it container_id /bin/bash >> go inside container for troubleshoot
- env once yu are in bash type env to check env variables
