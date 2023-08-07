export const menuTexts = ['Home', 'About', 'Projects', 'Contact']

export const scrollTo = (id: string) => {
  const element = document.getElementById(id.toLocaleLowerCase())
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTopOffset = rect.top + window.scrollY
    const scrollPosition = scrollTopOffset - 20

    window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleScroll = (setActiveMenuItem: any) => {
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const capitalizedId =
          entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
        setActiveMenuItem(capitalizedId)
      }
    })
  }

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.5
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions)

  menuTexts.forEach((menuText) => {
    const section = document.getElementById(menuText.toLowerCase())
    if (section) {
      observer.observe(section)
    }
  })

  return () => {
    observer.disconnect()
  }
}
