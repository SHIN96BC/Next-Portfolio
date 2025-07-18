export async function register() {
  // instrumentation 의 register는 Next.js 서버 인스턴스가 시작될 때 한 번 호출되는 파일
  //  (next.config 파일에 experimental.instrumentationHook = true; 설정 필요)

  // Next 서버 사이드 api 요청 가로채기
  if (
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' &&
    process.env.NEXT_RUNTIME === 'nodejs'
  ) {
    const { mockServer } = await import('@Src/shared/libs/mocks/server');
    mockServer.listen({ onUnhandledRequest: 'warn' });
    console.info('mockServer listening on port 3006');
  }
}

export default undefined;
