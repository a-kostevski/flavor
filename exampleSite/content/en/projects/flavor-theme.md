---
title: "Flavor Theme"
date: 2024-11-01
tech: ["Hugo", "Tailwind CSS", "D3.js", "JavaScript"]
category: "Open Source"
status: "active"
featured: true
github: "https://github.com/a-kostevski/flavor"
description: "A minimal Hugo theme with Tailwind CSS and Zettelkasten-inspired knowledge management features."
---

Flavor is a Hugo theme built for personal knowledge management. It combines the simplicity of static site generation with powerful features for networked note-taking.

## Features

- **Wikilinks**: Link notes using `[[double brackets]]` or shortcodes
- **Backlinks**: Automatic detection of pages linking to the current page
- **Knowledge Graph**: D3.js visualization of note connections
- **Note Types**: Taxonomy for fleeting, literature, permanent, and MOC notes
- **Related Notes**: Algorithmic suggestions based on shared links and tags
- **Dark Mode**: Automatic theme switching with manual toggle
- **Search**: Full-text fuzzy search with Fuse.js

## Technical Stack

Built with a modern, minimal stack:
- **Hugo**: Fast static site generation
- **Tailwind CSS**: Utility-first styling
- **D3.js**: Graph visualization
- **Fuse.js**: Client-side search

No build step required for the JavaScript - it's all vanilla JS that works directly in the browser.

## Philosophy

The theme prioritizes:
1. **Speed**: Static HTML, minimal JavaScript
2. **Simplicity**: No external services or databases
3. **Ownership**: Your content stays in plain Markdown files
4. **Longevity**: Standard formats that will work for decades

## Development

The theme is actively developed and welcomes contributions. See the GitHub repository for issues and roadmap.
