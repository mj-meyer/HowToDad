export interface ModalEvent {
  event: ModalEventType;
  payload?: Object;
}

export type ModalEventType = 'share' | 'deleteAll' | 'deleteOne';
