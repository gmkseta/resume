// Compatibility shims added for the Next 16 / React 19 upgrade (Oct 2026 security patch).
// - React 19 types dropped the global JSX namespace; react-markdown@7 ships .ts sources that still use it.
import type React from 'react';

declare global {
  namespace JSX {
    type Element = React.JSX.Element;
    type ElementClass = React.JSX.ElementClass;
    type IntrinsicElements = React.JSX.IntrinsicElements;
  }
}

