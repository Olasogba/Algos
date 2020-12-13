using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataStructuresTests.Mike
{
    [TestClass]
    public class MikesBinarySearchTreeTests
    {
        /*
        Methods:
        InsertTests()
        Remove_Leaf
        Remove_OneChild_Right
        Remove_OneChild_Left
        Remove_TwoChild
        Remove_Root_TwoChild
        Remove_Root_OneChild_Left
        Remove_Root_OneChild_Right
        Remove_Root_Only
        PreOrder_Copy_Tree
         */

        [TestMethod]
        public void InsertTests()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //    4    6
            //   3
            // 1
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);
            tree.InsertIterative(6);

            int[] expected = new[] {1,3,4,6,5 };
            int[] expectedBFS = new[] { 5, 4, 6, 3, 1 };
            var actualBFS = new List<int>();
            tree.BFS(c => actualBFS.Add(c));

            AssertArraysSame(expectedBFS, actualBFS.ToArray());
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void RemoveLeaf()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //    4    6
            //   3
            // 1
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);
            tree.InsertIterative(6);

            tree.Remove(1);

            int[] expected = new[] { 3, 4, 6, 5 };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void Remove_OneChild_Right() {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //    4    9
            //   3   7
            // 1        8
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);
            tree.InsertIterative(9);
            tree.InsertIterative(7);
            tree.InsertIterative(8);

            tree.Remove(7);
            //       5
            //    4    9
            //   3   8
            // 1        

            int[] expected = new[] { 1, 3, 4, 8, 9, 5 };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void Remove_OneChild_Left()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //    4    9
            //   3   7
            // 1        8
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);
            tree.InsertIterative(9);
            tree.InsertIterative(7);
            tree.InsertIterative(8);

            tree.Remove(3);
            //       5
            //    4    9
            //   1   7
            //         8    

            int[] expected = new[] { 1, 4, 8,7,9,5 };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void Remove_TwoChild()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //    4    9
            //   3   7
            // 1        8
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);
            tree.InsertIterative(9);
            tree.InsertIterative(7);
            tree.InsertIterative(8);

            tree.Remove(4);
            //            5
            //       7        9 
            //    3     8      
            //  1 
            int[] expected = new[] { 1,3,8,7, 9, 5 };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void Remove_Root_TwoChild()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //    4    9
            //   3   7
            // 1        8
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);
            tree.InsertIterative(9);
            tree.InsertIterative(7);
            tree.InsertIterative(8);

            tree.Remove(5);
            //        7
            //    4      9
            //   3     8
            // 1       
            int[] expected = new[] { 1, 3, 4, 8, 9, 7 };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void Remove_Root_OneChild_Left()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //    4    
            //   3   
            // 1        
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);

            tree.Remove(5);
            //    4      
            //   3     
            // 1       
            int[] expected = new[] { 1, 3, 4 };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void Remove_Root_OneChild_Right()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5
            //           4    
            //              3   
            //                  1        
            tree.InsertIterative(5);
            tree.InsertRecursive(4);
            tree.InsertIterative(3);
            tree.InsertRecursive(1);

            tree.Remove(5);
            //    4      
            //      3     
            //          1       
            int[] expected = new[] { 1, 3, 4 };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void Remove_Root_Only()
        {
            MikesBinarySearchTree<int> tree = new MikesBinarySearchTree<int>();
            //       5    
            tree.InsertIterative(5);

            tree.Remove(5);    
            int[] expected = new int[] { };
            AssertTreePostOrder(tree, expected);
        }

        [TestMethod]
        public void PreOrder_Copy_Tree()
        {
            //          10
            //      5        20
            //    4   6    15
            //           12
            //             13
            //               14
            MikesBinarySearchTree<int> expected = new MikesBinarySearchTree<int>();
            expected.InsertIterative(10);
            expected.InsertRecursive(5);
            expected.InsertIterative(4);
            expected.InsertRecursive(6);

            expected.InsertIterative(20);
            expected.InsertRecursive(15);
            expected.InsertIterative(12);
            expected.InsertRecursive(13);
            expected.InsertIterative(14);

            var actual = new MikesBinarySearchTree<int>();
            expected.DFSPreOrder(c => actual.InsertRecursive(c));

            AssertTreesSame(expected, actual);

        }

        private void AssertTreePostOrder(MikesBinarySearchTree<int> tree, int[] expected)
        {
            List<int> arr = new List<int>();
            tree.DFSPostOrder(val => arr.Add(val));
            Assert.AreEqual(tree.Count, expected.Length);
            AssertArraysSame(expected, arr.ToArray());
        }

        private int[] TreeToPostOrderArray(MikesBinarySearchTree<int> tree)
        {
            List<int> arr = new List<int>();
            tree.DFSPostOrder(val => arr.Add(val));
            return arr.ToArray();
        }

        private void AssertTreesSame(MikesBinarySearchTree<int> expected, MikesBinarySearchTree<int> actual)
        {
            AssertArraysSame(TreeToPostOrderArray(expected), TreeToPostOrderArray(actual));
        }

        private void AssertArraysSame(int[] expected, int[] actual)
        {
            Assert.AreEqual(expected.Length, actual.Length);

            for(var i=0; i<expected.Length; i++)
            {
                Assert.AreEqual(expected[i], actual[i], $"Values are unidentical at index {i}");
            }
        }
    }
}
