# Floralink Ellenberg plugin

A database plugin for using Ellenberg indicator values in Floralink.

# Usage

See [General Usage](../../README.md)

# Data source

The plugin's database is generated from GermanSL (version 1.5.1), specifically the `ecodbase.dbf` file. GermanSL is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

> Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253. [Online version (in German)](https://germansl.infinitenature.org/pdf/Jansen,%20Dengler%20-%20Tuexenia%2028.pdf)

The data in GermanSL stems from Ellenberg 1991:

> Ellenberg, H. (1991): Zeigerwerte von Pflanzen in Mitteleuropa, Scripta geobotanica 18: 9-166. Goltze: Göttingen.

The original dBASE (.dbf) file was pre-processed by saving it as an semicolon-delimited CSV with LibreOffice (v7.2.2.2).

The CSV file is then mapped to JSON with [@floralink/generator](https://www.github.com/floralink/generator) and a custom descriptive `mapping.js` module.

```shell
$ npx flgen -i source/ecodbase.csv -d ";"
```

## Please note

If the value for an indicator is "x" or "?", this specified in an extra comment field and the value is set as "0".
However, this pattern seems to be inconsistent.

In case

- there is a "0" as field value,
- there is nothing else specified in the comment field
- and "0" is not a possible enumeration of that field (that's the case for the salt indicator)

The `mapping.js` module converts that to an "x", since this seems to be the right case.

There also is an unresolved issue which leads to 11 entries being omitted.
