export default function CompassPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 2 · 설계 원리</p>
      <h1>사회정서역량 × 변화과정</h1>
      <p className="page-lead">
        사회정서역량은 회기에서 다룰 내용을, 변화과정은 그 내용을 어떤 방식으로 다룰지를
        정한다.
      </p>

      <div className="box-grid">
        <div className="info-box info-box--sea">
          <h4>사회정서역량 5요인 — 무엇을</h4>
          <ul>
            <li><b>정서 인식 및 조절하기</b> 감정을 알아차리고 휩쓸리지 않게 멈추고 고르는 힘</li>
            <li><b>자기 관리하기</b> 목표를 세우고 실행하고 점검·수정하는 힘</li>
            <li><b>공감하기</b> 타인의 상황과 마음을 이해하고 함께 느끼는 힘</li>
            <li><b>긍정적 관계 맺기</b> 강점을 알아보고 도움을 주고받으며 관계를 유지하는 힘</li>
            <li><b>책임있는 행동하기</b> 나와 남 모두에게 좋은 선택을 하는 힘</li>
          </ul>
          <p style={{ marginTop: 6, fontSize: 12 }}>
            한국교육과정평가원 초등학생 사회정서역량 진단도구(우연경·이인태, 2024)
          </p>
        </div>
        <div className="info-box info-box--sun">
          <h4>변화과정 6차원 — 어디를</h4>
          <p>
            <b>인지 · 정서 · 주의 · 자기 · 동기 · 행동</b>
          </p>
          <p>
            과정기반치료(PBT)의 확장진화 메타모형(EEMM)이 구분하는 심리적 변화 차원이다(Hayes
            &amp; Hofmann, 2018; Hofmann &amp; Hayes, 2019). 각 역량의 취약 지점을 여섯 과정
            가운데 어디로 다룰지 정하고, 그 과정에 대응하는 근거기반 기법을 초등 고학년 수준으로
            조정해 썼다.
          </p>
        </div>
      </div>

      <h3>이 결합이 만드는 차이</h3>
      <p>같은 역량이라도 겨냥하는 과정이 다르면 회기가 완전히 달라진다. 보건소 사례가 그대로 보여준다.</p>
      <div className="box-grid">
        <div className="info-box info-box--coral">
          <h4>
            공감하기 × 정서{' '}
            <span className="keyword-chip keyword-chip--small">6회기</span>
          </h4>
          <p>타인 감정을 알아차리고 되비추는 훈련. "그랬구나, ~했겠다" 반영 공식과 짝 나눔.</p>
        </div>
        <div className="info-box info-box--coral">
          <h4>
            공감하기 × 행동{' '}
            <span className="keyword-chip keyword-chip--small">9회기</span>
          </h4>
          <p>감정이 들든 안 들든 공감 행동을 먼저 고르는 훈련. 입꼬리 실험, 의자뺏기 공감게임.</p>
        </div>
      </div>
      <p>회기 제목이 아니라 이 조합이 회기의 정체를 결정한다.</p>

      <h3>측정도구</h3>
      <p>
        한국형 사회정서역량 척도(우연경·이인태, 2024). 아동용·교사용, 다섯 하위요인에 각
        4~5문항씩 총 21문항. 하위요인 신뢰도 .756~.807, 전체 .918. <i>T</i>점수로 상(
        <i>T</i> ≥ 60)·중(40 ≤ <i>T</i> &lt; 60)·하(<i>T</i> &lt; 40)를 나눈다. 이 척도는 회기
        구성의 입력 자료이면서 효과 검증의 종속변인이라는 이중 역할을 한다.
      </p>
    </article>
  );
}
