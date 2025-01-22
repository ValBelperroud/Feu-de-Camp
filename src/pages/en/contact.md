---
layout: page.njk
title: "test_en"
description: "Description SEO de la page"
header:
  bg-color: "bg-red"
  content-color: "text-black"
  surTitre: "Sur-titre optionnel"
  title: "Titre principal"
  paragraphe: "Texte d'introduction"
  image:
    description: "Texte alternatif"
    lien: "/assets/images/mon-image.jpg"
  button1:
    text: "Texte du bouton 1"
    href: "#section1"
    border: "border-red"
  button2:
    text: "Texte du bouton 2"
    href: "#section2"
    border: "border-red"
  arrowClasses: "fleche is-down mt-12"

components:
  header: true
  activities: true
  newsletter: true
  testimonials: false
  blog: false
  contact: false

activities:
  title: "Titre de la section activités"
  items:
    - title: "Activité 1"
      description: "Description de l'activité 1"
    - title: "Activité 2"
      description: "Description de l'activité 2"

testimonials:
  title: "Ce qu'ils en disent"
  items:
    - author: "Nom"
      text: "Témoignage"
---

## Titre de section

Contenu en markdown ici... 