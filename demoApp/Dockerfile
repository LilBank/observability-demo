# Stage 1: Build
FROM maven:3.8.5-openjdk-17-slim AS builder

# Set working directory
WORKDIR /app

# Copy the pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Stage 2: Run
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /app/target/*.jar app.jar

# Copy the OpenTelemetry Java Agent from the root directory
COPY opentelemetry-javaagent.jar /app

# Expose the port the app runs on
EXPOSE 8080

# Set the entrypoint with the OpenTelemetry agent
ENTRYPOINT ["java", "-javaagent:/app/opentelemetry-javaagent.jar", "-jar", "/app/app.jar"]
