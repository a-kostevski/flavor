---
title: "Markdown-funktioner Demo"
date: 2024-12-05
tags: ["markdown", "dokumentation"]
categories: ["referens"]
description: "En komplett referens för alla markdown-funktioner och kortkommandon som finns tillgängliga i detta tema."
toc: true
---

Denna artikel demonstrerar alla markdown- och shortcode-funktioner som finns i Flavor-temat.

## Textformatering

Standard markdown-formatering fungerar som förväntat:

- **Fet text** med `**fet**`
- *Kursiv text* med `*kursiv*`
- ~~Genomstruken~~ med `~~genomstruken~~`
- `Inline-kod` med backticks
- [Länkar](https://example.com) med `[text](url)`

## Wikilänkar

Länka till andra anteckningar med dubbla hakparenteser:

- [[Principen om atomära anteckningar]] - Länk via titel
- [[Anteckningar]] - Länk till MOC-sidor

## Admonitions

Fem typer av callout-rutor:

{{< admonition type="note" title="Notera" >}}
Allmän information eller förtydligande.
{{< /admonition >}}

{{< admonition type="tip" title="Tips" >}}
Hjälpsamma förslag eller bästa praxis.
{{< /admonition >}}

{{< admonition type="warning" title="Varning" >}}
Viktiga försiktighetsåtgärder att vara medveten om.
{{< /admonition >}}

## Kodblock

Syntaxmarkering för många språk:

```python
def fibonacci(n: int) -> int:
    """Beräkna det n:te Fibonacci-talet."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

## Tabeller

| Funktion | Status | Anteckningar |
|----------|--------|--------------|
| Wikilänkar | Komplett | Både `[[]]` och shortcode-syntax |
| Baklänkar | Komplett | Auto-detekterade med kontext |
| Graf | Komplett | D3.js kraftriktad |
| Sök | Komplett | Fuse.js fuzzy-sökning |
| Mörkt läge | Komplett | Auto eller manuell växling |

## Blockquotes

> "Slip-boxen är designad för att presentera idéer du redan har glömt."
>
> — Sönke Ahrens, *How to Take Smart Notes*

## Slutsats

Detta tema stödjer en rik uppsättning markdown-funktioner designade för kunskapshantering.

Se [[Anteckningar]] för det bredare systemet som dessa funktioner stödjer.
