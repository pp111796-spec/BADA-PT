import IslandTabs from '../../components/IslandTabs';

interface SessionRow {
  no: string;
  topic: string;
  competency: string;
  activity: string;
  keywords: string;
}

const SESSIONS: SessionRow[] = [
  { no: '01', topic: '만남과 약속', competency: '자기인식', activity: '사전검사 · 자기소개 · 집단규칙 정하기 · SEL 초성퀴즈 · 나만의 명찰 만들기', keywords: '라포형성, 동기유발' },
  { no: '02', topic: '감정 탐색', competency: '정서인식', activity: '상황별 감정 맞히기 · 감정 빙고 게임(4×4)', keywords: '감정인식, 어휘확장' },
  { no: '03', topic: '감정 표현', competency: '정서인식 · 정서조절', activity: '좋아하는/싫어하는 감정 토론 · 감정 온도계 · 표현유형 4가지 탐색', keywords: '감정강도, 표현유형' },
  { no: '04', topic: '감정 조절', competency: '정서조절', activity: '감정 조절의 필요성 토론 · 나만의 힐링볼 꾸미기', keywords: '감정조절, 자기조절도구' },
  { no: '05', topic: '경청과 표현', competency: '경청 · 정서표현', activity: '진짜 경청 · 진짜 표현이란? · 진짜 경청 게임(제시어 설명)', keywords: '경청기술, 정서표현' },
  { no: '06', topic: '공감', competency: '공감', activity: '공감이란? · 감정추리반(감정 명탐정 게임)', keywords: '공감능력, 감정맞추기' },
  { no: '07', topic: '협동', competency: '협동심', activity: '협동이란? · 협동이 필요한 순간 · 용암을 피해라! 게임', keywords: '협동심, 타인존중' },
  { no: '08', topic: '책임감', competency: '개인적 책임감', activity: '책임감이란? · 책임감 있는 선택 토론(딜레마 상황)', keywords: '책임감, 선택과결과' },
  { no: '09', topic: '규칙 만들기', competency: '사회적 규범 인식', activity: '규칙의 필요성 · 불편나무 · 바람나무 · 우리 반 규칙 제정', keywords: '규범인식, 민주적결정' },
  { no: '10', topic: '마무리 & 성장편지', competency: '문제상황 해결 · 성장 돌아보기', activity: '전체 회기 돌아보기 · 사후검사 · 우리들만의 규칙 확정 · 마음성장편지 쓰기', keywords: '성장인식, 실천다짐' },
];

const PHASES = [
  { title: '자기 이해·표현', range: '1~4회기', items: '자기소개·라포, 감정 인식, 감정 표현, 감정 조절' },
  { title: '친사회적 관리', range: '5~6회기', items: '경청, 정서표현, 공감' },
  { title: '공동체 가치와 태도', range: '7~8회기', items: '협동심, 개인적 책임감' },
  { title: '책임있는 의사결정', range: '9~10회기', items: '규칙 인식, 규칙 제정, 성장 돌아보기' },
];

export default function YeonmuPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP · 연무초 프로그램</p>
      <h1>연무초 늘봄, 비교집단</h1>
      <p className="page-lead">
        같은 회기 수·시간으로 운영한 고정형 사회정서학습 "마음 레벨업". 셀럽과 달리 사전
        프로파일링도, 변화과정 매핑도 쓰지 않았다.
      </p>

      <IslandTabs
        tabs={[
          {
            label: '회기 구성',
            content: (
              <div className="table-scroll">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>회기</th>
                      <th>주제</th>
                      <th>SEL 역량</th>
                      <th>핵심 활동</th>
                      <th>목표 키워드</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SESSIONS.map((s) => (
                      <tr key={s.no}>
                        <td className="n">{s.no}</td>
                        <td>{s.topic}</td>
                        <td>{s.competency}</td>
                        <td>{s.activity}</td>
                        <td>{s.keywords}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            label: '운영 구조',
            content: (
              <>
                <p>
                  연무초등학교 늘봄프로그램으로 운영되는 사회정서역량(SEL) 증진 소집단
                  프로그램이다. "나의 마음 이해 → 나의 마음 표현 → 친구 마음 이해 & 공감 →
                  협동과 책임감 → 책임있는 의사결정(규칙 만들기)"의 흐름으로 10회기가
                  진행된다.
                </p>
                <div className="box-grid">
                  {PHASES.map((p) => (
                    <div className="info-box" key={p.title}>
                      <h4>
                        {p.title} <span className="keyword-chip keyword-chip--small">{p.range}</span>
                      </h4>
                      <p>{p.items}</p>
                    </div>
                  ))}
                </div>
                <div className="stat-row">
                  <div className="stat-card">
                    <span className="stat-value">15명</span>
                    <span className="stat-label">완주 인원 (5학년)</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">40분×10회</span>
                    <span className="stat-label">주 1회 소집단</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">2명</span>
                    <span className="stat-label">회기당 진행 인력</span>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>셀럽과 다른 점.</b> 사전검사 결과는 실시하지만 회기 구성에 반영하지
                    않는다. 회기 내용은 프로그램 시작 전에 이미 고정되어 있고, 모든 아동이
                    같은 순서로 같은 활동을 한다. 그래서 셀럽 집단(양촌·보건소)과 비교했을 때
                    "맞춤 구성이 더하는 효과"를 가려내는 비교집단 역할을 한다.
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
