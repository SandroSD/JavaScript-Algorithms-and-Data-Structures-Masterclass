# Graph

## Objectives

- Explain what a graph is
- Compare and contrast different types of graphs and their use cases in the real world
- Implement a graph using an adjacency list
- Traverse through a graph using BFS and DFS
- Compare and contrast graph traversal algorithms

## What are Graphs

> Nodes + Connections

A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for a directed **graph**.

## Examples

<table>
<thead>
<tr>
<th>Example1</th>
<th>Example2</th>
</tr>

</thead>
<tbody>
<tr>
<td>

![example](./Example1.png)

</td>
<td>

![example](./Example2.png)

</td>

</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>Example3</th>
<th>Example4</th>
</tr>
</thead>
<tbody>
<tr>
<td>

![example](./Example3.png)

</td>
<td>

![example](./Example4.png)

</td>
</tr>
</tbody>
</table>

## Uses for Graphs

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- Recomendations
  - _People also watched_
  - _You might also like..._
  - _People you might know_
  - _Frequently bought with_

## Essential Graph Terms

- **vertex** - a node
- **edge** - connection between nodes
- **weighted/unweighted** - values assigned to distances between vertices
- **directed/undirected** - directions assigned to distanced between vertices

<table>
<thead>
<tr>
<th>Directed Graph</th>
<th>Undirected Graph</th>
</tr>
</thead>
<tbody>
<tr>
<td>

![example](./Directed%20Graph.png)

</td>
<td>

![example](./Undirected%20Graph.png)

</td>
</tr>
</tbody>
</table>

![example](./Weighted%20Graph.png)

## Adjacency Matrix

![example](./Adjacency%20Matrix.png)

## Adjacency List

<table>
<thead>
<tr>
<th>Adjacency List 1</th>
<th>Adjacency List 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>

![example](./Adjacency%20List%201.png)

</td>
<td>

![example](./Adjacency%20List%202.png)

</td>
</tr>
</tbody>
</table>

## Differences & Big O

- **|V|** - number of vertices
- **|E|** - number of edges

<table>
<thead>
<tr>
    <th>OPERATION</th>
    <th>ADJACENCY LIST</th>
    <th>ADJACENCY MATRIX</th>
</tr>
</thead>
<tbody>
<tr>
    <td>Add Vertex</td>
    <td>O(1)</td>
    <td>O(|V<sup>2</sup>|)</td>
</tr>
<tr>
    <td>Add Edge</td>
    <td>O(1)</td>
    <td>O(1)</td>
</tr>
<tr>
    <td>Remove Vertex</td>
    <td>O(|V| + |E|)</td>
    <td>O(|V<sup>2</sup>|)</td>
</tr>
<tr>
    <td>Remove Edge</td>
    <td>O(|E|)</td>
    <td>O(1)</td>
</tr>
<tr>
    <td>Query</td>
    <td>O(|V| + |E|)</td>
    <td>O(1)</td>
</tr>
<tr>
    <td>Storage</td>
    <td>O(|V| + |E|)</td>
    <td>O(|V<sup>2</sup>|)</td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr>
<th>ADJACENCY LIST</th>
<th>ADJACENCY MATRIX</th>
</tr>
</thead>
<tbody>
<tr>
<td style="color:green">Can take up less space (in sparse graphs)</td>
<td style="color:red">Takes up more space (in sparse matrix)</td>
</tr>
<tr>
<td style="color:green">Faster to iterate over all edges</td>
<td style="color:red">Slower to iterate over all edges</td>
</tr>
<tr>
<td style="color:red">Can be lower to lookup specific edge</td>
<td style="color:green">Faster to lookup specific edge</td>
</tr>
</tbody>
</table>

## Methods

### Add a vertex

- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set it's value to be an empty array

### Add an edge

- This function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices

### Remove an edge

- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

### Remove a vertex

- The function should accept a vertex to remove
- the function should loop as long as there are any other vertices in the adjacency list for that vertex
- Inside of the loop, call our **removeEdge** function with the vertex we are removing and any values in the adjacency list for that vertex
- Delete the key in the adjacency list for that vertex
