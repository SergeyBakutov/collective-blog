export function getQueryParams(params: Record<string, string | undefined>): string {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value)
    }
  })
  return `?${searchParams.toString()}`
}

export function addQueryParams(params: Record<string, string>): void {
  window.history.pushState(null, '', getQueryParams(params))
}
