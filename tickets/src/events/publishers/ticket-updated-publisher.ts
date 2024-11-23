import { Publisher, Subjects, TicketUpdatedEvent } from "@rovi-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}
