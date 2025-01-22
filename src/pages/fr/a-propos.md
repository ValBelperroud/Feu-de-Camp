---
layout: base.njk
title: "Accueil - Projet Feu de Camp"
description: "Le Projet Feu de Camp imagine un nouveau monde désirable"
locale: "be-fr"
header:
  bg-color: "bg-red"
  content-color: "text-black"
  sur-titre: "Le Projet Feu de Camp imagine un nouveau monde désirable"
  title: "Dansons le changement, Chantons la révolution et Peignons un monde nouveau. Rendons la révolution irrésistible!"
  button1:
    text: "Découvre nos offres détaillées"
    href: "#actions"
  button2:
    text: "Apprends-en plus sur le projet"
    href: "/a-propos"
  arrowClasses: "fleche is-down mt-12"
---

<main>

{% include "components/header-2.njk" with header %}

{% include "components/nous-sommes-fdc.njk" %}

<section class="min-h-min flex flex-col gap-8 pt-32 md:pt-52 pb-32 md:pb-52 px-4 bg-black">
  <div class="w-[87.5vw] max-w-[1680px] mx-auto">
    <div class="flex flex-col md:flex-row gap-8 justify-between mb-12 md:mb-24">
      <h3 class="text-white font-sans text-base md:text-lg w-full md:w-1/4">Convictions</h3>
      <h2 class="text-3xl md:text-5xl font-serif-semi-b w-full md:w-2/4 md:ml-4 leading-tight">Convaincu que ce monde doit être transmis dans l'imaginaire et le coeur des gens par des récits puissant et inspirant qui poussent à l'action.</h2>
    </div>
    <div class="flex flex-col md:flex-row gap-8 justify-between">
      <h3 class="text-white font-sans text-base md:text-lg w-full md:w-1/4">Notre mission</h3>
      <h2 class="text-3xl md:text-5xl font-serif-semi-b w-full md:w-2/4 md:ml-4 leading-tight">
        Créer et attiser les liens entre celleux qui portent le changement et celle·ux qui le racontent.
        <br><br>
        Pour, ensemble, pousser à l'action et écrire les premiers chapitres d'un monde soutenable et désirable 
      </h2>
    </div>
  </div>
</section>

<div class="w-[87.5vw] max-w-[1680px] mx-auto py-16 md:py-32 px-4">
  <img src="/assets/images/sincere-inspirant-radical2.png" class="w-full">
</div>

{% include "components/tu-veux-en-discuter-2.njk" %}

{% include "components/team.njk" %}

<section class="min-h-min flex flex-col gap-8 pt-32 md:pt-52 pb-32 md:pb-52 px-4 bg-black">
  <div class="w-[87.5vw] max-w-[1680px] mx-auto">
    <h3 class="text-white font-serif text-3xl md:text-5xl mb-8 md:mb-12 leading-tight">Notre vision de Projet Feu de Camp dans 20 ans</h3>
    <div class="flex flex-col md:flex-row gap-8 md:gap-16 max-w-5xl">
      <div class="w-full md:w-1/2">
        <p class="text-white text-base md:text-lg leading-relaxed">Feu de camp est un mouvement présent dans toutes l'Europe. Partout où les artistes veulent utiliser leurs talents pour la Cause, le Projet Feu de Camp est là.
        Il est le lien qui permet de démultiplier la propagande du changement: Une propagande liée directement à l'action local.
        <br><br>
        Feu de camp c'est beaucoup plus que l'ASBL du début. C'est un mouvement fédérateur qui donne un sens et une utilité aux créatif..ves face aux urgences et catastrophes sociales et environnementales.</p>
      </div>
      <div class="w-full md:w-1/2">
        <p class="text-white text-base md:text-lg leading-relaxed">Feu de camp est le catalyseur de création et propagation des récits du nouveau monde.
        <br><br>
        Parce que, plus que tout, pour changer, l'humain a besoin de rêver d'un nouveau possible et pas juste de quitter un impossible.
        Feu de camp c'est la grande sonnet d'alarme qui mets tout le monde en mouvement. C'est le "crieur" qui appelle au nouveau monde.
        <br><br>
        Ensemble rendons la révolution désirable</p>
      </div>
    </div>
  </div>
</section>

</main>
