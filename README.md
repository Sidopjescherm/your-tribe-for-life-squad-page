# Your Tribe for Life Squadpage

Ontwerp en ontwikkel met een team een overzicht van jouw tribe met alle online visitekaartjes, op basis van een headless CMS en een framework.

## Installatie

Om met dit project te werken heb je een aantal stappen te gaan.

- Als je '  CTRL/Command + ` '  in houd kom je in de command line
- In de command line type je 'npm i' en druk je op enter.
- Daarna type je 'npm install' en druk je op enter
- Om vervolgens de app te starten in het Sveltekit framework type je 'cd my-app' in de command line
- Als laatste stap type je in de command line 'npm run dev' en zo kan je aan de slag met deze repo

## Ontwerpkeuzes

### Stijl
Deze squadpage is een opdracht van de opleiding FDND. Voor ons tweedejaars leerlingen is dit de derde squadpage moeten maken met dit keer een framework. Het doel van deze opdracht is het maken van een online platform waar studenten van het studie jaar 2025/2026 elkaar kunnen ondersteunen en in contact kunnen blijven. Hier zorgen wij ervoor dat mensen elkaar nog kunnen bezoeken door middel van filters en linken naar hun profile card en hun (studenten)Github profiel. 

<img width="447" height="225" alt="image" src="https://github.com/user-attachments/assets/f49d8f9a-4eaa-459d-860b-1d8f5eb98756" />

### Kleuren
De kleuren die wij hebben gekozen voor dit project is een mintgroen die afgeleid is van het FDND groen en een zachte rode/roze kleur voor de kaft. De kaft veranderd ook nog van kleur als je filtert op de tweede klas in het 2025/2026 school jaar. Deze optie voor het filteren blijft ook staan bij de detailpagina van de studenten.

<img width="401" height="514" alt="kaft_2E" src="https://github.com/user-attachments/assets/d568323d-9e7d-4a46-a28f-40aa4dcd4280" /> <img width="401" height="514" alt="kaft_2F" src="https://github.com/user-attachments/assets/515572d7-b668-4e60-8fd5-21731605cb85" /> <img width="457" height="884" alt="detail_pagina" src="https://github.com/user-attachments/assets/045f94fd-fb1a-498f-bea0-aaa61b173109" />

## Functies

### Framework
In dit jaar zijn we aan het werk met een nieuw framework en dit framework is [Sveltekit](https://svelte.dev/docs/kit/introduction). In dit framework is een webapplicatie bouwen wat ge'fine-tuned'  zodat het makkelijker is voor developers om nieuwe webapplicaties te maken. In Sveltekit maak je gebruik van een [layout.pagina](https://github.com/Sidopjescherm/your-tribe-for-life-squad-page/blob/main/my-app/src/routes/%2Blayout.svelte), [components](https://github.com/Sidopjescherm/your-tribe-for-life-squad-page/tree/main/my-app/src/lib/components), [slugpagina's](https://github.com/Sidopjescherm/your-tribe-for-life-squad-page/tree/main/my-app/src/routes/%5Bid%5D) en [normale pagina's](https://github.com/Sidopjescherm/your-tribe-for-life-squad-page/blob/main/my-app/src/routes/%5Bid%5D/%2Bpage.svelte). Wij hebben ons meer ingelezen over hoe Sveltekit werkt en wij zijn al goed onderweg om het beter te begrijpen. 

### Het jaarboek
Het jaarboek dat wij hebben gemaakt is interactief met het klikken op de pagina's. Om naar de volgende bladzijde te gaan klik je op de rechterpagina en om terug te gaan klik je op de linker. Ook kan je op de opkomende pagina's of vorige klikken. Dit is gedaan door javascript en css en is gebaseerd op een flipboek project die we hebben gevonden op codepen. Ook als je op de jaarboek foto van een student of docent klikt kom je uit bij diegene hun detail pagina. Op deze pagina kan je een aantal feitjes lezen over de persoon zelf en kan je doorverwezen worden naar hun github pagina of hun profile card als je nog eens op hun foto klikt.

https://github.com/user-attachments/assets/6b74a61f-d77d-4e8c-96ae-65ed64a1214c

### Directus
In ons tweede jaar gaan we weer verder met de REST API van [Directus](https://fdnd.directus.app/items/person), want hier verkrijgen wij de data van FDND en waar alle studenten staan. Nu hebben wij gefiltered op het cohort van 2025/2026, maar de mogelijkheden voor uitbreiding is vrij groots. 

## Bronnen 

### [@Flipbook](https://codepen.io/Sebastiaan-hva/pen/yyYQEqa)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
