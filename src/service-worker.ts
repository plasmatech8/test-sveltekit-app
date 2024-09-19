import { build, files, prerendered, version } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';

const assets = [...build, ...files, ...prerendered].map((file) => ({
	url: file,
	revision: version
}));

precacheAndRoute(assets);
