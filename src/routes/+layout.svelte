<script>
	import '../app.pcss';
	import { dev } from '$app/environment';
	// @ts-ignore
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<slot />
