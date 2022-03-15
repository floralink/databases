import database from "./database.json" assert { type: "json" };

export default {
  pluginType: "taxonspecific",
  sourceType: "local",
  id: "fukarekhenker",
  version: "2006-1",
  taxonReference: {
    id: "germansl",
    version: "1.5.1",
  },
  title: "N-F-T-Status",
  sources: {
    primary: {
      citation:
        "Fukarek, Franz, Henker, Heinz (2006): Flora von Mecklenburg-Vorpommern: Farn- und Blütenpflanzen. Jena: Weissdorn-Verlag Jena",
      citationShort: "Fukarek & Henker 2006",
    },
    secondary: {
      citation:
        "Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253",
      citationShort: "Jansen & Dengler 2008",
    },
  },
  data: database,
};
