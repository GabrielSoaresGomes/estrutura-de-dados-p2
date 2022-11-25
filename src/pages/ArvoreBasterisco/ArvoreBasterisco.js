import Container from "../../layouts/Container/Container";
import H1 from "../../layouts/H1/H1";

const ArvoreBAsterisk = () => {
    return (
        <Container>
            <H1 text='Árvore B*' />
            <div className="imagem-detalhes"> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bstartree-overflow.svg/375px-Bstartree-overflow.svg.png' /></div>

<p>Uma árvore B* é uma estrutura de dados na ciência da computação e uma variação da árvore B proposta em 1973 por Donald E. Knuth. Esta apresenta mecanismos de inserção, remoção e busca muito semelhantes aos realizados em árvores B, mas com a diferença em que a técnica de redistribuição de chaves também é empregada durante as operações de inserção. Dessa maneira a operação de split pode ser adiada até que duas páginas irmãs estejam completamente cheias e, a partir daí, o conteúdo dessas páginas irmãs é redistribuído entre três páginas (uma nova criada e as duas páginas irmãs anteriormente cheias).</p>
<br />
<p>Tal técnica é conhecida como divisão two-to-three split, ou no português divisão de dois para três, que proporciona propriedades diferentes das árvores B na qual utiliza a divisão usual conhecida como one-to-two split. A grande melhoria direta proporcionada por essa abordagem é o melhor aproveitamento de espaço do arquivo, pois, no pior caso, cada página apresenta no mínimo 2/3 do número máximo de chaves que esta pode armazenar, enquanto na divisão usual cada página apresenta, no pior caso, metade do número máximo de chaves.</p>
<div className='iframe-container'>     
<iframe width="1280" height="720" src="https://www.youtube.com/embed/WXnTmuSZDfc" title="Árvore B*" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<pre>{`
              # Create a node
              class BTreeNode:
                def __init__(self, leaf=False):
                  self.leaf = leaf
                  self.keys = []
                  self.child = []
          
          
              # Tree
              class BTree:
                def __init__(self, t):
                  self.root = BTreeNode(True)
                  self.t = t
          
                  # Insert node
                def insert(self, k):
                  root = self.root
                  if len(root.keys) == (2 * self.t) - 1:
                    temp = BTreeNode()
                    self.root = temp
                    temp.child.insert(0, root)
                    self.split_child(temp, 0)
                    self.insert_non_full(temp, k)
                  else:
                    self.insert_non_full(root, k)
          
                  # Insert nonfull
                def insert_non_full(self, x, k):
                  i = len(x.keys) - 1
                  if x.leaf:
                    x.keys.append((None, None))
                    while i >= 0 and k[0] < x.keys[i][0]:
                      x.keys[i + 1] = x.keys[i]
                      i -= 1
                    x.keys[i + 1] = k
                  else:
                    while i >= 0 and k[0] < x.keys[i][0]:
                      i -= 1
                    i += 1
                    if len(x.child[i].keys) == (2 * self.t) - 1:
                      self.split_child(x, i)
                      if k[0] > x.keys[i][0]:
                        i += 1
                    self.insert_non_full(x.child[i], k)
          
                  # Split the child
                def split_child(self, x, i):
                  t = self.t
                  y = x.child[i]
                  z = BTreeNode(y.leaf)
                  x.child.insert(i + 1, z)
                  x.keys.insert(i, y.keys[t - 1])
                  z.keys = y.keys[t: (2 * t) - 1]
                  y.keys = y.keys[0: t - 1]
                  if not y.leaf:
                    z.child = y.child[t: 2 * t]
                    y.child = y.child[0: t - 1]
          
                # Print the tree
                def print_tree(self, x, l=0):
                  print("Level ", l, " ", len(x.keys), end=":")
                  for i in x.keys:
                    print(i, end=" ")
                  print()
                  l += 1
                  if len(x.child) > 0:
                    for i in x.child:
                      self.print_tree(i, l)
          
                # Search key in the tree
                def search_key(self, k, x=None):
                  if x is not None:
                    i = 0
                    while i < len(x.keys) and k > x.keys[i][0]:
                      i += 1
                    if i < len(x.keys) and k == x.keys[i][0]:
                      return (x, i)
                    elif x.leaf:
                      return None
                    else:
                      return self.search_key(k, x.child[i])
          
                  else:
                    return self.search_key(k, self.root)
          
          
              def main():
                B = BTree(3)
          
                for i in range(10):
                  B.insert((i, 2 * i))
          
                B.print_tree(B.root)
          
                if B.search_key(8) is not None:
                  print("
          Found")
                else:
                  print("
          Not Found")
          
          
              if __name__ == '__main__':
                main()
`}</pre>
        </Container>
    );
}

export default ArvoreBAsterisk;