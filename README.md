Claro, aqui está o README para o seu script:

---

# Jogo de Adivinhação em JavaScript

Este é um simples jogo de adivinhação implementado em JavaScript, onde o usuário tenta adivinhar um número aleatório gerado pelo computador.

## Funcionalidades Implementadas

1. **Número Máximo de Tentativas**: O jogador tem um máximo de 3 tentativas para adivinhar o número.
2. **Quantidade de Tentativas**: O jogo informa ao jogador quantas tentativas foram feitas até acertar o número.
3. **Quente ou Frio**: O jogador é informado se está perto ou longe do número correto.
4. **Número Fujão**: Após um número de tentativas, o jogo revela o número aleatório anterior e escolhe outro.

## Como Jogar

1. Clone ou baixe o repositório para a sua máquina local.
2. Certifique-se de ter o Node.js instalado.
3. Abra o terminal e navegue até o diretório onde o código está localizado.
4. Execute o script JavaScript usando o Node.js digitando `node nome_do_arquivo.js`.
5. O jogo começará e você será solicitado a digitar um número de 100 a 200.
6. Digite o número desejado e pressione Enter.
7. O jogo informará se você acertou ou não. Se errar, será informado se está quente ou frio.
8. Continue a jogar até acertar ou atingir o número máximo de tentativas.
9. Após cada rodada, você terá a opção de jogar novamente digitando "sim" ou sair digitando "não".

## Exemplo de Uso

```
$ node jogo.js
Jogo da adivinhação!
Digite um número de 100 a 200 (Você tem 3 tentativas):
```

```
$ 150
Quente! Você está próximo.
Você ainda tem 2 tentativas.
```

```
$ 180
Frio! Você ainda tem 1 tentativas.
```

```
$ 170
Parabéns, você acertou! :)
Deseja jogar novamente? (sim ou não)
```

---

Sinta-se à vontade para personalizar ou adicionar mais funcionalidades ao jogo conforme necessário!
