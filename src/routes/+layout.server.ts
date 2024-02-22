// src/routes/+layout.server.ts
import { writable } from 'svelte/store';

export const load = async ({ locals: { getSession } }) => {
	const userStore = writable();

	await getSession().then((data) => {
		userStore.set(data?.user);
	});

	return {
		session: await getSession()
	};
};
