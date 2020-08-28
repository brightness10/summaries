# Microservices

## Services Communication
Event based, when a service execute an operation that other services should know about it emits an event to a common event bus.
#### Channels:
The event is emitted to a specific channel, so that the event is sent only to whoever subscribed to that channel.
#### Queue Group:
In order for not having multiple instances of the same service processing the same event, those instances are registering to the same "Queue Group". The Event Bus then knows to send the event to only one subscriber out of that Queue Group.
#### Health Checks:
The Event Bus will periodically check that the clients are connected, because there are time intervals between each check and possibly retries, some time might pass between the moment the service disconnected and the moment the Event Bus defined the service as disconnected. Gracefull Shutdown helps tackle this problem
#### Gracefull Shutdown:
The service should be configured actively close its connection to the Event Bus when the service goes down.
