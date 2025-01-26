// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "_site"
  },
  auth: {
    onLogin: async () => {
      window.location.href = "/admin";
    },
    onLogout: async () => {
      window.location.href = "/";
    }
  },
  media: {
    tina: {
      mediaRoot: "src/assets/images",
      publicFolder: "_site"
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Articles de Blog",
        path: "src/pages/fr/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            required: true
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true
          },
          {
            type: "string",
            name: "temps",
            label: "Temps de lecture"
          },
          {
            type: "string",
            name: "resume_en_deux_lignes",
            label: "R\xE9sum\xE9",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "image_principale",
            label: "Image principale"
          },
          {
            type: "string",
            name: "auteur",
            label: "Auteur"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
