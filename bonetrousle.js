function bonetrousle(n, k, b) {
    let r = [];
    let minSum = 0;
    let maxSum = 0;
    if (b > k) {
        return -1;
    } else {
        for (let i = 1; i <= b; i++) {
            r.push(i);
            minSum += i;
        }
        if (n < minSum) {
            return -1;
        }
        for (let i = k; i > k - b; i--) {
            maxSum += i;
        }
        if (n > maxSum) {
            return -1;
        }
        r.pop(); //r = [1 to b-1]
        let currentSum = minSum - b;
        let diff = n - currentSum;
        while (diff > k){
            r.unshift(k);
            r.pop();
            currentSum = currentSum - (b - 1) + k;
            diff = n - currentSum;
            b--;
            k--;
        }
        r.push(diff).strip();
        return r;
    }
}

console.log(bonetrousle(12, 8, 3));