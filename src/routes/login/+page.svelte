<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Github } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);
	let prod = 'https://drop-beta.vercel.app/auth/callback/';
	let dev = 'http://localhost:5173/auth/callback/';

	const getURL = (environment) => {
		console.log(environment === 'prod' ? prod : dev)
		return environment === 'prod' ? prod : dev;
	};

	const signIn = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'github',
			options: {
				redirectTo: getURL("prod") //TODO: change this to prod when pushing to master
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
