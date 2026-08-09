import IslandTabs from '../../components/IslandTabs';

const FAQ = [
  { q: '"결국 AI가 만든 것 아닌가"', a: 'AI가 낸 것은 회기별 목표 역량과 겨냥 과정의 배치, 즉 설계 골격이다. 기법과 활동은 열 회기 모두 연구자가 만들었고, 보건소에서는 배치도 두 회기를 고쳤다.' },
  { q: '"맞춤이라고 할 만한 차이가 실제로 있었나"', a: '두 집단의 취약 역량이 정반대로 나왔고 그 결과 회기 순서와 기법이 갈렸다.' },
  { q: '"왜 개인이 아니라 집단 단위인가"', a: '학급·소집단 대면 운영이 전제였고, 개인 식별 정보를 시스템에 넣지 않기 위해 집단 요약통계만 입력했다. 개인 단위 적응형이라고 주장하지 않는다.' },
  { q: '"기법 선택이 자의적이지 않나"', a: '30셀 코드북을 미리 만들어 뒀기 때문에 취약 역량과 겨냥 과정이 정해지면 기법 후보가 자동으로 좁혀진다. 코드북과 배분 원칙이 자의성을 막는 장치다.' },
  { q: '"인지행동 기법을 과정기반 프로그램에 쓴 건 모순 아닌가"', a: '양촌 7회기는 인지 재구조화를 주 개입으로 명시하고 탈융합을 뒤에 순차 배치했다. 두 기법이 인지적 유연성이라는 목표를 공유한다는 점을 근거로 삼았다.' },
  { q: '"교사 평정만 좋아진 것 아닌가"', a: '보고자 간 불일치를 결과에 그대로 싣고, 자기보고의 보수적 반응 가능성과 평정자 맥락 효과를 함께 논의한다. 유의한 영역만 골라 강조하지 않는다.' },
];

export default function ResultsPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">집단 결과 비교 및 통계</p>
      <h1>같은 절차, 다른 집단, 다른 결과</h1>
      <p className="page-lead">맞춤이라는 말이 수사인지 아닌지는 여기서 판가름 난다.</p>

      <IslandTabs
        tabs={[
          {
            label: '프로파일 비교',
            content: (
              <>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>집단</th>
                        <th>산출일</th>
                        <th>강점 역량</th>
                        <th>취약 역량</th>
                        <th>평균</th>
                        <th>기준 미달</th>
                        <th>권장 과정</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><b>양촌초 늘봄</b><br /><span style={{ color: '#8f9c93', fontSize: 11 }}>실험집단 · 5·6학년</span></td>
                        <td>2026-03-20</td>
                        <td>자기 관리하기<br />공감하기</td>
                        <td style={{ color: '#c4503c' }}><b>정서 인식 및 조절하기<br />긍정적 관계 맺기</b></td>
                        <td>3.66 / 5</td>
                        <td>6명</td>
                        <td>정서 · 자기</td>
                      </tr>
                      <tr>
                        <td><b>계룡보건소</b><br /><span style={{ color: '#8f9c93', fontSize: 11 }}>고위험집단 · 4~6학년</span></td>
                        <td>2026-04-07</td>
                        <td>정서 인식 및 조절하기<br />자기 관리하기</td>
                        <td style={{ color: '#c4503c' }}><b>공감하기<br />긍정적 관계 맺기</b></td>
                        <td>3.48 / 5</td>
                        <td>7명 중 5명</td>
                        <td>정서 · 동기</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="box-grid">
                  <div className="info-box info-box--coral">
                    <h4>해석할 때 꼭 붙일 단서</h4>
                    <p>
                      강점 영역은 <b>집단 안에서의 상대적 위치</b>다. 보건소는 전체 평균 자체가
                      낮으므로, 정서 인식·조절이 강점으로 나왔다고 해서 그 영역에 어려움이 없다는
                      뜻이 아니다.
                    </p>
                  </div>
                  <div className="info-box info-box--leaf">
                    <h4>두 집단이 겹친 지점</h4>
                    <p>
                      둘 다 <b>긍정적 관계 맺기</b>가 취약으로 잡혔고 두 현장 모두 최다 회기를
                      배정했다. 다루는 방식은 갈렸다. 양촌은 강점 인식과 도움 요청으로, 보건소는
                      부탁하기와 협력으로 들어갔다.
                    </p>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>배분 결과.</b> 보건소는 열 회기 중 네 회기를 긍정적 관계 맺기에, 세 회기를
                    공감하기에 배정했다. 양촌은 정서 인식 및 조절하기에 세 회기, 긍정적 관계
                    맺기에 두 회기를 배정했다.
                  </span>
                </div>
              </>
            ),
          },
          {
            label: '연구 설계',
            content: (
              <>
                <p>
                  비동등 비교집단 사전-사후 준실험설계다. 기관 단위로 집단이 구성되어
                  무선배정은 하지 않았다. 31명을 모집해 1명이 중도탈락했고 분석 대상은{' '}
                  <i>N</i> = 30이다.
                </p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>구분</th>
                        <th>실험집단(양촌초 · 셀럽)</th>
                        <th>비교집단(연무초 · 마음 레벨업)</th>
                        <th>고위험집단(계룡보건소 · 셀럽)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>완주 n</td><td>8 (5학년 7 · 6학년 1)</td><td>15 (5학년)</td><td>7 (4~6학년)</td></tr>
                      <tr><td>회기 · 시간</td><td>주 1회 40분 10회기</td><td>동일</td><td>동일</td></tr>
                      <tr><td>회기 구성 시점</td><td>사전검사 후</td><td>사전 완성</td><td>사전검사 후</td></tr>
                      <tr><td>프로파일링</td><td>적용</td><td>미적용</td><td>적용</td></tr>
                      <tr><td>변화과정 매핑</td><td>적용</td><td>미적용</td><td>적용</td></tr>
                      <tr><td>평정자</td><td>담임교사(진행 미참여)</td><td>담임교사</td><td>관찰자(연구담당자 2인 협의)</td></tr>
                      <tr><td>회기당 진행 인력</td><td>3명</td><td>2명</td><td>3명</td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>무처치 대기집단을 두지 않은 이유.</b> 회기 수와 시간이 같은 고정형
                    사회정서학습(연무초 마음 레벨업)을 비교집단으로 둬야 사회정서학습 참여
                    자체의 효과와 맞춤 구성이 더하는 효과를 나눠 볼 수 있다. 측정은 아동
                    자기보고 21문항과 교사 또는 관찰자 평정을 함께 써서 단일 출처 보고의
                    한계를 보완했다.
                  </span>
                </div>
              </>
            ),
          },
          {
            label: '결과',
            content: (
              <>
                <p>
                  무선배정이 아니라서 사전-사후 변화량을 주 분석으로 잡았다. 표본이 작아
                  비모수 검정을 썼고 효과크기는 <i>r</i> = <i>Z</i> / √<i>n</i> 으로 냈다.
                </p>
                <div className="box-grid">
                  <div className="info-box info-box--leaf">
                    <h4>실험집단 · 교사 평정</h4>
                    <p>변화량에서 전 영역과 총점이 유의했다 (<i>p</i> &lt; .01 ~ .001, <i>r</i> = .54 ~ .82).</p>
                  </div>
                  <div className="info-box">
                    <h4>실험집단 · 아동 자기보고</h4>
                    <p>정서 인식 및 조절하기, 책임있는 행동하기 두 영역에서만 유의했다.</p>
                  </div>
                  <div className="info-box info-box--leaf">
                    <h4>고위험집단</h4>
                    <p>총점 변화가 유의했고 (<i>r</i> = .83), <i>T</i>점수 기준으로 2명이 사전 하 수준에서 사후 중 수준으로 올라가 임상적 유의성이 확인되었다.</p>
                  </div>
                  <div className="info-box info-box--coral">
                    <h4>예상 못 한 결과</h4>
                    <p>비교집단의 교사 평정이 떨어졌다. 원인을 확인하지 못했으므로 프로그램 효과로 해석하지 않고, 평정자 차이와 회귀효과 가능성을 제한점에서 다룬다.</p>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>보고자 간 불일치를 어떻게 읽을 것인가.</b> 교사 평정은 전 영역이
                    움직였는데 자기보고는 두 영역만 움직였다. 초등 고학년의 자기보고가 관찰
                    가능한 행동 변화보다 보수적으로 반응했을 가능성, 교사 평정이 진행 사실을
                    몰랐더라도 학기 중 관찰 맥락의 영향을 받았을 가능성을 함께 검토한다.
                  </span>
                </div>

                <h3>아동 자기보고 정밀 비교 · 양촌(실험) vs 연무(비교)</h3>
                <p>
                  사후 아동 자기보고 5개 하위역량(정서 인식·조절, 자기관리, 공감, 긍정적 관계,
                  책임있는 행동)과 총점을 Mann-Whitney <i>U</i> 검정으로 두 집단 간 비교했다.
                </p>
                <div className="fun-note">
                  <span className="fun-note-icon">📊</span>
                  <span>
                    <b>수치는 곧 채워 넣는다.</b> 순위·검정통계량·유의확률 표는 SPSS 원본
                    출력에서 옮겨오는 중이다. 여기에는 실험집단 vs 비교집단, 5개 역량 + 총점
                    기준의 표 형태로 들어갈 예정이다.
                  </span>
                </div>
              </>
            ),
          },
          {
            label: '제한점',
            content: (
              <div className="box-grid">
                <div className="info-box">
                  <h4>설계와 표본</h4>
                  <ul>
                    <li>기관 단위로 집단을 구성해 무선배정을 하지 않았다</li>
                    <li>세 집단 모두 표본이 작아 일반화에 한계가 있다</li>
                    <li>공분산분석은 사전 동질성과 표본 조건상 주 분석으로 두지 않고 보조 언급에 그쳤다</li>
                  </ul>
                </div>
                <div className="info-box">
                  <h4>측정과 평정</h4>
                  <ul>
                    <li>고위험집단은 담임 접근이 안 돼 연구담당자 2인이 협의 평정했다. 독립 평정이 아니고 평정자가 진행자를 겸했다</li>
                    <li>두 평정자의 관찰 기간이 4개월과 1년으로 달랐다</li>
                    <li>회기별 축약형 검사는 타당화되지 않은 도구다</li>
                  </ul>
                </div>
                <div className="info-box">
                  <h4>실행</h4>
                  <ul>
                    <li>회기당 진행 인력이 실험집단 3명, 비교집단 2명으로 달랐다</li>
                    <li>사전검사 후 구성한 회기를 운영 중에 재조정하지는 않았다</li>
                    <li>비교집단 교사 평정이 떨어진 원인을 확인하지 못했다</li>
                  </ul>
                </div>
                <div className="info-box">
                  <h4>연구문제의 성격</h4>
                  <ul>
                    <li>고위험집단은 단일집단 사전-사후 설계라 결과가 탐색적이다</li>
                    <li>맞춤 구성의 어떤 요소가 효과에 기여했는지는 이 설계로 분해할 수 없다</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            label: '예상 질문',
            content: (
              <>
                <div className="box-grid">
                  {FAQ.map((f) => (
                    <div className="info-box info-box--sun" key={f.q}>
                      <h4>{f.q}</h4>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>남은 과제.</b> 맞춤 구성의 어떤 요소가 효과에 기여했는지 분해하는 설계,
                    그리고 운영 도중 회기를 다시 조정하는 절차. 보편 지원에 반응하지 않는
                    아동을 위한 표적·집중 지원 단계로의 연결도 여기서 이어진다.
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
