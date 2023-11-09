import { getQueryParams } from './addQueryParams'

describe('getQueryParams:', () => {
  it('with one param', () => {
    expect(getQueryParams({ test: 'test' })).toBe('?test=test')
  })

  it('with some params', () => {
    expect(getQueryParams({ test: 'test', test1: 'test1' })).toBe('?test=test&test1=test1')
  })

  it('with one param - undefined', () => {
    expect(getQueryParams({ test: 'test', test1: undefined })).toBe('?test=test')
  })
})
