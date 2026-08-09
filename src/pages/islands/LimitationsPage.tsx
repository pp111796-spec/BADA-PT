import IslandTabs from '../../components/IslandTabs';

const APP_FEATURES = [
  { icon: '📬', label: '가정통신문 열람 확인' },
  { icon: '✅', label: 'SEL-UP 복습 · 실천 체크리스트' },
  { icon: '🎥', label: '부모 미니 코칭 콘텐츠' },
  { icon: '🧭', label: '교사용 개별화 지원 가이드' },
];

const EXTRA_IDEAS = ['행동기반 평가 요소', '고위험군 특화 프로그램', '활동 위주 실습', 'AI 이야기 기반 측정도구'];

export default function LimitationsPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 10 · 한계 및 보완점</p>
      <h1>한계점과 다음 계획</h1>
      <p className="page-lead">현재 한계 네 가지와 각각의 다음 계획을 정리했다.</p>

      <IslandTabs
        tabs={[
          {
            label: '① 다정보원 자료 미활용',
            content: (
              <>
                <p>
                  아동·부모·교사의 다정보원 보고 자료를 수집해 회기 구성에 반영하려 했으나,
                  일부 정보원의 검사 결과를 늦게 회수해 실제로는 아동의 자기보고 검사 결과만
                  활용했다. 가정과 학교에서 관찰되는 아동의 어려움을 프로그램 구성에 충분히
                  반영하지 못했다는 한계가 있다.
                </p>
                <div className="box-grid">
                  <div className="info-box info-box--coral">
                    <h4>왜 문제인가</h4>
                    <p>
                      아동의 자기보고식 검사는 문항 이해도 부족이나 자신을 좋게 포장하려는
                      사회적 바람직성 편향으로 왜곡될 수 있다. 문제행동과 정서 상태는 환경에
                      따라 다르게 나타나는 상황 특이성이 있어, 교사와 부모의 관찰 평정이 함께
                      필요하다.
                    </p>
                  </div>
                  <div className="info-box info-box--leaf">
                    <h4>다정보원이 중요한 이유</h4>
                    <p>
                      다정보원 평가를 통합해 개입 모델을 설계하면 아동의 임상적 문제를
                      예측하는 설명력과 타당도가 유의하게 향상된다(De Los Reyes et al., 2015).
                      각 정보원은 서로 다른 맥락에서 아동을 관찰하기 때문에 세 정보원의 자료를
                      모두 활용해야 질 높은 맞춤형 지원이 가능하다.
                    </p>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>다음 연구에서는.</b> 프로그램 구성 이전 단계에서 세 정보원의 평정 자료를
                    확보할 수 있도록 회수 일정을 계획하고, 이를 통합 분석해 개입 후보 영역을
                    도출하는 절차를 마련한다.
                  </span>
                </div>
              </>
            ),
          },
          {
            label: '② 표준화 척도만으로 목표 설정',
            content: (
              <>
                <p>
                  셀럽 프로그램은 표준화된 사회정서역량 척도 점수를 근거로 취약 영역을 확인하고
                  개입 목표를 설정했다. 그러나 척도 점수는 어느 영역이 낮은지는 알려주지만,
                  아동·부모·교사가 실제로 무엇을 가장 어려워하고 무엇이 해결되길 바라는지는
                  알려주지 않는다.
                </p>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>Top Problems 기술 방식</b>(Weisz 등, 2011)처럼 자신만의 어려움을 직접
                    서술하게 하는 질적 평정은 표준화 척도가 담지 못하는 아동 행동의 맥락과
                    특수성을 더해준다.
                  </span>
                </div>
                <p>
                  <b>다음 연구에서는.</b> 평정 자료와 함께 아동·부모·교사가 가장 해결하고 싶은
                  문제를 직접 기술하는 주관식 자료를 수집해, 척도로 확인한 취약 영역 안에서 각
                  정보원이 우선으로 여기는 문제로 회기의 목표 행동을 설정한다.
                </p>
              </>
            ),
          },
          {
            label: '③ 가정·학교 전이·유지 미확인',
            content: (
              <>
                <p>
                  매 회기 후 가정통신문과 종결 후 성장보고서를 가정에 전달했지만, 부모가
                  실제로 확인했는지 알 수 없었고 구체적으로 어떻게 실천할지 모를 수도
                  있다는 한계가 있었다. 국내 실험 연구의 63%가 가정 연계를 전혀 실행하지
                  못했을 만큼 흔한 한계다(조경현 외, 2025).
                </p>
                <p>
                  그래서 프로그램 효과가 가정을 중심으로 전이·유지되도록 돕는 웹앱을
                  구상했다. 다음 네 기능을 포함한다.
                </p>
                <div className="feature-icon-list">
                  {APP_FEATURES.map((f) => (
                    <div className="feature-icon-item" key={f.label}>
                      <span className="feature-icon">{f.icon}</span>
                      <span className="feature-label">{f.label}</span>
                    </div>
                  ))}
                </div>
              </>
            ),
          },
          {
            label: '④ AI 정밀 맞춤 실패',
            content: (
              <>
                <p>
                  AI 바다 세션은 아동 검사 결과를 바탕으로 회기 구성을 제안하지만, 실제
                  산출된 정밀맞춤형 10회기가 아동 개별 특성과 맞지 않아 진행자가 전면
                  재구성해야 했다. AI가 "검사 결과에 기반한 정밀맞춤형 회기 구성"이라는 핵심
                  차별점을 제대로 살리지 못한 것이다.
                </p>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>다음 연구에서는.</b> 전문가가 독립적으로 만든 정밀맞춤 구성안과 AI
                    구성안을 비교해 불일치 유형을 분석하고, 이를 지침으로 반영해 개선된 AI
                    구성안의 효과를 사전-사후 검사로 검증한다.
                  </span>
                </div>
              </>
            ),
          },
        ]}
      />

      <section className="sub-section" style={{ marginTop: 24 }}>
        <h2>그 외 아이디어</h2>
        <div className="keyword-chip-row keyword-chip-row--small">
          {EXTRA_IDEAS.map((idea) => (
            <span className="keyword-chip keyword-chip--small" key={idea}>
              {idea}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
}
