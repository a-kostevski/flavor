---
# Zettelkasten note archetype
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true

# Zettelkasten fields
id: "{{ now.Format "200601021504" }}"  # Unique timestamp ID (YYYYMMDDHHmm)
type: ""                # fleeting | literature | permanent | moc
aliases: []             # Alternative names for linking

# Metadata
description: ""         # Brief summary
tags: []                # e.g., [linux, networking, security]
source: ""              # Citation or URL for literature notes
---

<!--
Note Types:
- fleeting: Quick captures, ideas to process later
- literature: Notes from reading/learning (reference source field)
- permanent: Refined, atomic ideas in your own words
- moc: Map of Content - index page linking related notes

Link to other notes using:
- [[Note Title]] or [[Note Title|display text]]
- [[id:202412091430]] for stable ID-based links
-->

## Notes


