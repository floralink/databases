import database from "./database.json" assert { type: "json" };

export default {
  pluginType: "taxonspecific",
  sourceType: "local",
  id: "rotelistemv",
  version: "2005-1",
  taxonReference: {
    name: "germansl",
    version: "1.5.1",
  },
  title: "Rote Liste Mecklenburg-Vorpommern",
  sources: {
    primary: {
      citation:
        "Voigtländer, Ulrich, Henker, Heinz (2005): Rote Liste der Farn- und Blütenpflanzen Mecklenburg-Vorpommerns.",
      citationShort: "Voigtländer & Henker 2005",
    },
    secondary: {
      citation:
        "Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253",
      citationShort: "Jansen & Dengler 2008",
    },
  },
  data: database,
};
