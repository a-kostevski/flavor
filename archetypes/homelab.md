---
# Homelab documentation archetype
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
description: ""       # Brief description of this component/service
tags: []              # e.g., [docker, networking, storage, monitoring]

# Infrastructure metadata
services: []          # Services running: [traefik, portainer, prometheus]
hardware: ""          # Hardware info: "Proxmox on Dell OptiPlex 7050"
status: "running"     # running | planned | deprecated | maintenance
---

## Overview

<!-- What is this? Why does it exist in the homelab? -->

## Configuration

<!-- Key configuration details, docker-compose snippets, etc. -->

```yaml
# Example configuration
```

## Network

<!-- IP addresses, ports, DNS entries if relevant -->

| Service | Port | Description |
|---------|------|-------------|
|         |      |             |

## Maintenance

<!-- Backup procedures, update process, common issues -->

## Resources

<!-- Documentation links, tutorials followed -->

-
