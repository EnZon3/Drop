<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	const createProfile = async () => {
		const user = session?.user;
		if (!user) {
			goto('/login');
		}

		const { data, error } = await supabase
			.from('profiles')
			.insert([{
				"id": user?.id,
				"username": user?.user_metadata.user_name,
				"avatar_url": user?.user_metadata.avatar_url
			}])
			.select();
		
		goto('/u/profile');
	};

	onMount(() => {
		createProfile();
	});
</script>

<h1>Setting up your profile... Do not exit this tab.</h1>
