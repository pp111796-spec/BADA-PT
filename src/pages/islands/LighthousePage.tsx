import IslandTabs from '../../components/IslandTabs';

const PIPELINE = [
  { no: '01', title: '사전검사', text: '한국형 사회정서역량 척도(아동·교사용) 실시, T점수 산출', accent: true },
  { no: '02', title: '비식별 통계 입력', text: '집단 평균·표준편차·사분위와 문항별 분포만 입력. 이름·생년월일은 넣지 않음' },
  { no: '03', title: '프로파일 분석', text: '강점 영역, 취약 영역, 위험도, 기준 미달 인원 산출' },
  { no: '04', title: '개입 행렬 매핑', text: '6과정 × 5요인 조합에서 회기별 목표 배치' },
  { no: '05', title: '회기 골격 생성', text: '회기별 주제·목표 역량·개입 과정·주 기법 초안' },
  { no: '06', title: '연구자 확정', text: '현장 맥락과 집단 특성에 맞게 기법·활동 재구성 후 확정', accent: true },
];

export default function LighthousePage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 4 · AI 설계 절차</p>
      <h1>BADA SESSION 절차</h1>
      <p className="page-lead">입력은 개인 데이터가 아니라 집단 통계다. 아동은 이 시스템을 직접 쓰지 않는다.</p>

      <IslandTabs
        tabs={[
          {
            label: '파이프라인',
            content: (
              <>
                <div className="pipeline">
                  {PIPELINE.map((s) => (
                    <div className={`pipeline-step${s.accent ? ' accent' : ''}`} key={s.no}>
                      <b>{s.no} {s.title}</b>
                      <span>{s.text}</span>
                    </div>
                  ))}
                </div>
                <div className="box-grid">
                  <div className="info-box info-box--sun">
                    <h4>회기 배분 원칙 — 3-3-2-1-1</h4>
                    <p>
                      취약 1위 역량에 3회기, 2위에 3회기, 3위에 2회기, 나머지 두 역량에 각
                      1회기. 취약 순위에 비례해 나누되 다섯 역량을 모두 최소 한 번은 다룬다.
                      강점 역량을 빼지 않는 이유는 성공 경험으로 동기를 유지하기 위해서다.
                    </p>
                  </div>
                  <div className="info-box">
                    <h4>프로그램 유형 세 가지</h4>
                    <p><b>집단형(class)</b> 학급 평균으로 강약 순위를 매기고 규칙 기반으로 회기를 배분한다. 양촌이 여기에 해당한다.</p>
                    <p><b>개인형(individual)</b> 아동·교사·부모 3자 점수를 비교 해석하고 기법 후보를 동적으로 고른다.</p>
                    <p><b>혼합형(mixed)</b> 집단 세션과 개인 세션을 함께 관리한다.</p>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>정확히 말하면.</b> 집단형은 학급 단위 통계만 다루므로 개인 식별 정보를
                    쓰지 않고, 생성형 해석 단계 없이 규칙 기반으로 골격을 뽑은 뒤 연구자가
                    확정한다. 개인정보 보호와 재현 가능성을 같이 확보하려고 이렇게 나눴다.
                  </span>
                </div>
              </>
            ),
          },
          {
            label: 'AI와 연구자의 손',
            content: (
              <>
                <p>"AI가 뭘 했느냐"는 한 문장으로 답하면 반드시 오해가 생긴다. 세 층으로 나눠 답한다.</p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>누가</th>
                        <th>무엇을</th>
                        <th>남은 산출물</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span className="keyword-chip keyword-chip--small">연구자 · 사전</span></td>
                        <td>5요인 × 6과정 참고자료 구축(30셀 코드북, 대각 7셀). 취약 역량 선정 기준과 회기 배분 원칙(3-3-2-1-1)을 프롬프트로 작성</td>
                        <td>코드북, 프롬프트</td>
                      </tr>
                      <tr>
                        <td><span className="keyword-chip keyword-chip--small">BADA SESSION</span></td>
                        <td>비식별 집단통계와 프롬프트, 참고자료를 API로 전달해 집단 취약 역량·10회기 배분·관련 변화과정을 산출</td>
                        <td>회기별 목표 역량 × 과정 배치(설계 골격)</td>
                      </tr>
                      <tr>
                        <td><span className="keyword-chip keyword-chip--small">연구자 · 사후</span></td>
                        <td>산출안 검토와 확정. 회기 목표, 기법, 놀이·역할극, 활동지, 진행 대본을 처음부터 개발</td>
                        <td>회기 매뉴얼, 활동지, PPT, 대본</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="warn-note">
                  <span className="warn-note-icon">⚠️</span>
                  <span>
                    <b>쓰면 안 되는 표현 두 가지.</b>
                    <br />
                    <span className="strike">"AI가 회기 초안과 기법을 작성했다"</span> — AI는
                    판단의 기초자료를 만들었고 프로그램은 연구자가 썼다.
                    <br />
                    <span className="strike">"각 학생의 반응을 실시간 분석했다"</span> — 집단
                    단위 설계라서 개인 단위 분석이 아니다.
                  </span>
                </div>
                <h3>개인정보 보호 절차</h3>
                <div className="box-grid">
                  <div className="info-box"><p>입력 자료를 집단 단위 통계치와 문항별 점수 분포로 한정했다. 이름과 생년월일은 넣지 않았다.</p></div>
                  <div className="info-box"><p>산출된 초안은 연구자가 전부 검토·수정한 뒤 적용했다. 산출물이 그대로 쓰인 회기는 없다.</p></div>
                  <div className="info-box"><p>회기 중 관찰 기록과 검사 자료는 암호화 저장장치에 보관했다.</p></div>
                  <div className="info-box"><p>학부 과정 연구보조원은 비식별 자료에만 접근했고 검사 해석에 관여하지 않았다.</p></div>
                </div>
              </>
            ),
          },
        ]}
      />
    </article>
  );
}
