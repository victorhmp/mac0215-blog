---
title: Padronização de campos (Pt. 2)
date: '2018-09-22T16:00'
---

Durante esta semana (16 - 22 de setembro), avançamos com a padronização dos dados obtidos nas planilhas com informações sobre os inscritos.

Começamos preenchendo a coluna "Gênero" de todas as planilhas, com excessão da planilha da edição 2018.1, que já estava preenchida. Na planilha da edição 2017.1, não constavam os nomes dos inscritos, apenas os emails, dada essa limitação alguns inscritos estão com o valor "I.D", representando "Impossível de identificar".

Também decidimos remover algumas colunas de todas as planilhas que não seriam úteis para a análise dos dados, assim diminuindo o volume de dados. Os campos retirados foram:

- "NUSP"
- "Telefone"
- "RG"
- “Você gostaria de receber mais notícias sobre os nossos hackathons?”

Após a retirada de alguns campos desnecessários, padronizamos todas as respostas ao campo "Qual a escola / faculdade /
instituto?" de acordo com a lista oficial dos institutos e faculdades da USP.

Padronizamos também o campo "Você já participou de quantos hackathons?" de acordo com o seguinte padrão:

- "Esse será o meu primeiro!"/"Nenhum" ~> 0
- "Somente um" ~> 1
- "2-4" ~> 2
- "5 ou mais" ~> 5

Preenchemos um campo que só havia sido preenchido na planilha da edição 2018.1, "Em que nível de estudo você está atualmente?", nos baseando nas respostas ao campo "Em que ano você está?", já que uma das possíveis respostas era "Pós-graduação".

Por fim, apagamos inscrições duplicadas para não interferirem na análise posterior. Apagamos a segunda entrada de cada inscrição duplicada, ou seja, mantivemos a primeira inscrição feita pelo mesmo candidado.
