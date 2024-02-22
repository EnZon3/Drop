import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

const userStore = writable();

supabase.auth.getSession().then(({ data }) => {
	userStore.set(data.session?.user);
});

supabase.auth.onAuthStateChange((event, session) => {
	if (event == 'SIGNED_IN' && session) {
		userStore.set(session.user);
	} else if (event == 'SIGNED_OUT') {
		userStore.set(null);
	}
});

export default {
    user: {
        get() {
            return userStore
        }
    },
    profiles: {
        async get(username: string) {
            const { data } = await supabase.from('profiles').select().eq('username', username);
            return data;
        },
        async update(profile: object, username: string) {
            const { data } = await supabase.from('profiles').update(profile).eq('id', username);
            return data;
        },
        async create(profile: object) {
            const { data } = await supabase.from('profiles').insert(profile);
            return data;
        }
    }
}