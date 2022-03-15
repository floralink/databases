import database from "./database.json" assert { type: "json" };

export default {
  pluginType: "taxonspecific",
  sourceType: "local",
  id: "ellenberg",
  version: "1991-1",
  taxonReference: {
    id: "germansl",
    version: "1.5.1",
  },
  title: "Ökologische Zeigerwerte",
  sources: {
    primary: {
      citation:
        "Ellenberg, H. (1991): Zeigerwerte von Pflanzen in Mitteleuropa, Scripta geobotanica 18: 9-166. Goltze: Göttingen.",
      citationShort: "Ellenberg 1991",
    },
    secondary: {
      citation:
        "Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253",
      citationShort: "Jansen & Dengler 2008",
    },
  },
  data: database,
};
