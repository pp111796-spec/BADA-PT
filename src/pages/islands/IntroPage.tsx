import IslandTabs from '../../components/IslandTabs';

const DOMAINS = [
  { icon: '🧠', label: '인지' },
  { icon: '🤝', label: '사회성' },
  { icon: '💗', label: '정서' },
  { icon: '🌱', label: '생활습관' },
  { icon: '🧭', label: '진로발달' },
  { icon: '🏃', label: '신체' },
];

export default function IntroPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 1 · 연구 시작 및 바다 소개</p>
      <h1>BADA: 여섯 영역 통합 연구</h1>
      <p className="page-lead">
        인지, 사회성, 정서, 생활습관, 진로발달, 신체 여섯 영역을 통합적으로 다뤄 아동
        발달을 지원하는 연구다.
      </p>

      <IslandTabs
        tabs={[
          {
            label: 'BADA란?',
            content: (
              <div className="keyword-grid">
                {DOMAINS.map((d) => (
                  <div className="keyword-card" key={d.label}>
                    <span className="keyword-icon">{d.icon}</span>
                    <span className="keyword-label">{d.label}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            label: 'BADA 구상',
            content: (
              <>
                <h3>2025년 8월, 랩미팅에서 시작</h3>
                <p>
                  처음 만들려던 것은 프로그램이 아니라 검사였다. BADA(Balanced Assessment for
                  Development and Adjustment)는 신체·정서·인지·사회·수면·식습관 여섯 영역을 한
                  번에 보는 아동 건강 통합평가 도구다. 정서와 신체를 따로 재던 관행을 묶어보자는
                  취지였고, 발달적 연쇄효과와 생태학적 체계 모형을 이론 배경으로 삼았다. WHO
                  GSED와 HALDO를 참조 프레임으로 두었다.
                </p>
                <div className="box-grid">
                  <div className="info-box info-box--sea">
                    <h4>그때 세운 원칙 ①</h4>
                    <p>
                      측정에서 끝내지 않는다. 발표 목차 6번이 "개입 효과성 비교 연구 및 프로그램
                      구성 방향"이었다. 재는 것과 바꾸는 것을 처음부터 붙여 놓았다.
                    </p>
                  </div>
                  <div className="info-box info-box--sea">
                    <h4>그때 세운 원칙 ②</h4>
                    <p>
                      평가는 맞춤 목표를 세우기 위한 것이다. 절대 기준과 상대 기준을 함께 두고
                      아동별 단기·장기 목표를 잡을 수 있어야 한다고 정리했다.
                    </p>
                  </div>
                </div>
                <h3>왜 여섯 영역을 다 안 했나</h3>
                <p>
                  여섯 영역 통합 도구는 타당화에만 몇 년이 걸린다. 반면 사회정서 영역은 국가
                  수준에서 타당화된 진단도구가 이미 있었고, 2026학년도 사회정서교육 확대라는
                  현장 수요도 맞물렸다. 그래서 도구를 새로 만드는 대신 <b>이미 있는 측정을 개입
                  설계로 옮기는 절차</b>를 만드는 쪽으로 방향을 틀었다. 그 절차의 이름이 BADA
                  SESSION이고, 그 절차로 만든 프로그램이 셀럽이다.
                </p>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>이름의 뜻.</b> SEL-UP은 Social-Emotional Learning에 향상(up)을 붙인
                    것이다. 아동에게는 "마음 셀럽이 되는 퀘스트"라는 게임 정체성으로 제시했다.
                    발음이 셀럽이라 아이들이 첫 회기부터 프로그램 이름을 외웠다.
                  </span>
                </div>
              </>
            ),
          },
          {
            label: '왜 맞춤이어야 했나',
            content: (
              <>
                <h3>보편 프로그램의 한계</h3>
                <div className="box-grid">
                  <div className="info-box info-box--leaf">
                    <h4>이미 확인된 것</h4>
                    <p>
                      학교기반 사회정서학습의 평균 효과는 메타분석으로 반복 확인되었다(Durlak 등,
                      2011). 국내 메타분석에서도 회기 수와 밀도가 충분할 때 효과가 커졌다(박현영·채수은,
                      2022).
                    </p>
                  </div>
                  <div className="info-box info-box--coral">
                    <h4>그래도 남는 것</h4>
                    <ul>
                      <li>출발선이 이질적이다. 초등학생 역량 유형이 네 계층으로 갈린다(나우열 등, 2023).</li>
                      <li>반응도 이질적이다. 위험군에서만 효과가 나온 사례도 있다(Cheng &amp; Humphrey, 2025).</li>
                      <li>그런데 회기는 아이들을 만나기 전에 이미 완성되어 있다.</li>
                    </ul>
                  </div>
                </div>
                <h3>그래서 정한 설계 과제</h3>
                <p>
                  회기 내용을 운영 중에 손보는 방식으로는 부족하다고 봤다. 필요한 것은{' '}
                  <b>무엇을 겨냥할지를 참여자 데이터로 먼저 정하는 절차</b>, 그리고 그 판단 기준을
                  문서로 남겨 다른 집단에서도 같은 방식으로 돌릴 수 있게 만드는 일이었다.
                </p>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>한 문장으로.</b> 사전 프로파일에서 취약 역량을 확인하고, 5역량 × 6과정
                    개입 행렬에 대입해 회기가 겨냥할 지점을 정한 뒤, 그 지점에 맞는 기법과 활동은
                    연구자가 직접 만들었다.
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
