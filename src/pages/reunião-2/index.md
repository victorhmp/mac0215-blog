---
title: Reunião
date: '2018-09-27T16:30'
---

Hoje em reunião com meu co-supervisor, Renato, discutimos sobre os toques finais no tratamento dos dados para serem finalmente analisados e quais são os próximos passos na direção de anonimatização desses dados.

Depois de revisar o estado atual dos dados, decidimos que os próximos passos seriam:

- Atribuir a cada inscrito um ID, ou seja, criar uma nova coluna nas tabelas de inscritos com números naturais que irão identificar cada inscrito. Com isso fazer o relacionamento entre _times_ é mais simples e de forma estruturada.

- Trabalhar na coluna `Se sim, conte-nos quem são`, onde os incritos informam os participantes de seus times. Concluímos que a melhor maneira de padronizar essa coluna é utilizando os IDs que identificam cada inscrito.

- Cruzar os dados das planilhas de inscritos com as planilhas dos selecionados e de listas de espera. Vamos adicionar uma coluna à todas as planilhas de inscritos para marcar os selecionados.

- Padronizar da melhor maneira possível os campos `Qual seu curso / programa de pós?` e `Qual a sua especialidade?`. Esses dois campos serão os últimos dois que não estarão padronizados, porém não temos como padronizar definitivamente pois não há listas "oficiais" de todos os cursos da USP e programas de pós. Vamos buscar agregar o máximo possível, pois é muito comum que o mesmo curso seja escrito de diversas formas diferentes, como por exemplo "BCC" e "Bacharelado de Ciência da Computação".

- Juntar as colunas `Em que ano você está?` e `Em que nível de estudo você está atualmente?`, de maneira que estudantes da pós estajam identificados apenas como "Pós graduação", não sendo relevante o ano em que estão.

- Anonimizar os dados. Como passo final da análise dos dados vamos anomizá-los, retirando entradas referentes aos campos `Endereço de e-mail`, `Nome Completo` e `Se sim, conte-nos quem são`.

Com isso, esperamos que a limpeza e tratamento dos dados esteja concluída. Em seguida, vamos gerar as primeiras vizualizações, com uso de _Jupyter Notebooks_, dos dados para analizar e tentar encontrar tendências em certos campos dos formulários de inscrição.

**Horas:** 1 hora
