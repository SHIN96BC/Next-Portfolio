import { http, HttpResponse } from 'msw';
import { host } from '@Src/shared/libs/mocks/mockConfig';
import { addDelay } from '@Src/shared/libs/mocks/handlers';

const siteHandler = [
  http.get(`${host}/gnb`, async ({ request }) => {
    console.log('msw get /gnb');
    return addDelay(
      HttpResponse.json({
        status: 200,
        ok: true,
        result: {
          id: 1,
          name: 'Test1',
          path: '/test1',
          icon: '',
          children: [
            {
              id: 1001,
              name: 'Test1-1',
              path: '/test1-1',
              icon: '',
            },
            {
              id: 1002,
              name: 'Test1-2',
              path: '/test1-2',
              icon: '',
            },
            {
              id: 1003,
              name: 'Test1-3',
              path: '/test1-3',
              icon: '',
            },
          ],
        },
      }),
      1500
    );
  }),
];

export default siteHandler;
