const interclasse = [{
    "esportes": [{
            "nome": "Basquetebol",
            "regras": [{
                "formaçao": "Street equipe composta por 3 atletas",
                "espaço de jogo": "meia quadra",
                "tempo de jogo": "2 tempos de 6 minutos",
                "caso de empate": "arremessos alternados",
            }]
        },
        {
            "nome": "Beach Tenis",
            "regras": [{
                "formação": "Formação dupla mistas",
                "pontuação": "3 sets de 12 pontos",
                "regra1": "Marca ponto quem fazer a bola tocar no chão do campo adversário",
                "regra2": "Vence quem conseguir atingir 2 sets primeiro",
            }]
        },

        {
            "nome": "Pic bandeira - misto",
            "regras": [{
                "tempo de jogo": "1 tempo de 10 minutos",
                "formação": "Formação 10 integrantes sendo 5 meninas e 5 meninos",
                "regra1": "Inicia o jogo quando o professor apitar",
                "regra2": "Marca ponto a equipe que conseguir trazer a bandeira para seu campo sem ser pego pelo adversário",
                "regra3": "Em caso de empate prorrogação de 2 minutos até que uma das equipes consiga marcar ponto, persistindo o empate nova prorrogação",
            }]
        },

        {
            "nome": "Dodgecone misto",
            "regras": [{
                "tempo de jogo": "10 minutos",
                "formação": "5 meninos e 5 meninas",
                "regra": "Bolas ao centro e ao sinal do professor as equipes correm para pegar a bola e tentar acertar o adversário ou derrubar os cones",
            }]
        },
        {
            "nome": "Futebol de salão",
            "regras": [{
                "formação": "5 integrantes e 5 reservas",
                "tempo de jogo": "2 tempos de 8 minutos",
                "regra1": "Em caso de cartão vermelho fica fora dos próximos jogos",
                "regra2": "Em caso de empate, cobrança alternada de penalidade",
                "regra3": "Regras oficiais do jogo",
            }]
        },
        {
            "nome": "Handebol",
            "regras": [{
                "formação": "Duas equipser de 7 jogadores e 7 reservas",
                "tempo de jogo": "2 tempos de 8 minutos",
                "regra1": "Em caso de cartão vermelho, fica fora da proxima partida",
                "regra2": "Em caso de empate, cobrança alternada de tiro livre 7 metros",
            }]
        },
        {
            "nome": "Voleibol",
            "regras": [{
                "formação": "6 titulares e 6 reservas",
                "tempo de jogo": "3 Sets de 15 pontos",
                "regra": "Regras oficiais",
            }]
        },
        {
            "nome": "Xadrez",
            "regras": [{
                "formação": "Formação 1 representante masculino e 1 feminino de cada sala(caso houver mais de 1 realiza eliminatória)",
                "Desenvolvimento": "Seguira o sorteio realizado no congresso técnico",
                "Regras": "Oficiais",
            }]
        },
        {
            "nome": "Tênis de mesa",
            "regras": [{
                "Desenvolvimento": "Jogo de 3 sets de 11 pontos",
                "regra1": "Quem fizer 2 sets primeiro vence",
                "regra2": "Os melhores resultados por pontos disputam as semifinais e finais",
            }]
        },
        {
            "nome": "Salto em distancia - masculino",
            "regras": [{
                "regra1": "1-Bateria masculina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria masculina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria masculina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final masculino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Salto em distancia - feminino",
            "regras": [{
                "regra1": "1-Bateria feminina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria feminina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria feminina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final feminino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Arremeso de peso - masculino",
            "regras": [{
                "regra1": "1-Bateria masculina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria masculina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria masculina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final masculino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Arremeso de peso - feminino",
            "regras": [{
                "regra1": "1-Bateria feminina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria feminina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria feminina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final feminino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        }
    ]
}]

const salas = [{
    "1°": [{
        "1a": "1°-A",
        "1b": "1°-B",
        "1c": "1°-C",
        "1d": "1°-D",
        "1e": "1°-E",
    }],

    "2°": [{
        "2a": "2°-A",
        "2b": "2°-B",
        "2c": "2°-C",
        "2d": "2°-D",
        "2e": "2°-E",
    }],

    "3°": [{
        "3a": "3°-A",
        "3b": "3°-B",
        "3c": "3°-C",
        "3d": "3°-D",
        "3e": "3°-E",
    }]
}]


//Pegar todos os esportes
const getEsportes = () => {
    let holdEsportes = [];

    interclasse.forEach(item => {
        item.esportes.forEach(get => {
            holdEsportes.push({
                nome: get.nome,
            })
        })
    })

    return holdEsportes;

}

//Pegar as regras de determinado esporte
const getRegrasEsportes = (esporte = ''.toLowerCase()) =>{
    let holdRegras = [];

    interclasse.forEach(item => {
        item.esportes.forEach(get => {
            if(esporte === get.nome.toLowerCase()){
                holdRegras.push(
                    {
                        regras: get.regras,
                    }
                )
            }
        })
    })
    return holdRegras;  
}

export { interclasse, getEsportes, getRegrasEsportes}