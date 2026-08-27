# CMS Business Services

## Student Information
- **Name:** Lahiru Mudith
- **Student Number:** CMS-ST-2026
- **GCP Project ID:** cms-cloud-architecture

## Description
This repository contains the business domain microservices for the Clinic Management System. It includes the Patient Service (managing patient demographics and photo uploads using PostgreSQL), Doctor Service (managing doctor profiles and schedules using MongoDB), and Appointment Service (coordinating appointment scheduling across patients and doctors using MySQL and Spring RestClient).

## Technology Stack
- Java 25 / Spring Boot 3.4.3
- Spring Cloud 2024.0.0
- PostgreSQL (Cloud SQL) / MongoDB (Firestore) / MySQL (Cloud SQL)
- Spring Data JPA & Spring Data MongoDB
- Spring RestClient (Load balanced inter-service communication)
- MapStruct 1.6.3 & Lombok
- AOP Aspect (ID normalization) & Custom Bean Validation
- PM2 (process management)

## Setup / Getting Started
1. Ensure Config Server and Service Registry are running from `cms-platform`.
2. Build all domain microservices:
   ```bash
   cd service-patient && mvn clean package -DskipTests && cd ..
   cd service-doctor && mvn clean package -DskipTests && cd ..
   cd service-appointment && mvn clean package -DskipTests && cd ..
   ```
3. Start all business microservices via PM2:
   ```bash
   pm2 start ecosystem.config.js
   ```

## Microservices & API Endpoints

### 1. Patient Service (Port: 8000)
| Method | Path | Description |
|--------|------|-------------|
| POST | /api/v1/patients | Create new patient with photo (multipart/form-data) |
| PUT | /api/v1/patients/{patientId} | Update patient details and/or photo |
| DELETE | /api/v1/patients/{patientId} | Delete patient and associated photo |
| GET | /api/v1/patients/{patientId} | Get patient by ID (NIC format) |
| GET | /api/v1/patients | Get all patients |
| GET | /api/v1/patients/{patientId}/photo | Retrieve patient photo binary |

### 2. Doctor Service (Port: 8001)
| Method | Path | Description |
|--------|------|-------------|
| POST | /api/v1/doctors | Create doctor profile |
| PUT | /api/v1/doctors/{doctorId} | Update doctor profile |
| DELETE | /api/v1/doctors/{doctorId} | Delete doctor profile |
| GET | /api/v1/doctors/{doctorId} | Get doctor by ID |
| GET | /api/v1/doctors | Get all doctors |

### 3. Appointment Service (Port: 8002)
| Method | Path | Description |
|--------|------|-------------|
| POST | /api/v1/appointments | Book appointment (validates patient & doctor) |
| PUT | /api/v1/appointments/{id} | Update appointment details |
| DELETE | /api/v1/appointments/{id} | Cancel/delete appointment |
| GET | /api/v1/appointments/{id} | Get appointment by ID |
| GET | /api/v1/appointments | Get all appointments |
| GET | /api/v1/appointments?patientId={id} | Get appointments for specific patient |
