import React, { useEffect, useState } from 'react'
import api from '../../service/api'
import * as S from './styles'
import { Card, Pokemon, PokemonType } from '../../components/Card'
import { FlatList } from 'react-native'
import pokeballHeader from '../../assets/pokeball.png'
import { useNavigation } from '@react-navigation/native'


// export type PokemonType = {
//     type: {
//         name: string
//     }
// }

// export type Pokemon = {
//     name: string
//     url: string
//     id: number
//     types: PokemonType[]
// }

type Request = {
    id: number,
    types: PokemonType[]
}

export function Home() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const {navigate} = useNavigation()

    function handleNavigation(pokemonId: number) {
        navigate('About', {
            pokemonId,
        })
    }

    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon')
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const {id, types} = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )
            setPokemons(payloadPokemons)
        }
        getAllPokemons()
    }, [])


    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url)
        const {id, types} = response.data;

        return {
            id, types
        }
    }

    return <S.Container>
        <FlatList
            ListHeaderComponent={
                <>
                    <S.Header source={pokeballHeader}></S.Header>
                    <S.Title>Pokedéx</S.Title>
                </>
            }
            contentContainerStyle={{
                paddingHorizontal: 20
            }}
            data={pokemons}
            keyExtractor={pokemon => pokemon.id.toString()}
            renderItem={({item: pokemon}) => (
                <Card data={pokemon} onPress={() => {
                    handleNavigation(pokemon.id)
                }}/>
                
            )} />
    </S.Container>
} 