import { Subjects } from "../../../common/src/events/subjects";

export interface TicketUpdatedEvent {
    subject: Subjects.TicketCreated,
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    }
}
