import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const partyUiHandler: SimpleTranslationEntries = {
  "SEND_OUT": "Einwechseln",
  "SUMMARY": "Bericht",
  "CANCEL": "Abbrechen",
  "RELEASE": "Freilassen",
  "APPLY": "Anwenden",
  "TEACH": "Erlernen",
  "UNSPLICE": "Defusionieren",
  "ACTIVATE": "Aktivieren",
  "DEACTIVATE": "Deaktivieren",

  "choosePokemon": "Wähle ein Pokémon.",
  "noEnergy": "{{pokemonName}} ist nicht fit genug, um zu kämpfen!",
  "hasEnergy": "{{pokemonName}} steckt noch voller Energie",
  "cantBeUsed": "{{pokemonName}} kann in dieser Herausforderung nicht verwendet werden!",
  "tooManyItems": "{{pokemonName}} trägt bereits zu viele dieser Items!",
  "anyEffect": "Das würde keine Wirkung zeigen.",
  "unpausedEvolutions": "Entwicklungen für {{pokemonName}} wurden wieder aktiviert.",
  "unspliceConfirmation": "Willst du wirklich {{fusionName}} von {{pokemonName}} defusionieren? {{fusionName}} wird freigelassen.",
  "wasReverted": "{{fusionName}} verwandelt sich in {{pokemonName}} zurück.",
  "releaseConfirmation": "Möchtest du {{pokemonName}} wirklich freilassen?",
  "releaseInBattle": "Pokémon, die aktuell im Kampf sind, können nicht freigelassen werden.",
  "doWhat": "Was soll mit diesem Pokémon geschehen?",
  "selectAMove": "Wähle eine Attacke.",
  "changeQuantity": "Wähle ein getragenes Item aus, das übertragen werden soll. Nutze < und > um die Anzahl zu ändern.",
  "selectAnotherPokemonToSplice": "Wähle ein anderes Pokémon mit dem fusioniert werden soll aus.",
  "cancel": "Abbrechen",

  // Slot TM text
  "able": "Erlernbar!",
  "notAble": "Nicht erlernbar",
  "learned": "Bereits erlernt!",

  // Releasing messages
  "goodbye": "Auf wiedersehen, {{pokemonName}}!",
  "byebye": "Byebye, {{pokemonName}}!",
  "farewell": "Mach’s gut, {{pokemonName}}!",
  "soLong": "Bis dann, {{pokemonName}}!",
  "thisIsWhereWePart": "Nun heißt es Abschied nehmen, {{pokemonName}}!",
  "illMissYou": "Ich werde dich vermissen, {{pokemonName}}!",
  "illNeverForgetYou": "Ich werde dich niemals vergessen, {{pokemonName}}!",
  "untilWeMeetAgain": "Bis wir uns wiedersehen, {{pokemonName}}!",
  "sayonara": "Sayonara, {{pokemonName}}!",
  "smellYaLater": "Also dann, man riecht sich! Ciao!, {{pokemonName}}!",
} as const;
