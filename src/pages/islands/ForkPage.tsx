import IslandTabs from '../../components/IslandTabs';

interface DraftRow {
  no: number;
  goal: string;
  process: string;
  draft: string;
  final: string;
  status: '수정' | '유지';
}

const DRAFT_ROWS: DraftRow[] = [
  { no: 1, goal: '공감하기 → 도입으로 옮김', process: '정서', draft: '감정 알아차리기, 감정 몸 지도', final: '라포, 규칙 합의, 사전검사, 셀럽 카드', status: '수정' },
  { no: 2, goal: '긍정적 관계 맺기', process: '동기', draft: '성장 일지, 성장 나무', final: '실뭉치 연결, 비폭력대화 4단계 부탁 문장, 수준별 역할극', status: '유지' },
  { no: 3, goal: '책임있는 행동하기', process: '행동', draft: '행동 활성화 스케줄', final: '기여 행동 탐색, 파장 화살표, 2장면 역할극', status: '유지' },
  { no: 4, goal: '자기 관리하기', process: '인지', draft: '관점 취하기, 인형극', final: 'NOW/FUTURE Brain, 실행지도 if-then, 뇌 배틀 4스테이션', status: '유지' },
  { no: 5, goal: '정서 인식 및 조절하기', process: '자기', draft: '자기자비 명상, 나비 포옹', final: '풍선 배구, 신호 조건화, 무드미터, 나만의 암호 플랜', status: '유지' },
  { no: 6, goal: '공감하기', process: '주의 → 정서', draft: '고통 감내 기술, 감정 응급처치 키트', final: '공감과 위로 구별, "그랬구나 ~했겠다" 반영 공식, 짝 나눔', status: '수정' },
  { no: 7, goal: '긍정적 관계 맺기', process: '정서', draft: '감정 수용, 감정 파도 타기', final: '공통점 빙고, 우리 연결 지도, 소그룹 나눔', status: '유지' },
  { no: 8, goal: '책임있는 행동하기', process: '동기', draft: '전념 행동 계획, 가치 히어로 미션', final: '내비게이션·핸들·안전벨트 심리교육, 협동 풍선 옮기기, 믿음의 안내자', status: '유지' },
  { no: 9, goal: '공감하기', process: '행동', draft: '이완 훈련, 동물 비유', final: '공감의 3구조, 입꼬리 실험, 의자뺏기 공감게임, 공감 카드', status: '유지' },
  { no: 10, goal: '긍정적 관계 맺기', process: '인지', draft: '오감 접지 기법', final: '관계 자동사고 재구성, 셀럽 성장 지도, 관계 한 줄 편지, 사후검사', status: '유지' },
];

export default function ForkPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 5 · 맞춤형 결과 비교</p>
      <h1>같은 절차, 정반대의 결과</h1>
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
            label: '초안 vs 확정안',
            content: (
              <>
                <p>계룡보건소 사례로 본다. 골격은 거의 그대로 갔고, 내용은 전부 다시 짰다.</p>
                <div className="stat-row">
                  <div className="stat-card">
                    <span className="stat-value">9 / 10</span>
                    <span className="stat-label">배치를 그대로 둔 회기</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">2</span>
                    <span className="stat-label">배치를 고친 회기 (1·6회기)</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-value">10 / 10</span>
                    <span className="stat-label">기법과 활동을 다시 짠 회기</span>
                  </div>
                </div>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>회기</th>
                        <th>목표 역량</th>
                        <th>과정</th>
                        <th>초안 기법</th>
                        <th>확정 활동</th>
                        <th>배치</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DRAFT_ROWS.map((r) => (
                        <tr key={r.no}>
                          <td className="n">{r.no}</td>
                          <td>{r.goal}</td>
                          <td>{r.process}</td>
                          <td>{r.draft}</td>
                          <td>{r.final}</td>
                          <td>
                            <span
                              className="keyword-chip keyword-chip--small"
                              style={
                                r.status === '수정'
                                  ? { background: '#ffe1da', color: '#c4503c' }
                                  : { background: '#dff5e2', color: '#2c7a45' }
                              }
                            >
                              {r.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="box-grid">
                  <div className="info-box info-box--coral">
                    <h4>1회기를 옮긴 이유</h4>
                    <p>초안은 첫 시간부터 본 활동을 배치했다. 사전검사 실시와 라포 형성이 먼저여서 도입 회기로 옮겼다.</p>
                  </div>
                  <div className="info-box info-box--coral">
                    <h4>6회기 과정을 바꾼 이유</h4>
                    <p>초안은 공감하기를 주의 과정으로 잡아 고통 감내를 배정했다. 고통 감내는 5회기에서 이미 신체 조절로 다뤘고, 공감에 필요한 것은 타인 정서의 인식과 반영이라 정서 과정으로 바꿨다.</p>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>기법을 전부 갈아엎은 이유.</b> 초안 기법 상당수가 개인 상담이나 조용한
                    학급을 전제했다. 감정 몸 지도, 인형극, 자기자비 명상, 이완 훈련 같은 것들이다.
                    주의력 어려움이 있는 아동이 다수인 7명 소집단에 그대로 쓸 수 없었다. 양촌에서도
                    같은 이유로 늘봄 방과후 맥락에 맞춰 셀럽·퀘스트 게임화 프레임과 매체(영상·만화·보드게임)로
                    다시 짰다.
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
