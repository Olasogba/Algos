using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike.HashMap
{
    internal class MikesHashArrayNode<TKey, TValue>
    {
        // methods: add, remove, update, trygetvalue, clear, keys, value, items
        private MikesSinglyLinkedList<MikesHashNodePair<TKey, TValue>> _items;

        public void Add(TKey key, TValue value)
        {
            if(_items==null)
            {
                _items = new MikesSinglyLinkedList<MikesHashNodePair<TKey, TValue>>();
            } else
            {
                // check if key already exists
                foreach(var item in _items)
                {
                    if(item.Key.Equals(key))
                    {
                        throw new ArgumentException("The provided key already exists");
                    }
                }
            }

            // add value
            _items.Unshift(new MikesHashNodePair<TKey, TValue>(key, value));
        }

        public bool Remove(TKey key)
        {
            // look for the item
            // break out of the loop
            // pop the item
            // return flag
            var removed = false;
            if(_items!=null)
            {
                MikesHashNodePair<TKey, TValue> found = null;
                foreach(var item in _items)
                {
                    if(item.Key.Equals(key))
                    {
                        found = item;
                        break;
                    }
                }

                if(found!=null)
                {
                    _items.Remove(found);
                    removed = true;
                }
            }

            return removed;
        }

        public void Update(TKey key, TValue value)
        {
            var updated = false;
            if(_items!=null)
            {
                foreach (var item in _items)
                {
                    if(item.Key.Equals(key))
                    {
                        item.Value = value;
                        updated = true;
                        break;
                    }
                }
            }

            if (!updated) throw new ArgumentException("The provided key does not exist in the collection!");
        }

        public void Clear()
        {
            if (_items != null) _items.Clear();
        }

        public IEnumerable<TKey> Keys
        {
            get
            {
                if (_items != null)
                    foreach (var item in _items)
                    {
                        yield return item.Key;
                    }
            }
        }

        public IEnumerable<TValue> Values
        {
            get
            {
                if(_items!= null)
                    foreach (var item in _items)
                    {
                        yield return item.Value;
                    }
            }
        }

        public IEnumerable<MikesHashNodePair<TKey, TValue>> Items
        {
            get
            {
                if (_items != null)
                    foreach (var item in _items)
                    {
                        yield return item;
                    }
            }
        }

        public bool TryGetValue(TKey key, out TValue value)
        {
            value = default;
            if(_items!=null)
            {
                foreach(var item in _items)
                {
                    if (item.Key.Equals(key))
                    {
                        value = item.Value;
                        return true;
                    }
                }
            }
            return false;
        }
    }
}
