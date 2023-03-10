export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e0983942.js","imports":["_app/immutable/entry/start.e0983942.js","_app/immutable/chunks/index.e4b580e2.js","_app/immutable/chunks/singletons.a37ab562.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.833ec4fb.js","imports":["_app/immutable/entry/app.833ec4fb.js","_app/immutable/chunks/index.e4b580e2.js"],"stylesheets":[],"fonts":[]}},
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
