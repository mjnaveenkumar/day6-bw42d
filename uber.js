function minCost(cost , n) {
 
    
    var totalCost = 0;

    
    var boardingBus = 0;

    for (i = 1; i < n; i++) {

        
        if (cost[boardingBus] > cost[i]) {

            
            totalCost += ((i - boardingBus) * cost[boardingBus]);

            
            boardingBus = i;
        }
    }

    
    totalCost += ((n - boardingBus) * cost[boardingBus]);
    return totalCost;
}
var cost = [ 4, 7];
var n = cost.length;

console.log(minCost(cost, n));