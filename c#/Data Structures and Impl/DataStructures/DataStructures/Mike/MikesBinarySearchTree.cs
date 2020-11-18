using DataStructures.Mike;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

internal class MikesBinarySearchTreeNode<T> : IComparable<T> where T : IComparable<T>
{
    public T Value { get; set; }
    public MikesBinarySearchTreeNode<T> Left { get; set; }
    public MikesBinarySearchTreeNode<T> Right { get; set; }
    public int CompareTo(T other)
    {
        return Value.CompareTo(other);
    }
    public MikesBinarySearchTreeNode(T value)
    {
        Value = value;
    }
}

/*
Methods:
Remove
InsertRecursive
InsertIterative
FindWithParent
Contains
BFS
DFSPreOrder
DFSInOrder
DFSPostOrder
Clear
Enumerate
GetEnumerator
 */

public class MikesBinarySearchTree<T> : IEnumerable<T> where T : IComparable<T>
{
    public int Count { get; private set; }
    private MikesBinarySearchTreeNode<T> Root { get; set; }

    public void InsertIterative(T value)
    {
        var node = new MikesBinarySearchTreeNode<T>(value);
        if(Root==null)
        {
            Root = node;
            Count++;
            return;
        }
        var current = Root;
        var alreadyExists = false;

        while(true)
        {
            int result = current.CompareTo(value);
            if(result > 0)
            {
                if(current.Left != null)
                {
                    current = current.Left;
                } else
                {
                    current.Left = node;
                    Count++;
                    break;
                }
            } else if(result < 0)
            {
                if(current.Right!=null)
                {
                    current = current.Right;
                } else
                {
                    current.Right = node;
                    Count++;
                    break;
                }
            } else
            {
                // already exists
                alreadyExists = true;
                break;
            }
        }
    }

    public void InsertRecursive(T value)
    {
        if(Root==null)
        {
            var node = new MikesBinarySearchTreeNode<T>(value);
            Root = node;
            Count++;
            return;
        }
        InsertRecursive(Root, value);
    }

    private void InsertRecursive(MikesBinarySearchTreeNode<T> parent, T value)
    {
        if(parent!=null)
        {
            int result = parent.CompareTo(value);
            if (result > 0)
            {
                if (parent.Left == null)
                {
                    parent.Left = new MikesBinarySearchTreeNode<T>(value);
                    Count++;
                }
                else InsertRecursive(parent.Left, value);
            } else if(result < 0)
            {
                if (parent.Right == null)
                {
                    parent.Right = new MikesBinarySearchTreeNode<T>(value);
                    Count++;
                }
                else InsertRecursive(parent.Right, value);
            }
        }
    }

    public T Find(T value)
    {
        if (Root == null) return default(T);
        else
        {
            MikesBinarySearchTreeNode<T> parent, node;
            node = FindWithParent(value, out parent);
            return node.Value;
        }
    }

    private MikesBinarySearchTreeNode<T> FindWithParent(T value, out MikesBinarySearchTreeNode<T> parent)
    {
        var current = Root;
        var found = false;
        parent = null;

        while(current != null && !found)
        {
            int result = current.CompareTo(value);
            if(result > 0)
            {
                parent = current;
                current = current.Left;
            } else if(result < 0)
            {
                parent = current;
                current = current.Right;
            } else
            {
                found = true;
            }
        }
        if (found) return current; else return null;
    }

    public bool Contains(T value)
    {
        return Find(value) != null;
    }

    public void BFS(Action<T> action)
    {
        if(Root!=null)
        {
            var queue = new MikesQueue<MikesBinarySearchTreeNode<T>>();
            var current = Root;
            queue.Enqueue(current);
            while(queue.Count > 0)
            {
                current = queue.Dequeue();
                action(current.Value);
                if(current.Left !=null)
                {
                    queue.Enqueue(current.Left);
                }
                if (current.Right != null) queue.Enqueue(current.Right);
            }
        }
    }

    public List<T> DFSPreOrder(Action<T> action)
    {
        var store = new List<MikesBinarySearchTreeNode<T>>();
        DFSPreOrder(ref store, Root, action);
        return store.Select(c => c.Value).ToList();
    }

    private void DFSPreOrder(ref List<MikesBinarySearchTreeNode<T>> store, MikesBinarySearchTreeNode<T> node, Action<T> action)
    {
        if(node != null)
        {
            store.Add(node);
            action(node.Value);
            DFSPreOrder(ref store, node.Left, action);
            DFSPreOrder(ref store, node.Right, action);
        }
    }

    public void DFSInOrder(Action<T> action)
    {
        DFSInOrder(action);
    }

    private void DFSInOrder(MikesBinarySearchTreeNode<T> node, Action<T> action)
    {
        if(node!=null)
        {
            DFSInOrder(node.Left, action);
            action(node.Value);
            DFSInOrder(node.Right, action);
        }
    }

    public void DFSPostOrder(Action<T> action)
    {
        if (Root != null) DFSPostOrder(action, Root);
    }

    private void DFSPostOrder(Action<T> action, MikesBinarySearchTreeNode<T> node)
    {
        if(node != null)
        {
            DFSPostOrder(action, node.Left);
            DFSPostOrder(action, node.Right);
            action(node.Value);
        }
    }

    private IEnumerator<T> DFSPreOrder()
    {
        var stack = new MikesStack<MikesBinarySearchTreeNode<T>>(); // lifo;
        var goLeftNext = true;

        var current = Root;

        if (current == null) yield break;
        stack.Push(current);
        while(stack.Count > 0)
        {
            if(goLeftNext)
            {
                while (current.Left != null)
                {
                    stack.Push(current);
                    current = current.Left;
                }
            }

            yield return current.Value;

            if(current.Right != null)
            {
                current = current.Right;
                goLeftNext = true;
            } else
            {
                current = stack.Pop();
                goLeftNext = false;
            }
        }
    }

    public bool Remove(T value)
    {
        MikesBinarySearchTreeNode<T> parent;
        var current = FindWithParent(value, out parent);

        if (current == null) return false;
        if(current.Right==null)
        {
            if(parent==null)
            {
                // means it is the root we found
                Root = current.Left;
            } else
            {
                int result = parent.CompareTo(value);
                if (result > 0)
                {
                    parent.Left = current.Left;
                }
                else if(result < 0)
                {
                    parent.Right = current.Left;
                }
            }
        } else if(current.Right.Left == null)
        {
            // replacing current with current's right
            current.Right.Left = current.Left;
            if (parent==null)
            {
                // means we found the root
                Root = current.Right;
            } else
            {
                int result = parent.CompareTo(value);
                if (result > 0)
                {
                    parent.Left = current.Right;
                }
                else if (result < 0)
                {
                    parent.Right = current.Right;
                }
            }
        } else
        {
            MikesBinarySearchTreeNode<T> leftMost = current.Right.Left;
            var leftMostParent = current.Right;
            while(leftMost.Left!=null)
            {
                leftMostParent = leftMost;
                leftMost = leftMost.Left;
            }

            // replace successor with its right
            leftMostParent.Left = leftMost.Right;

            // replace current with the successor
            leftMost.Left = current.Left;
            leftMost.Right = current.Right;

            if(parent==null)
            {
                Root = leftMost;
            } else
            {
                int result = parent.CompareTo(value);
                if(result>0)
                {
                    parent.Left = leftMost;
                } else if(result<0)
                {
                    parent.Right = leftMost;
                }
            }
        }
        Count--;
        return true;
    }

    public IEnumerator<T> GetEnumerator()
    {
        return DFSPreOrder();
    }

    IEnumerator IEnumerable.GetEnumerator()
    {
        return GetEnumerator();
    }
}