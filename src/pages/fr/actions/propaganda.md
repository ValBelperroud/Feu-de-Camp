--- 
layout: propaganda.njk #ne pas toucher 
tags: activities
seo:
  description: "Propaganda : Services de communication pour ASBL et initiatives engagées" #
  titre: "Créer de l’engagement autour de la cause de celleux qui portent le changement" #max x caracteres
  tags: "[Graphisme] [Site low-tech] [Création d’outil] [Vidéo]" #max x caracteres
header: #ne pas toucher 
  bg-color: "bg-black" #changer le fond
  content-color: "text-red" #changer la couleur du text
  sur-titre: "PROPAGANDA - Conseil, Stratégie, Graphisme, Web, et Vidéo pour ASBL et initiatives engagées" #changer le fond
  title: "Une façon de communiquer et d’engager votre public qui ressemble aux acteur..ices du changement."
  paragraphe: "Vous pouvez être fièr..es des actions que vous menez, elles méritent une attention et un engouement à la hauteur de votre motivation. Nous savons que la “communication” est un sujet compliqué ou secondaire pour beaucoup d’associations. Pas le temps, pas le budget et parfois peu de compréhension des enjeux de son projet par les agences. C’est pourquoi nous vous proposons des services de stratégie, graphisme, web, video, prestations artistiques,etc qui sont totalement transparentes et adaptées à vos réalités."
  image:
    description: "alt_text"
    lien: "/assets/images/propaganda_01.png"
  button1:
    text: "Découvre nos offres détaillées"
    href: "#actions"
    border: "border-red"
  button2:
    text: "Apprends-en plus sur le projet"
    href: "/a-propos"
    border: "border-red"
  arrowClasses: "fleche is-down mt-12"
---

<!-- début du composant "en-tête" --> 
 
 {% include "components/header-3.njk" with header %}

<!-- fin du composant "en-tête" -->


<!-- début du composant "card"  -->



<!-- fin du composant "card" -->

 {% include "components/cards-B.njk" %}
<!-- début du composant "tu-veux-en-parler" --> 

 {% include "components/tu-veux-en-discuter-2.njk" %}

<!-- fin du composant "tu-veux-en-parler" -->

<!-- début du composant "valeurs" --> 

{% include "components/valeurs.njk" with valeurs %}

<!-- fin du composant "valeurs" --> 

<!-- debut du composant "temoignages" --> 

{% include "components/review.njk" with review %}

<!-- fin du composant "testimonial" --> 

<!-- debut du composant "blog trois colonnes" --> 

<section class="min-h-min flex flex-col gap-8 pt-32 md:pt-52 pb-16 px-4">
    <div class="w-[87.5vw] max-w-[1680px] mx-auto">
      <div class="flex justify-between items-start mb-12 md:mb-24">
        <h1 class="text-3xl md:text-6xl md:w-[58%] leading-tight">Contenu en lien avec l'action</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="posts-container">
        {% for post in collections.blog | reverse %}
          {% if propaganda in post.data.tags %}
            <div class="post-item border border-red">
              <div class="flex justify-between items-start">
                <div class="flex flex-wrap gap-2 p-4">
                  {% for tag in post.data.tags %}
                      <span class="text-sm border border-red px-2 py-1">{{ tag }}</span>
                  {% endfor %} 
                </div>
                {% if post.data.temps %}
                  <div class="text-[14px] p-4 text-right">Temps de lecture: {{ post.data.temps }}</div>
                {% endif %}
              </div>
              <div class="p-8">
                <h2 class="text-2xl font-serif mb-4">{{ post.data.title }}</h2>
                {% if post.data.resume_en_deux_lignes %}
                  <p class="text-base mb-8">{{ post.data.resume_en_deux_lignes }}</p>
                {% endif %}
                <a href="{{ post.url }}" class="bouton secondary arrow-right">Lire l'article</a>
              </div>
            </div>
          {% endif %}
        {% endfor %}
      </div>
    </div>
</section>


<!-- fin du composant "blog trois colonnes" --> 

  


