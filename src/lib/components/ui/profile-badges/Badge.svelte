<script lang="ts">
    export let color: string;
    import { cn } from "$lib/utils";
</script>

<div class="Badge px-2.5 py-1.5 bg-{color}-600 rounded-full justify-center items-center flex">
    <div class="text-center text-{color}-100 text-xs font-normal font-['Inter'] leading-none">
        <slot />
    </div>
</div>