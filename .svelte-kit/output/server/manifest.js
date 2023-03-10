export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8d26eb5a.js","imports":["_app/immutable/entry/start.8d26eb5a.js","_app/immutable/chunks/index.e4b580e2.js","_app/immutable/chunks/singletons.eb821a5b.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b3905ef9.js","imports":["_app/immutable/entry/app.b3905ef9.js","_app/immutable/chunks/index.e4b580e2.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[noteId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"noteId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
