import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react'
import { UnexpectedError } from 'widgets/UnexpectedError'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Suspense fallback="">
          <UnexpectedError />
        </Suspense>
      )
    }

    return this.props.children
  }
}
