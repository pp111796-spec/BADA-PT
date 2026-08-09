import IslandTabs from '../../components/IslandTabs';

interface SessionRow {
  no: string;
  topic: string;
  competency: string;
  process: string;
  activity: string;
}

const SESSIONS: SessionRow[] = [
  { no: '01', topic: '첫 만남 — 나를 소개하는 마음 셀럽', competency: '도입', process: '자기', activity: '라포, 규칙 합의, 사전검사, 셀럽 카드(역량 자기선택)' },
  { no: '02', topic: '부탁하면 가까워진다', competency: '긍정적 관계', process: '동기', activity: '실뭉치 연결 시각화, 비폭력대화 4단계 부탁 문장(Rosenberg, 2003), 수준별 역할극, 연결 카드' },
  { no: '03', topic: '내 날갯짓이 우리를 바꾼다', competency: '책임행동', process: '행동', activity: '공동체 기여 행동 탐색, 파장 화살표, 기여 유무 2장면 역할극, 실천 계획서' },
  { no: '04', topic: '내 마음의 감독관, 나!', competency: '자기관리', process: '인지', activity: 'NOW/FUTURE Brain 심리교육, 실행지도 if-then(Gollwitzer, 1999), 뇌 배틀 4스테이션 순환' },
  { no: '05', topic: '내가 나를 가라앉히기', competency: '정서인식·조절', process: '자기', activity: '풍선 배구로 신체 활성화, 신호 조건화, 무드미터, 나만의 암호 플랜. TIPP(Linehan, 1993)' },
  { no: '06', topic: '네 마음이 느껴져!', competency: '공감', process: '정서', activity: '공감과 위로 구별, "그랬구나, ~했겠다" 정서 반영 공식, 짝 나눔' },
  { no: '07', topic: '마음 풀기, 마음 열기', competency: '긍정적 관계', process: '정서', activity: '공통점 빙고(자유 이동), 우리 연결 지도, 소그룹 나눔' },
  { no: '08', topic: '믿음의 안내자', competency: '책임행동', process: '동기', activity: '내비게이션·핸들·안전벨트 3단계 심리교육, 협동 풍선 옮기기, 안대 신뢰 활동' },
  { no: '09', topic: '공감하는 셀럽', competency: '공감', process: '행동', activity: '공감의 3구조 심리교육, 입꼬리 실험, 의자뺏기 공감게임, 공감 카드 만들기' },
  { no: '10', topic: '나는 빛나는 셀럽 · 종결', competency: '긍정적 관계', process: '인지', activity: '관계 자동사고 재구성, 셀럽 성장 지도, 관계 한 줄 편지, 관계 약속 카드, 사후검사' },
];

const PRINCIPLES = [
  { title: '① 체험 먼저, 이해 나중', text: '일반 학급용은 심리교육으로 개념을 먼저 준다. 여기서는 순서를 뒤집어 몸으로 먼저 겪게 하고 그 경험을 이론과 연결했다. 각성 상태에서는 인지적 설명이 흡수되지 않기 때문이다(Arnsten, 2015). 5회기가 대표적이다. 풍선 배구로 몸을 올린 뒤 신호로 진정을 경험하게 하고, 그다음에 "방금 한 게 정서 인식이고 정서 조절"이라고 이름 붙였다.' },
  { title: '② 활동을 짧게 끊고 몸을 움직인다', text: '한 활동을 길게 끌지 않고 3~4분 단위로 끊어 이동을 넣었다. 4회기 뇌 배틀 스테이션은 교실 네 귀퉁이에 자기 관리 하위문항에 대응하는 과제를 배치하고 순환하게 한 구조다. 이동 자체가 전환 신호가 되고, 과제별 성공 기준을 낮춰 완수 경험을 확보했다.' },
  { title: '③ 행동과 결과 사이를 좁힌다', text: '바람직한 행동이 나오면 1초 안에 구체적으로 말해줬다. "잘했어" 대신 "네가 속도를 맞춰줬을 때 풍선이 안 떨어졌다"처럼 행동과 결과를 바로 붙이는 방식이다.' },
  { title: '④ 전담 배치로 개별 지원', text: '회기마다 그 회기 목표 역량 점수가 가장 낮은 두 명을 보조진행자 1에게 전담 배정했다. 대신 해주는 게 아니라 언어화를 돕는다. 아동이 자기 상태를 말로 못 낼 때 선택지를 두 장으로 좁혀 주고, 고르면 그걸 반영해 되돌려준다. 정서에 이름을 붙이는 과정 자체가 정서 처리 효율을 높인다는 근거를 따랐다(Lieberman 등, 2007).' },
  { title: '⑤ 짝과 좌석을 데이터로 정한다', text: '짝을 임의로 정하지 않고 문항 점수와 관계 이력으로 사전 확정했다. 목표 문항 점수가 낮은 아동과 높은 아동을 묶어 또래 모델링이 일어나게 하고, 또래 관계가 좁은 아동끼리 묶어 부담 낮은 연결을 시도하게 했다. 갈등 이력이 확인된 조합은 전 회기에 걸쳐 예외 없이 분리했다.' },
  { title: '⑥ 안전 절차와 참여 자율성', text: '신체 활동 회기에서는 바닥에 아동별 원형 구역을 표시했다. 충돌 위험이 큰 아동에게는 넓은 구역을, 이탈 위험이 큰 아동에게는 진행자와 같이 쓰는 구역을 줬다. 과잉 흥분 조짐이 보이면 정해진 신호로 전체를 즉시 멈추고 진정 절차로 넘어갔다. 발표와 자기 개방, 신체 활동 참여는 모두 선택이고 관찰 참여도 참여로 인정했다. 결석이 잦은 아동이 돌아오면 지난 회기를 확인하는 질문을 하지 않고 부담 낮은 역할부터 줬다.' },
];

export default function WavePage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 7 · 계룡보건소 프로그램</p>
      <h1>계룡보건소 정서행동 고위험집단</h1>
      <p className="page-lead">
        취약 영역이 공감하기와 긍정적 관계 맺기로 잡혀, 양촌과 순서도 기법도 다르게 갔다.
      </p>

      <IslandTabs
        tabs={[
          {
            label: '회기 구성',
            content: (
              <>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>회기</th>
                        <th>주제</th>
                        <th>역량</th>
                        <th>과정</th>
                        <th>주 활동 · 근거</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SESSIONS.map((s) => (
                        <tr key={s.no}>
                          <td className="n">{s.no}</td>
                          <td>{s.topic}</td>
                          <td>{s.competency}</td>
                          <td>{s.process}</td>
                          <td>{s.activity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>회기별 축약형 반복측정.</b> 매 회기 끝 5분에 그 회기가 겨냥한 하위요인
                    문항만 다시 실시하고, 산출한 <i>T</i>점수를 다음 회기의 개별 지원 우선순위와
                    짝·좌석 배치에 반영했다. 문항 수가 적고 회기 직후에 쟀다는 제약이 있어
                    운영용 형성 자료로만 썼고, 효과 검증에는 사전·사후 전체 문항 검사만
                    사용했다.
                  </span>
                </div>
              </>
            ),
          },
          {
            label: '고위험집단 적용 원칙',
            content: (
              <>
                <p>같은 프로그램을 일반 학급에 쓸 때와 이 집단에 쓸 때 무엇이 달라졌는지를 여섯 가지로 정리했다.</p>
                <div className="box-grid">
                  {PRINCIPLES.map((p) => (
                    <div className="info-box info-box--sea" key={p.title}>
                      <h4>{p.title}</h4>
                      <p>{p.text}</p>
                    </div>
                  ))}
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>집단 특성.</b> 초등 4~6학년 7명. 지역사회 정신건강기관 의뢰, 다수가
                    주의력 관련 어려움을 동반한다. 학년이 섞였고 학교도 달라 사전 관계망이
                    성글다. 일부 아동 사이에 이전 학년 갈등 이력이 있어 짝 구성에 제약이 있었고
                    결석 변동도 컸다.
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
