# Quietta — Shopify Theme

Thème Shopify 2.0 original pour **Quietta**, marque de chaussures confort/anti-glissement, construite via le pipeline "Shopify Store Replicator" (inspiré du business model d'Avia.com — structure, CRO, offre — sans reprise d'aucun asset créatif).

## Vue d'ensemble du projet

- **Marque** : Quietta — esprit "Quiet Luxury" cohérent avec OLLISSE
- **Niche** : chaussures confort & anti-dérapant (femme / homme / segment pro)
- **Store** : OLLISSE (`70aw3f-gb.myshopify.com`), theme cible : Dawn (remplacé par ce thème custom)

## État actuel — IMPORTANT

⚠️ **Images non générées.** Toutes les zones visuelles utilisent un placeholder visuel (`snippets/image-placeholder.liquid`) en attendant la génération d'images 100% originales via Higgsfield (workspace à recharger en crédits — 1.05 crédit disponible au moment du build, insuffisant).

**À faire avant mise en ligne :**
1. Recharger les crédits Higgsfield
2. Générer les visuels : hero, 3 collections (Femme/Homme/Anti-Dérapant), galerie produit (par fiche)
3. Remplacer chaque `{% render 'image-placeholder', ... %}` par l'image réelle (`image_url` / `<img>`)

## Architecture du store

```
Accueil
├── Femme (Marche, Course, Slip-On, Anti-Dérapant)
├── Homme (Marche, Course, Trail, Anti-Dérapant)
├── Anti-Dérapant (collection transversale — segment pro/restauration)
└── Pages: Guide des tailles, Contact
```

## Mécanismes CRO recréés (originaux, inspirés de l'analyse business du concurrent)

| Mécanisme | Fichier |
|---|---|
| Barre de livraison gratuite progressive | `sections/announcement-bar.liquid`, `sections/main-cart.liquid` |
| Sélecteur couleur / taille / largeur | `sections/main-product.liquid` |
| Icônes technologie produit | `sections/features.liquid` |
| Add-to-cart collant (mobile) | `assets/global.js` + `assets/main-product.css` |
| FAQ en accordéon sur PDP | `sections/main-product.liquid` |

## Identité de marque

- **Couleurs** : Terracotta `#C1633D` · Crème `#F2EAD8` · Bleu pétrole `#2C4A52`
- **Typographie** : Fraunces (titres) / Work Sans (corps)
- Contenu original complet : `content/brand-content.md` (hors dépôt thème, document de travail)

## Structure des fichiers

```
sections/    — announcement-bar, header, hero, featured-collections, features,
               footer, main-product, main-collection, main-page, main-cart,
               main-search, main-404
snippets/    — image-placeholder
templates/   — index, product, collection, page, cart, search, 404
assets/      — base.css, main-product.css, global.js
config/      — settings_schema.json, settings_data.json
locales/     — fr.default.json
layout/      — theme.liquid
```

## Déploiement

Connecté via GitHub Theme Integration. Le repo est la source de vérité — en cas de conflit avec ce qui est live sur Shopify, le repo gagne au prochain push.

## Notes de développement

- Aucun code/texte/visuel copié du concurrent analysé — uniquement le business model et les mécanismes de conversion ont été étudiés (cf. `references/analysis-phases.md` du skill `shopify-store-replicator`)
- Tous les produits créés via l'API Shopify sont en statut **DRAFT** par défaut — passage en ACTIF nécessite confirmation explicite
- CSS/JS vanilla, sans dépendance externe lourde
