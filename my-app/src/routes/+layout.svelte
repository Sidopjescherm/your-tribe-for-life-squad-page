<script>
	import favicon from "$lib/assets/favicon.svg";
	import Nav from "$lib/components/Nav.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<Nav />
</header>

<main>
	{@render children?.()}
</main>
