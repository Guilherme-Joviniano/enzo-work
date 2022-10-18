const interclasse = [{
    "esportes": [{
            "nome": "basquete",
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
            "nome": "Salto em distancia - masculino",
            "regras": [{
                "regra1": "1-Bateria masculinoulina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria masculinoulina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria masculinoulina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final masculinoulino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Salto em distancia - feminino",
            "regras": [{
                "regra1": "1-Bateria femininoinina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria femininoinina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria femininoinina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final femininoinino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Arremeso de peso - masculino",
            "regras": [{
                "regra1": "1-Bateria masculinoulina dos 1°anos com anotação do melhor resultado",
                "regra2": "2-Bateria masculinoulina dos 2°anos com anotação do melhor resultado",
                "regra3": "3-Bateria masculinoulina dos 3°anos com anotação do melhor resultado",
                "regra4": "Ao final masculinoulino disputam os 3 primeiros resultados onde definiremos o 1° 2° e 3° lugar",
            }]
        },
        {
            "nome": "Arremeso de peso - feminino",
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
                                        "jogo1":["14:45h", "1°C x 1°D"],
                                        "jogo2":["15:10h","1°E x 1°A" ],
                                        "jogo3":["17:05h", "2°D x 2°E"],
                                        "jogo4": ["17:30h", "2°C x 2°A"],
                                    }
                                ],
                
                                "futsal-feminino":[
                                    {
                                        "local":"Ginásio",
                                        "jogo1":["15:35h", "1°C x 1°D"],
                                        "jogo2":["16:40h", "1°E x 1°A"],
                                        "jogo3":["17:55h", "2°D x 2°E"],
                                        "jogo4":["18:20h", "2°C x 2°A"],
                                    }
                                ],
                                "hand-masculino": [
                                    {
                                        "local":"Quadra externa 1",
                                        "jogo1":["14:45h", "2°D x 2°B"],
                                        "jogo2":["15:10h", "2°A x 2°C"],
                                        "jogo3":["17:05h", "3°E x 3°C"],
                                        "jogo4":["17:30h", "3°A x 3°B"],
                                    }
                                ],
                                "hand-feminino": [
                                    {
                                        "local":"Quadra externa 1",
                                        "jogo1":["15:35h", "2°D x 2°B"],
                                        "jogo2":["16:40h", "2°A x 2°C"],
                                        "jogo3":["17:55h", "3°E x 3°C"],
                                        "jogo4":["18:20h", "3°A x 3°B"],
                                    }
                                ],
                                "volei": [
                                    {
                                        "local":"Quadra externa 2",
                                        "jogo1":["14:45h", "3°E x 3°A"],
                                        "jogo2":["15:10h", "3°B x 3°C"],
                                        "jogo3":["15:35h", "3°D x 3°A"],
                                        "jogo4":["16:40h", "3°E x 3°C"],
                                        "jogo5":["17:05h", "1°B x 1°E"],
                                        "jogo6":["17:30h", "1°A x 1°C"],
                                        "jogo7":["17:55h", "2°A x 2°B"],
                                        "jogo8":["18:20h", "1°D x ????"],  
                                    }
                                ],
                                
                
                                "dodgecone":[
                                    {
                                        "local": "Quadra externa 3 (Skate)",
                                        "jogo1": ['14:45h', '2°A x 2°C'],
                                        "jogo2": ['15:10h', '2°B x 2°D'],
                                        "jogo3": ['16:40h', '3°B x 2°D'],
                                        "jogo4": ['17:05h', '1°A x 1°C'],
                                        "jogo5": ['17:30h', '1°B x 1°D'],
                                    }
                                ],

                                "beach-masc": [
                                    {
                                        "local": "Beach Volei",
                                        "jogo1": ['15:35h', '1°D x 1°E'],
                                        "jogo2": ['16:40h', '1°A x 1°B'],
                                        "jogo3": ['17:30h', '1°C x ????'],
                                    }
                                ],

                                "beach-fem": [
                                    {
                                        "local": "Beach Volei",
                                        "jogo1": ['14:45h', '1°D x 1°E'],
                                        "jogo2": ['15:10h', '1°A x 1°B'],
                                        "jogo3": ['17:05h', '1°C x ????'],
                                    }
                                ],
                                
                            }
                        },
                    ],
                    "terca":[
                        {
                            "esportes":{               
                                    "futsal-masculino-ginasio":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":["14:00h", '3°A x 3°B'],
                                            "jogo2":["14:30h", '3°C x 3°D'],
                                            "jogo3":["15:00h", '3°E x 3°A'],
                                            "jogo4":["15:30h", '3°B x 3°C'],
                                           
                                        }
                                    ],

                                    //Futsal Masculino na quadra externa 1
                                    "futsal-masculino":[
                                        {
                                            "local":"Quadra Externa 1",
                                            "jogo1":["16:40h", '3°D x 3°E'],
                                            "jogo2":["17:05h", '3°A x 3°C'],
                                        }
                                    ],

                    
                                    "futsal-feminino":[
                                        {
                                            "local:":"Ginásio",
                                            "jogo1":["16:40h", '3°B x 3°E'],
                                            "jogo2":["17:05h", '3°A x 3°D'],
                                            "jogo3":["17:30h", '3°E x 3°C'],
                                            "jogo4":["17:55h", '3°B x 3°D'],
                                            "jogo5":["18:20h", '3°A x 3°C'],
                                        }
                                    ],

                                    //Futsal Feminino na quadra externa 1
                                    "futsal-feminino-quadra":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":["17:30h", '1°B x ????']
                                        }
                                    ],
                    
                                    "volei":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":["16:40h", '1° FINAL!!!!'],
                                            "jogo2":["17:55h", '2°E x 2°D'],
                                            "jogo3":["18:20h", '2°C x ????'],
                                        }
                                    ],
                    
                                    "basquete-feminino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":["15:00h", '2°E x 2°C | 2°B x 2°A'],
                                        }
                                    ],

                                    "basquete-masculino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":["15:30h", '2°E x 2°C | 2°B x 2°A'],
                                        }
                                    ],
                    
                                    "hand-feminino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":["14:30h", '2°E x ????'],
                                            "jogo2":["15:30h", '2° FINAL!!!'],
                                        }
                                    ],
                                    
                                    "hand-masculino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":["14:00h", '2°E x ????'],
                                            "jogo2":["15:00h", '2° FINAL!!!'],
                                        }
                                    ],         
                                    'beach-fem': [
                                        {
                                            local: 'Beach Volei',
                                            jogo1: ['14:00h', '2°D x 2°B'],
                                            jogo2: ['15:00h', '3°B x 3°E'],
                                            jogo3: ['15:30h', '3°A x 3°D'],
                                            jogo4: ['16:40h', '2°A x 2°C'],
                                            jogo5: ['17:30h', '2°E x ????'],
                                        }
                                    ],                           
                                    'beach-masc': [
                                        {
                                            local: 'Beach Volei',
                                            jogo1: ['14:30h', '2°D x 2°B'],
                                            jogo2: ['17:05h', '2°A x 2°C'],
                                            jogo3: ['17:55h', '2°E x ????'],
                                        }
                                    ]      
                                }
                        }
                        
                    ],
            
                    "quarta":[
                        {
                            "esportes":
                                {
                                    "hand-masculino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"14:00h",
                                            "jogo2":"14:30h",
                                            "jogo3":"16:40h",
                                            "jogo4":"17:30h : FINAL",
                                        }
                                    ],

                                    "hand-feminino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"15:00h",
                                            "jogo2":"15:30h",
                                            "jogo3":"17:05h",
                                            "jogo4":"17:55h : FINAL",
                                        }
                                    ],

                                    "futsal-feminino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"18:20h",                          
                                        }
                                    ],

                                    "basquete-masculino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo3":"15:00h",
                                            "jogo4":"15:30h",
                                            "jogo6":"17:05h",
                                        }
                                    ],

                                    "basquete-feminino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"14:00h",
                                            "jogo2":"14:30h",
                                            "jogo3":"16:40h",
                                        }
                                    ],

                                    "volei":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"16:40h",
                                            "jogo2":"17:55h : FINAL",
                                            "jogo3":"18:20h : FINAL",
                                        }
                                    ],                                
                                }
                        }
                    ],
            
                    "quinta":[
                        {
                            "esportes":
                                {
                                    "horarios":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":"14:00h",
                                            "jogo2":"14:30h",
                                            "jogo3":"15:00h",
                                            "jogo4":"15:30h",
                                            "jogo5":"16:40h",
                                            "jogo6":"17:05h",
                                            "jogo7":"17:30h",
                                            "jogo8":"17:55h",
                                            "jogo9":"18:20h",
                                        }
                                    ],

                                    "futsal-feminino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"14:00h",
                                            "jogo2":"14:30h",                                         
                                        }
                                    ],

                                    "futsal-masculino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"15:00h",
                                            "jogo2":"15:30h",                         
                                        }
                                    ],
                    
                                    "basquete-masculino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"15:00h",
                                            "jogo2":"15:30h",
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
                                            "jogo1":"15:00h",
                                            "jogo2":"15:30h",
                                            "jogo3":"16:40h : FINAL",
                                            "jogo4":"17:05h : FINAL",
                                        }
                                    ],

                                    "futsal-masculino-quadra":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"14:00h",
                                        }
                                    ],
                    
                                    "futsal-feminino":[
                                        {
                                            "local":"Ginásio",
                                            "jogo1":"14:00h",
                                            "jogo2":"14:30h",
                                            "jogo3":"17:30h : FINAL",
                                            "jogo4":"17:55h : FINAL",
                                        }
                                    ],

                                    "futsal-feminino-quadra":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"14:30h",
                                            "jogo2":"15:30h",
                                        }
                                    ],

                                    "hand-masculino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"16:40h",
                                            "jogo2":"17:30h : FINAL",
                                        }
                                    ],

                                    "hand-feminino":[
                                        {
                                            "local":"Quadra externa 1",
                                            "jogo1":"15:00h",
                                            "jogo2":"17:05h : FINAL",
                                        }
                                    ],

                                    "basquete-masculino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"14:30h",
                                            "jogo2":"15:30h : FINAL",
                                            "jogo3":"17:30h",
                                        }
                                    ],

                                    "basquete-feminino":[
                                        {
                                            "local":"Quadra externa 2",
                                            "jogo1":"14:00h",
                                            "jogo2":"15:00h",
                                            "jogo3":"16:40h : FINAL",
                                            "jogo4":"17:05h",
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





