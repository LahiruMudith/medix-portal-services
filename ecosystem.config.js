module.exports = {
  apps: [
    {
      name: "patient-service",
      script: "java -jar ./service-patient/target/Patient-Service-1.0.0.jar",
      log_file: "./logs/patient-service.log",
    },
    {
      name: "doctor-service",
      script: "java -jar ./service-doctor/target/Doctor-Service-1.0.0.jar",
      log_file: "./logs/doctor-service.log",
    },
    {
      name: "appointment-service",
      script: "java -jar ./service-appointment/target/Appointment-Service-1.0.0.jar",
      log_file: "./logs/appointment-service.log",
    },
  ],
};
