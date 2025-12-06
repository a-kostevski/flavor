---
# Technical article archetype
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}  # Update when content changes
draft: true
description: ""       # Brief summary for SEO and previews (recommended: 150-160 chars)
tags: []              # e.g., [go, kubernetes, devops]
categories: []        # e.g., [tutorials, deep-dives, guides]
series: ""            # Link related articles: "Building a CLI in Go"
toc: true             # Show table of contents sidebar
---

## Overview

<!-- Brief introduction: What problem does this solve? Who is it for? -->

## Prerequisites

<!-- What the reader needs to know/have before starting -->

## Main Content

<!-- Your detailed content here -->

## Conclusion

<!-- Summary and next steps -->

<!--
SHORTCODE REFERENCE:

Admonitions (note, info, tip, warning, danger):
{{</* admonition type="tip" title="Pro Tip" */>}}
Your tip content here
{{</* /admonition */>}}

Sidenotes:
Main text {{</* sidenote */>}}Additional context shown in margin{{</* /sidenote */>}} continues here.

Wikilinks (internal links):
{{</* wikilink "Page Title" */>}} or {{</* wikilink "Page Title" "Display Text" */>}}
-->
