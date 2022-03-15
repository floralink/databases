# Database plugins for Floralink

Database plugin library for using using different data sources with Floralink Core. These contain only databases and metadata. For statistical operations with Floralink Core, use a corresponding plugin from [@floralink/plugins](https://github.com/floralink/plugins).

- [Database plugins for Floralink](#database-plugins-for-floralink)
- [General usage](#general-usage)
- [Database plugins in this library](#database-plugins-in-this-library)
  - [Taxon reference data](#taxon-reference-data)
  - [Taxon specific data](#taxon-specific-data)
  - [Occurrence data](#occurrence-data)
- [Developing a local database plugin](#developing-a-local-database-plugin)
  - [File structure](#file-structure)
  - [index.js](#indexjs)

# General usage

You can add database plugins to your project by using the [@floralink/databases](https://www.npmjs.com/package/@floralink/databases) npm package:

```shell
$ npm install @floralink/plugins
```

Then, in your project:

```javascript
import * as floralink from "@floralink/core";
import { mytaxonreferencedatabase } from "@floralink/plugins";

floralink.initializeDatabase(mytaxonreferencedatabase);

// example for taxon reference data
const myTaxonData = floralink.getTaxonDataByID(
  taxonIDs,
  "mytaxonreferencedatabase"
);
```

# Database plugins in this library

## Taxon reference data

| Name                                     | Description                                                      | Data origin | Data source                                                                                                         |
| ---------------------------------------- | ---------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| [germansl](src/local/germansl/README.md) | Taxon reference for plants, mosses, algae and lichens in Germany | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1, a taxon reference list for occurrence databases in Germany |

## Taxon specific data

| Name                                                          | Description                                                                     | Data origin | Data source                                             |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------- |
| [ellenberg](src/local/ellenberg/README.md)                    | Ellenberg indicator values (1991)                                               | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 |
| [fukarekhenker](src/local/fukarekhenker/README.md)            | N, F and T status described by Fukarek & Henker (2006)                          | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 |
| [rotelistemv](src/local/rotelistemv/README.md) (experimental) | Red list classifications for vascular plants in Mecklenburg-Vorpommern, Germany | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 |

## Occurrence data

| Name                                 | Data origin | Data source                                               |
| ------------------------------------ | ----------- | --------------------------------------------------------- |
| [werbeo](src/local/werbeo/README.md) | API         | [Flora-MV](https://www.flora-mv.de/) (through WerBeo API) |

# Developing a local database plugin

You can derive a JSON database for your plugin from a CSV table by using [Floralink Generator](https://github.com/floralink/generator). Look at the plugins in this library for examples.

Source databases to use with Floralink need to have a taxonomic reference. Floralink uses GermanSL (v1.5.1) and doesn't support other taxonomic reference databases (yet).

## File structure

Basic file structure of a local database plugin:

```

/source
  |__database.csv
  |__LICENSE
database.json
index.js
mappings.js
README.md
```

## index.js

Example index.js ([Ellenberg plugin](./src/ellenberg/index.js)):

```javascript
import database from "database.json";

export default {
  pluginType: "taxonspecific",
  sourceType: "local",
  id: "ellenberg",
  version: "1991-1",
  taxonReferencePlugin: {
    name: "germansl",
    version: "1.5.1",
  },
  title: "Ökologische Zeigerwerte",
  description:
    "Das ökologische Verhalten gegenüber einem bestimmten Standortfaktor [...]",
  sources: {
    primary: {
      citation:
        "Ellenberg, H. (1991): Zeigerwerte der Gefäßpflanzen (ohne Rubus). [...]",
      citationShort: "Ellenberg 1991",
    },
    // ...
  },
  database,
};
```
