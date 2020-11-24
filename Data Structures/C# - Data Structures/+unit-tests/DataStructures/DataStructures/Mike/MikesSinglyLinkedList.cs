using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike
{
    public class MikesSinglyLinkedListNode<T>
    {
        public T Value { get; set; }
        public MikesSinglyLinkedListNode<T> Next { get; set; }
        public MikesSinglyLinkedListNode(T value)
        {
            Value = value;
        }
    }
    public class MikesSinglyLinkedList<T> : ICollection<T>
    {
        // methods: insertAt, removeAt, Remove, Get, GetAt, push, pop, shift, unshift, reverse
        #region SinglyLinkedList
        public MikesSinglyLinkedListNode<T> Head { get; set; }
        public MikesSinglyLinkedListNode<T> Tail { get; set; }

        public MikesSinglyLinkedListNode<T> GetAt(int index)
        {
            if (Head == null) return null;
            if (index == 0) return Head;
            if (index >= Count || index<0) throw new InvalidOperationException("Index is out of bounds");
            var current = Head;
            var count = 0;
            while(current!=null)
            {
                if (count == index) return current;
                if (current.Value!=null)
                {
                    current = current.Next;
                }
                count++;
            }
            throw new InvalidOperationException();
        }
        public void InsertAt(int index, T value)
        {
            if (index >= Count || index < 0) throw new InvalidOperationException("Index is out of bounds");
            // get the previous value, rearrange
            var newNode = new MikesSinglyLinkedListNode<T>(value);
            if (Head == null)
            {
                Head = newNode;
                Tail = newNode;
                Count++;
                return;
            }
            if (index == 0)
            {
                newNode.Next = Head;
                Head = newNode;
                Count++;
                return;
            }
            var prev = GetAt(index - 1);

            var currentNext = prev.Next;
            prev.Next = newNode;
            newNode.Next = currentNext;
            Count++;
        }

        public MikesSinglyLinkedListNode<T> RemoveAt(int index)
        {
            if (index >= Count || index < 0) throw new InvalidOperationException("Index is out of bounds");
            if (Head == null) return null;
            if (index==0)
            {
                var old = Head;
                Head = Head.Next;
                Count--;
                return old;
            }
            var prev = GetAt(index - 1);
            var current = prev.Next;
            prev.Next = current.Next;
            if (index == Count - 1)
            {
                Tail = prev;
            }
            Count--;
            return current;
        }

        public bool Remove(T value)
        {
            if (Head == null) return false;
            if (Head.Value.Equals(value)) return RemoveAt(0) != null;
            else
            {
                var current = Head;
                MikesSinglyLinkedListNode<T> prev = Head;
                while(current!=null)
                {
                    if(prev.Next.Value.Equals(value))
                    {
                        break;
                    } else
                    {
                        prev = current;
                        current = current.Next;
                    }
                }

                prev.Next = current.Next;
                if (prev.Next == null) Tail = prev;
                Count--;
                return true;
            }
        }

        public MikesSinglyLinkedListNode<T> Get(T value)
        {
            var current = Head;
            while(current!=null)
            {
                if(current.Value.Equals(value))
                {
                    return current;
                } else
                {
                    current = current.Next;
                }
            }
            return null;
        }

        public void Push(T value)
        {
            var node = new MikesSinglyLinkedListNode<T>(value);
            if(Head==null)
            {
                Head = node;
                Tail = node;
                Count++;
                return;
            }
            Tail.Next = node;
            Tail = node;
            Count++;
        }

        public MikesSinglyLinkedListNode<T> Pop()
        {
            if (Head == null) return null;
            if(Count==1)
            {
                var old = Head;
                Head = null;
                Tail = null;
                Count--;
                return old;
            } else
            {
                var current = Head;
                MikesSinglyLinkedListNode<T> newTail = null;
                while(current.Next!=null)
                {
                    newTail = current;
                    current = current.Next;
                }
                Tail = newTail;
                Count--;
                return current;
            }
        }

        public MikesSinglyLinkedListNode<T> Shift()
        {
            if (Head == null) return null;
            var old = Head;
            Head = Head.Next;
            if(Count==1)
            {
                Tail = null;
            }
            Count--;
            return old;
        }

        public void Unshift(T value)
        {
            var node = new MikesSinglyLinkedListNode<T>(value);
            node.Next = Head;
            Head = node;
        }

        public void Reverse()
        {
            // swap head and tail
            var current = Head;
            Head = Tail;
            Tail = current;

            MikesSinglyLinkedListNode<T> next, prev = null;

            while(current!=null)
            {
                next = current.Next;
                current.Next = prev;
                prev = current;
                current = next;
            }
        }
        #endregion
        #region ICollection
        public int Count { get; private set; }

        public bool IsReadOnly => false;

        public void Add(T item)
        {
            Unshift(item);
        }

        public void Clear()
        {
            Head = null;
            Tail = Head;
            Count = 0;
        }

        public bool Contains(T item)
        {
            return Get(item) != null;
        }

        public void CopyTo(T[] array, int arrayIndex)
        {
            var current = Head;
            while(current!=null)
            {
                array[arrayIndex++] = current.Value;
            }
        }

        public IEnumerator<T> GetEnumerator()
        {
            var current = Head;
            while(current!=null)
            {
                yield return current.Value;
                current = current.Next;
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
        #endregion
    }
}
