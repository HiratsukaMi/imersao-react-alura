/* Quando os componentes estiverem em arquivos separados, é necessário importá-los no arquivo que desejar. */
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'; 
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      {/* Para passar uma variável no react, é necessário utilizar {} e, caso for colocá-la no meio de um texto, colocar também o $. */}
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} /> 
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'HiratsukaMi';
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'FrancielyLucidio',
    'gonzagaC',
    'gustavoguanabara'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {usuarioAleatorio} {/* adicionei para aparecer meu user do GitHub junto com o "Bem-vindo(a)". */}
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}