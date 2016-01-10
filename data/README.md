# Flash Card Data Source

This is where the data for the flash cards originates from. The `.json` files here get copied to the `dist` directory by `grunt`. Additionally `util/generate-index.js` creates a directory with information about what decks are available, this is triggered by `grunt`.


## Structure

The files should follow the directory pattern of:

```
data/{source language}/{target language}/{filename}.json
```

Where `{source language}` is the locale of the language the user is most familiar with and `{target language}` is language being learned. For example, `data/en/es/numbers.json` for a deck of cards to help a user speaking English learn Spanish numbers.

When possible [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) should be preferred for the language's directory name. This is for both the source language and the target language.
