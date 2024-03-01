import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ locals: { supabase, getSession }, params }) {

	const getBadges = async (id) => {
		let { data } = await supabase.from('badges').select('*').eq('user', id);
		if (!data || data.length === 0) return {};
		return data[0]
	}

	try {
		const session = await getSession();

		let { data } = await supabase.from('profiles').select('*').eq('username', params.username);
		if (data?.length === 0 || !data) {
            throw error(404)
            return;
        }

		const badges = await getBadges(data[0].id);

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
		throw error(404);
	}
}
