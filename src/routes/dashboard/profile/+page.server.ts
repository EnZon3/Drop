import { redirect } from '@sveltejs/kit';
import db from '$lib/db';

export async function load({ locals: { supabase, getSession } }) {
	try {
		const session = await getSession();
		const username = session?.user.user_metadata.username;

		let { data, error } = await supabase
			.from('profiles')
			.select('*')
			.eq('username', username);

		if (!data) throw redirect(303, '/dashboard/onboarding');

		return {
			profile: data
		};
	} catch (err) {
		console.log(err);
		throw redirect(303, '/dashboard/onboarding');
	}
}
