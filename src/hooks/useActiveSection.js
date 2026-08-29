import { useEffect, useState } from 'react'

export function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
