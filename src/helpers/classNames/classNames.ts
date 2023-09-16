type TMods = Record<string, boolean>

export function classNames(className: string, mods: TMods, additional: string[]): string {
  return [
    className,
    ...additional,
    ...Object.entries(mods).reduce((acum: string[], [className, hasClassName]) => {
      return hasClassName ? [...acum, className] : acum
    }, [])
  ].join(' ')
}
