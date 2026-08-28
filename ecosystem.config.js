module.exports = {
  apps: [
    {
      name: "cloud-sql-auth-proxy",
      script: "./cloud-sql-proxy project-dd639dbc-1e4a-48b8-bae:us-central1:medix-postgres-vm project-dd639dbc-1e4a-48b8-bae:asia-southeast1:medix-mysql-vm --private-ip",
      log_file: "logs/cloud-sql-auth-proxy.log",
    },
    {
      name: "patient-service",
      script: "java",
      args: "-jar ./patient-service/target/Patient-Service-1.0.0.jar",
      log_file: "logs/patient-service.log",
      instances: 2,
    },
    {
      name: "doctor-service",
      script: "java",
      args: "-jar ./doctor-service/target/Doctor-Service-1.0.0.jar",
      log_file: "logs/doctor-service.log",
      instances: 2,
    },
    {
      name: "appointment-service",
      script: "java",
      args: "-jar ./appointment-service/target/Appointment-Service-1.0.0.jar",
      log_file: "logs/appointment-service.log",
      instances: 2,
    }
  ]
};
