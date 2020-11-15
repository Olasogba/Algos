using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike
{
    public class MikesDoublyLinkedListNode<T>
    {
        public T Value { get; set; }
        public MikesDoublyLinkedListNode<T> Next { get; set; }
        public MikesDoublyLinkedListNode<T> Prev { get; set; }
        public MikesDoublyLinkedListNode(T value)
        {
            Value = value;
        }
    }

    public class MikesDoublyLinkedList<T> : ICollection<T>
    {
        // methods: pop, push, shift, unshift, get, remove, reverse, insertAt, getAt
        #region DoublyLinkedList
        public MikesDoublyLinkedListNode<T> Head { get; set; }
        public MikesDoublyLinkedListNode<T> Tail { get; set; }

        public MikesDoublyLinkedListNode<T> Pop()
        {
            if (Count == 0) return null;
            MikesDoublyLinkedListNode<T> toRemove;
            if(Count==1)
            {
                Head = null;
                Tail = null;
                toRemove = null;
            } else
            {
                var toPop = Tail;
                var prev = toPop.Prev;
                prev.Next = null;
                Tail = prev;

                toRemove = toPop;
            }
            Count--;
            return toRemove;
        }

        public bool Push(T value)
        {
            var nodeToAdd = new MikesDoublyLinkedListNode<T>(value);
            if(Count==0)
            {
                Head = nodeToAdd;
                Tail = Head;
            } else
            {
                nodeToAdd.Prev = Tail;
                Tail.Next = nodeToAdd;
                Tail = nodeToAdd;
            }
            Count++;
            return true;
        }

        public MikesDoublyLinkedListNode<T> Shift()
        {
            // remove from the beginning
            if (Count == 0) return null;
            if(Count==1)
            {
                Head = null;
                Tail = null;
                Count--;
                return Head;
            } else
            {
                var head = Head;
                Head = head.Next;
                Head.Prev = null;
                Count--;
                return Head;
            }
        }

        public bool Unshift(T value)
        {
            var nodeToAdd = new MikesDoublyLinkedListNode<T>(value);
            if(Count==0)
            {
                Head = nodeToAdd;
                Tail = Head;
            } else
            {
                Head.Prev = nodeToAdd;
                nodeToAdd.Next = Head;
                Head = nodeToAdd;
            }
            Count++;
            return true;
        }

        public MikesDoublyLinkedListNode<T> Get(T value)
        {
            var current = Head;
            var found = false;

            while(current != null && !found)
            {
                if(current.Value.Equals(value))
                {
                    found = true;
                } else
                {
                    current = current.Next;
                }
            }

            return current;
        }

        public MikesDoublyLinkedListNode<T> GetAt(int index)
        {
            var current = Head;
            var counter = 0;

            while(current!= null)
            {
                if (counter == Count) break;
                else
                current = current.Next;
            }

            return current;
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
                current = current.Next;
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

        public bool Remove(T item)
        {
            var found = Get(item);
            if (found == null) return false;
            var next = found.Next;
            var prev = found.Prev;

            if(prev==null)
            {
                // we're removing the head
                Head = next;
                if (Head != null) Head.Prev = null;
            } else if(next==null)
            {
                // we're removing the tail
                Tail = prev;
                if (Tail != null) Tail.Next = null;
            } else
            {
                prev.Next = next;
                next.Prev = prev;
            }
            Count--;
            return true;

        }

        public bool InsertAt(T value, int index)
        {
            if (index < 0) throw new InvalidOperationException();
            if(index > Count) throw new InvalidOperationException();
            if (index == 0) return Unshift(value);
            if (index == Count) return Push(value);

            var toInsert = new MikesDoublyLinkedListNode<T>(value);

            var count = 0;
            var current = Head;
            while(current!= null && count <= Count)
            {
                if(count==Count)
                {
                    var prev = current.Prev;
                    prev.Next = toInsert;
                    toInsert.Prev = prev;
                    toInsert.Next = current;
                    current.Prev = toInsert;
                } else
                {
                    current = current.Next;
                }
                count++;
            }
            return true;
        }

        public bool Reverse()
        {
            if (Count <= 1) return true;
            MikesDoublyLinkedListNode<T> temp = null;

            var current = Head;

            while(current!=null)
            {
                // swap next and prev pointers for current node
                temp = current.Prev;
                current.Prev = current.Next;
                current.Next = temp;
                // move to the next node
                current = current.Prev;
            }

            Head = temp.Prev;
            return true;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
        #endregion
    }
}
