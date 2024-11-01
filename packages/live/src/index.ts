import React, { createElement } from 'react'
import { transform, Options } from 'sucrase'

type Scope = Record<string, any>

const transfromOptions: Options = {
  transforms: ['jsx', 'flow', 'imports'],
}

function evalCode(code: string, scope: Scope) {
  const _require = (k: keyof Scope) => {
    return scope[k]
  }
  const scopeKeys = Object.keys(scope)
  const scopeValues = scopeKeys.map((key) => scope[key])
  const _exports: Record<string, any> = {}
  const fn = new Function('exports', 'require', ...scopeKeys, code)
  fn(_exports, _require, ...scopeValues)
  return _exports.default
}

interface PlaygroundPreviewProps {
  code: string
  scope?: Scope
}

export function Preview({ code, scope }: PlaygroundPreviewProps) {
  const evalScope: Scope = {
    react: React,
    React: React,
    ...(scope ?? {}),
  }
  const mainCode = transform(code, transfromOptions).code
  return createElement(evalCode(mainCode, evalScope))
}
