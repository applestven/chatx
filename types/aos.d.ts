// types/aos.d.ts
declare module 'aos' {
  interface AOSOptions {
    offset?: number
    delay?: number
    duration?: number
    easing?: string
    once?: boolean
    mirror?: boolean
    anchorPlacement?: string
    [key: string]: any
  }

  interface AOS {
    init(options?: AOSOptions): void
    refresh(): void
    refreshHard(): void
  }

  const AOS: AOS
  export default AOS
}
