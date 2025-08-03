# Happy Fish

Monitoring and control system for the Happy Fish Lab at Queens College. Includes a web portal, backend server, and hardware modules running on Raspberry Pi and Pico devices.

## Overview

This project is divided into three major parts:

### 1. WebApp (`/webapp`)
- Web portal to view and control the fish lab environment.
- Displays sensor data and lighting status.
- Allows users (admins or students) to configure schedules and lighting rules.
- Two main pages:
  - **Dashboard**: shows current sensor readings and lighting controls.
  - **Sensor Page**: shows historical graphs and detailed data.

### 2. Server (`/server`)
- Backend API layer between the client and the hardware application.
- Stores all sensor data, lighting configs, and user settings.
- Sends updated settings to the hardware.
- Detects failures in communication with the application and notifies admins.

### 3. Nexus (`/nexus`)
- Contains all hardware-facing application code.
- Built for Raspberry Pi and Pico devices deployed in the fish lab.
- Runs independently from the internet; can cache and apply configs offline.

#### Submodules inside `/nexus`:
- **core**:  
  Runs on the central Raspberry Pi.  
  Hosts the connection to the server.  
  Receives configs and forwards commands to Pico devices.  
  Coordinates sensors and lighting modules via I2C.

- **lumen**:  
  Runs on a Raspberry Pi Pico.  
  Controls white and RGB lighting for shelves.  
  Responds to manual or scheduled lighting commands from `core`.

- **probe**:  
  Runs on a Raspberry Pi Pico.  
  Reads sensor values (e.g., temperature, pH, light).  
  Sends periodic updates to `core`.

- **shared**:  
  Contains common TypeScript definitions, config schemas, and command interfaces used by all three submodules.

## Objectives

- Modular and decoupled architecture.
- Reliable operation in case of server outages.
- Easy setup and deployment.
- Remote control and real-time monitoring from the web portal.
- Offline fallback with config caching and local control.

## License

MIT
