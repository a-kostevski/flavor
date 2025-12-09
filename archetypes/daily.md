---
# Daily note archetype
# Create with: hugo new notes/daily/YYYY-MM-DD.md
title: "{{ .Date.Format "January 2, 2006" }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false

# Zettelkasten fields
id: "{{ .Date.Format "20060102" }}"
type: "fleeting"
aliases: ["{{ .Date.Format "2006-01-02" }}", "{{ .Date.Format "Jan 2" }}"]

# Metadata
tags: ["daily"]
---

## Today's Focus



## Notes



## Links Created

<!--
Link to notes you created or connected today:
- [[Note Title]]
-->

## Tomorrow

<!--
What to focus on tomorrow
-->
