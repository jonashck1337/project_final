<script lang="ts">
    import { MenuIcon } from 'svelte-feather-icons'
    import Navigation from './Navigation.svelte'
    let isNavOpened = false

    function toggleNav() {
        isNavOpened = !isNavOpened
    }
</script>

<header>
    {#if isNavOpened}
        <Navigation {toggleNav} />
    {/if}
    <!-- <button on:click={toggleNav}><MenuIcon class="w-5 inline-block" /> Menu</button> -->
    <nav class="bg-blue-100 text-lm">
        <div class="max-w-8xl mx-auto px-8">
            <div class="flex justify-between">
                <div class="flex space-x-12">
                    <!-- logo-->
                    <div>
                        <a href="." class="flex items-center py-3 px-2">
                            <div class="h-12 w-12 mr-2">
                                <img src="static\heart.svg" alt="logo" />
                            </div>
                            <span class="font-bold text-blue-500">Healthspace</span>
                        </a>
                    </div>
    
                    <!-- left nav elements-->
                    <div class="flex items-center space-x-1 text-gray-700 font-semibold">
                        <a href="./qa" class="py-5 px-3 hover:text-blue-500">Q&A</a>
                        <a href="./about" class="py-5 px-3  hover:text-blue-500">About</a>
                        <a href="/careers" class="py-5 px-3  hover:text-blue-500">Careers</a>
                    </div>
                </div>
    
                  <!-- right nav elements-->
                  <div class="flex items-center text-gray-700 z-50 px-4">
                    <a href="/auth" class="py-2 px-3 bg-purple-500 hover:bg-purple-400 text-white hover:text-white rounded transition duration-300">Signup/Login</a>
                </div>
              </div>
          </div>
      </nav>
    <slot/>
</header>
