---
title: "Home Automation"
date: 2024-08-01
tech: ["Home Assistant", "ESPHome", "MQTT", "Zigbee"]
category: "Homelab"
status: "active"
featured: false
description: "Smart home setup with local-first automation using open source tools."
---

A smart home system prioritizing local control, privacy, and reliability.

## Philosophy

**Local first**: Everything runs on local hardware. No cloud dependencies.

**Open protocols**: Zigbee, MQTT, ESPHome - no proprietary lock-in.

**Fail safe**: Manual controls always work, even if automation fails.

## Stack

### Control Center
- **Home Assistant**: Central automation hub
- **Mosquitto**: MQTT broker for device communication
- **Zigbee2MQTT**: Bridge for Zigbee devices

### Devices
- **ESPHome**: Custom sensors and controllers on ESP32/ESP8266
- **Zigbee**: Lights, buttons, sensors from various manufacturers
- **Z-Wave**: Some legacy devices

## Automations

Key automations running:
- Lighting based on time, presence, and ambient light
- Climate control with learning thermostat integration
- Security monitoring with local camera processing
- Energy monitoring and optimization

## Hardware

Running on a small home server:
- Intel NUC for Home Assistant
- Conbee II for Zigbee coordination
- Custom ESP32 boards for specialized sensors

## Documentation

Detailed setup notes live in my private documentation. Public notes on general concepts appear in [[Note-Taking|the knowledge base]] occasionally.
