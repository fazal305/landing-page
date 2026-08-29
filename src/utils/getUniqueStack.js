import { projects } from '../data/projects'

export function getUniqueStack() {
  const seen = new Set()
  for (const project of projects) {
    for (const tech of project.stack) {
      seen.add(tech)
    }
  }
  return Array.from(seen)
}
