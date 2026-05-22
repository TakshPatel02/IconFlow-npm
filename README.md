# IconFlow

[![NPM Version](https://img.shields.io/npm/v/iconflow.svg)](https://www.npmjs.com/package/iconflow)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

IconFlow is a lightweight React wrapper for Lucide icons that adds animation triggers such as hover, click, mount, and loop.

## Install

```bash
npm install iconflow lucide-react
```

## Import Styles

IconFlow ships its CSS separately. Import it once in your app:

```js
import "iconflow/styles";
```

## Basic Usage

```jsx
import { Camera } from "lucide-react";
import AnimatedIcon from "iconflow";

export default function App() {
  return (
    <AnimatedIcon
      icon={Camera}
      animation="spin"
      trigger="hover"
      size={28}
      color="#111827"
      speed={1}
      strokeWidth={2}
    />
  );
}
```

## Triggers

The `trigger` prop accepts:

- `hover` - activates on mouse enter and deactivates on mouse leave
- `click` - toggles the animation on each click
- `mount` - activates when the component mounts
- `loop` - starts active immediately and keeps the animation running

## Animation Types

The `animation` prop is validated against the available classes in `src/styles.css`.

- `shake`
- `spin`
- `bounce`
- `swing`
- `pulse`
- `heartbeat`

If an unsupported animation name is passed, IconFlow falls back to `shake`.

## Props

| Prop          | Type      | Default        | Description                     |
| ------------- | --------- | -------------- | ------------------------------- |
| `icon`        | component | required       | Lucide icon component to render |
| `animation`   | string    | `shake`        | Animation class to apply        |
| `trigger`     | string    | `hover`        | Interaction mode                |
| `size`        | number    | `24`           | Icon size                       |
| `color`       | string    | `currentColor` | Icon color                      |
| `speed`       | number    | `1`            | Animation speed multiplier      |
| `strokeWidth` | number    | `2`            | Lucide stroke width             |
| `className`   | string    | `""`           | Extra class names               |

## API

The package exports the animated icon component by default and also exposes the `IconFlow` helper class.

```js
import { IconFlow } from "iconflow";

const flow = new IconFlow({
  size: 32,
  animation: "bounce",
  trigger: "click",
});

const defaults = flow.getDefaults({ color: "#0f172a" });
```

## Build

```bash
npm run build
```

This builds the JavaScript bundle and copies the CSS into `dist`.

## Links

- **Homepage:** [Component Labs](https://component-labs.vercel.app/iconflow)
- **Repository:** [GitHub](https://github.com/TakshPatel02/IconFlow-npm)
- **Issues:** [GitHub Issues](https://github.com/TakshPatel02/IconFlow-npm/issues)

## License

MIT License © Taksh Patel
