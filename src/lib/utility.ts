export function wait(timeout: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export function randomNumber(upper: number, lower = 0): number {
  return Math.floor(Math.random() * (upper - lower) + lower)
}

export function getRandomElement<T>(list: T[]): T {
  return list[Math.floor(randomNumber(list.length))]
}