import { initialize, getRawData } from "./connection.js";
import { convertToOccurrenceData } from "./convert.js";

export default {
  pluginType: "occurrencedata",
  sourceType: "api",
  id: "werbeo",
  version: "1.0.0",
  title: "Flora-MV",
  homepage: "https://service.infinitenature.org/doc/index.html",
  taxonReferencePlugin: {
    name: "germansl",
    version: "1.5.1",
  },
  initialize: initialize,
  getRawData: getRawData,
  convertToOccurrenceData: convertToOccurrenceData,
};
