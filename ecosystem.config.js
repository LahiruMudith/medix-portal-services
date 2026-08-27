module.exports = {
  apps: [
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
