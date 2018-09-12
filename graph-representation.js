// // Breadth First search?


// let findAPath = (graph, start, end) => {
//     let paths = {
//     //    'start: [start],
//         // 'ATL': ['ATL'],
//         // 'CHA': ['ATL', 'CHA'],
//         // 'MOB': ['ATL', 'CHA', 'MOB']
// }
//     }

// paths[start] = start 
// let visited = new Set()
// let frontier = new Set();
// frontier.add(start);

// while (!visited.has(end)) {
//     frontier.forEach(airport => {
//         let edges = let graph[airport];
//         edges.forEach(edge => {
//             if (!visited.has(edge.end)) {
//                 nextFrontier.add(edge.end);
//                 paths[edge.end] = paths[airport].concat([edge.end]);
//             }
//             })
//             visited.add(airport);
//     })
// }


// let cost = 0;
// let steps = paths[end];
// steps.forEach((airport, i) => {
//     let nextAirport = steps[i + 1];
//     if (!nextAirport) {return; }
//     let edge = graph[airport].find(edge => 
//         edge.end === nextAirport);
//     cost += edge.cost; 
//     })

// Recursive solution

let discover = (graph, start, end, steps) => {
    let edges = graph[start];
    steps = steps.concat([start]);
    let solution = edges.map(edge => {
        return discover(graph, edge.end, end);

    })

}

// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

discover(graph, 'ATL', 'MOB', ['ATL']);
discover(graph, 'Cha', 'Mob', ['ATL']);
