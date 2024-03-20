import { User } from "./types/user"

export const sum = (a: number, b: number) => a + b

export const greet = (user: User) => `Hello, ${user.name}!`
