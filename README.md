# Flavor

A minimal Hugo theme with Tailwind CSS and Zettelkasten-inspired knowledge management features.

## Installation

Add this theme as a git submodule:

```bash
git submodule add https://github.com/a-kostevski/flavor.git themes/flavor
```

## Configuration

Set the theme in your `hugo.toml`:

```toml
theme = "flavor"
```

### Zettelkasten Features

Enable or disable zettelkasten features in your site params:

```toml
[params]
showBacklinks = true       # Show backlinks section on pages
showGraph = true           # Show knowledge graph on pages
showRandomNote = false     # Show random note button in header
showRelatedNotes = true    # Show algorithmically related notes

[params.graph]
enabled = true
height = "24rem"           # Height of inline graph
```

### Taxonomies

Add the type taxonomy for note classification:

```toml
[taxonomies]
tag = "tags"
category = "categories"
type = "types"
```

## Features

### Core Features

- Tailwind CSS with typography plugin
- Dark mode support
- Responsive design
- Search functionality (Fuse.js)
- Projects section layout
- Multilingual support

### Zettelkasten Features

- **Wikilinks**: Link between notes using `[[Page Name]]` or shortcode syntax
- **Backlinks**: Automatic detection of pages linking to current page
- **Knowledge Graph**: D3.js force-directed visualization of connections
- **Note Types**: Taxonomy for fleeting, literature, permanent, and MOC notes
- **Related Notes**: Algorithmic suggestions based on shared links/tags
- **Orphan Detection**: Find unlinked notes
- **Daily Notes**: Date-based note organization
- **Transclusion**: Embed content from other notes

## Shortcodes

### Wikilink

Link to another page by title, filename, or ID:

```markdown
{{< wikilink "Page Name" >}}
{{< wikilink "Page Name" "Custom Display Text" >}}
{{< wikilink id="202412091430" >}}
```

### Wikilink Markdown Syntax

Use Obsidian-style double bracket syntax (processed via render hook):

```markdown
[[Page Name]]
[[Page Name|Display Text]]
[[id:202412091430]]
```

### Transclude

Embed content from another page:

```markdown
{{< transclude "Page Name" >}}
{{< transclude "Page Name" section="## Specific Section" >}}
```

### Admonition

Create callout boxes:

```markdown
{{< admonition type="note" title="Note Title" >}}
Content here
{{< /admonition >}}
```

Types: note, tip, warning, danger, info

### Sidenote

Add margin notes:

```markdown
{{< sidenote >}}Side content{{< /sidenote >}}
```

### Spoiler

Hidden content revealed on click:

```markdown
{{< spoiler >}}Hidden content{{< /spoiler >}}
```

## Front Matter

### Standard Fields

```yaml
title: "Page Title"
date: 2024-12-09
tags: ["tag1", "tag2"]
description: "Page description"
```

### Zettelkasten Fields

```yaml
id: "202412091430"           # Unique timestamp ID (YYYYMMDDHHmm)
type: "permanent"            # fleeting | literature | permanent | moc
aliases: ["alt-name"]        # Alternative titles for linking
source: "https://..."        # Source URL (for literature notes)
```

## Note Types

| Type | Purpose | Icon |
|------|---------|------|
| `fleeting` | Quick captures, ideas to process | Pencil (amber) |
| `literature` | Notes from external sources | Book (blue) |
| `permanent` | Refined, atomic knowledge | Check (green) |
| `moc` | Map of Content, index pages | Map (purple) |

## Archetypes

### Notes

```bash
hugo new notes/my-note.md
```

Creates a note with zettelkasten front matter including auto-generated ID.

### Daily Notes

```bash
hugo new notes/daily/2024-12-09.md
```

Creates a daily note with linked navigation to previous/next days.

## Special Pages

### Graph View

Create `content/graph.md`:

```yaml
---
title: "Knowledge Graph"
layout: "single"
type: "graph"
---
```

Full-page interactive graph with filters and search.

### Orphan Notes

Create `content/orphans.md`:

```yaml
---
title: "Orphan Notes"
layout: "single"
type: "orphans"
---
```

Lists pages with no incoming backlinks.

## Graph Visualization

The knowledge graph shows connections between pages:

- **Solid blue lines**: Direct wikilinks
- **Dashed gray lines**: Shared tags
- **Node colors**: Based on section (articles=blue, notes=green, projects=purple)
- **Pink node**: Current page

### Full-Page Graph Controls

- Section filters (toggle visibility)
- Link type toggles (direct links, tag connections)
- Search to highlight nodes
- Zoom controls
- Click nodes to navigate

## Related Notes Algorithm

Scoring for related note suggestions:

| Factor | Points |
|--------|--------|
| Backlink from page | +5 |
| Shared outgoing link | +3 |
| Shared tag | +2 |
| Same section | +1 |
| Same type | +1 |

Top 5 highest-scoring pages are displayed.

## Development

Install dependencies:

```bash
npm install
```

Build CSS:

```bash
npm run build
```

Watch for changes:

```bash
npm run dev
```

## i18n Support

The theme includes translations for English and Swedish. Translation keys include:

- `backlinks`, `noBacklinks`
- `relatedNotes`, `randomNote`
- `orphanNotes`, `noOrphanNotes`
- `noteType`, `noteType_fleeting`, `noteType_literature`, `noteType_permanent`, `noteType_moc`
- `graphView`, `dailyNote`, `transcludedFrom`

Add translations in `i18n/[lang].toml`.

## License

MIT
