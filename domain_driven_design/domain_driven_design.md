# Domain Driven Design
- [Domain Driven Design](#domain-driven-design)
    - [Data Management](#data-management)

A **domain** can be described as a business sector or a topic (aviation, insurance, banking, etc..). The domain can be splitted to several **subdomains** which are different parts or aspects of the domain, each subdomain stands on it’s own and is isolated from the other subdomains.
Each subdomain has it's own:
- **Bounded context** - each subdomain has a context, some kind of a world that it represents.
- **Ubiquitous language** - an agreed upon common language to describe things in the bounded context. For example - a person can be a "user" in the users domain context and a "recipient" in the shipping domain.
- **Domain model** - an abstraction for Bounded Context (it is to a Bounded Context what a class is to an object)

There are three types of subdomains:
- **Core** - A project should have one core domain that represent the core of the business, most efforts should be put into this subdomain.
- **Support**
- **Generic** - Things like a users domain, a shipping domain etc. It is best to aspire to find out of the box solution and to avoid spending a lot of time on those.

### Data Management
The data structure is as such:
- **Aggregate**:
    - A collection of entities which is encapsulated in its own boundary.
    - Always has a root entity that has a “part of” relationship with the sub entities, meaning that if the root entity is deleted the sub entities are destroyed.
    - The aggregate is always changed by the root entity and never from outside of the aggregate boundary.
- **Entities**:
    - Are unique and have IDs, for example - each person is unique even if they share the exact same personal details.
    - Consists of value objects, represents a real world object.
    - Usually persisted as a row in DB.
    - Typically mutable.
    - Usually implements some BL.
- **Value Objects**:
    - Are not unique - like a 10 dollars bill, you don’t care about a specific 10 dollars bill, all you care about is that it is a 10 dollars bill.
    - Immutable.
    - Rich Domain Logic.
    - Auto Validating.
    - Strong equality - can be compared.
    - Typed with a non primitive.


* Factories - create aggregates.
* Repositories - get persisted aggregates.

Principles
* The design will never be perfect from the start and must evolve with the project. Don’t kill yourself trying to make it perfect from the start.
* DDD focuses on the Domain itself and not in the technicalities (technologies, code etc…)
* Each Bounded Context should have it’s own micro-service.
* Layered Architecture:
    * Request Handlers
    * Controllers
    * Business
    * Persistence
