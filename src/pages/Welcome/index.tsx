import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

import pokemonAnimation from './pokemon.json'

import * as S from './styles'
import { Button } from '../../components/Button'

import { useNavigation } from '@react-navigation/native'


export function Welcome() {
    
    const {navigate} = useNavigation()

    function handleNavigation() {
        navigate('Home')
    }

    return <S.Container>
        <S.Content>
            <S.WrapperAnimation>
                <S.WrapperImage>
                    <AnimatedLottieView style={{width:200}} autoPlay source={pokemonAnimation} loop />
                </S.WrapperImage>
            </S.WrapperAnimation>

            <S.Title>Bem-vindo!</S.Title>
            <S.SubTitle>Encontre todos os pokémons em um só lugar.</S.SubTitle>

        </S.Content>
        <S.Footer>
            <Button title='Iniciar' onPress={handleNavigation}/>
        </S.Footer>
    </S.Container>
}