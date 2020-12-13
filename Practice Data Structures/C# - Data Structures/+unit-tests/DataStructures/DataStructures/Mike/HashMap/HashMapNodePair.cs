using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructures.Mike.HashMap
{
    internal class HashMapNodePair<TKey, TValue>
    {
        public HashMapNodePair(TKey key, TValue value)
        {
            Key = key;
            Value = value;
        }

        public TKey Key { get; private set; }
        public TValue Value { get; set; }
    }
}
