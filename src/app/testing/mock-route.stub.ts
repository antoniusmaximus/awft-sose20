import { of } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

export const mockRoute = {
  snapshot: { data: { } },
  params: of(
        { blogId: 'blogId', q: 'query' } as Params,
    ),
} as ActivatedRoute;
