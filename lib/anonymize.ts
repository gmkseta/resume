// eslint-disable-next-line prettier/prettier
const ANONYMIZE_MAP: [string | RegExp, string][] = [
  [/https?:\/\/gmkseta\.notion\.site\/[^\s)\]]+/g, '#'],
  ['https://logistics-developers.kakaomobility.com/', '#'],
  ['https://cloud.google.com/blog/ko/topics/customers/kakao-t-quick-delivery-gemini-use-case', '#'],
  ['https://github.com/gmkseta', 'https://github.com/anonymous'],
  ['https://blog.seongjun.kr', '#'],
  ['resume.seongjun.kr', '#'],
  ['gmkseta@gmail.com', 'anonymous@example.com'],
  ['(주) 카카오 모빌리티', 'A사'],
  ['카카오모빌리티', 'A사'],
  ['카카오 모빌리티', 'A사'],
  ['(주) 인썸니아', 'B사'],
  ['인썸니아', 'B사'],
  ['카카오T 픽커', '자사 기사 앱'],
  ['카카오T', '자사 앱'],
  ['KGOS', '신규 주문 플랫폼'],
  ['GOS', '주문 플랫폼'],
  ['뉴젠', '프로젝트A'],
  ['락고', '프로젝트B'],
  ['사커비', '프로젝트C'],
  ['동국대학교 융합교육원 소프트웨어 봉사단', '대학교 소프트웨어 봉사단'],
  ['동국대학교', 'OO대학교'],
  ['소프트웨어 마에스트로', '정부 SW 인재양성 프로그램'],
  ['멋쟁이 사자처럼', 'SW 교육 동아리'],
  ['gmkseta', 'anonymous'],
];

const replaceString = (str: string): string =>
  ANONYMIZE_MAP.reduce((result, [pattern, replacement]) => {
    if (pattern instanceof RegExp) {
      return result.replace(pattern, replacement);
    }
    return result.split(pattern).join(replacement);
  }, str);

const deepAnonymize = <T>(value: T): T => {
  if (typeof value === 'string') {
    return replaceString(value) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => deepAnonymize(item)) as unknown as T;
  }
  if (value !== null && typeof value === 'object') {
    const result: Record<string, unknown> = {};
    Object.entries(value).forEach(([key, val]) => {
      result[key] = deepAnonymize(val);
    });
    return result as T;
  }
  return value;
};

// eslint-disable-next-line import/prefer-default-export
export const anonymize = <T>(payload: T): T => deepAnonymize(JSON.parse(JSON.stringify(payload)));
