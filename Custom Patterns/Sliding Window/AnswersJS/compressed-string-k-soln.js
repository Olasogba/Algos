log = (val) => console.log(val);
class Solution {

    get_length(n, base=10) {
        if(n<2)  return n;
        let ret=1;
        
        while(n>0){
            ret++;
            n = Math.floor(n/base);
        }
        return ret;
    }

    compress(s, k) {
        let L=s.length;
        if(L<=k)return log(0);
        
        let i,ans=L-k;
        let count_start=0,cost_start=0;
        let count_end=0,cost_end=0;
        
        for(i=k;i<L&&s[i]==s[k];i++)count_end++;
        cost_end=this.get_length(count_end);
        for(;i<L;){
            let cnt=0;
            let d=s[i];
            for(;i<L&&d==s[i];i++)cnt++;
            cost_end+=this.get_length(cnt);
        }
        
        ans=Math.min(ans,cost_end);
        if(k==0) return log(ans);

        for(i=1;i<=L-k;i++){// first delete i, last=i+k-1
           if(i==1){count_start=1;cost_start=1;}
           else{
               if(s[i-1]==s[i-2]){
                   cost_start+=this.get_length(count_start+1)-this.get_length(count_start);
                   count_start++;
               }
               else{
                   cost_start++;
                   count_start=1;
               }
           }
           
           if(i==L-k){
               cost_end=0;
               count_end=0;
           }           
           else if(s[i+k-1]==s[i+k]){
               cost_end+=this.get_length(count_end-1)-this.get_length(count_end);
               count_end--;
           }
           else{
               cost_end--;
               count_end=0;
               for(let j=i+k;j<L&&s[j]==s[i+k];j++)count_end++;
           }
           
           let cost=cost_start+cost_end;
           if(i!=L-k&&s[i-1]==s[i+k])cost+=this.get_length(count_start+count_end)-this.get_length(count_start)-this.get_length(count_end);
           ans=Math.min(ans,cost);
        }
        
        return log(ans);   
    }
        

}

let s=new Solution;


s.compress("ABBBCCDDCCC",3)
s.compress("A",0)
s.compress("ABC",0)
s.compress("AAABBCCC",2)
s.compress("AAABBDCCC",3)
s.compress("AAABBDAAAAAA",3)
s.compress("AAABBDAAAAAAA",3)