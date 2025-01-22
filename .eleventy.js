const HtmlMin = require('html-minifier');
const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { DateTime } = require("luxon");
const { compress } = require('eleventy-plugin-compress');
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

// Define a timestamp for versioning
const now = String(Date.now());

// Configuration Markdown avec HTML activé
const markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true
}).use(markdownItAnchor, {
  permalink: true,
  permalinkClass: 'anchor',
  permalinkSymbol: '#',
  level: [1, 2, 3, 4],
  slugify: (s) => s.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
});

module.exports = function(eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("actions", function(collection) {
    return collection.getFilteredByGlob("src/pages/actions/*.md");
  });
  
  eleventyConfig.addCollection("articles", function(collection) {
    return collection.getFilteredByGlob("src/pages/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // Add plugins
  eleventyConfig.addPlugin(compress, {
    /* Optional options. */
  });

  // i18n Plugin
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "fr",
    locales: ["fr", "en"],
  });

  // Filters
  eleventyConfig.addFilter("postDate", (dateValue) => {
    if (!dateValue) return "";
    
    try {
      let luxonDate;
      
      // Si c'est déjà un objet Date
      if (dateValue instanceof Date) {
        luxonDate = DateTime.fromJSDate(dateValue, { locale: "fr" });
      } 
      // Si c'est une chaîne de caractères
      else {
        luxonDate = DateTime.fromFormat(dateValue, "yyyy-MM-dd", { locale: "fr" });
      }
      
      if (!luxonDate.isValid) {
        console.warn(`Invalid date format: ${dateValue}`);
        return String(dateValue);
      }
      
      return luxonDate.toLocaleString(DateTime.DATE_MED);
    } catch (error) {
      console.warn(`Error formatting date: ${dateValue}`, error);
      return String(dateValue);
    }
  });

  // Filter to get permalink by ID
  eleventyConfig.addFilter("getPermalink", function getPermalink(collection, id) {
    const post = collection.find((post) => post.data.id === id);
    if (post) {
      return post.url;
    } else {
      console.error(`Post with id '${id}' not found.`);
      return null;
    }
  });

  // Shortcodes
  eleventyConfig.addShortcode('version', () => now);
  eleventyConfig.addPairedShortcode("myShortcode", (content) => {
    return content;
  });

  // Watch targets
  eleventyConfig.addWatchTarget('src/css/tailwind.config.js');
  eleventyConfig.addWatchTarget('src/css/tailwind.css');
  eleventyConfig.addWatchTarget('src/_data/');
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");

  // Passthrough copy
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/js/");
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
  });

  // Data extension for JS files
  eleventyConfig.addDataExtension('js', async (contents, outputPath) => {
    if (outputPath.endsWith('/index.html')) {
      const dataFunction = require(`.${outputPath}data`);
      return dataFunction();
    }
    return {};
  });

  // HTML minification transform
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        ignoreCustomFragments: [
          /\{\{[^}]+\}\}/,
          /<\s*script[^>]*>[\s\S]*?<\/script\s*>/,
          /x-data="[^"]*"/,
          /x-show="[^"]*"/,
          /x-text="[^"]*"/,
          /x-if="[^"]*"/,
          /x-for="[^"]*"/,
          /@click="[^"]*"/
        ]
      });
      return minified;
    }
    return content;
  });

  // Configuration Markdown
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Template formats
  eleventyConfig.setTemplateFormats(["njk", "html", "md"]);

  // Add filter for dump
  eleventyConfig.addFilter('dump', obj => JSON.stringify(obj));

  // Add filter for json
  eleventyConfig.addFilter('json', function(value) {
    return JSON.stringify(value).replace(/"/g, '&quot;');
  });

  // Ajout des filtres pour la navigation entre articles
  eleventyConfig.addFilter("getPreviousCollectionItem", function(collection) {
    const currentIndex = collection.findIndex(page => page.url === this.page.url);
    return collection[currentIndex - 1];
  });

  eleventyConfig.addFilter("getNextCollectionItem", function(collection) {
    const currentIndex = collection.findIndex(page => page.url === this.page.url);
    return collection[currentIndex + 1];
  });

  // Création de la collection d'auteurs
  eleventyConfig.addCollection("authors", function(collectionApi) {
    const posts = collectionApi.getFilteredByTag("blog");
    const authors = new Set();
    
    posts.forEach(post => {
      if (post.data.auteur) {
        authors.add(post.data.auteur);
      }
    });
    
    return Array.from(authors);
  });

  // Création de la collection d'événements
  eleventyConfig.addCollection("evenements", function(collectionApi) {
    return collectionApi.getFilteredByTag("evenement");
  });

  // Collection des organisateurs d'événements
  eleventyConfig.addCollection("organisateurs", function(collectionApi) {
    const evenements = collectionApi.getFilteredByTag("evenement");
    const organisateurs = new Set();
    
    evenements.forEach(event => {
      if (event.data.organisateur) {
        organisateurs.add(event.data.organisateur);
      }
    });
    
    return Array.from(organisateurs).map(org => {
      return {
        name: org
      };
    });
  });

  // Ajoutez ceci dans votre fichier .eleventy.js
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("blog").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Ajoutez ces filtres pour obtenir les posts précédents/suivants
  eleventyConfig.addFilter("getPreviousCollectionItem", (collection, item) => {
    const currentIndex = collection.findIndex(collectionItem => collectionItem.url === item.url);
    if (currentIndex === collection.length - 1) return null;
    return collection[currentIndex + 1];
  });

  eleventyConfig.addFilter("getNextCollectionItem", (collection, item) => {
    const currentIndex = collection.findIndex(collectionItem => collectionItem.url === item.url);
    if (currentIndex === 0) return null;
    return collection[currentIndex - 1];
  });

  // Ajout du filtre unique pour supprimer les doublons
  eleventyConfig.addFilter('unique', function(array) {
    return [...new Set(array)];
  });

  // Ajout du filtre push pour ajouter des éléments à un tableau
  eleventyConfig.addFilter('push', function(array, item) {
    return array.concat(item);
  });

  // Ajout du filtre parseJson
  eleventyConfig.addFilter('parseJson', function(str) {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.error('Error parsing JSON:', e);
      return {};
    }
  });

  // Copie des fichiers statiques
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Si vous avez d'autres dossiers de médias, ajoutez-les aussi
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Copier les fichiers de police
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // Return configuration object
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
      layouts: '_includes/layouts'
    },
    jsDataFileSuffix: '.data',
  };
};