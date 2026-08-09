const BACKGROUND_TAGS = ['사회성 집중', '다층지원체계', '반응 없는 아이들을 위해', '생성형 AI'];

const EEMM_DIMENSIONS = ['인지', '정서', '주의', '자기', '동기', '행동'];

interface Session {
  no: number;
  competency: string;
  pbt: string;
}

const SESSIONS: Session[] = [
  { no: 1, competency: '오리엔테이션', pbt: '' },
  { no: 2, competency: '긍정적 관계 맺기', pbt: '동기' },
  { no: 3, competency: '책임있는 행동하기', pbt: '행동' },
  { no: 4, competency: '자기관리', pbt: '인지' },
  { no: 5, competency: '정서 인식·조절', pbt: '자기' },
  { no: 6, competency: '공감하기', pbt: '주의' },
  { no: 7, competency: '긍정적 관계 맺기', pbt: '정서' },
  { no: 8, competency: '책임있는 행동하기', pbt: '동기' },
  { no: 9, competency: '공감하기', pbt: '행동' },
  { no: 10, competency: '긍정적 관계 맺기', pbt: '인지' },
];

const OPERATION_STEPS = [
  { icon: '🏫', label: '학급 생성 · 사전검사' },
  { icon: '🔍', label: '취약영역 확인 · AI 예시안' },
  { icon: '👩‍🏫', label: '전문가 검토 · 확정' },
  { icon: '📈', label: '회기 진행 · 변화 관찰' },
  { icon: '📨', label: '가정통신문 전달' },
  { icon: '📊', label: '사후검사 · 성장보고서' },
];

export default function ProgressPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 5 · 바다 진행 상황</p>
      <h1>셀럽(SEL-UP) 프로그램</h1>
      <p className="page-lead">
        기존 사회정서학습이 놓친 아이들을 위해, 생성형 AI를 활용해 만든 맞춤형 프로그램이다.
      </p>

      <section className="sub-section">
        <h2>개발 배경</h2>
        <div className="keyword-chip-row">
          {BACKGROUND_TAGS.map((tag) => (
            <span className="keyword-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="sub-section">
        <h2>설계 원리</h2>
        <div className="combo-row">
          <span className="combo-chip combo-chip--accent">사회정서역량</span>
          <span className="combo-x">×</span>
          <span className="combo-chip">PBT · EEMM</span>
        </div>
        <div className="keyword-chip-row keyword-chip-row--small">
          {EEMM_DIMENSIONS.map((dim) => (
            <span className="keyword-chip keyword-chip--small" key={dim}>
              {dim}
            </span>
          ))}
        </div>
      </section>

      <section className="sub-section">
        <h2>10회기 설계 예시</h2>
        <div className="session-timeline">
          {SESSIONS.map((s) => (
            <div className="session-chip" key={s.no}>
              <span className="session-no">{s.no}</span>
              <span className="session-competency">{s.competency}</span>
              {s.pbt && <span className="session-pbt">{s.pbt}</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="sub-section">
        <h2>운영 방식</h2>
        <div className="step-flow">
          {OPERATION_STEPS.map((step, i) => (
            <div className="step" key={step.label}>
              <span className="step-icon">{step.icon}</span>
              <span className="step-label">{step.label}</span>
              {i < OPERATION_STEPS.length - 1 && <span className="step-arrow">→</span>}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
