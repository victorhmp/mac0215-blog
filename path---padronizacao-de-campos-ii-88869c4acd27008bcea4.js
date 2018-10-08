webpackJsonp([0xbefde614917c],{407:function(a,o){a.exports={data:{site:{siteMetadata:{title:"MAC0215 Blog",author:"Victor Hugo M. Pinto"}},markdownRemark:{id:"/Users/victorhugo/BCC/mac0215-blog/src/pages/padronização-de-campos-II/index.md absPath of file >>> MarkdownRemark",html:"<p>Durante esta semana (16 - 22 de setembro), avançamos com a padronização dos dados obtidos nas planilhas com informações sobre os inscritos.</p>\n<p>Começamos preenchendo a coluna “Gênero” de todas as planilhas, com excessão da planilha da edição 2018.1, que já estava preenchida. Na planilha da edição 2017.1, não constavam os nomes dos inscritos, apenas os emails, dada essa limitação alguns inscritos estão com o valor “I.D”, representando “Impossível de identificar”.</p>\n<p>Também decidimos remover algumas colunas de todas as planilhas que não seriam úteis para a análise dos dados, assim diminuindo o volume de dados. Os campos retirados foram:</p>\n<ul>\n<li>“NUSP”</li>\n<li>“Telefone”</li>\n<li>“RG”</li>\n<li>“Você gostaria de receber mais notícias sobre os nossos hackathons?”</li>\n</ul>\n<p>Após a retirada de alguns campos desnecessários, padronizamos todas as respostas ao campo “Qual a escola / faculdade /\ninstituto?” de acordo com a lista oficial dos institutos e faculdades da USP.</p>\n<p>Padronizamos também o campo “Você já participou de quantos hackathons?” de acordo com o seguinte padrão:</p>\n<ul>\n<li>“Esse será o meu primeiro!”/“Nenhum” ~> 0</li>\n<li>“Somente um” ~> 1</li>\n<li>“2-4” ~> 2</li>\n<li>“5 ou mais” ~> 5</li>\n</ul>\n<p>Preenchemos um campo que só havia sido preenchido na planilha da edição 2018.1, “Em que nível de estudo você está atualmente?”, nos baseando nas respostas ao campo “Em que ano você está?”, já que uma das possíveis respostas era “Pós-graduação”.</p>\n<p>Por fim, apagamos inscrições duplicadas para não interferirem na análise posterior. Apagamos a segunda entrada de cada inscrição duplicada, ou seja, mantivemos a primeira inscrição feita pelo mesmo candidado.</p>\n<p><strong>Horas</strong>: 5 horas</p>",frontmatter:{title:"Padronização de campos (Pt. 2)",date:"September 22, 2018"}}},pathContext:{slug:"/padronização-de-campos-II/",previous:{fields:{slug:"/padronização-de-campos-I/"},frontmatter:{title:"Padronização de campos (Pt. 1)"}},next:{fields:{slug:"/reunião-2/"},frontmatter:{title:"Reunião"}}}}}});
//# sourceMappingURL=path---padronizacao-de-campos-ii-88869c4acd27008bcea4.js.map