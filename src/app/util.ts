import { timer } from 'rxjs';

export function sleep(ms) {
  return timer(ms).toPromise();
}

