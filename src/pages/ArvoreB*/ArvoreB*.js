import Container from "../../layouts/Container/Container";
import H1 from "../../layouts/H1/H1";

const ArvoreBAsterisk = () => {
    return (
        <Container>
            <H1 text='ArvoresB*' />
            <p>Arvore Maluca da tropa do mantém</p>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        
<iframe width="1280" height="720" src="https://www.youtube.com/embed/WXnTmuSZDfc" title="Árvore B*" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
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