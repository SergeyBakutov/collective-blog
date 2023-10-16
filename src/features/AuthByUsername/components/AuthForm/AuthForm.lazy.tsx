import { lazy } from 'react'

export const AuthFormLazy = lazy(async () => await import('./AuthForm'))
