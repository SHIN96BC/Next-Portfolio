/* eslint-disable */

import type { CodegenConfig } from '@graphql-codegen/cli';
import { globSync } from 'glob';
import path from 'path';

// 로컬에 저장된 schema 파일 경로
const schemaLocalPath = 'src/shared/libs/graphql/schema.graphql';

const SCHEMA = process.env.NEXT_PUBLIC_RUNTIME_MODE === 'prod' ? schemaLocalPath : (process.env.NEXT_PUBLIC_GRAPHQL_CODEGEN_SCHEMA ?? 'http://localhost:8080/graphql');

// Windows 에서도 역슬래시 이스케이프 이슈 줄여줌
const docPaths = globSync('src/features/**/model/gql/*.graphql', {
  windowsPathsNoEscape: true,
});

// 경로 유틸
const toPosix = (p: string) => p.split(path.sep).join('/');   // \ → /
const toPlatform = (p: string) => path.normalize(p);          // / → OS별 구분자

const generates = docPaths.reduce((acc, raw) => {
  // 입력 경로를 POSIX 로 통일
  const docPosix = toPosix(raw);

  // 폴더 변경 + 확장자 변경
  const outPosix = docPosix
    .replace('/model/gql/', '/api/gql/') // 자동 생성물 경로 변경
    .replace(/\.graphql$/, '.generated.ts'); // .generated.ts 확장자 변경

  // 다시 OS별 경로로 정규화
  const documents = toPlatform(docPosix);
  const outputPath = toPlatform(outPosix);

  acc[outputPath] = {
    schema: SCHEMA,
    documents,
    plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
    config: {
      // 옵션 1) graphql-request 모드(훅 호출 시 첫 인자로 client 전달)
      fetcher: 'graphql-request',
      // 옵션 2) 커스텀 fetcher(client 인자 없이 내부에서 요청하여 공통 로직을 한곳에서 처리하고 싶으면 사용)
      // fetcher: '@/shared/api/graphql-client#graphqlClient',
      exposeQueryKeys: true,
    },
  };
  return acc;
}, {} as CodegenConfig['generates']);

const config: CodegenConfig = {
  schema: SCHEMA,
  generates: {
    // 스키마 아티팩트도 같이 떨어뜨려서 repo에 보관
    'src/shared/libs/graphql/schema.graphql': { plugins: ['schema-ast'] },
  ...generates,
  }
};

export default config;

