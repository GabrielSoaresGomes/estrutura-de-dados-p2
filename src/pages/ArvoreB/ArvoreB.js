import Container from "../../layouts/Container/Container";
import H1 from "../../layouts/H1/H1";

const ArvoreB = () => {
    return (
        <Container>
            <H1 text={'ArvovesB'} />
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/800px-Binary_tree.svg.png' />
            <p>Arvore Maluca da tropa do mantém</p>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

    <iframe width="1280" height="720" src="https://www.youtube.com/embed/0Sk5-uT0qAM" title="Arvores B" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
    <pre>{`
        class BTreeNode(object):
        """A B-Tree Node.
    
        attributes
        =====================
        leaf : boolean, determines whether this node is a leaf.
        keys : list, a list of keys internal to this node
        c : list, a list of children of this node
        """
        def __init__(self, leaf=False):
            self.leaf = leaf
            self.keys = []
            self.c    = []
    
        def __str__(self):
            if self.leaf:
                return "Leaf BTreeNode with {0} keys
        K:{1}
        C:{2}
    ".format(len(self.keys), self.keys, self.c)
            else:
                return "Internal BTreeNode with {0} keys, {1} children
        K:{2}
    
    ".format(len(self.keys), len(self.c), self.keys, self.c)
    
    
    class BTree(object):
        def __init__(self, t):
            self.root = BTreeNode(leaf=True)
            self.t    = t
    
        def search(self, k, x=None):
            """Search the B-Tree for the key k.
    
            args
            =====================
            k : Key to search for
            x : (optional) Node at which to begin search. Can be None, in which case the entire tree is searched.
    
            """
            if isinstance(x, BTreeNode):
                i = 0
                while i < len(x.keys) and k > x.keys[i]:    # look for index of k
                    i += 1
                if i < len(x.keys) and k == x.keys[i]:       # found exact match
                    return (x, i)
                elif x.leaf:                                # no match in keys, and is leaf ==> no match exists
                    return None
                else:                                       # search children
                    return self.search(k, x.c[i])
            else:                                           # no node provided, search root of tree
                return self.search(k, self.root)
    
        def insert(self, k):
            r = self.root
            if len(r.keys) == (2*self.t) - 1:     # keys are full, so we must split
                s         = BTreeNode()
                self.root = s
                s.c.insert(0, r)                  # former root is now 0th child of new root s
                self._split_child(s, 0)
                self._insert_nonfull(s, k)
            else:
                self._insert_nonfull(r, k)
    
        def _insert_nonfull(self, x, k):
            i = len(x.keys) - 1
            if x.leaf:
                # insert a key
                x.keys.append(0)
                while i >= 0 and k < x.keys[i]:
                    x.keys[i+1] = x.keys[i]
                    i -= 1
                x.keys[i+1] = k
            else:
                # insert a child
                while i >= 0 and k < x.keys[i]:
                    i -= 1
                i += 1
                if len(x.c[i].keys) == (2*self.t) - 1:
                    self._split_child(x, i)
                    if k > x.keys[i]:
                        i += 1
                self._insert_nonfull(x.c[i], k)
    
        def _split_child(self, x, i):
            t = self.t
            y = x.c[i]
            z = BTreeNode(leaf=y.leaf)
    
            # slide all children of x to the right and insert z at i+1.
            x.c.insert(i+1, z)
            x.keys.insert(i, y.keys[t-1])
    
            # keys of z are t to 2t - 1,
            # y is then 0 to t-2
            z.keys = y.keys[t:(2*t - 1)]
            y.keys = y.keys[0:(t-1)]
    
            # children of z are t to 2t els of y.c
            if not y.leaf:
                z.c = y.c[t:(2*t)]
                y.c = y.c[0:(t-1)]
    
        def __str__(self):
            r = self.root
            return r.__str__() + '
    '.join([child.__str__() for child in r.c]) 
`}</pre>
        </Container>
    );
}

export default ArvoreB;