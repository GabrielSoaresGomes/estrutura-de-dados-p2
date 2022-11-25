import Container from "../../layouts/Container/Container";
import H1 from "../../layouts/H1/H1";

const ArvoreBPlus = () => {
    return (
        <Container>
            <H1 text='ArvoresB+' />
            <div className="imagem-detalhes"> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Bplustree.png/500px-Bplustree.png' /></div>

    <p>Na ciência da computação uma árvore B+ é uma estrutura de dados do tipo árvore derivada das árvores B, mas com uma forma diferente de armazenamento de suas chaves. Tal organização confere propriedades, algoritmos de inserção, busca e remoção de chaves diferentes dos utilizados em árvores B, mas com uma gama de aplicações muito semelhantes em banco de dados e sistemas de arquivos.</p>
    <br />
    <p>Estruturas de dados como essa são muito empregadas em banco de dados e sistemas de arquivos como o NTFS para o Microsoft Windows, o sistema de ficheiros ReiserFS para Unix, o XFS para IRIX e Linux, e o JFS2 para AIX, OS/2 e Linux, usam este tipo de árvore. Assim como as árvores B, as árvores B+ visam reduzir as operações de leitura e escrita em memória secundária, uma vez que, essas operações são demoradas para um sistema computacional e devem ser minimizadas sempre que possível.</p>
<div className='iframe-container'>
<iframe width="1280" height="720" src="https://www.youtube.com/embed/BX4UboQixVI" title="Arvores B+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<pre>{`
            class Node(object):
            """Base node object.
            Each node stores keys and values. Keys are not unique to each value, and as such values are
            stored as a list under each key.
            Attributes:
                order (int): The maximum number of keys each node can hold.
            """
            def __init__(self, order):
                """Child nodes can be converted into parent nodes by setting self.leaf = False. Parent nodes
                simply act as a medium to traverse the tree."""
                self.order = order
                self.keys = []
                self.values = []
                self.leaf = True
        
            def add(self, key, value):
                """Adds a key-value pair to the node."""
                # If the node is empty, simply insert the key-value pair.
                if not self.keys:
                    self.keys.append(key)
                    self.values.append([value])
                    return None
        
                for i, item in enumerate(self.keys):
                    # If new key matches existing key, add to list of values.
                    if key == item:
                        self.values[i].append(value)
                        break
        
                    # If new key is smaller than existing key, insert new key to the left of existing key.
                    elif key < item:
                        self.keys = self.keys[:i] + [key] + self.keys[i:]
                        self.values = self.values[:i] + [[value]] + self.values[i:]
                        break
        
                    # If new key is larger than all existing keys, insert new key to the right of all
                    # existing keys.
                    elif i + 1 == len(self.keys):
                        self.keys.append(key)
                        self.values.append([value])
        
            def split(self):
                """Splits the node into two and stores them as child nodes."""
                left = Node(self.order)
                right = Node(self.order)
                mid = self.order // 2
        
                left.keys = self.keys[:mid]
                left.values = self.values[:mid]
        
                right.keys = self.keys[mid:]
                right.values = self.values[mid:]
        
                # When the node is split, set the parent key to the left-most key of the right child node.
                self.keys = [right.keys[0]]
                self.values = [left, right]
                self.leaf = False
        
            def is_full(self):
                """Returns True if the node is full."""
                return len(self.keys) == self.order
        
            def show(self, counter=0):
                """Prints the keys at each level."""
                print(counter, str(self.keys))
        
                # Recursively print the key of child nodes (if these exist).
                if not self.leaf:
                    for item in self.values:
                        item.show(counter + 1)
        
        class BPlusTree(object):
            """B+ tree object, consisting of nodes.
            Nodes will automatically be split into two once it is full. When a split occurs, a key will
            'float' upwards and be inserted into the parent node to act as a pivot.
            Attributes:
                order (int): The maximum number of keys each node can hold.
            """
            def __init__(self, order=8):
                self.root = Node(order)
        
            def _find(self, node, key):
                """ For a given node and key, returns the index where the key should be inserted and the
                list of values at that index."""
                for i, item in enumerate(node.keys):
                    if key < item:
                        return node.values[i], i
        
                return node.values[i + 1], i + 1
        
            def _merge(self, parent, child, index):
                """For a parent and child node, extract a pivot from the child to be inserted into the keys
                of the parent. Insert the values from the child into the values of the parent.
                """
                parent.values.pop(index)
                pivot = child.keys[0]
        
                for i, item in enumerate(parent.keys):
                    if pivot < item:
                        parent.keys = parent.keys[:i] + [pivot] + parent.keys[i:]
                        parent.values = parent.values[:i] + child.values + parent.values[i:]
                        break
        
                    elif i + 1 == len(parent.keys):
                        parent.keys += [pivot]
                        parent.values += child.values
                        break
        
            def insert(self, key, value):
                """Inserts a key-value pair after traversing to a leaf node. If the leaf node is full, split
                the leaf node into two.
                """
                parent = None
                child = self.root
        
                # Traverse tree until leaf node is reached.
                while not child.leaf:
                    parent = child
                    child, index = self._find(child, key)
        
                child.add(key, value)
        
                # If the leaf node is full, split the leaf node into two.
                if child.is_full():
                    child.split()
        
                    # Once a leaf node is split, it consists of a internal node and two leaf nodes. These
                    # need to be re-inserted back into the tree.
                    if parent and not parent.is_full():
                        self._merge(parent, child, index)
        
            def retrieve(self, key):
                """Returns a value for a given key, and None if the key does not exist."""
                child = self.root
        
                while not child.leaf:
                    child, index = self._find(child, key)
        
                for i, item in enumerate(child.keys):
                    if key == item:
                        return child.values[i]
        
                return None
        
            def show(self):
                """Prints the keys at each level."""
                self.root.show()
        
        def demo_node():
            print('Initializing node...')
            node = Node(order=4)
        
            print('
        Inserting key a...')
            node.add('a', 'alpha')
            print('Is node full?', node.is_full())
            node.show()
        
            print('
        Inserting keys b, c, d...')
            node.add('b', 'bravo')
            node.add('c', 'charlie')
            node.add('d', 'delta')
            print('Is node full?', node.is_full())
            node.show()
        
            print('
        Splitting node...')
            node.split()
            node.show()
        
        def demo_bplustree():
            print('Initializing B+ tree...')
            bplustree = BPlusTree(order=4)
        
            print('
        B+ tree with 1 item...')
            bplustree.insert('a', 'alpha')
            bplustree.show()
        
            print('
        B+ tree with 2 items...')
            bplustree.insert('b', 'bravo')
            bplustree.show()
        
            print('
        B+ tree with 3 items...')
            bplustree.insert('c', 'charlie')
            bplustree.show()
        
            print('
        B+ tree with 4 items...')
            bplustree.insert('d', 'delta')
            bplustree.show()
        
            print('
        B+ tree with 5 items...')
            bplustree.insert('e', 'echo')
            bplustree.show()
        
            print('
        B+ tree with 6 items...')
            bplustree.insert('f', 'foxtrot')
            bplustree.show()
        
            print('
        Retrieving values with key e...')
            print(bplustree.retrieve('e'))
        
        if __name__ == '__main__':
            demo_node()
            print('
        ')
            demo_bplustree()
`}</pre>
        </Container>
    );
}

export default ArvoreBPlus;