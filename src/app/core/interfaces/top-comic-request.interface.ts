import { Status } from '../types/status.type';
import { TopDuration } from '../types/top-duration.type';

export interface TopComicRequest {
  topDuration: TopDuration;
  page: number;
  status: Status;
}
