using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike
{
    public class MikesStack<T> : IEnumerable<T>
    {
        private readonly MikesDoublyLinkedList<T> store = new MikesDoublyLinkedList<T>();
        public int Count { get { return store.Count; } }

        public T Pop()
        {
            var value = store.Shift().Value;
            if (value == null) throw new InvalidOperationException();
            return value;
        }

        public void Push(T value)
        {
            store.Unshift(value);
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
