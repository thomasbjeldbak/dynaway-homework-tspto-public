export const getRandomWidth = (min: number, max: number, unit: string = '%'): string => {
  const width = Math.floor(Math.random() * (max - min) + min)
  return `${width}${unit}`
}

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max))
}
