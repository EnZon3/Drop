<script>
	import '../app.pcss';
	import { dev } from '$app/environment';
	// @ts-ignore
	import { inject } from '@vercel/analytics';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Toaster } from "$lib/components/ui/sonner";

	inject({ mode: dev ? 'development' : 'production' });

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Toaster />

<slot />
