export interface HeaderNews {
  date: string
  title: string
  path: string
}

export interface CardNews extends HeaderNews {
  description: string
  thumbnail: string
}
