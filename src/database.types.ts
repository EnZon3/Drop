export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			comments: {
				Row: {
					content: string | null;
					created_at: string;
					id: number;
					parent: string;
					parent_post: number;
				};
				Insert: {
					content?: string | null;
					created_at?: string;
					id?: number;
					parent?: string;
					parent_post: number;
				};
				Update: {
					content?: string | null;
					created_at?: string;
					id?: number;
					parent?: string;
					parent_post?: number;
				};
				Relationships: [];
			};
			posts: {
				Row: {
					created_at: string;
					description: string;
					id: number;
					owner: string;
					project_url: string;
					tags: Json;
					title: string;
				};
				Insert: {
					created_at?: string;
					description?: string;
					id?: number;
					owner?: string;
					project_url?: string;
					tags?: Json;
					title?: string;
				};
				Update: {
					created_at?: string;
					description?: string;
					id?: number;
					owner?: string;
					project_url?: string;
					tags?: Json;
					title?: string;
				};
				Relationships: [];
			};
			profiles: {
				Row: {
					badges: Json | null;
					bio: string | null;
					created_at: string;
					id: string;
					profile_url: string;
					username: string;
				};
				Insert: {
					badges?: Json | null;
					bio?: string | null;
					created_at?: string;
					id?: string;
					profile_url?: string;
					username?: string;
				};
				Update: {
					badges?: Json | null;
					bio?: string | null;
					created_at?: string;
					id?: string;
					profile_url?: string;
					username?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			postType: 'project' | 'comment';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}

export type Tables<
	PublicTableNameOrOptions extends
		| keyof (Database['public']['Tables'] & Database['public']['Views'])
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
				Database[PublicTableNameOrOptions['schema']]['Views'])
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
			Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
			Row: infer R;
		}
		? R
		: never
	: PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
				Database['public']['Views'])
		? (Database['public']['Tables'] &
				Database['public']['Views'])[PublicTableNameOrOptions] extends {
				Row: infer R;
			}
			? R
			: never
		: never;

export type TablesInsert<
	PublicTableNameOrOptions extends
		| keyof Database['public']['Tables']
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Insert: infer I;
		}
		? I
		: never
	: PublicTableNameOrOptions extends keyof Database['public']['Tables']
		? Database['public']['Tables'][PublicTableNameOrOptions] extends {
				Insert: infer I;
			}
			? I
			: never
		: never;

export type TablesUpdate<
	PublicTableNameOrOptions extends
		| keyof Database['public']['Tables']
		| { schema: keyof Database },
	TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
		: never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
	? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
			Update: infer U;
		}
		? U
		: never
	: PublicTableNameOrOptions extends keyof Database['public']['Tables']
		? Database['public']['Tables'][PublicTableNameOrOptions] extends {
				Update: infer U;
			}
			? U
			: never
		: never;

export type Enums<
	PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
	EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
		? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
		: never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
	? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
	: PublicEnumNameOrOptions extends keyof Database['public']['Enums']
		? Database['public']['Enums'][PublicEnumNameOrOptions]
		: never;
