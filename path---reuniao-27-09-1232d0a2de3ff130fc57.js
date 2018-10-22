webpackJsonp([0xef895faf326a],{415:function(a,o){a.exports={data:{site:{siteMetadata:{title:"MAC0215 Blog",author:"Victor Hugo M. Pinto"}},markdownRemark:{id:"/Users/victorhugo/BCC/mac0215-blog/src/pages/reunião-27-09/index.md absPath of file >>> MarkdownRemark",html:'<p>Hoje em reunião com meu co-supervisor, Renato, discutimos sobre os toques finais no tratamento dos dados para serem finalmente analisados e quais são os próximos passos na direção de anonimatização desses dados.</p>\n<p>Depois de revisar o estado atual dos dados, decidimos que os próximos passos seriam:</p>\n<ul>\n<li>\n<p>Atribuir a cada inscrito um ID, ou seja, criar uma nova coluna nas tabelas de inscritos com números naturais que irão identificar cada inscrito. Com isso fazer o relacionamento entre <em>times</em> é mais simples e de forma estruturada.</p>\n</li>\n<li>\n<p>Trabalhar na coluna <code class="language-text">Se sim, conte-nos quem são</code>, onde os incritos informam os participantes de seus times. Concluímos que a melhor maneira de padronizar essa coluna é utilizando os IDs que identificam cada inscrito.</p>\n</li>\n<li>\n<p>Cruzar os dados das planilhas de inscritos com as planilhas dos selecionados e de listas de espera. Vamos adicionar uma coluna à todas as planilhas de inscritos para marcar os selecionados.</p>\n</li>\n<li>\n<p>Padronizar da melhor maneira possível os campos <code class="language-text">Qual seu curso / programa de pós?</code> e <code class="language-text">Qual a sua especialidade?</code>. Esses dois campos serão os últimos dois que não estarão padronizados, porém não temos como padronizar definitivamente pois não há listas “oficiais” de todos os cursos da USP e programas de pós. Vamos buscar agregar o máximo possível, pois é muito comum que o mesmo curso seja escrito de diversas formas diferentes, como por exemplo “BCC” e “Bacharelado de Ciência da Computação”.</p>\n</li>\n<li>\n<p>Juntar as colunas <code class="language-text">Em que ano você está?</code> e <code class="language-text">Em que nível de estudo você está atualmente?</code>, de maneira que estudantes da pós estajam identificados apenas como “Pós graduação”, não sendo relevante o ano em que estão.</p>\n</li>\n<li>\n<p>Anonimizar os dados. Como passo final da análise dos dados vamos anomizá-los, retirando entradas referentes aos campos <code class="language-text">Endereço de e-mail</code>, <code class="language-text">Nome Completo</code> e <code class="language-text">Se sim, conte-nos quem são</code>.</p>\n</li>\n</ul>\n<p>Com isso, esperamos que a limpeza e tratamento dos dados esteja concluída. Em seguida, vamos gerar as primeiras vizualizações, com uso de <em>Jupyter Notebooks</em>, dos dados para analizar e tentar encontrar tendências em certos campos dos formulários de inscrição.</p>\n<p><strong>Horas:</strong> 1 hora</p>',frontmatter:{title:"Reunião (27/09)",date:"September 27, 2018"}}},pathContext:{slug:"/reunião-27-09/",previous:{fields:{slug:"/padronização-de-campos-II/"},frontmatter:{title:"Padronização de campos (Pt. 2)"}},next:{fields:{slug:"/padronização-de-campos-III/"},frontmatter:{title:"Padronização de campos (Pt. 3)"}}}}}});
//# sourceMappingURL=path---reuniao-27-09-1232d0a2de3ff130fc57.js.map