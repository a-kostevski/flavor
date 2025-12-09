---
title: "Building a Knowledge Graph"
date: 2024-12-03
tags: ["hugo", "javascript", "visualization"]
categories: ["technical"]
description: "How the knowledge graph visualization works and why it matters for networked thought."
toc: true
---

The knowledge graph visualizes connections between notes. It turns the abstract idea of "linked thinking" into something you can see and explore.

## Why Visualize?

Our brains are visual. A list of backlinks tells you *what* connects, but a graph shows you *how* the connections form patterns.

{{< admonition type="info" title="Try It" >}}
Open the [full-page graph](/graph/) to explore. Drag nodes, filter by section, toggle link types.
{{< /admonition >}}

## How It Works

The graph uses D3.js force simulation. Each note becomes a node; each link becomes an edge.

```javascript
const simulation = d3.forceSimulation(nodes)
  .force('link', d3.forceLink(links).id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-200))
  .force('center', d3.forceCenter(width / 2, height / 2));
```

Nodes repel each other (charge force) while links pull connected nodes together. The result is a layout where clusters naturally emerge.

## Two Types of Edges

The graph shows two kinds of connections:

**Direct links** (solid blue): Explicit wikilinks between notes. These are intentional connections you create.

**Tag connections** (dashed gray): Notes sharing the same tag. These are implicit - they suggest possible relationships you might not have noticed.

{{< spoiler title="Technical Detail: Edge Detection" >}}
Direct links are detected by scanning note content for `[[...]]` patterns and wikilink shortcodes. This happens at build time, so the graph data is static and fast to load.

```go
{{- $bracketMatches := findRE `\[\[([^\]|]+)` $content -}}
```
{{< /spoiler >}}

## Reading the Graph

**Clusters** indicate related concepts. The [[Note-Taking]] and [[Learning]] nodes should be close together, connected by shared notes.

**Hubs** are highly-connected nodes. MOCs like [[Note-Taking]] naturally become hubs because they link to many notes.

**Bridges** connect different clusters. A note that links learning concepts to technical implementations bridges those domains.

## Filtering

The full-page graph offers controls to:
- Show/hide sections (articles, notes, projects)
- Toggle direct links vs tag connections
- Search for specific notes
- Zoom in on details

This makes large graphs manageable while preserving the overall structure.

## Limitations

The graph is a *model*, not reality. It shows explicit connections but not the implicit understanding in your head.

Use it as a tool for discovery, not a measure of knowledge completeness.

## Building Your Own

The graph is generated entirely in Hugo templates. No external build step required. Check the theme's `partials/graph.html` for implementation details.

See [[Bidirectional Linking]] for why the connections matter more than the visualization itself.
