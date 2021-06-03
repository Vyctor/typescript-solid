# O que são principios S.O.L.I.D

São 5 princípios da programação que foram reunidos para nos ajudar a manter um código limpo, flexivel e fácil de ser mantido.

## Simple Responsibility Principle (Princípio da responsabilidade Única)
Uma classe deve ter apenas um motivo para mudar (evite conjunções aditivas: e, bem como, também...).
Este princípio está intimamente ligado com outro, conhecido como Separation of concerns.

## Open/Closed principle (Princípio do aberto/fechado) 
Módulos, classes, objetos e operações devem estar abertos para extensão, mas fechados para modificações.

## Liskov substitution principle - (Principio da Substituição de Liskov)
Se o(x) é uma propriedade demonstrável dos objetos x de tipo T, então o(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T. (Subtipos precisam ser substituíveis por seus tipos de base).

## Interface segregration principle (Princípio da segregação de interface)
Os clientes não devem ser forçados a depender de interfaces que não utilizam

## Dependency inversion principle
Módulos de alto nível não devem ser dependentes de módulos de baixo nível; ambos devem depender de abstra;'oes. Detalhes devem depender das abstrações, não o inverso.

