# Content

[Redis Product](#Redis-Product-Offerings) | [Basic Commands](#Basic-Commands) | [Replication & Clustering](#Replication-&-Clustering) | [Slot](#Slot) | 
[Hot Key problem](#Hot-Key-Problem) | [Data Types](#Data-Types) | [String](#String) | [Hash](#Hash) |
[List](#List) | [Set](#Set) | [Sorted Set](#Sorted-set) | [Vector Set](#Vector-set) | [Stream](#Stream) | 
[Bitmap](#Bitmap) | [Bitfield](#Bitfield) | [Geospatial](#Geospatial) | [JSON](#JSON) | [Graph](#Graph) | 
[Probabilistic Data Types](#Probabilistic-data-types) | [Time Series](#Time-series) |
[Transactions](#Transactions) | [Pub/Sub](#PubSub) | [Persistence](#Persistence) | 
[Security](#Security) | [Use Cases](#Use-Cases) | [Resources](#Resources)

## Redis-Product-Offerings
- Single threaded In-memory data structure store, used as a database, cache, and message broker.
  - Redis open source
  - Redis cloud
  - Redis enterprise/software
## Replication-&-Clustering
- Redis supports master-slave replication, where data from the master node is asynchronously copied to one or more slave nodes.
- This allows for read scalability, as read requests can be distributed across multiple slave nodes.
- It also provides high availability, as slave nodes can be promoted to master in case the master node fails.
- Redis replication is asynchronous, which means that there may be a delay between when data is written to the master and when it is replicated to the slaves.
- Redis also supports partial resynchronization, which allows for more efficient replication by only sending the changes that have occurred since the last synchronization.
- Redis replication can be configured to use different levels of consistency, depending on the application's requirements.
- Redis also supports read-only replicas, which can be used to offload read traffic from the master node.
- Redis replication can be monitored and managed using various tools, including Redis Sentinel, which provides automatic failover and monitoring of Redis instances.
- Overall, Redis replication is a powerful feature that can help improve the performance, scalability, and availability of Redis deployments.
## Slot
- Redis Cluster provides a way to run a Redis installation where data is automatically sharded across multiple Redis nodes.
- The key space is divided into 16,384 slots.
- When a key is created, Redis uses a hash function to determine which slot the key belongs to.
- Each node in the cluster is responsible for a subset of these slots.
- When a client wants to access a key, it first determines which slot the key belongs to, and then it sends the request to the node that is responsible for that slot.
- This allows Redis to scale horizontally by adding more nodes to the cluster, and it also provides high availability by allowing for automatic failover in case a node goes down.
## Hot-Key-Problem
- The "hot key" problem in Redis refers to a situation where a single key or a small set of keys receive a disproportionate amount of traffic compared to other keys in the database.
- This can lead to performance issues, as the Redis server may become overwhelmed with requests for the hot key(s), causing delays and timeouts for other requests.
- Hot keys can also lead to uneven distribution of data across Redis nodes in a clustered environment, which can further exacerbate performance issues.
- To mitigate the hot key problem, Redis provides several strategies, including:
  - Key sharding: Distributing keys across multiple Redis nodes to balance the load.
  - Caching: Using a caching layer to reduce the number of requests to the hot key(s).
  - Rate limiting: Limiting the number of requests that can be made to a hot key(s) within a certain time period.
  - Data partitioning: Splitting the data associated with a hot key(s) into smaller chunks to reduce the load on a single key.
    - Example: Instead of storing all user session data under a single key like "user_sessions", you could partition the data by user ID, such as "user_sessions:12345" for user ID 12345.
- Monitoring: Regularly monitoring Redis performance metrics to identify and address hot key issues before they become critical.
- Overall, the hot key problem is a common challenge in Redis deployments, but with proper strategies and techniques, it can be effectively managed to ensure optimal performance and scalability.

## Basic-Commands
- `SET key value` : Set the string value of a key
- `SETNX key value` : Set the value of a key, only if the key does not exist
- `MSET key1 value1 key2 value2 ...` : Set multiple keys to multiple values
- `GET key` : Get the value of a key
- `MGET key1 key2 ...` : Get the values of all the given keys
- `DEL key` : Delete a key
- `EXPIRE key seconds` : Set a timeout on a key
- `TTL key` : Get the time to live for a key
- `KEYS pattern` : Find all keys matching the given pattern
- `FLUSHALL` : Remove all keys from all databases
- `PING` : Check if the server is running
- `INCR key` : Increment the integer value of a key by one
- `INCRBY key increment` : Increment the integer value of a key by the given amount
- `DECR key` : Decrement the integer value of a key by one
- `DECRBY key decrement` : Decrement the integer value of a key by the given amount
- `APPEND key value` : Append a value to a key
- `EXISTS key` : Check if a key exists
- `RENAME key newkey` : Rename a key
- `TYPE key` : Get the data type of a key
- `STRLEN key` : Get the length of the value stored in a key
- `SETEX key seconds value` : Set the value of a key with an expiration time
- `GETSET key value` : Set the value of a key and return its old value
- NOTE: 
  - we can use entity along with key to avoid key collision
    - e.g. user:1000 order1, order:2000 order2
    - user is entity, and 1000 is id/key of user
    - Limit of any key is 512 MB i.e. max size of value can be 512 MB
## Data-Types
### String 
  - Performance
    - Most string operations are O(1), which means they're highly efficient. However, be careful with the SUBSTR, GETRANGE, and SETRANGE commands, which can be O(n). These random-access string commands may cause performance issues when dealing with large strings.
### Hash 
  - Commands
    - `HSET key field value [field value ...]` : Set the string value of a hash field
    - `HGET key field` : Get the value of a hash field
    - `HDEL key field [field ...]` : Delete one or more hash fields
    - `HGETALL key` : Get all the fields and values in a hash
    - `HMGET key field [field ...]` : Get the values of all the given hash fields
  - Performance
      - Hash operations like HSET, HGET, HDEL, and HEXISTS are O(1), making them very efficient for accessing and modifying individual fields within a hash.
      - Operations that involve multiple fields, such as HGETALL, HMGET, and HKEYS, are O(n) where n is the number of fields in the hash. These can be less efficient for large hashes.
      - Overall, hashes are efficient for storing and retrieving small to medium-sized datasets, especially when you need to access individual fields frequently.
    - Limit
      - The maximum number of fields in a hash is 2^32 - 1 (approximately 4.29 billion fields).
### List 
  - Redis lists are implemented via Linked Lists. 
  - Commands
    - `LPUSH key value [value ...]` : Prepend one or multiple values to a list
    - `RPUSH key value [value ...]` : Append one or multiple values to a list
    - `LPOP key` : Remove and get the first element in a list
    - `RPOP key` : Remove and get the last element in a list
    - `LMOVE source destination LEFT|RIGHT LEFT|RIGHT` : Atomically return and remove the first/last element (head/tail) of the source list, and push it as the first/last element of the destination list
    - `LRANGE key start stop` : Get a range of elements from a list
    - `LTRIM key start stop` : Trim a list to the specified range
    - `LLEN key` : Get the length of a list
    - `LINDEX key index` : Get an element from a list by its index
    - `LSET key index value` : Set the value of an element in a list by its index
  - Blocking Commands
    - `BLPOP key [key ...]` : Remove and get the first element in a list, or block until one is available
    - `BRPOP key [key ...]` : Remove and get the last element in a list, or block until one is available
  - Performance
    - Operations that add or remove elements from the ends of the list (LPUSH, RPUSH, LPOP, RPOP) are O(1). 
    - Operations that involve accessing or modifying elements in the middle of the list (like LINDEX, LSET, LINSERT) are O(n), which can be less efficient for large lists.
    - Blocking operations (BLPOP, BRPOP) are O(1) for the pop operation itself, but the blocking behavior can introduce latency depending on how long the operation waits for an element to become available.
    - Overall, lists are efficient for stack and queue operations, but be cautious with operations that require traversing the list.
  - Limit
    - The maximum length of a list is 2^32 - 1 elements (approximately 4.29 billion elements).
  - Common use cases for lists
    - Remember the latest updates posted by users into a social network
      - Adding a New Post
        - LPUSH user:123:posts "post_789"
      - Retrieving Recent Posts
        - LRANGE user:123:posts 0 9
      - Post Details:
        - If only post IDs are stored in the list, the system fetches full post data from a Redis hash or another database.
      - Trimming Old Posts (optional):
        - LTRIM user:123:posts 0 99
        - The LTRIM command is similar to LRANGE, but instead of displaying the specified range of elements it sets this range as the new list value. All the elements outside the given range are removed.
  - Blocking operations on lists
    - Imagine you want to push items into a list with one process, and use a different process in order to actually do some kind of work with those items. This is the usual producer / consumer setup, and can be implemented in the following simple way
    - Redis implements commands called BRPOP and BLPOP which are versions of RPOP and LPOP able to block if the list is empty: they'll return to the caller only when a new element is added to the list, or when a user-specified timeout is reached.
    - This is very useful when you want to implement a reliable queue system, where one or more clients are waiting for jobs to do, and one or more other clients are pushing jobs into the queue.
### Set 
  - Commands
    - `SADD key member [member ...]` : Add one or more members to a set
    - `SREM key member [member ...]` : Remove one or more members from a set
    - `SPOP key [count]` : Remove and return one or more random members from a set
    - `SMOVE source destination member` : Move a member from one set to another
    - `SCARD key` : Get the number of members in a set, i.e cardinality of the set
    - `SISMEMBER key member` : Check if a member is part of a set
    - `SMEMBERS key` : Get all the members in a set
    - `SRANDMEMBER key [count]` : Get one or more random members from a set without removing them
    - `SINTER key [key ...]` : Intersect multiple sets
    - `SUNION key [key ...]` : Union multiple sets
    - `SDIFF key [key ...]` : Subtract multiple sets
  - Performance
    - Most set operations (SADD, SREM, SISMEMBER, SCARD) are O(1), making them very efficient for adding, removing, and checking membership of elements.
    - Operations that involve multiple sets (SINTER, SUNION, SDIFF) are O(N) where N is the size of the smallest set involved in the operation. These can be less efficient for large sets.
    - Random member operations (SPOP, SRANDMEMBER) are O(1) for single member retrieval, but O(N) when retrieving multiple members.
    - Overall, sets are efficient for operations involving unique elements and membership checks.
  - Limit
    - The maximum number of members in a set is 2^32 - 1 elements (approximately 4.29 billion elements).
### Sorted set 
  - A Redis sorted set is a collection of unique strings (members) ordered by an associated score. When more than one string has the same score, the strings are ordered lexicographically.
  - Commands
    - `ZADD key score member [score member ...]` : Add one or more members to a sorted set, or update the score of an existing member
    - `ZREM key member [member ...]` : Remove one or more members from a sorted set
    - `ZINCRBY key increment member` : Increment the score of a member in a sorted set
    - `ZRANGE key start stop [WITHSCORES]` : Get a range of members in a sorted set, by index
    - `ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT offset count]` : Get a range of members in a sorted set, by score
    - `ZREVRANGE key start stop [WITHSCORES]` : Get a range of members in a sorted set, by index, with scores ordered from high to low
    - `ZREVRANGEBYSCORE key max min [WITHSCORES] [LIMIT offset count]` : Get a range of members in a sorted set, by score, with scores ordered from high to low
    - `ZRANK key member` : Determine the index of a member in a sorted set
    - `ZREVRANK key member` : Determine the index of a member in a sorted set, with scores ordered from high to low
    - `ZSCORE key member` : Get the score associated with the given member in a sorted set
    - `ZCARD key` : Get the number of members in a sorted set
    - `ZCOUNT key min max` : Count the members in a sorted set with scores within the given values
    - `ZPOPMIN key [count]` : Remove and return one or more members with the lowest scores in a sorted set
    - `ZPOPMAX key [count]` : Remove and return one or more members with the highest scores in a sorted set
  - Performance
    - Most sorted set operations (ZADD, ZREM, ZINCRBY, ZSCORE, ZCARD) are O(log(N)), where N is the number of elements in the sorted set. This makes them efficient for adding, removing, and updating members.
    - Range queries (ZRANGE, ZRANGEBYSCORE, ZREVRANGE, ZREVRANGEBYSCORE) are O(log(N) + M), where M is the number of elements being returned. This means that while the initial lookup is efficient, returning a large number of elements can increase the time complexity.
    - Ranking operations (ZRANK, ZREVRANK) are also O(log(N)).
    - Overall, sorted sets are efficient for scenarios where you need to maintain a collection of unique elements ordered by a score, such as leaderboards or priority queues.
### Vector set 
### Stream 
- Consumer Groups
  - A consumer group is a way to allow multiple consumers to share the workload of processing messages from a stream.
  - Each consumer in the group has its own unique name, and each message in the stream is delivered to only one consumer in the group.
  - This allows for parallel processing of messages, which can improve performance and scalability.
  - Commands
    - `XGROUP CREATE key groupname id [MKSTREAM]` : Create a new consumer group
    - `XGROUP SETID key groupname id` : Set the last delivered ID for a consumer group
    - `XGROUP DESTROY key groupname` : Destroy a consumer group
    - `XREADGROUP GROUP groupname consumername COUNT count BLOCK milliseconds STREAMS key id` : Read messages from a stream as part of a consumer group
    - `XACK key groupname id [id ...]` : Acknowledge that a message has been processed by a consumer in a consumer group
    - `XPENDING key groupname [start end count] [consumername]` : Get information about pending messages in a consumer group
    - `XCLAIM key groupname consumername min-idle-time id [id ...] [IDLE milliseconds] [TIME milliseconds] [RETRYCOUNT count] [FORCE] [JUSTID]` : Claim ownership of pending messages in a consumer group
- Worker Queues
  - Redis Streams can be used to implement reliable worker queues, where multiple worker processes consume messages from a stream and process them.
  - This allows for parallel processing of tasks, which can improve performance and scalability.
  - Commands
    - `XADD key ID field value [field value ...]` : Add a new message to a stream
    - `XREAD COUNT count BLOCK milliseconds STREAMS key id` : Read messages from a stream
    - `XDEL key id [id ...]` : Delete one or more messages from a stream
    - `XLEN key` : Get the length of a stream
    - `XRANGE key start end [COUNT count]` : Get a range of messages from a stream
    - `XREVRANGE key end start [COUNT count]` : Get a range of messages from a stream in reverse order
### Bitmap 
### Bitfield 
### Geospatial 
### JSON
  - Commands 
    - `JSON.SET key path value [NX|XX]` : Set the JSON value at the specified path
    - `JSON.GET key [path]` : Get the JSON value at the specified path
    - `JSON.DEL key [path]` : Delete the JSON value at the specified path
    - `JSON.MGET key [key ...] path` : Get the JSON values at the specified path from multiple keys
    - `JSON.TYPE key [path]` : Get the type of the JSON value at the specified path
    - `JSON.NUMINCRBY key path increment` : Increment a numeric JSON value at the specified path
    - `JSON.STRAPPEND key path value` : Append a string to a JSON string at the specified path
    - `JSON.ARRAPPEND key path value [value ...]` : Append one or more values to a JSON array at the specified path
    - `JSON.ARRPOP key path [index]` : Remove and return an element from a JSON array at the specified path
    - `JSON.ARRINSERT key path index value [value ...]` : Insert one or more values into a JSON array at the specified path
    - `JSON.ARRLEN key path` : Get the length of a JSON array at the specified path
    - `JSON.OBJKEYS key [path]` : Get the keys of a JSON object at the specified path
    - `JSON.OBJLEN key [path]` : Get the number of keys in a JSON object at the specified path
  - Limitation 
    - A JSON value passed to a command can have a depth of up to 128. If you pass to a command a JSON value that contains an object or an array with a nesting level of more than 128, the command returns an error.
  - JSON use cases
    - You can of course use Redis native data structures to store JSON objects, and that's a common practice. 
    - For example, you can serialize JSON and save it in a Redis String. 
    - However, Redis JSON provides several benefits over this approach. 
      - Access and retrieval of subvalues 
        - With JSON, you can get nested values without having to transmit the entire object over the network. Being able to access sub-objects can lead to greater efficiencies when you're storing large JSON objects in Redis. 
      - Atomic partial updates 
        - JSON allows you to atomically run operations like incrementing a value, adding, or removing elements from an array, append strings, and so on. To do the same with a serialized object, you have to retrieve and then reserialize the entire object, which can be expensive and also lack atomicity. 
      - Indexing and querying 
        - When you store JSON objects as Redis strings, there's no good way to query those objects. On the other hand, storing these objects as JSON using Redis Open Source lets you index and query them. This capability is provided by the Redis Query Engine. 
### Graph
### Probabilistic data types 
### Time series
### Transactions
### PubSub
### Persistence
### Security
### Use Cases
- Caching
- Session Management
- Message Queuing
- Leaderboards and Gaming
- Geospatial Applications
- Machine Learning and AI
- IoT Applications
- Real-time Chat Applications
- Ad Targeting and Personalization
- Data Expiry and Time-based Events
- Full-Page Caching
- Distributed Locks
- Real-time Recommendations
- Event Sourcing
- API Rate Limiting
- Shopping Cart Management
- Real-time Bidding Systems
- Fraud Detection
- Real-time Analytics Dashboards
### Resources
- [Redis Official Documentation](https://redis.io/documentation)