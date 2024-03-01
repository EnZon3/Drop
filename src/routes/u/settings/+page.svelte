<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
    import { onMount } from 'svelte';
	import { toast } from "svelte-sonner";

	// @ts-ignore
	export let data;
	let { supabase, session, profile, badges } = data;
	$: ({ supabase, session, profile, badges } = data);

	let bio;

	const editProfile = async () => {
		const { data, error } = await supabase
			.from('profiles')
			.update({
				bio: bio
			})
			.eq('id', session?.user.id);
			if (!error) toast.success("Successfully updated bio")
	};

    onMount(async () => {
        bio = profile?.bio;
    });
</script>

<div class="front-content-height flex content-center justify-center gap-2.5 p-4">
	<Dialog.Root>
		<Dialog.Trigger class={buttonVariants({ variant: 'outline' })}>Edit Profile</Dialog.Trigger>
		<Dialog.Content class="sm:max-w-[425px]">
			<Dialog.Header>
				<Dialog.Title>Edit profile</Dialog.Title>
				<Dialog.Description>
					Make changes to your profile here. Click save when you're done.
				</Dialog.Description>
			</Dialog.Header>
			<div class="grid gap-4 py-4">
				<div class="grid grid-cols-4 items-center gap-4">
					<Label for="name" class="text-right">Bio</Label>
					<Textarea
						id="name"
						class="col-span-3"
						placeholder="Hi! I'm..."
						bind:value={bio}
					/>
				</div>
			</div>
			<Dialog.Footer>
				<Button type="submit" on:click={editProfile}>Save changes</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
