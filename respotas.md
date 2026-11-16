1. O que significa "utility-first"? Cite **uma vantagem** e **uma desvantagem** em relação ao CSS tradicional.
:É um jeito de estilizar usando pequenas classes prontas direto no HTML, onde cada uma faz apenas uma coisa, sem criar arquivos CSS separados. A grande vantagem é a velocidade para montar a tela sem precisar inventar nomes de classes, mas a desvantagem é que o HTML fica poluído quando um elemento tem muitos estilos.

2. Qual a diferença entre `md:text-6xl` e `text-6xl`? Por que dizemos que o Tailwind é *mobile-first*?
:O text-6xl aplica a fonte gigante em qualquer tela, enquanto o md:text-6xl só ativa esse tamanho a partir de telas médias. O Tailwind é mobile-first porque começamos estilizando o celular com as classes normais e usamos prefixos (como md: ou lg:) apenas para adaptar o layout conforme a tela cresce.

3. Explique o que cada classe faz: `flex items-center justify-between`.
:O flex coloca os elementos lado a lado; o items-center centraliza todos eles na vertical; e o justify-between empurra o primeiro item para a esquerda, o último para a direita e divide o espaço restante entre eles.

4. No exercício 4 você escreveu as classes do card uma única vez e elas valeram para os seis produtos. Explique **por que** isso aconteceu. Como você faria isso se a página fosse só HTML puro, sem React?
:Isso aconteceu porque no React criamos um componente reutilizável (ou usamos .map()), reaproveitando o mesmo código e classes automaticamente para toda a lista. No HTML puro, eu teria que copiar e colar a estrutura inteira do card com todas as classes seis vezes na mão, alterando apenas os dados de cada produto.

5. Qual a diferença entre `p-4` e `m-4`? E entre `gap-4` e `space-y-4`?
:O p-4 cria um espaçamento interno (padding), afastando o conteúdo da borda, enquanto o m-4 cria um espaçamento externo (margin), afastando o elemento dos vizinhos. Já o gap-4 dá espaço entre itens apenas dentro de layouts Flex ou Grid, enquanto o space-y-4 aplica margem no topo de itens empilhados na vertical em qualquer bloco comum.