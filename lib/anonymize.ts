// 익명화 매핑 테이블 (긴 문자열부터 먼저 매칭)
const ANONYMIZE_MAP: [string | RegExp, string][] = [
  // URL (정규식 패턴)
  [/https?:\/\/gmkseta\.notion\.site\/[^\s)\]]+/g, '#'],
  ['https://logistics-developers.kakaomobility.com/', '#'],
  [
    'https://cloud.google.com/blog/ko/topics/customers/kakao-t-quick-delivery-gemini-use-case',
    '#',
  ],
  ['https://github.com/gmkseta', 'https://github.com/anonymous'],
  ['https://blog.seongjun.kr', '#'],
  ['resume.seongjun.kr', '#'],
  ['gmkseta@gmail.com', 'anonymous@example.com'],

  // 회사 (긴 것부터)
  ['(주) 카카오 모빌리티', 'A사'],
  ['카카오모빌리티', 'A사'],
  ['카카오 모빌리티', 'A사'],
  ['(주) 인썸니아', 'B사'],
  ['인썸니아', 'B사'],

  // 서비스/프로덕트 (긴 것부터)
  ['카카오T 픽커', '자사 기사 앱'],
  ['카카오T', '자사 앱'],
  ['KGOS', '신규 주문 플랫폼'],
  ['GOS', '주문 플랫폼'],

  // 외부 프로젝트
  ['뉴젠', '프로젝트A'],
  ['락고', '프로젝트B'],
  ['사커비', '프로젝트C'],

  // 교육/단체 (긴 것부터)
  ['동국대학교 융합교육원 소프트웨어 봉사단', '대학교 소프트웨어 봉사단'],
  ['동국대학교', 'OO대학교'],
  ['소프트웨어 마에스트로', '정부 SW 인재양성 프로그램'],
  ['멋쟁이 사자처럼', 'SW 교육 동아리'],

  // 인물
  ['gmkseta', 'anonymous'],
];

function replaceString(str: string): string {
  let result = str;
  for (const [pattern, replacement] of ANONYMIZE_MAP) {
    if (pattern instanceof RegExp) {
      result = result.replace(pattern, replacement);
    } else {
      result = result.split(pattern).join(replacement);
    }
  }
  return result;
}

function deepAnonymize<T>(value: T): T {
  if (typeof value === 'string') {
    return replaceString(value) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepAnonymize(item)) as unknown as T;
  }
  if (value !== null && typeof value === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = deepAnonymize(val);
    }
    return result as T;
  }
  return value;
}

export function anonymize<T>(payload: T): T {
  return deepAnonymize(JSON.parse(JSON.stringify(payload)));
}
