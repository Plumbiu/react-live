import { Preview } from '@plumbiu/react-live'
import className from 'clsx'

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
