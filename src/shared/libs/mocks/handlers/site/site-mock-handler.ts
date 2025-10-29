import { addDelay } from '@Src/shared/libs/mocks/handlers';
import { host } from '@Src/shared/libs/mocks/mock.config';
import { HttpResponse, http } from 'msw';

const siteMockHandler = [
  http.get(`${host}/site/gnb`, async ({ request }) => {
    console.log('msw get /site/gnb');
    return addDelay(
      HttpResponse.json({
        status: 200,
        ok: true,
        result: [
          {
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
          {
            id: 2,
            name: 'Test2',
            path: '/test2',
            icon: '',
            children: [
              {
                id: 2001,
                name: 'Test2-1',
                path: '/test2-1',
                icon: '',
              },
              {
                id: 2002,
                name: 'Test2-2',
                path: '/test2-2',
                icon: '',
              },
            ],
          },
          {
            id: 3,
            name: 'Test3',
            path: '/test3',
            icon: '',
            children: [
              {
                id: 3001,
                name: 'Test3-1',
                path: '/test3-1',
                icon: '',
              },
            ],
          },
        ],
      }),
      1500
    );
  }),
];

export default siteMockHandler;
