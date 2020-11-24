using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike.HashMap
{
    internal class HashMapArray<TKey, TValue>
    {
        private HashMapArrayNode<TKey, TValue>[] _array;
        private int _count;
        public HashMapArray(int capacity)
        {
            _array = new HashMapArrayNode<TKey, TValue>[capacity];

            // initialize array items
            for (int i = 0; i < _array.Length; i++)
            {
                _array[i] = new HashMapArrayNode<TKey, TValue>();
            }
        }

        public int Count
        {
            get
            {
                return _count;
            }
        }
        public int Capacity
        {
            get
            {
                return _array.Length;
            }
        }

        // methods: set, get, remove, trygetvalue, contains, items, values, keys
        public void Set(TKey key, TValue value)
        {
            if (!TryGetvalue(key, out value))
            {
                _array[GetIndex(key)].Set(key, value); _count++;
            }
            else _array[GetIndex(key)].Update(key, value);
        }

        public TValue Get(TKey key)
        {
            return _array[GetIndex(key)].Get(key);
        }

        public bool TryGetvalue(TKey key, out TValue value)
        {
            return _array[GetIndex(key)].TryGetValue(key, out value);
        }

        public bool Contains(TKey key)
        {
            return TryGetvalue(key, out TValue value);
        }

        public bool Remove(TKey key)
        {
            if(TryGetvalue(key, out TValue value))
            {
                _count--;
                return _array[GetIndex(key)].Remove(key);
            }
            return false;
        }

        public IEnumerable<TKey> Keys
        {
            get
            {
                foreach (var item in _array)
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

        public IEnumerable<HashMapNodePair<TKey, TValue>> Items
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

        public void Clear()
        {
            foreach (var item in _array)
            {
                item.Clear();
            }
            _count = 0;
        }

        public int GetIndex(TKey key)
        {
            return Math.Abs(key.GetHashCode() % _array.Length);
        }
    }
}
