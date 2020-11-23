using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike.HashMap
{
    public class HashMap<TKey, TValue>
    {
        private double _fillFactor = .75;
        private HashMapArray<TKey, TValue> _array;
        private int maxItemsReached = 0;
        private int _maxItemsAtCurrentSize;


        public HashMap() : this(1000)
        {

        }

        public HashMap(int capacity)
        {
            if (capacity < 0) throw new ArgumentException("Capacity cannot be less than zero");
            _array = new HashMapArray<TKey, TValue>(capacity);


            _maxItemsAtCurrentSize = (int)(capacity * _fillFactor) + 1;
        }

        // methods: add, get, literal, items, values, keys, contains

        public void Add(TKey key, TValue value)
        {
            if(Capacity >= maxItemsReached)
            {
                var newList = new HashMapArray<TKey, TValue>(Capacity*2);

                // copy
                foreach (var item in _array.Items)
                {
                    newList.Set(item.Key, item.Value);
                }

                _array = newList;

                _maxItemsAtCurrentSize = (int)(Capacity * _fillFactor) + 1;
            }

            _array.Set(key, value);
        }

        public TValue Get(TKey key)
        {
            return _array.Get(key);
        }

        public void Remove(TKey key)
        {
            var removed = _array.Remove(key);
        }

        public int Count
        {
            get
            {
                return _array.Count;
            }
        }

        public TValue this[TKey key]
        {
            get
            {
                if(_array.TryGetvalue(key, out TValue value) ){
                    return value;
                }
                throw new ArgumentException("Property does not exist");
            }
            set
            {
                _array.Set(key, value);
            }
        }

        public IEnumerable<TKey> Key
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
            
        }

        public int Capacity { get { return _array.Capacity; } }
    }
}
