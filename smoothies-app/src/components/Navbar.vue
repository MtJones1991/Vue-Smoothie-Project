<template>
    <div class="navbar z-depth-5">
        <nav class="nav-extended indigo darken-2">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                    <span class="nav-title">Smoothie shop</span>
                </router-link>
                <a href="" class="btn-floating btn-large halfway-fab pink pulse z-depth-5">
                    <router-link :to="{ name: 'AddSmoothie' }">
                        <i class="material-icons">add</i>
                    </router-link>
                    
                </a>

                <!-- <a href="" class="btn-floating btn-large red pulse z-depth-5 parallax">
                    <router-link :to="{ name: 'Parallax' }">
                        <i class="material-icons">add</i>
                    </router-link>
                </a> -->
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style>
.navbar nav {
    padding: 0 20px;
}
</style>
