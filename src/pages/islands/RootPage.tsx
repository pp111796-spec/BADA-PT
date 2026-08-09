interface SourceRow {
  technique: string;
  source: string;
  sessions: string;
}

const SOURCES: SourceRow[] = [
  { technique: '사회정서역량 5요인 구성과 명시적 교수', source: 'CASEL(2020); 우연경·이인태(2024)', sessions: '전 회기' },
  { technique: '변화과정 6차원 매핑(EEMM)', source: 'Hayes & Hofmann(2018); Hofmann & Hayes(2019)', sessions: '전 회기' },
  { technique: '성격강점 카드', source: 'VIA 성격강점 분류', sessions: '양촌 02 · 보건소 10' },
  { technique: '규칙 내면화와 자율성 지지', source: 'Deci & Ryan(2000) 자기결정이론', sessions: '양촌 03 · 09' },
  { technique: '구현의도 if-then', source: 'Gollwitzer(1999)', sessions: '양촌 05 · 10 · 보건소 04' },
  { technique: '인지 재구조화', source: 'Beck(1976)', sessions: '양촌 07 · 보건소 10' },
  { technique: '인지적 탈융합', source: 'Hayes 등(2006)', sessions: '양촌 07' },
  { technique: '정서 명명의 정서 처리 효과', source: 'Lieberman 등(2007)', sessions: '양촌 06 · 보건소 05 · 전담 지원 절차' },
  { technique: '도움 요청과 호감의 관계', source: 'Jecker & Landy(1969)', sessions: '양촌 08' },
  { technique: '자기효능감과 모델링', source: 'Bandura(1977)', sessions: '양촌 08' },
  { technique: '고통 감내 기술 TIPP', source: 'Linehan(1993)', sessions: '양촌 09 · 보건소 05' },
  { technique: '비폭력대화 4단계 부탁', source: 'Rosenberg(2003)', sessions: '보건소 02' },
  { technique: '기여 행동과 공동체감', source: 'Adler 개인심리학, 행동 활성화', sessions: '보건소 03' },
  { technique: '각성 수준과 전전두 기능의 관계', source: 'Arnsten(2015)', sessions: '고위험집단 적용 원칙 ①' },
  { technique: '회고 슬라이드 설계', source: 'Tulving(1972) 에피소드 기억', sessions: '보건소 10' },
];

export default function RootPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 10 · 기법의 출처</p>
      <h1>기법마다 어디서 왔는지</h1>
      <p className="page-lead">놀이 모음이 아니라 임상 기법 기반이라는 점은 이 표로 답한다.</p>

      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th>기법 · 구성요소</th>
              <th>출처</th>
              <th>적용 회기</th>
            </tr>
          </thead>
          <tbody>
            {SOURCES.map((s) => (
              <tr key={s.technique}>
                <td>{s.technique}</td>
                <td>{s.source}</td>
                <td>{s.sessions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 12, color: '#8f9c93' }}>
        서지사항은 원고 참고문헌에 완전형으로 싣는다. 재인용은 원문을 확인한 뒤 직접인용으로
        바꾸는 것을 원칙으로 했다.
      </p>
    </article>
  );
}
