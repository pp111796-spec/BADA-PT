import IslandTabs from '../../components/IslandTabs';

const COLUMNS = ['정서인식·조절', '자기관리', '공감', '긍정적관계', '책임행동'];

interface Cell {
  text: string;
  sub?: string;
  diag?: boolean;
}

interface Row {
  process: string;
  cells: Cell[];
}

const ROWS: Row[] = [
  {
    process: '인지 C',
    cells: [
      { text: '인지 재구조화', sub: '감정≠사실 탈융합', diag: true },
      { text: '자기대화 재구조화', sub: 'SMART 목표' },
      { text: '조망수용 훈련', sub: '적대적 귀인 교정' },
      { text: '관계신념 재구조화', sub: '대안적 해석' },
      { text: '규칙 이유 탐색', sub: '인지 유연성' },
    ],
  },
  {
    process: '정서 E',
    cells: [
      { text: '감정 명명', sub: '감정 온도계', diag: true },
      { text: '좌절 내성 훈련', sub: '성취 감정 일지' },
      { text: '감정 반영·공명', sub: '나-전달법', diag: true },
      { text: '도움 요청 정서 수용', sub: '단계적 노출' },
      { text: '도덕 정서 활성화', sub: 'STOP 기술' },
    ],
  },
  {
    process: '주의 A',
    cells: [
      { text: '바디스캔·호흡', sub: '신체 감각 체크인' },
      { text: '단일과제 집중', sub: '중간점검 루틴', diag: true },
      { text: '적극적 경청', sub: '비언어 신호 주의' },
      { text: '협력 마음챙김', sub: '순서 기다리기' },
      { text: '관찰 후 결정', sub: '주의 편향 교정' },
    ],
  },
  {
    process: '자기 S',
    cells: [
      { text: '자기자비', sub: '관찰하는 자기' },
      { text: '가치 명료화', sub: '강점 발견', diag: true },
      { text: '자기→타인 자비 확장' },
      { text: '건강한 경계 설정' },
      { text: '가치 연결', sub: '규범 내면화' },
    ],
  },
  {
    process: '동기 M',
    cells: [
      { text: '조절 가치 연결', sub: '동기 면담' },
      { text: '행동 활성화', sub: '자율성 지지', diag: true },
      { text: '관계가치·이타 동기' },
      { text: '친사회 목표 설정' },
      { text: '장단기 결과 비교', sub: '전념' },
    ],
  },
  {
    process: '행동 B',
    cells: [
      { text: 'TIPP', sub: '정서 파도타기', diag: true },
      { text: '자기모니터링', sub: '행동 계약', diag: true },
      { text: '공감 행동 역할극' },
      { text: '주장훈련·갈등해결' },
      { text: '문제해결', sub: '수정 루프', diag: true },
    ],
  },
];

export default function MatrixPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 3 · 개입 기법 매트릭스</p>
      <h1>기법을 떠올리지 않고 셀을 찾아 들어간다</h1>
      <p className="page-lead">
        5요인을 열, 6과정을 행으로 둔 30개 교차 셀. 각 셀은 문제 1개와 기법 3개로 이루어진
        코드북이다.
      </p>

      <IslandTabs
        tabs={[
          {
            label: '행렬 전체',
            content: (
              <>
                <p>
                  취약 영역을 이 표에 대입하면 겨냥할 과정과 기법 후보가 좁혀진다. 개념이 겹치는
                  대각 셀 7개(노란 칸)는 문제 영역과 개입 방향이 일치하는 자리다.
                </p>
                <div className="table-scroll">
                  <table className="mini-matrix">
                    <thead>
                      <tr>
                        <th>과정 \ 요인</th>
                        {COLUMNS.map((c) => (
                          <th key={c}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {ROWS.map((row) => (
                        <tr key={row.process}>
                          <th>{row.process}</th>
                          {row.cells.map((cell, i) => (
                            <td className={cell.diag ? 'diag' : undefined} key={i}>
                              <b>{cell.text}</b>
                              {cell.sub && <span>{cell.sub}</span>}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12, color: '#8f9c93' }}>
                  셀 코드 예 — <i>ER·E-2</i>는 정서인식·조절 요인의 정서 과정 기법 2번(감정
                  명명하기). 표에는 30셀 코드북의 대표 기법만 실었다.
                </p>
              </>
            ),
          },
          {
            label: '셀 하나 열어보기',
            content: (
              <>
                <p>모든 셀은 형식이 같다. 문제 정의 하나, 그 문제를 겨냥하는 기법 셋.</p>
                <div className="box-grid">
                  <div className="info-box info-box--sea">
                    <h4>ER·C 정서인식 왜곡 → 인지 개입</h4>
                    <p><b>문제</b> 감정과 상황을 연결하지 못하고 정서의 원인을 잘못 귀인한다</p>
                    <ul>
                      <li>ABC 기록지 — 감정·상황·반응 연결</li>
                      <li>인지적 탈융합 — 감정과 사실 구분</li>
                      <li>정서 원인 탐색 소크라테스식 질문</li>
                    </ul>
                  </div>
                  <div className="info-box info-box--sea">
                    <h4>PR·E 관계 기술 결핍 → 정서 개입</h4>
                    <p><b>문제</b> 관계 불안과 회피, 도움을 요청할 때 느끼는 수치심</p>
                    <ul>
                      <li>관계 불안 노출 훈련 — 단계적 친밀감</li>
                      <li>도움 요청 정서 수용 실습</li>
                      <li>긍정 관계 경험 감사 일지</li>
                    </ul>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>이 셀이 실제로 간 자리.</b> PR·E는 양촌 8회기 '도움 요청하기'가 되었다.
                    사전검사에서 도움 요청 문항이 <i>M</i> = 3.38로 집단 최저였고 8명 중 7명이
                    3점 이하였다. 셀이 먼저 있었기 때문에 그 문항을 어떤 과정으로 다룰지가
                    자동으로 좁혀졌다. 기법을 먼저 고르고 근거를 갖다 붙인 순서가 아니다.
                  </span>
                </div>
              </>
            ),
          },
        ]}
      />
    </article>
  );
}
