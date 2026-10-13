# Hope and Love — site web

Site vitrine bilingue (français / anglais) de **Hope and Love**, organisation humanitaire et chrétienne.
Construit avec Next.js 16 (App Router), Tailwind CSS 4 et TypeScript, prêt à être déployé sur Vercel.

- `/fr` : version française (langue par défaut)
- `/en` : version anglaise
- `/` redirige automatiquement vers la langue du visiteur (dernière langue consultée, sinon langue du navigateur, sinon français).

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:3000.

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Textes en français | `src/i18n/dictionaries/fr.ts` |
| Textes en anglais | `src/i18n/dictionaries/en.ts` (même structure que le français) |
| E-mail, téléphone, WhatsApp, réseaux sociaux | `src/lib/site.ts` |
| Couleurs de la marque | `src/app/globals.css` |
| Images (affiches) | `public/images/` |
| Logo, favicon | `public/brand/`, `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/favicon.ico` |

Dans les textes, entourez un passage de `**doubles astérisques**` pour le mettre en gras.

Les coordonnées vides dans `src/lib/site.ts` sont simplement masquées. Dès qu’un e-mail, un téléphone ou un numéro WhatsApp est renseigné, les boutons correspondants apparaissent dans la section « Contact » et dans le pied de page.

## Déployer sur Vercel

1. Poussez ce dossier sur un dépôt GitHub (ou GitLab / Bitbucket).
2. Sur https://vercel.com/new, importez le dépôt : Vercel détecte Next.js automatiquement, aucun réglage n’est nécessaire.
3. (Optionnel) Si vous utilisez un nom de domaine personnalisé, ajoutez la variable d’environnement
   `NEXT_PUBLIC_SITE_URL` (ex. `https://www.hopeandlove.tv`) pour que les liens de partage, le sitemap et le référencement utilisent ce domaine. Sans elle, le domaine de production Vercel est utilisé.

Alternative en ligne de commande : `npx vercel` puis `npx vercel --prod`.

## Structure

```
src/
  app/
    [lang]/layout.tsx     Mise en page, polices, métadonnées SEO par langue
    [lang]/page.tsx       Page d’accueil (toutes les sections)
    global-not-found.tsx  Page 404 bilingue
    sitemap.ts, robots.ts Référencement
  components/             En-tête, pied de page et sections
  i18n/                   Langues disponibles et dictionnaires
  lib/site.ts             Coordonnées et réglages du site
  proxy.ts                Redirection vers la bonne langue
```
