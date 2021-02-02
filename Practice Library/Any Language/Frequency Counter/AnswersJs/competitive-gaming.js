/**
 * A group of fiends are playing a video game together. During the game, each player
 * earns a nimber of points. At the end of a round, players who achieve a certain
 * rank get to "level up" their characters to gain increased abilities. Given the 
 * scores of the players at the end of a round, how many players will be able to
 * level up
 * 
 * NOTE: Players with equal scores will have equal ranks, but the player with the
 * next lower score will be ranked based on the position within the list of all
 * player's scores. For example, if there are four players, and three players tie
 * for first place, their rankss are 1,1,1, and 4.
 * 
 * NOTE: No player with a score of 0 can level up, regardless of rank.
 * 
 * Example
 * n=4,
 * k=3
 * 
 * scores = [100,50,50,25]
 * 
 * These players' ranks are [1,2,2,4]. Because the players need to have a rank of at
 * least 3 to level up, only the first three players qualify. Therefore, the answer
 * is 3.
 * 
 * 
 */

function solve(arr, minRank) {
    arr.sort((a,b) => b-a)

    // save their occrs
    // sort
    // start from the largets
    // check no of time it occurs
    // if 0 continue
    // add up value
    map = {}
    for(let i=0; i<arr.length; i++) {
        if(map[arr[i]]) map[arr[i]]++
        else map[arr[i]]=1
    }
    sum = 0
    i=0
    while (sum<minRank) {
        if(arr[i]==0) continue
        sum+=map[arr[i]]
        i++
    }
    log(sum)
    return sum
 }

 const log = (...val) => console.log(...val)

 solve([100,50,50,25], 3) // 3
 solve([100,50,60,25], 1) // 1