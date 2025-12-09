# Flavor Theme - Example Site

This is a demo site showcasing all features of the Flavor Hugo theme.

## Running the Demo

First, ensure dependencies are installed in the theme root:

```bash
cd themes/flavor
npm install
```

Then from the `exampleSite` directory:

```bash
cd exampleSite
ln -sf ../node_modules node_modules  # Symlink node_modules
hugo server --themesDir ../..
```

## Content Structure

### Articles
- `getting-started-with-zettelkasten.md` - Introduction to the method
- `building-a-knowledge-graph.md` - Technical graph explanation
- `markdown-features-demo.md` - Complete feature reference

### Notes (Zettelkasten)
- **Permanent Notes**: Core concepts (atomic notes, evergreen notes, etc.)
- **Literature Notes**: From books and essays
- **Fleeting Notes**: Quick captures and ideas
- **MOC Notes**: Maps of content (indexes)
- **Daily Notes**: 5 days of daily entries

### Projects
- 4 demo projects with varying status and features

### Swedish Translations
- Key pages translated to Swedish
- Demonstrates multilingual support

## Features Demonstrated

- [x] Wikilinks (`[[double brackets]]` and shortcode)
- [x] Backlinks (auto-detected)
- [x] Knowledge Graph (D3.js visualization)
- [x] Note Types (fleeting, literature, permanent, moc)
- [x] Related Notes (algorithmic suggestions)
- [x] Orphan Detection
- [x] Daily Notes Navigation
- [x] Transclusion
- [x] All Admonition Types
- [x] Sidenotes
- [x] Spoilers
- [x] Code Highlighting
- [x] Dark Mode
- [x] Search
- [x] Multilingual (EN/SV)

## Link Graph

The demo content is interconnected:

```
moc-note-taking ─┬─> atomic-notes-principle
                 ├─> evergreen-notes
                 ├─> bidirectional-linking
                 └─> how-to-take-smart-notes

moc-learning ────┬─> spaced-repetition
                 ├─> progressive-summarization
                 └─> evergreen-notes (shared)

articles ────────> notes (via wikilinks)
daily-notes ─────> permanent notes
```
