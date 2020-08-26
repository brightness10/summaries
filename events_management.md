# Event Management

- Channels: The event is emitted to a specific channel, so that the event is sent only to whoever subscribed to that channel.
- Queue Group: In order for not having multiple instances of the same service processing the same event, those instances are registering to the same "Queue Group". The Event Bus then knows to send the event to only one subscriber out of that Queue Group.
