<script lang="ts">
	import * as Menubar from '$lib/components/ui/menubar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import { goto } from '$app/navigation';
	import {
		User,
		Settings,
		FilePlus2,
		FolderOpen,
		BarChart3,
		Globe,
		ChevronDown,
		LogOut
	} from 'lucide-svelte';

	const gotoDash = () => goto('/u');

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

<nav class="bg-grey flex justify-between p-3">
	<Menubar.Root>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<button on:click={gotoDash}
			><h1 class="rounded-md p-1 font-bold hover:bg-slate-800">Drop</h1></button
		>
		<Menubar.Menu>
			<Menubar.Trigger>Projects</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					<FilePlus2 class="mr-1.5 h-4 w-4" />
					New Project
					<!-- <Menubar.Shortcut>⌘T</Menubar.Shortcut> -->
				</Menubar.Item>
				<Menubar.Item>
					<FolderOpen class="mr-1.5 h-4 w-4" />
					My Projects
					<!-- <Menubar.Shortcut>⌘T</Menubar.Shortcut> -->
				</Menubar.Item>
				<Menubar.Separator />
				<Menubar.Item>
					<BarChart3 class="mr-1.5 h-4 w-4" />
					Project Analytics
					<!-- <Menubar.Shortcut>⌘T</Menubar.Shortcut> -->
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
		<Menubar.Menu>
			<Menubar.Trigger disabled>Community</Menubar.Trigger>
			<Menubar.Content>
				<Menubar.Item>
					<Globe class="mr-1.5 h-4 w-4" />
					View Community Hub
					<!-- <Menubar.Shortcut>⌘T</Menubar.Shortcut> -->
				</Menubar.Item>
			</Menubar.Content>
		</Menubar.Menu>
	</Menubar.Root>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger
			class="flex-left flex items-center justify-center rounded-md p-1 pl-2 pr-2 hover:bg-slate-800"
		>
			<Avatar.Root class="h-7 w-7">
				<Avatar.Image
					src={session?.user.user_metadata.avatar_url}
					alt="@{session?.user.user_metadata.user_name}"
				/>
				<Avatar.Fallback>
					{session?.user.user_metadata.user_name.substring(0, 2).toUpperCase()}
				</Avatar.Fallback>
			</Avatar.Root>
			<ChevronDown class="ml-1 h-3 w-3" />
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group>
				<DropdownMenu.Label>My Account</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Item href="/u/profile"
					><User class="mr-1.5 h-4 w-4" /> Profile</DropdownMenu.Item
				>
				<DropdownMenu.Item href="/u/settings">
					<Settings class="mr-1.5 h-4 w-4" /> Settings
				</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Item href="/logout">
					<LogOut class="mr-1.5 h-4 w-4" /> 
					Log out
				</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</nav>

<div class="bg-grey p-4 flex flex-col">
	<slot />
</div>
