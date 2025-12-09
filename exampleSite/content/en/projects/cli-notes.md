---
title: "CLI Notes"
date: 2024-06-01
tech: ["Go", "SQLite", "Cobra"]
category: "Developer Tools"
status: "completed"
featured: false
github: "https://github.com/example/cli-notes"
description: "A command-line tool for quick note capture with tagging and search."
---

A fast command-line note-taking tool designed for developers who live in the terminal.

## Features

- **Quick capture**: `notes add "thought about something"`
- **Tagging**: `notes add -t work,ideas "project idea"`
- **Search**: `notes search "keyword"`
- **Export**: `notes export --format markdown`

## Why CLI?

Sometimes you just want to capture a thought without:
- Opening a browser
- Waiting for an app to load
- Leaving the terminal

CLI Notes keeps you in flow.

## Technical Details

Built with Go for fast startup and single-binary distribution. Uses SQLite for local storage - no server required.

```bash
# Install
go install github.com/example/cli-notes@latest

# Quick add
notes add "idea for blog post"

# With tags
notes add -t blog,ideas "write about knowledge graphs"

# Search
notes search "knowledge"
```

## Integration

Pairs well with a full knowledge base. Use CLI Notes for quick captures, then periodically export to your main system for processing and linking.

## Status

Feature complete and stable. Accepting bug fixes but no major new development planned.
