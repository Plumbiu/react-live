# @plumbiu/react-live

Render React components in browser.

# Usage

```js
import { Preview } from '@plumbiu/react-live'

const code = `
  export default function App() {
    return <div>Hello @plumbiu/react-live</div>
  }
`

function App() {
  return <Preview code={code} />
}

export default App
```

# scope

If you want add some packages, such as [`clsx`](https://github.com/lukeed/clsx)，add `scope` props to `<Preview />`

```js
import className from 'clsx'
import { Preview } from '@plumbiu/react-live'

const code = `
  import clsx from 'clsx'
  export default function App() {
    return <div className={clsx({ ['foo']: true })}>Hello @plumbiu/react-live</div>
  }
`

function App() {
  return (
    <Preview
      code={code}
      scope={{
        clsx: className,
      }}
    />
  )
}

export default App
```
