import { Subjects, Publisher, OrderCancelledEvent } from '@rovi-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
