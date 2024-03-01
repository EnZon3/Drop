import { redirect } from '@sveltejs/kit';

export async function load({ locals: { supabase, getSession } }) {

	const getBadges = async (id) => {
		let { data } = await supabase.from('badges').select('*').eq('user', id);
		if (!data || data.length === 0) return {};
		return data[0]
	}

	try {
		const session = await getSession();
		const username = session?.user.user_metadata.user_name;

		let { data } = await supabase.from('profiles').select('*').eq('username', username);
		if (!data) throw redirect(303, '/u/onboarding');

		const badges = await getBadges(session?.user.id);

		const filteredBadges = Object.fromEntries(
			Object.entries(badges).filter(([key, value]) => typeof value === 'boolean')
		);

		console.log({
			profile: data[0],
			badges: filteredBadges
		});

		return {
			profile: data[0],
			badges: filteredBadges
		};
	} catch (err) {
		console.log(err);
		throw redirect(303, '/u/onboarding');
	}
}
