<script lang="ts">
	import '../global.css';
	import Header from '$lib/components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import AlertList from '$lib/alert/AlertList.svelte'

</script>

<Header/>
<AlertList/>
<main>
	<slot />
</main>
<Footer/>

