type TMods = Record<string, boolean>

export function classNames (className: string, mods: TMods, additional: Array<string | undefined> = []): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods).reduce((acum: string[], [className, hasClassName]) => {
      return hasClassName ? [...acum, className] : acum
    }, [])
  ].join(' ')
}
