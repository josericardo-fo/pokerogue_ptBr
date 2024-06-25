import { SimpleTranslationEntries } from "#app/interfaces/locales";

export const partyUiHandler: SimpleTranslationEntries = {
  "SEND_OUT": "교체한다",
  "SUMMARY": "능력치를 본다",
  "CANCEL": "그만둔다",
  "RELEASE": "놓아준다",
  "APPLY": "사용한다",
  "TEACH": "가르친다",
  "UNSPLICE": "Unsplice",
  "ACTIVATE": "Activate",
  "DEACTIVATE": "Deactivate",

  "choosePokemon": "포켓몬을 선택하세요.",
  "noEnergy": "{{pokemonName}} has no energy\nleft to battle!",
  "hasEnergy": "{{pokemonName}} still has energy\nto battle!",
  "cantBeUsed": "{{pokemonName}} can't be used in\nthis challenge!",
  "tooManyItems": "{{pokemonName}} has too many\nof this item!",
  "anyEffect": "It won't have any effect.",
  "unpausedEvolutions": "Evolutions have been unpaused for {{pokemonName}}.",
  "unspliceConfirmation": "Do you really want to unsplice {{fusionName}}\nfrom {{pokemonName}}? {{fusionName}} will be lost.",
  "wasReverted": "{{fusionName}} was reverted to {{pokemonName}}.",
  "releaseConfirmation": "Do you really want to release {{pokemonName}}?",
  "releaseInBattle": "You can't release a Pokémon that's in battle!",
  "doWhat": "Do what with this Pokémon?",
  "selectAMove": "Select a move.",
  "changeQuantity": "Select a held item to transfer.\nUse < and > to change the quantity.",
  "selectAnotherPokemonToSplice": "Select another Pokémon to splice.",
  "cancel": "Cancel",

  // Slot TM text
  "able": "배울 수 있다",
  "notAble": "배울 수 없다",
  "learned": "이미 알고 있다",

  // Releasing messages
  "goodbye": "Goodbye, {{pokemonName}}!",
  "byebye": "Byebye, {{pokemonName}}!",
  "farewell": "Farewell, {{pokemonName}}!",
  "soLong": "So long, {{pokemonName}}!",
  "thisIsWhereWePart": "This is where we part, {{pokemonName}}!",
  "illMissYou": "I'll miss you, {{pokemonName}}!",
  "illNeverForgetYou": "I'll never forget you, {{pokemonName}}!",
  "untilWeMeetAgain": "Until we meet again, {{pokemonName}}!",
  "sayonara": "Sayonara, {{pokemonName}}!",
  "smellYaLater": "Smell ya later, {{pokemonName}}!",
} as const;
