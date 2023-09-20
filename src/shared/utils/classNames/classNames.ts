type TMods = Record<string, boolean>

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
export function classNames(
  className: string,
  mods: TMods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods).reduce((acum: string[], [className, hasClassName]) => {
      return hasClassName ? [...acum, className] : acum
    }, [])
  ].join(' ')
}
