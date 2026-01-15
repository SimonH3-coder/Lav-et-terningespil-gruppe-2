// Minimal ambient declarations to satisfy the compiler in absence of @types/react / react/jsx-runtime
declare module '*.scss';

declare module 'react' {
	// minimal named export used in your code
	export function useState<S = any>(initialState: S | (() => S)): [S, (s: S | ((prev: S) => S)) => void];
	// default export placeholder
	const React: any;
	export default React;
}

declare module 'react/jsx-runtime' {
	export function jsx(type: any, props?: any, key?: any): any;
	export function jsxs(type: any, props?: any, key?: any): any;
	export function jsxDEV(type: any, props?: any, key?: any): any;
}

declare namespace JSX {
	interface IntrinsicElements {
		[key: string]: any;
	}
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
