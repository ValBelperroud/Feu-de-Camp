---
layout: base.njk
title: "Accueil - Projet Feu de Camp"
description: "Attiser les liens entre celleux qui portent le changement et celleux qui le racontent"
locale: fr-BE
header:
  bg-color: "bg-red"
  content-color: "text-black"
  showArrow: false
  title: "Une envie brûlante de faire de belles choses avec nous? On est tout feux tout flamme!"
  button1:
    text: "Demande générales"
    href: "#actions"
    icon: "phone"
  button2:
    text: "Admin et factures"
    href: "/a-propos"
    icon: "email"
  button3:
    text: "+32 499 83 55 72"
    href: "/contact"
    icon: "phone"
  button4:
    text: "Tu peux nous trouver ici"
    href: "/localisation"
    icon: "email"
---

{% include "components/header-2.njk" with header %}

<section class="min-h-min flex flex-col md:flex-row gap-8 py-16 md:py-32 px-4">
  <div class="w-[87.5vw] max-w-[1680px] mx-auto">
    <div class="flex flex-col md:flex-row gap-8 md:gap-16">
      <div class="w-full md:w-[35%]">
        <h3 class="text-2xl md:text-3xl mb-6 md:mb-8">Emails</h3>
        <p class="mb-4">Demandes générales - Questions, tu veux t'impliquer dans Le Projet, proposition de collaboration ou de projet <span class="text-red">bxl@projetfeudecamp.be</span></p>
        <p class="mb-4">Propaganda - Si tu es une ASBL ou une initiatives engagées et tu veux collaborer avec nous <span class="text-red">propaganda@projetfeudecamp.be</span></p>
        <p>Admin et factures - La paperasse, c'est par ici <span class="text-red">admin@projetfeudecamp.be</span></p>
      </div>

      <div class="w-full md:w-[30%]">
        <h3 class="text-2xl md:text-3xl mb-6 md:mb-8">Téléphone</h3>
        <p class="mb-4">Appelle Nous! (appel standard ou télégramme – pas de whatsapp)</p>
        <p class="mb-2">Hugo (iel) +32 491 14 00 86</p>
        <p>Val: +32 499 83 55 72</p>
      </div>

      <div class="w-full md:w-[35%]">
        <h3 class="text-2xl md:text-3xl mb-6 md:mb-8">Bureau</h3>
        <p>Tu veux nous rencontrer?<br>
        On est très souvent à L'Extension de Fais-le toi-même.<br>
        Prends RDV et viens nous voir !</p>
      </div>
    </div>
  </div>
</section>

</main>