import { Publisher, OrderCreatedEvent, Subjects } from '@rovi-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
