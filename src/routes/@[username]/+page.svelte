<script>
	import { onMount } from 'svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Badge } from '$lib/components/ui/profile-badges';

	export let data;
	let { supabase, session, profile, badges } = data;
	$: ({ supabase, session, profile, badges } = data);

	const badgeMapping = {};

	onMount(async () => {
		async function fetchBadgeData() {
			const response = await fetch('/api/badges');
			const data = await response.json();
			return data;
		}

		// Fetch the badge data and create the mapping
		fetchBadgeData().then((apiData) => {
			for (const key in badges) {
				if (badges[key] === true) {
					// Find the corresponding badge data in the API data
					const badgeData = apiData.find((item) => item.short_name === key);
					badgeMapping[key] = {
						longName: badgeData.long_name,
						color: badgeData.color
					};
				}
			}

			console.log(badgeMapping); // This will log the mapping of short names to badge data
		});
	});
</script>

<div class="front-content-height inline-flex items-center justify-start gap-2.5 p-2">
	<div class="inline-flex w-64 flex-col items-center justify-start gap-2.5 self-stretch p-2.5">
		<!-- svelte-ignore a11y-missing-attribute -->
		<Avatar.Root class="h-56 w-56">
			<Avatar.Image src={profile?.avatar_url} alt="@{profile?.username}" />
			<Avatar.Fallback>
				{profile?.username.substring(0, 2).toUpperCase()}
			</Avatar.Fallback>
		</Avatar.Root>
		<div class="flex h-10 flex-col items-start justify-start gap-2.5 self-stretch px-2.5">
			<div class="font-['Inter'] text-3xl font-semibold text-white">@{profile?.username}</div>
		</div>
		<div class="inline-flex items-center justify-start gap-2.5 self-stretch px-2.5 py-px">
			{#each Object.keys(badgeMapping) as key}
				<Badge color={badgeMapping[key].color}>{badgeMapping[key].longName}</Badge>
			{/each}
		</div>
		<div class="flex h-4 flex-col items-start justify-start gap-2.5 self-stretch px-2.5">
			<div class="text-center font-['Inter'] text-xs font-normal leading-none text-white">
				{profile?.bio || 'No bio availabe'}
			</div>
		</div>
	</div>
	<div class="shrink grow basis-0 self-stretch p-2.5">
		<Tabs.Root value="profile" class="w-[400px]">
			<Tabs.List>
				<Tabs.Trigger value="projects">Projects</Tabs.Trigger>
				<Tabs.Trigger value="activity">Activity</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="projects">
				<div class="flex flex-col gap-[10px] p-[10px]">Projects WIP</div>
			</Tabs.Content>
			<Tabs.Content value="activity">
				<div class="flex flex-col gap-[10px] p-[10px]">Activity WIP</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
