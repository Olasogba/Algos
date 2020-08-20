`
Strings with long blocks of repeating characters take much less space if kept
in a compressed representation. To obtain the compressed representation, we
replace each segment of equal character in the string with the number of 
characters in the segment, followed by the character (for example, we
replace segment "CCCC" with "4C"). To avoid increasing the size, we leave the
one-letter segments unchanged (the compressed representation of "BC" is the
sam string - "BC").

For example, the compressed representation of the string "ABBBCCDDCCC" is
"A3B2C2D3C", and the compressed representation of the string
"AAAAAAAAAAABXXAAAAAAAAAA" is "11AB2X10A".

ABBBCCDDCCC => A3B2C2D3C
AAAAAAAAAAABXXAAAAAAAAAA => 11AB2X10A

Observe that, in the second example, if we removed the "BXX" segment from 
the middle of the word, we would obtain a much shorter compressed
representatin => "21A".

In order to take advantage of this observation, we decided to modify our
compression algorithm. Now, before compression, we remove exactly K 
consecutive letters from the input string. We would like to know the shortest
compressed form that we can generate this way.

Write a function:
    function solution(S, K);

that given a string S of length N and an interger K, returns the shortest
possible length of the compressed representation of S after removing exactly
K consecutive characters from S


Examples:
1. Given S = "ABBBCCDDCCC" and K = 3, the function should return 5, because
after removing "DDC" from S, we are left with "ABBBCCCC", which compresses to
a representation of length 5 - "A3B4C"
ABBBCCDDCCC -> A3B4C

2.  Given S = "AAAAAAAAAAABXXAAAAAAAAAA" and K = 3, the function should return
    3, because after removing "BXX" from S, we are left with
    "AAAAAAAAAAAAAAAAAAAAA", which compresses to a representation of length 
    3 - "21A"
    AAAAAAAAAAABXXAAAAAAAAAA => 21A

3. Given S = "ABCDDDEFG" and K = 2, the function should return 6, because
after removing "EF" from S, we are left with "ABCDDDG", which compresses to
a representation of length 6 - "ABC3DG"

ABCDDDEFG -> ABC3DG

Write an effecient algorithm for the following assumptions:

* N is an interger within the range [1...100,000];
* K is an integer within the range [0...100,000];
* K <= N;
* string S consists only of uppercase letters (A-Z)
`
