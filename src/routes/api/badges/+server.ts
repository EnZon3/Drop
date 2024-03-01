
/** @type {import('./$types').RequestHandler} */
export const GET = async ({ locals: { supabase } }): Promise<Response> => {
    const { data } = await supabase.from('badge_defs').select('*');
    return new Response(JSON.stringify(data));
};
