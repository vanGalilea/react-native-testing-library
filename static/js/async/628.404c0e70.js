(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["628"],{9674:function(e,n,r){"use strict";r.r(n);var t=r("5893"),o=r("65");function s(e){let n=Object.assign({h1:"h1",code:"code",a:"a",pre:"pre",p:"p",h2:"h2",h3:"h3"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"renderhook-function",children:[(0,t.jsx)(n.code,{children:"renderHook"})," function",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderhook-function",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function renderHook<Result, Props>(\n  callback: (props?: Props) => Result,\n  options?: RenderHookOptions<Props>\n): RenderHookResult<Result, Props>;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Renders a test component that will call the provided ",(0,t.jsx)(n.code,{children:"callback"}),", including any hooks it calls, every time it renders. Returns ",(0,t.jsx)(n.a,{href:"#renderhookresult",children:(0,t.jsx)(n.code,{children:"RenderHookResult"})})," object, which you can interact with."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { renderHook } from '@testing-library/react-native';\nimport { useCount } from '../useCount';\n\nit('should increment count', () => {\n  const { result } = renderHook(() => useCount());\n\n  expect(result.current.count).toBe(0);\n  act(() => {\n    // Note that you should wrap the calls to functions your hook returns with `act` if they trigger an update of your hook's state to ensure pending useEffects are run before your next assertion.\n    result.current.increment();\n  });\n  expect(result.current.count).toBe(1);\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// useCount.js\nexport const useCount = () => {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount((previousCount) => previousCount + 1);\n\n  return { count, increment };\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"renderHook"})," function accepts the following arguments:"]}),"\n",(0,t.jsxs)(n.p,{children:["Callback is a function that is called each ",(0,t.jsx)(n.code,{children:"render"})," of the test component. This function should call one or more hooks for testing."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"props"})," passed into the callback will be the ",(0,t.jsx)(n.code,{children:"initialProps"})," provided in the ",(0,t.jsx)(n.code,{children:"options"})," to ",(0,t.jsx)(n.code,{children:"renderHook"}),", unless new props are provided by a subsequent ",(0,t.jsx)(n.code,{children:"rerender"})," call."]}),"\n",(0,t.jsxs)(n.h2,{id:"options",children:[(0,t.jsx)(n.code,{children:"options"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#options",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"RenderHookOptions<Props>"})," object to modify the execution of the ",(0,t.jsx)(n.code,{children:"callback"})," function, containing the following properties:"]}),"\n",(0,t.jsxs)(n.h3,{id:"initialprops",children:[(0,t.jsx)(n.code,{children:"initialProps"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#initialprops",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The initial values to pass as ",(0,t.jsx)(n.code,{children:"props"})," to the ",(0,t.jsx)(n.code,{children:"callback"})," function of ",(0,t.jsx)(n.code,{children:"renderHook"}),". The ",(0,t.jsx)(n.code,{children:"Props"})," type is determined by the type passed to or inferred by the ",(0,t.jsx)(n.code,{children:"renderHook"})," call."]}),"\n",(0,t.jsxs)(n.h3,{id:"wrapper",children:[(0,t.jsx)(n.code,{children:"wrapper"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#wrapper",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["A React component to wrap the test component in when rendering. This is usually used to add context providers from ",(0,t.jsx)(n.code,{children:"React.createContext"})," for the hook to access with ",(0,t.jsx)(n.code,{children:"useContext"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"renderhookresult",children:[(0,t.jsx)(n.code,{children:"RenderHookResult"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#renderhookresult",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface RenderHookResult<Result, Props> {\n  result: { current: Result };\n  rerender: (props: Props) => void;\n  unmount: () => void;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"renderHook"})," function returns an object that has the following properties:"]}),"\n",(0,t.jsxs)(n.h3,{id:"result",children:[(0,t.jsx)(n.code,{children:"result"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#result",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"current"})," value of the ",(0,t.jsx)(n.code,{children:"result"})," will reflect the latest of whatever is returned from the ",(0,t.jsx)(n.code,{children:"callback"})," passed to ",(0,t.jsx)(n.code,{children:"renderHook"}),". The ",(0,t.jsx)(n.code,{children:"Result"})," type is determined by the type passed to or inferred by the ",(0,t.jsx)(n.code,{children:"renderHook"})," call."]}),"\n",(0,t.jsxs)(n.h3,{id:"rerender",children:[(0,t.jsx)(n.code,{children:"rerender"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#rerender",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["A function to rerender the test component, causing any hooks to be recalculated. If ",(0,t.jsx)(n.code,{children:"newProps"})," are passed, they will replace the ",(0,t.jsx)(n.code,{children:"callback"})," function's ",(0,t.jsx)(n.code,{children:"initialProps"})," for subsequent rerenders. The ",(0,t.jsx)(n.code,{children:"Props"})," type is determined by the type passed to or inferred by the ",(0,t.jsx)(n.code,{children:"renderHook"})," call."]}),"\n",(0,t.jsxs)(n.h3,{id:"unmount",children:[(0,t.jsx)(n.code,{children:"unmount"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#unmount",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["A function to unmount the test component. This is commonly used to trigger cleanup effects for ",(0,t.jsx)(n.code,{children:"useEffect"})," hooks."]}),"\n",(0,t.jsxs)(n.h2,{id:"examples",children:["Examples",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["Here we present some extra examples of using ",(0,t.jsx)(n.code,{children:"renderHook"})," API."]}),"\n",(0,t.jsxs)(n.h3,{id:"with-initialprops",children:["With ",(0,t.jsx)(n.code,{children:"initialProps"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#with-initialprops",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const useCount = (initialCount: number) => {\n  const [count, setCount] = useState(initialCount);\n  const increment = () => setCount((previousCount) => previousCount + 1);\n\n  useEffect(() => {\n    setCount(initialCount);\n  }, [initialCount]);\n\n  return { count, increment };\n};\n\nit('should increment count', () => {\n  const { result, rerender } = renderHook((initialCount: number) => useCount(initialCount), {\n    initialProps: 1,\n  });\n\n  expect(result.current.count).toBe(1);\n\n  act(() => {\n    result.current.increment();\n  });\n\n  expect(result.current.count).toBe(2);\n  rerender(5);\n  expect(result.current.count).toBe(5);\n});\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"with-wrapper",children:["With ",(0,t.jsx)(n.code,{children:"wrapper"}),(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#with-wrapper",children:"#"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"it('should use context value', () => {\n  function Wrapper({ children }: { children: ReactNode }) {\n    return <Context.Provider value=\"provided\">{children}</Context.Provider>;\n  }\n\n  const { result } = renderHook(() => useHook(), { wrapper: Wrapper });\n  // ...\n});\n"})})]})}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}n.default=i,i.__RSPRESS_PAGE_META={},i.__RSPRESS_PAGE_META["12.x%2Fdocs%2Fapi%2Fmisc%2Frender-hook.mdx"]={toc:[{text:"`options`",id:"options",depth:2},{text:"`initialProps`",id:"initialprops",depth:3},{text:"`wrapper`",id:"wrapper",depth:3},{text:"`RenderHookResult`",id:"renderhookresult",depth:2},{text:"`result`",id:"result",depth:3},{text:"`rerender`",id:"rerender",depth:3},{text:"`unmount`",id:"unmount",depth:3},{text:"Examples",id:"examples",depth:2},{text:"With `initialProps`",id:"with-initialprops",depth:3},{text:"With `wrapper`",id:"with-wrapper",depth:3}],title:"`renderHook` function",frontmatter:{}}}}]);