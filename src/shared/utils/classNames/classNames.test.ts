import { classNames } from './classNames'

describe('classNames:', () => {
  it('only with first param', () => {
    expect(classNames('class-1')).toBe('class-1')
  })

  it('with mods hovered and scrollable', () => {
    expect(classNames('class-1', { hovered: true, scrollable: true })).toBe('class-1 hovered scrollable')
  })

  it('only with mod hovered', () => {
    expect(classNames('class-1', { hovered: true, scrollable: false })).toBe('class-1 hovered')
  })

  it('with additional classname', () => {
    expect(classNames('class-1', {}, ['class-2'])).toBe('class-1 class-2')
  })

  it('with mod and additional classname', () => {
    expect(classNames('class-1', { hovered: true }, ['class-2'])).toBe('class-1 class-2 hovered')
  })
})
