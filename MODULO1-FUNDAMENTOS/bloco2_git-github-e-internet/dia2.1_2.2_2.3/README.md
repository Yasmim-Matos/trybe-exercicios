### Explicação comandos GIT e alguns termos importantes

>- Repositório: lugar onde se guarda, arquiva ou coleciona algo.

>- Sistema de controle de versão: ele tem a finalidade de gerenciar diferentes versões de um documento ou projeto.

#### Git e Git&Hub

>- Git é um sistema de controle de versão distribuido (DVCS).

>- O Git&Hub é a plataforma totalmente online onde você pode criar repositórios e hospedar nele os seus projetos.

#### Comandos git

>-git init: inicia o git em uma pasta.

>-git branch: lista os branchs que existem e o * indica em qual deles você está atualmente.

>-git checkout (nome da branch): vai para a branch que você indicou.

>-git checkout -b (nome da branch): cria e já vai para a branch que você indicou.

>-git checkout (master ou main): vai para a branch master ou main.

>-git add .: adiciona tudo que está no diretório atual.

>-git add (nomes dos arquivos ou pastas): adiciona os arquivos ou pastas que foram indicados.

>-git commit -m "Mensagem": cria a nova versão do arquivo.

>-git push -u origin (nome da branch atual): empurra/envia o conteúdo adicionado para o repositório remoto.

>*Depois disso, é necessário fazer um PR (Pull Request) no Git&Hub, e depois é necessário fazer um merge e se tudo estiver certo, pode excluir a branch.

>-git branch -d (nome da branch): exclui a branch.

>-git pull: baixa o histórico e incorpora as alterações (puxa o repositório).

>-git clone (url): baixa um projeto e seu histórico inteiro.

>-git log: lista o histórico de commits (versões) para o branch atual.

>-git status: lista as informações do git.

>-git fetch: verifica se foi realizada alguma alteração no repositório.

>-git pull: verifica e puxa as informações alteradas para o repositório local.

>OBS: O Pull Request serve para você realizar sugestões e contribuir com alterações em um repositório.

>-git rm (nome do arquivo): remove o arquivo.

>*Após a remoção de algum arquivo é necessário realizar um commit: git commit -m "Arquvio foi deletado".

*Para "ressuscitar" um arquivo é preciso realizar o comando abaixo:

>>-git log --diff-filter=D --summary: esse log vai procurar os logs diferentes e vai filtrar os que foram deletados e vai sumarizar esses logs.

>>*A primeira linha de um log (que fica ao lado direito da palavra commit) identifica aquela ação (como por exemplo a deleção de um arquivo).

>>*Para ressuscitar é preciso pegar os 4 primeiros caracteres desse número identificador do log e fazer o seguinte comando: 

>>-git checkout (os 4 caracteres)~1 (nome do arquivo): esse comando vai validar novamente o arquivo que antes estava deletado.

>>*Depois de validar é preciso adicionar o arquivo e commitar ele novamente.

*Para ignorar arquivos que você não quer adicionar ou não precisa deles, é preciso:

>>- Criar um arquivo .gitignore (ele é um arquivo oculto).

>>- Você pode escrever os nomes dos arquivos ou diretórios (exemplo: teste/). Se você colocar "*.txt" dentro do .gitignore, esse arquivo vai fazer o git ignorar todos os arquivos que tenham a extensão .txt

>>- Depois de criar e editar o .gitignore, você precisa adicionar ele e commitar.
