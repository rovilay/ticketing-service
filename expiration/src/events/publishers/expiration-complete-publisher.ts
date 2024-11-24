import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@rovi-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
