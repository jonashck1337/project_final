const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\careers.svelte"),
	() => import("..\\..\\..\\src\\routes\\example.svelte"),
	() => import("..\\..\\..\\src\\routes\\profile.svelte"),
	() => import("..\\..\\..\\src\\routes\\about.svelte"),
	() => import("..\\..\\..\\src\\routes\\auth.svelte"),
	() => import("..\\..\\..\\src\\routes\\form.svelte"),
	() => import("..\\..\\..\\src\\routes\\qa.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/careers.svelte
	[/^\/careers\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/example.svelte
	[/^\/example\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/profile.svelte
	[/^\/profile\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/auth.svelte
	[/^\/auth\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/form.svelte
	[/^\/form\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/api/auth.json.ts
	[/^\/api\/auth\.json$/],

	// src/routes/qa.svelte
	[/^\/qa\/?$/, [c[0], c[9]], [c[1]]]
];

export const fallback = [c[0](), c[1]()];