import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import colors from '../../custom/colors';

import fonts from '../../custom/fonts';

export default function Adubos() {
    return (

        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View>
                    <Text style={styles.title}>Por que adubar?</Text>
                    <Text style={styles.textAbout}>
                        Em uma floresta, por exemplo, as plantas fazem parte de um sistema complexo. Seus nutrientes vêm do solo, que é constantemente alimentado através da decomposição de vegetais e animais. Em um vaso ou no jardim, isso não ocorre.
                    </Text>

                    <Text style={styles.textAbout}>
                        Por isso, cabe a pessoa repor os nutrientes de forma artificial. É aí que entra a adubação! Essa prática é uma forma de alimentar o solo, fornecendo as substâncias e nutrientes que as plantinhas precisam. Viu porque é importante conhecer os tipos de adubo para plantas? Agora só falta conhecer melhor cada variedade.
                    </Text>

                    <Image
                        style={styles.image}
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplicativo-horta.appspot.com/o/icons%2Fimagem-adubo.jpg?alt=media&token=914af040-8ff7-4d07-a049-2a5b29d7fa63' }}
                    />
                </View>

                <View>
                    <Text style={styles.title}>Orgânico ou inorgânico?</Text>

                    <Text style={styles.textAbout}>
                        Quando falamos sobre tipos de adubo, há dois grandes grupos que precisam ser abordados: os orgânicos e os inorgânicos. Essas duas categorias de fertilizantes possuem características distintas, mas o resultado é semelhante.
                    </Text>
                    <Text style={styles.title}>Tipos de adubos orgânicos</Text>
                    <Text style={styles.textAbout}>
                        Os tipos de adubos orgânicos são uma boa opção para quem prefere deixar que as coisas aconteçam em seu tempo natural! Isso porque, nessa categoria, os nutrientes são liberados lentamente através da decomposição de algum tipo de matéria.
                    </Text>
                </View>


                <View>
                    <Text style={styles.title}>Húmus de minhoca</Text>
                    <Text style={styles.textAbout}>
                        O húmus de minhoca é um dos mais famosos e considerado por muitos o melhor adubo! No entanto, não é necessário ter esses simpáticos animaizinhos em seu jardim para aproveitar os seus benefícios. Hoje, é possível encontrar húmus de minhoca já preparado, pronto para ser colocado em sua horta!
                    </Text>
                    <Text style={styles.textAbout}>
                        E o melhor é que, nesse caso, mesmo sendo um adubo orgânico, os benefícios já são imediatos. As minhocas fazem o processo de decomposição e deixam apenas os nutrientes para as plantinhas aproveitarem!
                    </Text>
                    <Text style={styles.textAbout}>
                        É um ótimo adubo para qualquer situação e não possui contra-indicações! Entretanto, se sua verdinha estiver muito fraca, talvez seja melhor buscar fertilizantes mais potentes.
                    </Text>
                </View>

                <View>
                    <Text style={styles.title}>Farinha de ossos</Text>
                    <Text style={styles.textAbout}>
                        Os ossos também podem ajudar na fertilização de seu jardim! Para que os nutrientes sejam aproveitados de forma eficaz, o ideal é utilizar farinha de ossos, um produto facilmente encontrado em lojas especializadas.
                    </Text>
                    <Text style={styles.textAbout}>
                        Rico em fósforo e cálcio, esse fertilizante ainda auxilia a regular o pH da terra, sendo uma boa opção para qualquer espécie! A farinha de ossos, entretanto, pode ter atuação mais lenta. Por isso, é mais indicada para a manutenção de plantas que já estão saudáveis, para que elas continuem se desenvolvendo!
                    </Text>
                </View>

                <View>
                    <Text style={styles.title}>Esterco</Text>
                    <Text style={styles.textAbout}>
                        Se você já esteve em uma fazenda, sabe o segredo para hortas saudáveis — o bom e velho esterco! E graças às maravilhas do mundo moderno, você também pode aproveitar esse excelente fertilizante em sua casa!
                    </Text>
                    <Text style={styles.textAbout}>
                        O esterco pode ser um adubo caseiro ou é possível encontrá-lo em lojas especializadas já pronto para uso. Estes são muito indicados para hortas e jardins. Basta misturá-lo à terra para que as plantinhas possam aproveitar seus nutrientes!
                    </Text>
                    <Text style={styles.textAbout}>
                        Como são de origem natural, os adubos orgânicos não possuem contraindicação! Se estiver buscando um produto para aplicar regularmente em sua plantinha, eles podem ser a escolha perfeita!

                    </Text>
                </View>

                <View>
                    <Text style={styles.title}>Tipos de adubos inorgânicos</Text>
                    <Text style={styles.textAbout}>
                        Assim como os orgânicos, os adubos inorgânicos têm como objetivo aumentar os nutrientes da terra, fortalecendo, assim, suas verdinhas. Também chamados de fertilizantes químicos, esses produtos são preparados por especialistas e já contêm exatamente as substâncias necessárias para o desenvolvimento dos vegetais.
                    </Text>
                    <Image
                        style={styles.image}
                        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplicativo-horta.appspot.com/o/icons%2Fimagem-adubo.jpg?alt=media&token=914af040-8ff7-4d07-a049-2a5b29d7fa63' }}
                    />
                    <Text style={styles.textAbout}>
                        Como já estão preparados, possuem absorção rápida e eficaz. Assim, são os mais indicados caso sua planta esteja fraca e precisando de ajuda. Também é possível encontrar diferentes tipos de adubo inorgânicos. Os principais são:
                    </Text>

                    <Text style={styles.title}>Líquido</Text>
                    <Text style={styles.textAbout}>É a variedade mais prática, pois já vem pronta para uso. Basta aplicar diretamente no solo, utilizando as recomendações da embalagem.
                    </Text>

                    <Text style={styles.title}>Concentrado</Text>
                    <Text style={styles.textAbout}> É um tipo de adubo inorgânico muito comum. Geralmente, vêm em pequenos frascos e contém nutrientes em uma concentração muito alta. Por isso, devem ser diluídos antes de serem colocados no solo. As instruções para diluição devem estar presentes na embalagem.
                    </Text>

                    <Text style={styles.title}>Pastilha</Text>
                    <Text style={styles.textAbout}>Apesar de menos comum, esse tipo de adubo também é muito prático. Seu formato em pastilha lembra um comprimido grande. Para utilizá-lo, é necessário enterrá-lo no vaso ou no jardim. Com as regas, a pastilha vai se dissolvendo aos poucos, liberando os nutrientes na terra.
                    </Text>

                    <Text style={styles.title}>Granulado</Text>
                    <Text style={styles.textAbout}> O tipo granulado demanda um pouco mais de trabalho e, por isso, é mais indicado para jardineiros experientes. Deve ser incorporado à terra de forma equilibrada e, para isso, é necessário revolver o solo utilizando uma pá ou outro instrumento de jardinagem. Depois, basta regar sua planta normalmente e ela poderá aproveitar os nutrientes.
                    </Text>

                    <Text style={styles.textAbout}>Os adubos inorgânicos são excelentes para nutrir a terra de forma rápida e eficaz. Entretanto, seu uso excessivo pode alterar drasticamente a composição química do solo. Por isso, é recomendado utilizar seguindo rigidamente as instruções presentes na embalagem do produto escolhido.
                    </Text>
                </View>

                <View>
                    <Text style={styles.title}>Qual é o melhor adubo?</Text>
                    <Text style={styles.textAbout}>
                        Para se responder essa perguntar é necessário fazer a junção de todos os fatores abordados até aqui e assim encontra a resposta de qual será melhor o custo benefício conforme minha escolha o tipo de adubo.
                    </Text>

                    <Text style={styles.subtitle}>Levando se em conta:</Text>

                    <Text style={styles.textAbout}>A disponibilidade dos nutrientes no solo com a realização da análise de solo;
                    </Text>
                    <Text style={styles.textAbout}>A necessidade especifica da planta por algum nutriente conforme seu o momento fisiológico;
                    </Text>
                    <Text style={styles.textAbout}>As fontes de adubo disponíveis próximas ao local visando assim a diminuição dos custos com frete;
                    </Text>
                    <Text style={styles.textAbout}>Qual tipo de formulação será mais adequada para ser aplicada na planta de interesse;
                    </Text>
                    <Text style={styles.textAbout}>As alterações ao tipo de solo e ambiente que podem ocorrer dependendo do tipo de adubo escolhido.
                    </Text>
                </View>

            </ScrollView >
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: '5%',
        backgroundColor: colors.fundo
    },
    title: {
        // marginTop: 10,
        textAlign: 'center',
        fontSize: fonts.sizeTitle,
        fontFamily: fonts.subtitle
    },
    image: {
        width: '100%',
        height: 149,
        resizeMode: 'contain',
    },
    textAbout: {
        marginBottom: 10,
        textAlign: 'justify',
        fontSize: fonts.sizeText18,
        fontFamily: fonts.textGeral,
    },
    subtitle: {
        fontSize: fonts.sizeText,
        fontFamily: fonts.subtitle,
    },
})
