import React from 'react' // eslint-disable-line

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    to?: string
  }
}
