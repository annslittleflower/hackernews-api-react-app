export type Articles = number[]

export type Article = {
  by: string
  descendants: number,
  id: number,
  time: number,
  title: string,
  url: string
}