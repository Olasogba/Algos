using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike
{
    public class MikesQueue<T> : IEnumerable<T>
    {
        private readonly MikesDoublyLinkedList<T> store = new MikesDoublyLinkedList<T>();
        public int Count { get { return store.Count; } }
        public void Enqueue(T value)
        {
            store.Push(value);
        }

        public T Dequeue()
        {
            var node = store.Shift();
            if (node == null) throw new InvalidOperationException();
            return node.Value;
        }
        public IEnumerator<T> GetEnumerator()
        {
            return store.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }
}
