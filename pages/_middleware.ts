import { NextRequest, NextResponse } from 'next/server';

// eslint-disable-next-line import/prefer-default-export
export const middleware = (req: NextRequest) => {
  const hostname = req.headers.get('host') || '';
  if (hostname === 'anon.seongjun.kr') {
    return NextResponse.rewrite(`${req.nextUrl.origin}/anon`);
  }
  return NextResponse.next();
};
