using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike.HashMap
{
    internal class MikesHashMapArray<TKey, TValue>
    {
        // methods: add, remove, update, keys, items, values
        private MikesHashArrayNode<TKey, TValue>[] _array;

        public MikesHashMapArray(int capacity)
        {
            _array = new MikesHashArrayNode<TKey, TValue>[capacity];
            for (int i = 0; i < _array.Length; i++)
            {
                _array[i] = new MikesHashArrayNode<TKey, TValue>();
            }
        }

        public void Add(TKey key, TValue value)
        {
            _array[GetIndex(key)].Update(key, value);
        }

        public bool Remove(TKey key)
        {
            return _array[GetIndex(key)].Remove(key);
        }

        public void Update(TKey key, TValue value)
        {
            _array[GetIndex(key)].Update(key, value);
        }

        public bool TryGetValue(TKey key, out TValue value)
        {
            return _array[GetIndex(key)].TryGetValue(key, out value);
        }

        public IEnumerable<TKey> Keys
        {
            get
            {
                foreach(var item in _array)
                {
                    foreach (var x in item.Keys)
                    {
                        yield return x;
                    }
                }
            }
        }

        public IEnumerable<TValue> Values
        {
            get
            {
                foreach (var item in _array)
                {
                    foreach (var x in item.Values)
                    {
                        yield return x;
                    }
                }
            }
        }

        public void Clear()
        {
            foreach (var item in _array)
            {
                item.Clear();
            }
        }

        public IEnumerable<MikesHashNodePair<TKey, TValue>> Items
        {
            get
            {
                foreach (var item in _array)
                {
                    foreach (var x in item.Items)
                    {
                        yield return x;
                    }
                }
            }
        }

        private int GetIndex(TKey key)
        {
            return Math.Abs(key.GetHashCode() % Capacity);
        }

        public int Capacity
        {
            get
            {
                return _array.Length;
            }
        }
    }
}
