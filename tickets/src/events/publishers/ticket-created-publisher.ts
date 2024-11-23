import { Publisher, Subjects, TicketCreatedEvent } from "@rovi-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
