using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike.HashMap
{
    internal class HashMapArrayNode<TKey, TValue>
    {
        private MikesSinglyLinkedList<HashMapNodePair<TKey, TValue>> _items;

        // methods: set, get, remove, trygetvalue, items, keys, values

        public void Set(TKey key, TValue value)
        {
            var exists = false;
            if (_items == null) _items = new MikesSinglyLinkedList<HashMapNodePair<TKey, TValue>>();
            else
            {
                // check if key already exists
                foreach (var item in _items)
                {
                    if (item.Key.Equals(key))
                    {
                        exists = true;
                        Update(key, value);
                    }
                }
            }
            if(!exists) _items.Unshift(new HashMapNodePair<TKey, TValue>(key, value));
        }

        public TValue Get(TKey key)
        {
            if(_items!=null)
            {
                foreach (var item in _items)
                {
                    if (item.Key.Equals(key)) return item.Value;
                }
            }

            return default;
        }

        public void Update(TKey key, TValue value)
        {
            foreach (var item in _items)
            {
                if (item.Key.Equals(key)) item.Value = value;
                break;
            }
        }

        public bool TryGetValue(TKey key, out TValue value)
        {
            value = default;
            var found = false;
            if (_items == null) return false;
            foreach (var item in _items)
            {
                if(item.Key.Equals(key))
                {
                    value = item.Value;
                    found = true;
                }
            }

            return found;
        }


        public bool Remove(TKey key)
        {
            var removed = false;
            HashMapNodePair<TKey, TValue> found = null;
            if (_items == null) return false;


            foreach (var item in _items)
            {
                if(item.Key.Equals(key))
                {
                    found = item;
                    removed = true;
                }
            }
            if (found != null) _items.Remove(found);
            return removed;
        }

        public IEnumerable<TKey> Keys
        {
            get
            {
                if(_items!=null)
                {
                    foreach (var item in _items)
                    {
                        yield return item.Key;
                    }
                }
            }
        }

        public IEnumerable<TValue> Values
        {
            get
            {
                if(_items!=null)
                {
                    foreach (var item in _items)
                    {
                        yield return item.Value;
                    }
                }
            }
        }


        public IEnumerable<HashMapNodePair<TKey, TValue>> Items
        {
            get
            {
                if(_items!=null)
                {
                    foreach (var item in _items) yield return item;
                }
            }
        }

        public void Clear()
        {
            _items = null;
        }
    }
}
