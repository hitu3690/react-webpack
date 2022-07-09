export type ResPokemonResumeResult = {
  name: string
  url: string
}

export interface PokemonResume {
  id: number
  name: string
  officialImg: string
  pokeTypes: string[]
}
export interface Ability {
  name: string
  flavorText: string
  isHidden: boolean
}

export const STATS_NAME = {
  hp: 'HP',
  attack: 'こうげき',
  defense: 'ぼうぎょ',
  special_attack: 'とくこう',
  special_defense: 'とくぼう',
  speed: 'すばやさ',
}
export type statsName = typeof STATS_NAME[keyof typeof STATS_NAME]
export interface Stat {
  name: statsName
  value: number
}
export interface Pokemon extends PokemonResume {
  height: number
  weight: number
  pokeAbilities: Ability[]
  baseStats: Stat[]
  effortValue: Stat[]
}

export const TYPE_COLOR = {
  Water: 'rgba(0, 170, 235, 1)',
  Grass: 'rgba(0, 235, 19, 1)',
  Fire: 'rgba(255, 51, 0, 1)',
  Normal: 'rgba(242, 242, 242, 1)',
  Poison: 'rgba(155, 0, 235, 1)',
  Flying: 'rgba(0, 234, 235, 1)',
  Bug: 'rgba(222, 235, 0, 1)',
  Electric: 'rgba(255, 237, 0, 1)',
  Ground: 'rgba(235, 140, 0, 1)',
  Fairy: 'rgba(255, 86, 162, 1)',
  Fighting: 'rgba(255, 46, 0, 1)',
  Psychic: 'rgba(235, 0, 192, 1)',
  Rock: 'rgba(235, 103, 0, 1)',
  Steel: 'rgba(200, 220, 205, 1)',
  Ice: 'rgba(0, 235, 218, 1)',
  Ghost: 'rgba(103, 0, 235, 1)',
  Dragon: 'rgba(94, 86, 255, 1)',
  Dark: 'rgba(51, 51, 51, 1)',
} as const
export type typeColor = typeof TYPE_COLOR[keyof typeof TYPE_COLOR]
