<template>
    <div class="add-smoothie container grey lighten-5 z-depth-5 scale-transition">
        <h2 class="center-align indigo-text">Add a new recipie</h2>
        <form @submit.prevent="addSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title:</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div v-for="(ingredient, index) in ingredients" :key="index">
                <label for="ingredients">Ingredient:</label>
                <input type="text" name="ingredient" v-model="ingredients[index]">
            </div>
            <div class="field add-ingredient">
                <label for="add-ingrdient">Add an ingredient</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{ feedback }} </p>
                <button class="btn pink pulse z-depth-5">Add recipie</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
    name: 'AddSmoothie',
    data(){
        return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null
        }
    },
    methods: {
        addSmoothie(){
            if(this.title){
                this.feedback = null
                //create slug for restful api
                this.slug = slugify(this.title, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@']/g,
                    lower: true
                })
                db.collection('smoothies').add({
                    title: this.title,
                    ingredients: this.ingredients,
                    slug: this.slug
                })
                .then(() => {
                    this.$router.push( { name: 'Index' })
                })
                .catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = "Please enter a title."
            }
        },

        addIng(){
            if(this.another){
                this.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            } else {
                this.feedback = "You must add an ingredient."
            }
        }

    }
}
</script>

<style>
.add-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;;
}

.add-smoothie h2 {
    font-size: 2em;
    margin: 20px auto;
}

.add-smoothie .field {
    margin: 20px auto;
}

</style>

