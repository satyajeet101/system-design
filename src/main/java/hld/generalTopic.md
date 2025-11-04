# Topic
[SSL Transfer](#SSL-Transfer) | [Sharding](#Sharding)

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
