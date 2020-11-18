using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike.HashMap
{
    public class MikesHashMap<TKey, TValue>
    {
        public int Count { get; private set; }
        MikesHashMapArray<TKey, TValue> _array;
        const double _fillFactor = 0.75;
        int _maxItemsAtCurrentSize;

        public MikesHashMap() : this(1000)
        {
        }


        public MikesHashMap(int capacity)
        {
            if (capacity < 0) throw new ArgumentException("Size");
            _array = new MikesHashMapArray<TKey, TValue>(capacity);
            _maxItemsAtCurrentSize = (int)(capacity * _fillFactor) + 1;
        }

        public void Add(TKey key, TValue value)
        {
            if(Count >= _maxItemsAtCurrentSize)
            {
                // create new array double size,
                // copy the values,
                // make as default
                var newArray = new MikesHashMapArray<TKey, TValue>(_array.Capacity * 2);

                foreach (var item in _array.Items)
                {
                    newArray.Add(item.Key, item.Value);
                }

                _array = newArray;

                // update the new max items cached value
                _maxItemsAtCurrentSize = (int)(_array.Capacity * _fillFactor) + 1;
            }

            _array.Add(key, value);
            Count++;
        }

        public bool Remove(TKey key)
        {
            var removed = _array.Remove(key);
            if(removed)
            {
                Count--;
            }
            return removed;
        }

        public TValue this[TKey key]
        {
            get
            {
                var exists = _array.TryGetValue(key, out TValue value);
                if (exists) return value;
                throw new ArgumentException("Key doesn't exist!");
            }
            set
            {
                _array.Update(key, value);
            }
        }

        public bool TryGetValue(TKey key)
        {
            return _array.TryGetValue(key, out TValue value);
        }

        public bool ContainsKey(TKey key)
        {
            foreach (var item in _array.Keys)
            {
                if (item.Equals(key)) return true;
            }
            return false;
        }

        public bool ContainsValue(TKey value)
        {
            foreach (var item in _array.Values)
            {
                if (item.Equals(value)) return true;
            }
            return false;
        }

        public IEnumerable<TKey> Keys
        {
            get
            {
                foreach (var item in _array.Keys)
                {
                    yield return item;
                }
            }
        }

        public IEnumerable<TValue> Values
        {
            get
            {
                foreach (var item in _array.Values)
                {
                    yield return item;
                }
            }
        }

        public void Clear()
        {
            _array.Clear();
            Count = 0;
        }
    }
}
