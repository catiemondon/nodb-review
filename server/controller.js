let pokemon=[
    {name: "Pikachu", 
    image: 'https://images.fatherly.com/wp-content/uploads/2019/05/ash-pikachu.jpg',
    id:0
    },

    {name: 'Jigglypuff',
    image: 'https://static1.squarespace.com/static/5683c85f4bf118cdfb9ef3eb/t/579ccf6e8419c2591c541148/1469894522055/Lisa_Jigglypuff_Sing.png',
    id:1},

    {name: 'Togepi',
    image: 'https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/togepi-super-smash-bros-ultimate-13.4.jpg',
    id: 2}

]

module.exports={
    getPokemon: (req, res)=>{
        res.status(200).send(pokemon)
    },

    deletePokemon: (req, res)=>{
        const { id }= req.params;
        pokemon= pokemon.filter((pokemon)=> pokemon.id !== +id)
        res.status(200).send(pokemon)
    }
}