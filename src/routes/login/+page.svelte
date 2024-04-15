<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Github } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	const getURL = () => {
		let url =
			process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
			process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
			'http://localhost:5173';
		// Make sure to include `https://` when not localhost.
		url = url.includes('http') ? url : `https://${url}`;
		// Make sure to include a trailing `/`.
		url = url.charAt(url.length - 1) === '/' ? url : `${url}/`;
		// Add 'u/' at the end of the url
		url = `${url}u/`;
		return url;
	};

	const signIn = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: getURL()
			}
		});
	};
</script>

<nav class="bg-grey p-4">
	<div class="flex items-center justify-between">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<div>
			<h1 class="text-3xl font-bold">Drop</h1>
		</div>
	</div>
</nav>

<main class="front-content-height flex w-full flex-col items-center justify-center">
	<Card.Root>
		<Card.Header>
			<Card.Title>Sign In</Card.Title>
			<Card.Description>with GitHub</Card.Description>
		</Card.Header>
		<Card.Content>
			<Button on:click={signIn}>
				<Github class="mr-2 h-5 w-5" />
				<span>Sign in with Github</span>
			</Button>
		</Card.Content>
	</Card.Root>
</main>
