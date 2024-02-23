import { redirect } from '@sveltejs/kit';
import db from '$lib/db';

export async function load({ locals: { supabase, getSession } }) {
	try {
		const session = await getSession();
		const username = session?.user.user_metadata.user_name;

		let { data, error } = await supabase
			.from('profiles')
			.select('*')
			.eq('username', username);
		console.log(data);

		if (!data || data.length === 0) throw redirect(303, '/dashboard/onboarding');
        
	} catch (err) {
		console.log(err);
		throw redirect(303, '/dashboard/onboarding');
	}
}
