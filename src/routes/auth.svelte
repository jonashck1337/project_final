<script lang="ts">
	import SvelteSeo from "svelte-seo";
    import { auth } from '$lib/supabase'
    import { setServerSessionAndRedir } from '$lib/user'
    import { LockIcon, GithubIcon } from 'svelte-feather-icons'
	import { handleAlert } from '$lib/alert'
    import Spinner from '$lib/components/Spinner.svelte'

    let isSignIn = true
    function toggleView() {
        isSignIn = !isSignIn
    }

    // validation, message and loading state
    let loading = false
    // form fields
    let email = '', password = ''

    async function signUpOrSignIn() {
        loading = true

        if (isSignIn) {
            const { error, session } = await auth.signIn({
                email, password
            })
            if (error) {
                handleAlert({ type: "error", text: error.message})
            } else {
                handleAlert({ type: "success", text: "Signed in successfully"})
                setServerSessionAndRedir(session)
            }
        } else {
            const { error } = await auth.signUp({
                email, password
            })
            if (error) {
                handleAlert({ type: "error", text: error.message})
            } else {
                handleAlert({ type: "error", text: "Registered. Please confirm your email"})
            }
        }
        loading = false
    }

    async function handleProviderSignIn(provider) {
        loading = true
        const { error } = await auth.signIn({ provider })
        if (error) handleAlert({ type: "error", text: error.message})
        loading = false
    }

</script>

<SvelteSeo
  title="Svelte Starter Kit | Auth"
  description="Svelte with brilliant bells and useful whistles"
/>
<div class="flex flex-col justify-center items-center relative">
<!-- <img src="/static/undraw_access_denied_re_awnf.svg" alt="" /> -->
<!-- App logo and tagline -->
<div class="w-full text-center mb-4 flex  flex-col place-items-center">
    <div>
        <LockIcon size="3x" class="w-12 h-12 text-gray-600" />
    </div>
    <h3 class="text-5xl text-red-500"><strong>Svelte</strong></h3>
    <h3 class="px-3 py-1 bg-gray-400 text-white uppercase mb-2">Starter Kit</h3>
    <!-- <h3 class="text-3xl text-gray-600">Supa<strong>Auth</strong>&nbsp;</h3> -->
    <small>Please provide your <strong>email</strong> and <strong>password</strong> and {isSignIn ? 'Log In' : 'Sign Up' }</small>
</div>
<!-- Sign Up form -->
<form class="w-full sm:w-1/2 xl:w-5/12" on:submit|preventDefault={signUpOrSignIn} >
    <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg" style="background: url(/static/undraw_access_denied_re_awnf.svg) no-repeat rgba(76, 175, 80, 0.1)">
    <button class="flex-1 bg-gray-200 text-green-700 py-3 rounded w-full text-center shadow" on:click|preventDefault={() => handleProviderSignIn('github')}>
        <GithubIcon size="1x" class="inline-block "/> {isSignIn ? 'Log In' : 'Sign Up' } with <strong>Github</strong>
    </button>
    <hr class="my-4"/>
    <div class="mb-4">
        <label for="email" class="block font-semibold text-gray-800 mb-2 text-left">Email</label>
        <input
        id="email"
        name="email"
        type="email"
        class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border  hover:border-gray-400"
        placeholder="Your Email"
        required
        bind:value={email}
        />
    </div>
    <div class="mb-4">
        <label for="password" class="block font-semibold text-gray-800 mb-2 text-left">Password</label>
        <input
        id="password"
        name="password"
        type="password"
        class="h-12 px-4 py-2 bg-white rounded shadow-inner border-gray-300 w-full border hover:border-gray-400"
        placeholder="Your password. Leave empty for password-less login"
        bind:value={password}
        />
    </div>

    <!-- Sign Up & Sign In form: Actions -->

    <div class="flex pt-4 gap-2">
        <button type="submit" class="flex-1 bg-gray-500 border border-gray-600 text-white py-3 rounded w-full text-center shadow"
        >
            {isSignIn ? 'Log In' : 'Sign Up'}
        </button>
        <div class="flex-1 text-right">
        <small class="block text-gray-600">
            {isSignIn ? 'Not a member yet?' : 'Already a member?'}
        </small>
        <a class="block font-semibold" href="" on:click|preventDefault={toggleView} >
            {isSignIn ?  'Sign Up' : 'Log In' }
        </a>
        </div>
    </div>
    </div>
    </form>
    <div class="h-12 w-12 relative">
        {#if loading}
            <Spinner/>
        {/if}
    </div>
</div>
