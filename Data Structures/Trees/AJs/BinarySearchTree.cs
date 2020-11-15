using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataStructures.Mike
{
    public class MikesBinaryTreeNode<T> : IComparable<T> where T : IComparable<T>
    {
        public T Value { get; set; }
        public MikesBinaryTreeNode<T> Left { get; set; }
        public MikesBinaryTreeNode<T> Right { get; set; }
        public MikesBinaryTreeNode(T value)
        {
            Value = value;
        }
        public int CompareTo(T other)
        {
            return Value.CompareTo(other);
        }
    }

    public class MikesBinarySearchTree<T> : IEnumerable<T> where T : IComparable<T>
    {
        private MikesBinaryTreeNode<T> Root { get; set; }
        /**
         Methods:
         * - insertRecursive
         * - insertIterative
         * - Find
         * - FindWithParent
         * - Remove
         * - contains
         * - bfs ?
         * - dfsPreOrder
         * - dfsPostOrder
         * - dfsInOrder
        */
        public void InsertRecursive(T value)
        {
            if(Root==null)
            {
                Root = new MikesBinaryTreeNode<T>(value);
                return;
            }
            InsertRecursive(Root, value);
        }

        private void InsertRecursive(MikesBinaryTreeNode<T> node, T value)
        {
            var newNode = new MikesBinaryTreeNode<T>(value);
            if(node.CompareTo(value) > 0) // node is bigger
            {
                if (node.Left == null) node.Left = newNode;
                else InsertRecursive(node.Left, value);
            } else
            {
                if (node.Right == null) node.Right = newNode;
                else InsertRecursive(node.Right, value);
            }
        }

        public void InsertIterative(T value)
        {
            if (Root == null)
            {
                Root = new MikesBinaryTreeNode<T>(value);
                return;
            }
            InsertIterative(Root, value);
        }

        public MikesBinaryTreeNode<T> Find(T value)
        {
            MikesBinaryTreeNode<T> parent;
            var found = FindWithParent(value, out parent);
            Console.WriteLine(parent);
            return found;
        }

        public bool Contains(T value)
        {
            MikesBinaryTreeNode<T> parent;
            return FindWithParent(value, out parent) != null;
        }

        private MikesBinaryTreeNode<T> FindWithParent(T value, out MikesBinaryTreeNode<T> parent)
        {
            parent = null;
            if (Root == null) return null;
            var current = Root;
            var found = false;
            while(current!=null && !found)
            {
                if(current.CompareTo(value)==0)
                {
                    found = true;
                } else if(current.CompareTo(value) > 0)
                {
                    parent = current;
                    current = current.Left;
                } else
                {
                    parent = current;
                    current = current.Right;
                }
            }
            return current;
        }

        private void InsertIterative(MikesBinaryTreeNode<T> node, T value)
        {
            var current = node;
            var newNode = new MikesBinaryTreeNode<T>(value);
            while(true)
            {
                if(current.CompareTo(value) > 0)
                {
                    if(current.Left==null)
                    {
                        current.Left = newNode;
                        break;
                    } else
                    {
                        current = current.Left;
                    }
                } else if (current.CompareTo(value) < 0)
                {
                    if(current.Right==null)
                    {
                        current.Right = newNode;
                        break;
                    } else
                    {
                        current = current.Right;
                    }
                } else
                {
                    break;
                }
            }
        }

        public void BreadthFirstSeach()
        {
            var store = new ArrayList();
            var queue = new Queue<MikesBinaryTreeNode<T>>();
            queue.Enqueue(Root);

            while(queue.Count > 0)
            {
                var current = queue.Dequeue();
                store.Add(current);
                if (current.Left != null)
                {
                    queue.Enqueue(current.Left);
                }
                if(current.Right!=null)
                {
                    queue.Enqueue(current.Right);
                }
            }

            Console.WriteLine(store);
        }

        public void DFSInOrder(Action<MikesBinaryTreeNode<T>> action)
        {
            //DFSInOrder(_ => Console.WriteLine(_.Value));
            if (Root == null)
            {
                // do nothing
            } else
            {
                DFSInOrder(action, Root);
            }
        }

        private void DFSInOrder(Action<MikesBinaryTreeNode<T>> action, MikesBinaryTreeNode<T> node)
        {
            if (node.Left != null) DFSInOrder(action, node.Left);
            action(node);
            if (node.Right != null) DFSInOrder(action, node.Right);
        }

        public void DFSPreOrder(Action<MikesBinaryTreeNode<T>> action)
        {
            if(Root == null)
            {
                // do nothing
            } else
            {
                DFSPreOrder(action, Root);
            }
        }

        private void DFSPreOrder(Action<MikesBinaryTreeNode<T>> action, MikesBinaryTreeNode<T> node)
        {
            action(node);
            if (node.Left != null) DFSPreOrder(action, node.Left);
            if (node.Right != null) DFSPreOrder(action, node.Right);
        }

        public List<T> DFSPostOrder()
        {
            if(Root == null)
            {
                // do nothing
                return null;
            } else
            {
                var store = new List<MikesBinaryTreeNode<T>>();
                return DFSPostOrder(store, Root);
            }
        }       

        private List<T> DFSPostOrder(List<MikesBinaryTreeNode<T>> store, MikesBinaryTreeNode<T> nodeToTraverse)
        {
            if (nodeToTraverse.Left != null) DFSPostOrder(store, nodeToTraverse.Left);
            if (nodeToTraverse.Right != null) DFSPostOrder(store, nodeToTraverse.Right);
            store.Add(nodeToTraverse);
            return store.Select(c => c.Value).ToList();
        }

        public IEnumerator<T> InOrderTraversal()
        {
            //var store = DFSPostOrder();
            //foreach(var x in store) yield return x;
            if(Root != null)
            {
                // go left and add to stack except last node
                // yield current
                // then go right once if right exsits
                // else pop parent and go right
                var stack = new Stack<MikesBinaryTreeNode<T>>();
                var current = Root;
                stack.Push(Root);
                var goLeftNext = true;
                
                while(stack.Count > 0)
                {
                    if(goLeftNext)
                    {
                        while(current.Left != null)
                        {
                            stack.Push(current);
                            current = current.Left;
                        }
                    }

                    yield return current.Value;

                    if(current.Right != null)
                    {
                        current = current.Right;
                        goLeftNext = false;
                    } else
                    {
                        current = stack.Pop();
                        goLeftNext = false;
                    }
                }
            }
        }

        public bool Remove(T value)
        {
            // three case:
            // leaf node and left child only
            // node with right child without left
            // node with right child that has left

            MikesBinaryTreeNode<T> nodeToRemove, parent;
            nodeToRemove = FindWithParent(value, out parent);
            if (nodeToRemove == null) return false;

            if(nodeToRemove.Right == null)
            {
                if (parent == null) Root = nodeToRemove.Left;
                else
                {
                    int result = parent.CompareTo(nodeToRemove.Value);
                    if(result > 0)
                    {
                        parent.Left = nodeToRemove.Left;
                    } else if(result<0)
                    {
                        parent.Right = nodeToRemove.Left;
                    }
                }
            } else if(nodeToRemove.Right.Left==null)
            {
                if (parent == null) Root = nodeToRemove.Right;
                else
                {
                    int result = parent.CompareTo(nodeToRemove.Value);
                    if (result > 0) parent.Left = nodeToRemove.Right;
                    else if (result < 0) parent.Right = nodeToRemove.Right;
                }
            } else
            {
                var leftMost = nodeToRemove.Right.Left;
                var leftMostParent = nodeToRemove.Right;

                while(leftMost.Left != null)
                {
                    leftMostParent = leftMost;
                    leftMost = leftMost.Left;
                }
                // replacing successor with its child
                leftMostParent.Left = leftMost.Right;

                leftMost.Right = nodeToRemove.Right;
                leftMost.Left = nodeToRemove.Left;

                if (parent == null) Root = leftMost;
                else
                {
                    int result = parent.CompareTo(nodeToRemove.Value);
                    if(result>0)
                    {
                        parent.Left = leftMost;
                    } else if(result<0)
                    {
                        parent.Right = leftMost;
                    }
                }
            }

            return true;
        }
        public IEnumerator<T> GetEnumerator()
        {
            return InOrderTraversal(); 
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
