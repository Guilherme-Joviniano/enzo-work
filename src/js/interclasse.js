const interclasse = [{
    "esportes": [{
            "nome": "basqueteuetebol",
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
                "formação": "Formação 1 representante masculinoulino e 1 femininoinino de cada sala(caso houver mais de 1 realiza eliminatória)",
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
            "nome": "Salto em distancia - masculinoulino",
            "regras": [{
                "regra1": "1-Bateria masculinoulina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria masculinoulina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria masculinoulina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final masculinoulino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Salto em distancia - femininoinino",
            "regras": [{
                "regra1": "1-Bateria femininoinina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria femininoinina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria femininoinina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final femininoinino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Arremeso de peso - masculinoulino",
            "regras": [{
                "regra1": "1-Bateria masculinoulina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria masculinoulina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria masculinoulina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final masculinoulino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Arremeso de peso - femininoinino",
            "regras": [{
                "regra1": "1-Bateria femininoinina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria femininoinina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria femininoinina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final femininoinino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
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

const chaveamentos = [
    {
           "dias": {
                "segunda": [
                        {"esportes":{
                            
                                "futsal-masculino": [
                                    {
                                        "local":"Ginásio",
                                        "jogo1":"14:45h até 15:05h",
                                        "jogo2":"15:10h até 15:30h",
                                        "jogo3":"17:00h até 17:20h",
                                        "jogo4": "17:25h até 17:45h",
                                    }
                                ],
                
                                "futsal-feminino":[
                                    {
                                        "local":"Ginásio",
                                        "jogo1":"15:35h até 15:55h",
                                        "jogo2":"16:35h até 16:55h",
                                        "jogo3":"17:50h até 18:10h",
                                        "jogo4":"18:15h até 18:35h",
                                    }
                                ],
                
                                "basquete-masculino": [
                                    {
                                        "local":"Quadra externa 1",
                                        "jogo1":"14:45h até 15:05h",
                                        "jogo2":"15:10h até 15:30h",
                                        "jogo3":"15:35h até 15:55h",
                                        "jogo4":"16:35h até 16:55h",
                                        "jogo5":"17:10h até 17:20h",
                                        "jogo6":"17:25h até 17:45h",
                                        "jogo7":"17:50h até 18:10h",
                                        "jogo8":"18:15h até 18:35h",
                                    }
                                ],
                
                                "hand-feminino": [
                                    {
                                        "local":"Quadra externa 2",
                                        "jogo1":"14:45h até 15:05h",
                                        "jogo2":"15:10h até 15:30h",
                                        "jogo3":"15:35h até 15:55h",
                                        "jogo4":"16:35h até 16:55h",
                                        "jogo5":"17:10h até 17:20h",
                                        "jogo6":"17:25h até 17:45h",
                                        "jogo7":"17:50h até 18:10h",
                                        "jogo8":"18:15h até 18:35h",
                                    }
                                ],
                                "frisb-misto": [
                                    {
                                        "local":"Campo",
                                        "jogo1":"14:45h até 15:05h",
                                        "jogo2":"15:10h até 15:30h",
                                        "jogo3":"17:00 até 17:20h",
                                        "jogo4":"17:25 até 17:45h",
                                    }
                                ],
                                "pic-band-misto":[
                                    {
                                        "local":"Campo",
                                        "jogo1":"15:35h até 15:55h",
                                        "jogo2":"16:35h até 16:55h",
                                        "jogo3":"17:50h até 18:10h",
                                        "jogo4":"18:15h até 18:35h",
                                    }
                                ],
                
                                "beach-masculino": [
                                    {
                                        "local": "Quadra de areia",
                                        "jogo1":"14:45h até 15:05h",
                                        "jogo2":"15:10h até 15:30h",
                                        "jogo3":"17:50h até 18:10h",
                                        "jogo4":"18:15h até 18:35h",
                                    }
                                ],
                                "beach-feminino":[
                                    {
                                        "local": "Quadra de areia",
                                        "jogo1":"15:35h até 15:55h",
                                        "jogo2":"16:35h até 16:55h",
                                        "jogo3":"17:10h até 17:20h",
                                        "jogo4":"17:25h até 17:45h",
                                    }
                                ]
                            }
                        },
                    ],
                    "terca":[
                        {
                            "esportes":{
                                
                                    "futsal-masculino":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                        }
                                    ],
                    
                                    "futsal-feminino":[
                                        {
                                            "local:":"Ginásio",
                                            "jogo1":"15:00h até 15:25h",
                                            "jogo2":"15:30h até 15:55h",
                                        }
                                    ],
                    
                                    "volei-feminino":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:05h até 17:30h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                                    
                                    "basquete-masculino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                            
                                        }
                                    ],
                    
                                    "basquete-feminino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:05h até 17:30h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "hand-feminino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                        }
                                    ],
                                    
                                    "hand-masculino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:05h até 17:30h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                                    
                                    "frisb-misto":[
                                        {
                                            "local":"Campo",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                        }
                                    ],
                    
                                    "pic-band-misto":[
                                        {
                                            "local":"Campo",
                                            "jogo1":"15:00h até 15:25h",
                                            "jogo2":"15:30h até 15:55h",
                                        }
                                    ],
                    
                                    "dodge-misto":[
                                        {
                                            "local":"Campo",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:05h até 17:30h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "beach-masculino":[
                                        {
                                            "local":"Quadra de areia",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                                    "beach-feminino":[
                                        {
                                            "local":"Quadra de areia",
                                            "jogo1":"15:00h até 15:25h",
                                            "jogo2":"15:30h até 15:55h",
                                            "jogo3":"16:35h até 17:00h",
                                            "jogo4":"17:05h até 17:30h",
                                        }
                                    ]
                                
                                }
                        }
                        
                    ],
            
                    "quarta":[
                        {
                            "esportes":
                                {
                                    "natacao-masculino-e-feminino":[
                                        {
                                            "local":"Piscina",
                                            "1momento":"13:50h até 14:25h",
                                            "2momento":"14:35h até 15:10h",
                                            "3momento":"15:20h até 15:55h",
                                        }
                                    ],
                                    
                                    "atlet-arrem-salto-masculino-e-feminino":[
                                        {
                                            "local":"Pista de atletismo",
                                            "1momento":"13:50h até 14:25h",
                                            "2momento":"14:35h até 15:10h",
                                            "3momento":"15:20h até 15:55h",
                                        }
                                    ],
                    
                                    "cabo-misto":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:05h até 17:30h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                                    
                                    "futsal-masculino":[
                                        {
                                            "local":"quadra-externa 2",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:35h até 18:00h",
                                        },
                                    ],
                    
                                    "futsal-feminino":[
                                        {
                                            "local":"quadra-externa 2",
                                            "jogo2":"17:05h até 17:30h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "frisb-misto":[
                                        {
                                            "local":"Campo",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:05h até 17:30h",
                                        }
                                    ],
                    
                                    "pic-band-misto":[
                                        {
                                            "local":"campo",
                                            "jogo1":"17:35h até 18:00h",
                                            "jogo2":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "tenis-de-mesa-feminino":[
                                        {
                                            "local":"Clube, Pátio e Sala",
                                            "jogo1":"16:35h até 17:00h",
                                            "jogo2":"17:05h até 17:30h",
                                        }
                                    ],
                    
                                    "tenis-de-mesa-masculino":[
                                        {
                                            "local":"Clube, Pátio e Sala",
                                            "jogo1":"17:35h até 18:00h",
                                            "jogo2":"18:05h até 18:30h",
                                        }
                                    ],
                                }
                        }
                    ],
            
                    "quinta":[
                        {
                            "esportes":
                                {
                                    "volei-misto":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                            "jogo5":"16:35h até 17:00h",
                                            "jogo6":"17:05h até 17:30h",
                                            "jogo7":"17:35h até 18:00h",
                                            "jogo8":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "basquete-feminino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                            "jogo5":"16:35h até 17:00h",
                                            "jogo6":"17:05h até 17:30h",
                                            "jogo7":"17:35h até 18:00h",
                                            "jogo8":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "hand-masculino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                            "jogo5":"16:35h até 17:00h",
                                            "jogo6":"17:05h até 17:30h",
                                            "jogo7":"17:35h até 18:00h",
                                            "jogo8":"18:05h até 18:30h",
                                        }
                                    ],
                                    "dodge-misto":[
                                        {
                                            "local":"Campo",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                            "jogo5":"16:35h até 17:00h",
                                            "jogo6":"17:05h até 17:30h",
                                            "jogo7":"17:35h até 18:00h",
                                            "jogo8":"18:05h até 18:30h",
                                        }
                                    ],
                                    
                                    "beach-masculino":[
                                        {
                                            "local":"Quadra de areia",
                                            "jogo1":"13:55 até 14:25h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                                    
                                    "beach-feminino":[
                                        {
                                            "local":"Quadra de areia",
                                            "jogo1":"15:00h até 15:25h",
                                            "jogo2":"15:30h até 15:55h",
                                            "jogo3":"16:35h até 17:00h",
                                            "jogo4":"17:05h até 17:30h",
                                        }
                                    ],
                                }
                            
                        }
                    ],
            
                    "sexta":[
                        {
                            "esportes":
                                {
                                    "futsal-masculino":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":"13:55 até 14:20h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"16:35h até 17:00h",
                                            "jogo4":"17:05h até 17:30h",
                                        }
                                    ],
                    
                                    "futsal-feminino":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":"15:00h até 15:25h",
                                            "jogo2":"15:30h até 15:55h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "cabo-misto":[
                                        {
                                            "local":"Quadra externa",
                                            "jogo1":"13:55 até 14:20h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                            "jogo5":"16:35h até 17:00h",
                                            "jogo6":"17:05h até 17:30h",
                                            "jogo7":"17:35h até 18:00h",
                                            "jogo8":"18:05h até 18:30h",
                                        }
                                    ],
                                    
                                    "tenis-mesa-feminino":[
                                        {
                                            "local":"Clube, pátio ou sala",
                                            "jogo1":"13:55 até 14:20h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"16:35h até 17:00h",
                                            "jogo4":"17:05h até 17:30h",
                                        }
                                    ],
                                    "tenis-mesa-masculino":[
                                        {
                                            "local":"Clube, pátio ou sala",
                                            "jogo1":"15:00h até 15:25h",
                                            "jogo2":"15:30h até 15:55h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "pembolim":[
                                        {
                                            "local":"Clube, pátio ou sala",
                                            "jogo1":"13:55 até 14:20h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"15:00h até 15:25h",
                                            "jogo4":"15:30h até 15:55h",
                                            "jogo5":"16:35h até 17:00h",
                                            "jogo6":"17:05h até 17:30h",
                                            "jogo7":"17:35h até 18:00h",
                                            "jogo8":"18:05h até 18:30h",
                                        }
                                    ],
                    
                                    "frisb-misto":[
                                        {
                                            "local":"Campo",
                                            "jogo1":"13:55 até 14:20h",
                                            "jogo2":"14:30h até 14:55",
                                            "jogo3":"16:35h até 17:00h",
                                            "jogo4":"17:05h até 17:30h",
                                        }
                                    ],
                    
                                    "pic-band-misto":[
                                        {
                                            "local":"Campo",
                                            "jogo1":"15:00h até 15:25h",
                                            "jogo2":"15:30h até 15:55h",
                                            "jogo3":"17:35h até 18:00h",
                                            "jogo4":"18:05h até 18:30h",
                                        }
                                    ],
                                }
                            
                        }
                    ],
                }
            }
        ]


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

const getDias = () => {
    let holdDias = [];

    chaveamentos.forEach(get => {
       get.dias.forEach(filter => {
        holdDias.push({
            segunda: filter.segunda,
            terca: filter.terca,
            quarta:filter.quarta,
            quinta:filter.quinta,
            sexta:filter.sexta,
        })
       })
    })

    return holdDias;
}


const getEsportesDias = (diaNome = "".toLowerCase()) => {
    return  chaveamentos.map(({ dias }) => { 
        if (diaNome === 'segunda-feira') return dias.segunda.filter(({ esportes }) => esportes) 
        if (diaNome === 'terca-feira') return dias.terca.filter(({ esportes }) => esportes) 
        if (diaNome === 'quarta-feira') return dias.quarta.filter(({ esportes }) => esportes) 
        if (diaNome === 'quinta-feira') return dias.quinta.filter(({ esportes }) => esportes) 
        if (diaNome === 'sexta-feira') return dias.sexta.filter(({ esportes }) => esportes) 
    })[0][0]
}


export { getEsportesDias, interclasse }





