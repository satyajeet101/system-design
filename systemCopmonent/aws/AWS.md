# Contents
[Cloudformation](#Cloudformation) | [Circuit Breaker](#Circuit-Breaker) |

## Cloudformation
CloudFormation is AWS’s native Infrastructure as Code (IaC) service.
You write a template (JSON/YAML) that declares AWS resources and CloudFormation creates, updates, and deletes those resources as a single stack.
It manages lifecycle, ordering, rollback, and tracking for you
#### Stack
- A stack is a collection of AWS resources (like EC2, S3, RDS, Lambda, etc.) that you can create, update, or delete as a single unit.
- It is based on a CloudFormation template (YAML/JSON file) that describes all the resources and their configurations.
- Example
  - Suppose you want:
  - 1 VPC 
  - 1 EC2 instance 
  - 1 S3 bucket 
  - Instead of creating each separately:
  - You write them in one template. 
  - Create a stack (MyAppInfra). 
  - CloudFormation provisions all 3. 
  - If you delete the stack, all 3 are deleted.
#### Changesets
- A Change Set is a preview of what will happen before you update a stack in CloudFormation.
- It tells you:
  - Which resources will be added 
  - Which will be modified 
  - Which will be replaced 
  - Which will be deleted
- Why Use a Change Set? 
  - Updating a stack directly might be risky if you’re not 100% sure of the changes in your template.
  - A Change Set helps you:
    - Validate changes safely.
    - Catch accidental destructive changes (like deleting buckets, replacing RDS instances). 
    - Get approval workflow (teams can review changes before applying).
#### Infrastructure as Code (IaC) Tools Comparison
| Tool                                       | What It Is                                                                                       | Best For                                       | Language/Format                                  | Pros                                                                                                                       | Cons                                                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **CloudFormation**                         | AWS-native IaC service to define infrastructure as JSON/YAML templates.                          | AWS-only infra automation.                     | YAML / JSON                                      | - Fully managed by AWS <br> - Deep integration with AWS <br> - Supports Change Sets (safe updates)                         | - Verbose <br> - Hard to reuse & test <br> - Steep learning curve for large infra                                    |
| **AWS SAM (Serverless Application Model)** | A CloudFormation extension focused on **serverless apps** (Lambda, API Gateway, DynamoDB, etc.). | Building/deploying serverless architectures.   | YAML (CloudFormation syntax with SAM macros)     | - Simplified syntax for serverless <br> - Local testing (`sam local`) <br> - Auto creates roles/policies                   | - AWS-only <br> - Limited outside serverless use <br> - Less flexible than CDK/Terraform                             |
| **Serverless Framework**                   | Open-source framework to build/deploy serverless apps across **multiple clouds**.                | Multi-cloud serverless (AWS, Azure, GCP).      | YAML + plugins                                   | - Multi-cloud support <br> - Rich ecosystem (plugins) <br> - Simple CLI (`sls deploy`)                                     | - More opinionated <br> - Extra abstraction can hide infra details <br> - May lag behind new AWS features            |
| **Terraform**                              | Open-source **multi-cloud** IaC tool from HashiCorp.                                             | Multi-cloud infra automation.                  | HCL (HashiCorp Config Language)                  | - Multi-cloud + hybrid infra <br> - Rich ecosystem of providers <br> - State mgmt + plan/preview <br> - Modular & reusable | - External state file mgmt needed <br> - Learning curve for HCL <br> - Can drift if state not synced                 |
| **AWS CDK (Cloud Development Kit)**        | AWS tool to define infra using **real programming languages** (TypeScript, Python, Java, etc.).  | AWS infra with familiar programming languages. | Code (TS, Python, Java, C#) → Synthesizes to CFN | - Use loops, conditions, classes <br> - Reusable constructs (like libraries) <br> - Faster dev than raw CFN                | - AWS-focused (Terraform better for multi-cloud) <br> - Still generates CloudFormation (so inherits some CFN limits) |


```TODO
Cloud watch : we can check the log
Log group
Log insites
Live trail

Lambda under the hood
There is "ELB" and "lambda holding poll"
request comes to "ELB" it takes a machine from "lambda holding poll" and register to ELB and respond, if traffic keeps increasing it takes another machine from pool and do the same thing

Triggres (some common triggres)

Invocation types
Synchronus >> send req and get response in realtime
Asynchronus >> send req to some Q system and Q systenm will send the response as it got the req, now lambda will pick the req from Q and process
in this scenaro there may be failure to handle that we use "DLQ"(Dead Letter Queue)
when req fails lambda put back it to Q and pick again, lets say after a configurable no. of retry it keeps failing than it will put it into "DLQ"
and DLQ have some sort of allarm which will notify user to take care of it.

To minimize the cold start
Minimize the no. of library dependency
Only import what you need
Raise memory configuration (but its not linear )
Utilize provisioned concurency

Lambda concurency
is the no. of concurant request that is being served at a time
New container are spawned for each concurant request.
By default 1000 unit concurancy per AWS account per region 
There are 3 diffrent type of concurancy
1. Ureserved >> default i.e. common concerancy pool, which is 1000
2. Reserved >> dedicated concurancy pool, and this will not be avilable for other function even this one is not in use.
3. Provisioned >> dedicated and always on concurancy pool, i.e. will not have cold start problem


Throttling/RateExceeded
Throteling is when lambda reject a request, occurs when invocation exceede avilable concurancy
We can manually throttle it to 0 as well.

Tips on concurancy
Always put alarm on throttle.
Evalute your concurancy need and plan accordingly.
Ask client to backof to avoid retry storm
Use small amount of provisioned concurancy to avoid cold start

Version/Alias
version is the version, 1 at last is version, without version is always latest and $LATEST reffer the latest
arn:aws:lambda:us-east-1:825765408738:function:DemoLamdaFunctiomn:1
after giving alias it will look like, where prod is alias
arn:aws:lambda:us-east-1:825765408738:function:DemoLamdaFunctiomn:prod
we can assign weight of traffic on version

Logging Tip
Dont be overly verbose
Log retention policy and archiving.

Lambda insights
Performance monetoring for lanmbda
deal wit system level matrix, CPU, Memory, Network usage
Does have embaded dashboard
Not enable by default
We have to enable it by adding an extension to Lambda function

How to pick right memory so that to keep cost and execution time optimum
Using lambda power tuner, this is a open source code

Layers, 
allow to upload dependency, external liberary, data config etc to lamda function and can be shared accros multiple lambda

X-ray and service lense
cloud watch >> 

```
