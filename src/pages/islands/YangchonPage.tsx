import IslandTabs from '../../components/IslandTabs';

interface SessionRow {
  no: string;
  topic: string;
  competency: string;
  process: string;
  technique: string;
  sheet: string;
}

const SESSIONS: SessionRow[] = [
  { no: '01', topic: '나를 소개하는 마음 셀럽', competency: '도입·라포', process: '—', technique: '라포 형성, 정서 심리교육 도입(인사이드아웃 매체)', sheet: '나의 셀럽 카드' },
  { no: '02', topic: '강점 찾기 (긍정적 관계 ①)', competency: '긍정적 관계', process: '자기', technique: '성격강점 카드(character strengths)', sheet: '나는 어떤 셀럽 · 강점목록표' },
  { no: '03', topic: '규칙 탐정단', competency: '책임행동', process: '동기', technique: '규칙 내면화(자기결정), 인지적 유연성, 만화 매체', sheet: '나는 책임있는 셀럽' },
  { no: '04', topic: '공감하기', competency: '공감', process: '정서·인지', technique: '공감과 동정 구분, 공감 3단계', sheet: '나는 공감하는 셀럽' },
  { no: '05', topic: '자기 관리하기', competency: '자기관리', process: '주의', technique: '구현의도 if-then(Gollwitzer, 1999), 자기모니터링', sheet: '셀럽의 관리 비법 · 다이어리' },
  { no: '06', topic: '마음을 읽는 셀럽 (정서 ①)', competency: '정서인식·조절', process: '정서', technique: '감정 명명(affect labeling), 감정 온도계, 정서 정상화', sheet: '나는 마음을 읽는 셀럽' },
  { no: '07', topic: '생각뒤집기 (정서 ②)', competency: '정서인식·조절', process: '인지', technique: '인지 재구조화(Beck, 1976) 후 탈융합(Hayes 등, 2006) 순차 적용', sheet: '셀럽의 생각뒤집기' },
  { no: '08', topic: '도움 요청하기 (긍정적 관계 ②)', competency: '긍정적 관계', process: '정서', technique: '관계기술 명시적 교수(CASEL), 정서 수용, 재프레이밍·모델링', sheet: '도움 요청 감정일지' },
  { no: '09', topic: '내 마음의 소화기 (정서 ③)', competency: '정서인식·조절', process: '동기', technique: '가치기반 동기, 고통 감내(Linehan, 1993), 행동 활성화', sheet: '내 마음의 소화기 · 체크리스트' },
  { no: '10', topic: '성장기록 · 종결', competency: '책임행동', process: '동기·전념', technique: '책임있는 의사결정 통합, 전념행동·if-then, 성장 마인드셋', sheet: '셀럽의 성장기록' },
];

export default function YangchonPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 6 · 양촌초 프로그램</p>
      <h1>양촌초 늘봄 실험집단</h1>
      <p className="page-lead">
        취약 두 영역인 정서 인식 및 조절하기와 긍정적 관계 맺기에 회기를 최다 배정했다.
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
                      <th>역량</th>
                      <th>과정</th>
                      <th>주 기법 · 근거</th>
                      <th>활동지</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SESSIONS.map((s) => (
                      <tr key={s.no}>
                        <td className="n">{s.no}</td>
                        <td>{s.topic}</td>
                        <td>{s.competency}</td>
                        <td>{s.process}</td>
                        <td>{s.technique}</td>
                        <td>{s.sheet}</td>
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
                <div className="box-grid">
                  <div className="info-box">
                    <h4>진행 인력</h4>
                    <p>대학원생 2명이 학년별로 순차 진행하고(동시 아님), 학부생 보조 2명이 두 학년 회기에 모두 참여했다. 회기당 주진행 1명에 보조 2명이다.</p>
                  </div>
                  <div className="info-box">
                    <h4>게임화 프레임</h4>
                    <p>회기마다 퀘스트를 배치하고 셀럽 노트에 스탬프를 모으는 구조로 운영했다. 회기 주제를 아동 언어로 옮긴 활동지 이름("나는 어떤 셀럽")이 프레임을 유지하는 장치였다.</p>
                  </div>
                  <div className="info-box">
                    <h4>매뉴얼과 대본</h4>
                    <p>회기마다 목표, 겨냥 역량과 과정, 기법의 임상 근거, 시간 배분, 진행자 대본, 예상 아동 반응과 대응, 보조진행자별 지원 대상을 문서로 남겼다. 진행자가 바뀌어도 같은 회기를 다시 돌릴 수 있게 하는 것이 목적이다.</p>
                  </div>
                  <div className="info-box">
                    <h4>회기별 축약형 10문항</h4>
                    <p>하위요인별 요인부하량 상위 2문항씩으로 구성했다. 타당화되지 않은 도구라서 효과 검증에는 쓰지 않고 운영 점검용 형성 자료로만 썼다.</p>
                  </div>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>가정 연계.</b> 회기마다 가정통신문을 보내 그 회기에서 다룬 역량과 집에서
                    이어갈 연습을 안내했다.
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
