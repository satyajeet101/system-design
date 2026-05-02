# Topic
[SSL Transfer](#SSL-Transfer) | [Sharding](#Sharding) | [Consistent Hashing](#Consistent-Hashing) | 
[DB Indexing](#DB-Indexing) | [CAP Theorem](#CAP-Theorem) | [ACID vs BASE](#ACID-vs-BASE)

## SSL-Transfer

| Approach            | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| **SSL Termination** | SSL ends at load balancer (traffic to backend is HTTP).              |
| **SSL Passthrough** | SSL is passed through to backend (decryption happens at backend).    |
| **SSL Bridging**    | Decrypt at load balancer for inspection, then re-encrypt to backend. |


## Sharding
- Sharding is a database architecture pattern that involves partitioning a large database into smaller, more manageable pieces called shards. Each shard is a separate database that contains a subset of the data, allowing for improved performance, scalability, and availability.
- Sharding is typically used in distributed systems where the volume of data and the number of users accessing the data can be very high. By distributing the data across multiple shards, the system can handle more requests and provide faster response times.
- There are several different approaches to sharding, including:
    - Horizontal Sharding: Dividing the data based on rows, where each shard contains a subset of the rows in a table.
    - Vertical Sharding: Dividing the data based on columns, where each shard contains a subset of the columns in a table.
    - Directory-Based Sharding: Using a directory to map data to specific shards based on a predefined algorithm.
- Challenges of sharding include:
    - **Hotspots:** Certain shards may receive a disproportionate amount of traffic, leading to performance bottlenecks.
        - How to solve:
            - Implementing load balancing strategies to distribute traffic evenly across shards.
            - Celebrety sharding keys to avoid concentrating traffic on a single shard.
    - Cross-Shard Queries: Queries that need to access data from multiple shards can be complex and slow.
        - How to solve:
            - Designing the application to minimize cross-shard queries or using middleware to handle them efficiently and put the data on Redis.
    - Consistency: Ensuring data consistency across shards can be challenging, especially in distributed systems.
        - How to solve:
            - Implementing strong consistency models or using eventual consistency based on application requirements.
- Overall, sharding is a powerful technique for managing large-scale databases, but it requires careful planning and implementation to address the associated challenges effectively.

## Consistent Hashing
- Consistent hashing is a distributed hashing technique that is used to distribute data across a cluster of nodes in a way that minimizes the impact of node additions or removals on the overall system.
- In traditional hashing techniques, when a new node is added or an existing node is removed, a significant portion of the data needs to be redistributed among the remaining nodes, which can lead to performance issues and downtime. Consistent hashing addresses this problem by using a hash function to map both the data and the nodes to a circular space, known as the hash ring.
- When a new node is added, it is assigned a position on the hash ring based on its hash value. The data is then distributed among the nodes based on their positions on the ring. When a node is removed, only the data that was assigned to that node needs to be redistributed among the remaining nodes, minimizing the impact on the overall system.
- Consistent hashing is commonly used in distributed systems such as caching systems, load balancers, and distributed databases. It provides several benefits, including:
    - Scalability: Nodes can be added or removed from the system without significant disruption.
    - Load Balancing: Data is evenly distributed among the nodes, preventing hotspots.
    - Fault Tolerance: The system can continue to function even if some nodes fail.
- Overall, consistent hashing is a powerful technique for managing distributed systems and is widely used in modern applications to ensure scalability, performance, and reliability.

## DB-Indexing
- Database indexing is a technique used to improve the performance of database queries by creating a data structure that allows for faster data retrieval. An index is essentially a copy of a portion of the database that is organized in a way that makes it easier to search and access specific data.
- There are several types of database indexes, including:
    - **B-Tree Indexes:** These are the most common type of index and are used for range queries and sorting operations.
      - Complexity:
        - Search: O(log n)
        - Insertion: O(log n)
        - Deletion: O(log n)
    - **Hash Indexes:** These indexes use a hash function to map data to specific locations in the index, making them ideal for equality searches.
        - Complexity:
            - Search: O(1)
            - Insertion: O(1)
            - Deletion: O(1)
    - **Geospatial Indexes:** These indexes are used for spatial data and allow for efficient querying of geographic information.
        - GeoHashing is a common technique used in geospatial indexing.
        - R-Tree is another data structure used for indexing multi-dimensional information such as geographical coordinates.
        - QuadTree is also used for partitioning two-dimensional space by recursively subdividing it into four quadrants or regions.
        - Complexity:
            - Search: O(log n)
            - Insertion: O(log n)
            - Deletion: O(log n)
    - **Inverted Indexes:** These indexes are commonly used in text search applications and allow for fast searching of keywords within large text documents.
        - Complexity:
            - Search: O(log n)
            - Insertion: O(log n)
            - Deletion: O(log n)
- Database indexing provides several benefits, including:
    - Improved Query Performance: Indexes allow for faster data retrieval, reducing the time it takes to execute queries.
    - Reduced Disk I/O: By minimizing the amount of data that needs to be read from disk, indexes can help reduce disk I/O operations.
    - Enhanced Sorting and Filtering: Indexes can improve the performance of sorting and filtering operations on large datasets.
- However, there are also some drawbacks to consider when using database indexing:
    - Increased Storage Requirements: Indexes require additional storage space, which can be a concern for large databases.
    - Slower Write Operations: Indexes can slow down write operations, such as inserts, updates, and deletes, as the index needs to be updated along with the data.
    - Maintenance Overhead: Indexes require ongoing maintenance to ensure they remain effective and up-to-date with changes to the underlying data.
![indexing.png](indexing.png)