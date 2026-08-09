import type { ReactNode } from 'react';
import IslandTabs from '../../components/IslandTabs';

const FAQ = [
  { q: '"결국 AI가 만든 것 아닌가"', a: 'AI가 낸 것은 회기별 목표 역량과 겨냥 과정의 배치, 즉 설계 골격이다. 기법과 활동은 열 회기 모두 연구자가 만들었고, 보건소에서는 배치도 두 회기를 고쳤다.' },
  { q: '"맞춤이라고 할 만한 차이가 실제로 있었나"', a: '두 집단의 취약 역량이 정반대로 나왔고 그 결과 회기 순서와 기법이 갈렸다.' },
  { q: '"왜 개인이 아니라 집단 단위인가"', a: '학급·소집단 대면 운영이 전제였고, 개인 식별 정보를 시스템에 넣지 않기 위해 집단 요약통계만 입력했다. 개인 단위 적응형이라고 주장하지 않는다.' },
  { q: '"기법 선택이 자의적이지 않나"', a: '30셀 코드북을 미리 만들어 뒀기 때문에 취약 역량과 겨냥 과정이 정해지면 기법 후보가 자동으로 좁혀진다. 코드북과 배분 원칙이 자의성을 막는 장치다.' },
  { q: '"인지행동 기법을 과정기반 프로그램에 쓴 건 모순 아닌가"', a: '양촌 7회기는 인지 재구조화를 주 개입으로 명시하고 탈융합을 뒤에 순차 배치했다. 두 기법이 인지적 유연성이라는 목표를 공유한다는 점을 근거로 삼았다.' },
  { q: '"교사 평정만 좋아진 것 아닌가"', a: '보고자 간 불일치를 결과에 그대로 싣고, 자기보고의 보수적 반응 가능성과 평정자 맥락 효과를 함께 논의한다. 유의한 영역만 골라 강조하지 않는다.' },
];

type FlagKind = 'yes' | 'watch' | 'no' | 'down';

const FLAG_STYLE: Record<FlagKind, { background: string; color: string }> = {
  yes: { background: '#dff5e2', color: '#2c7a45' },
  watch: { background: '#fff3cf', color: '#a8791a' },
  no: { background: '#eceff1', color: '#6b7280' },
  down: { background: '#ffe1da', color: '#c4503c' },
};

function Flag({ kind, children }: { kind: FlagKind; children: ReactNode }) {
  return (
    <span className="keyword-chip keyword-chip--small" style={FLAG_STYLE[kind]}>
      {children}
    </span>
  );
}

export default function ResultsPage() {
  return (
    <article className="island-page">
      <p className="page-eyebrow">STEP 9 · 집단 결과 비교 및 통계</p>
      <h1>집단별 결과 비교</h1>
      <p className="page-lead">양촌초, 연무초, 계룡보건소 세 집단의 사전·사후 결과를 비교했다.</p>

      <IslandTabs
        tabs={[
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
            label: '아동 자기보고',
            content: (
              <>
                <p className="page-eyebrow">셀럽 프로그램 · 아동 사회정서역량 사전–사후 결과</p>
                <h3>어디에서 변화가 있었고, 어디에서 없었나</h3>
                <p>
                  아동 30명이 참여한 세 집단의 사전·사후 검사 결과다. 셀럽 프로그램을 받은 두
                  집단은 사회정서역량 전체 점수가 뚜렷하게 올랐고, 일반 SEL 프로그램을 받은
                  집단은 거의 변하지 않았다.
                </p>
                <div className="keyword-chip-row keyword-chip-row--small">
                  <span className="keyword-chip keyword-chip--small">참여 아동 30명</span>
                  <span className="keyword-chip keyword-chip--small">사전–사후 2시점</span>
                  <span className="keyword-chip keyword-chip--small">자기보고 + 교사평정</span>
                  <span className="keyword-chip keyword-chip--small">SPSS 27 · 비모수 검정</span>
                </div>

                <h3 style={{ marginTop: 28 }}>01 · 한눈에 — 세 문장으로 정리하면</h3>
                <div className="box-grid">
                  <div className="info-box info-box--leaf">
                    <h4>효과 확인 · 셀럽을 받은 아동은 전체 역량이 올랐다</h4>
                    <p>
                      학교 셀럽 집단은 21문항 합산 점수가 <b>78.5 → 90.4점</b>으로 올랐고, 8명
                      중 7명이 상승했다. 보건소 셀럽 집단은 <b>73.1 → 86.0점</b>, 7명 전원이
                      상승했다.
                    </p>
                  </div>
                  <div className="info-box">
                    <h4>차이 확인 · 같은 기간 일반 SEL 집단은 거의 그대로였다</h4>
                    <p>
                      일반 SEL 집단의 전체 점수 변화는 <b>+2.7점</b>에 그쳤고, 15명 중 7명이
                      오르고 7명이 내려 방향이 일정하지 않았다.
                    </p>
                  </div>
                  <div className="info-box">
                    <h4>가장 큰 차이 · 정서 인식·조절과 공감</h4>
                    <p>
                      두 집단의 <b>변화폭 자체</b>를 직접 비교했을 때, 이 두 영역에서만
                      통계적으로 의미 있는 차이가 나타났다.
                    </p>
                  </div>
                  <div className="info-box info-box--sun">
                    <h4>함께 볼 것 · 긍정적 관계 맺기는 학교 셀럽에서만 무변화</h4>
                    <p>
                      같은 영역에서 보건소 셀럽 집단은 가장 큰 폭으로 올랐다. 세팅에 따라
                      결과가 갈린 지점이다.
                    </p>
                  </div>
                </div>

                <h3 style={{ marginTop: 28 }}>02 · 누가 참여했나</h3>
                <div className="participant-grid">
                  <div className="participant-card accent-yes">
                    <div className="participant-n">8<span>명</span></div>
                    <div className="participant-name">학교 · 셀럽</div>
                    <div className="participant-sub">실험군</div>
                    <p className="participant-desc">학교 세팅에서 셀럽 프로그램에 참여한 아동. 중도에 그만둔 아동을 제외한 끝까지 참여한 8명의 자료다.</p>
                  </div>
                  <div className="participant-card accent-none">
                    <div className="participant-n">15<span>명</span></div>
                    <div className="participant-name">학교 · 일반 SEL</div>
                    <div className="participant-sub">비교군</div>
                    <p className="participant-desc">같은 기간 기존의 보편적 사회정서학습 프로그램에 참여한 아동. 셀럽의 비교 기준이 되는 집단이다.</p>
                  </div>
                  <div className="participant-card accent-watch">
                    <div className="participant-n">7<span>명</span></div>
                    <div className="participant-name">보건소 · 셀럽</div>
                    <div className="participant-sub">고위험군</div>
                    <p className="participant-desc">보건소 세팅에서 셀럽에 참여한 아동. 이 집단만 교사평정 자료를 함께 확보했다. 비교 집단은 없다.</p>
                  </div>
                </div>
                <p style={{ fontSize: 12.5, color: '#8f9c93', marginTop: 12 }}>
                  아동이 직접 응답한 사회정서역량 척도(5개 영역, 21문항)를 프로그램 전후에 각각
                  실시했다. 참여 인원이 적어 평균 비교 대신 순위를 이용하는 비모수 검정을
                  사용했다.
                </p>

                <h3 style={{ marginTop: 28 }}>03 · 영역별 결과</h3>
                <p>
                  값은 사후−사전 문항당 평균 점수 차이다. 색이 들어간 칸은 통계적으로 의미
                  있는 변화가 확인된 곳이다.
                </p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>영역</th>
                        <th>학교 · 셀럽</th>
                        <th>학교 · 일반 SEL</th>
                        <th>보건소 · 셀럽</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>정서 인식·조절</td>
                        <td>+4.50 <Flag kind="yes">변화 확인</Flag></td>
                        <td>+0.54 <Flag kind="no">변화 없음</Flag></td>
                        <td>+2.57 <Flag kind="watch">판단 보류</Flag></td>
                      </tr>
                      <tr>
                        <td>자기관리</td>
                        <td>+3.25 <Flag kind="yes">변화 확인</Flag></td>
                        <td>+0.60 <Flag kind="no">변화 없음</Flag></td>
                        <td>+2.43 <Flag kind="watch">판단 보류</Flag></td>
                      </tr>
                      <tr>
                        <td>공감</td>
                        <td>+1.87 <Flag kind="yes">변화 확인</Flag></td>
                        <td>+0.07 <Flag kind="no">변화 없음</Flag></td>
                        <td>+2.14 <Flag kind="yes">변화 확인</Flag></td>
                      </tr>
                      <tr>
                        <td>긍정적 관계 맺기</td>
                        <td>+0.63 <Flag kind="no">변화 없음</Flag></td>
                        <td>+1.46 <Flag kind="yes">변화 확인</Flag></td>
                        <td>+3.86 <Flag kind="yes">변화 확인</Flag></td>
                      </tr>
                      <tr>
                        <td>책임있는 행동</td>
                        <td>+1.62 <Flag kind="yes">변화 확인</Flag></td>
                        <td>0.00 <Flag kind="no">변화 없음</Flag></td>
                        <td>+1.85 <Flag kind="yes">변화 확인</Flag></td>
                      </tr>
                      <tr>
                        <td><b>전체</b></td>
                        <td><b>+11.88</b> <Flag kind="yes">변화 확인</Flag></td>
                        <td><b>+2.66</b> <Flag kind="no">변화 없음</Flag></td>
                        <td><b>+12.86</b> <Flag kind="yes">변화 확인</Flag></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>읽는 방법.</b> 왼쪽 열과 오른쪽 열은 같은 셀럽 프로그램, 가운데 열은
                    기존 프로그램이다. 가운데 열만 변화폭이 눈에 띄게 작다는 점이 이 표의
                    핵심이다.
                  </span>
                </div>

                <h3 style={{ marginTop: 28 }}>04 · 효과가 있었던 부분 — 정서 인식·조절, 그리고 공감</h3>
                <p>
                  각 집단이 자기 안에서 얼마나 변했는지를 보는 것과, 두 집단의{' '}
                  <b>변화폭을 서로 비교</b>하는 것은 다른 질문이다. 뒤쪽이 프로그램의 고유한
                  효과에 더 가까운 답을 준다.
                </p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>영역</th>
                        <th>셀럽 변화</th>
                        <th>일반 SEL 변화</th>
                        <th>차이</th>
                        <th>판정</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>정서 인식·조절</td><td>+4.50</td><td>+0.54</td><td>+3.96</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>셀럽이 유의하게 큼</td></tr>
                      <tr><td>공감</td><td>+1.87</td><td>+0.07</td><td>+1.80</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>셀럽이 유의하게 큼</td></tr>
                      <tr><td>자기관리</td><td>+3.25</td><td>+0.60</td><td>+2.65</td><td>차이 미확정</td></tr>
                      <tr><td>책임있는 행동</td><td>+1.62</td><td>0.00</td><td>+1.62</td><td>차이 미확정</td></tr>
                      <tr><td>긍정적 관계 맺기</td><td>+0.63</td><td>+1.46</td><td>−0.83</td><td>차이 없음</td></tr>
                      <tr><td><b>전체</b></td><td><b>+11.88</b></td><td><b>+2.66</b></td><td><b>+9.22</b></td><td><b>경계 (아래 참고)</b></td></tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12.5, color: '#8f9c93' }}>
                  '차이 미확정'은 효과가 없다는 뜻이 아니라, 참여 인원이 적어 통계적으로
                  확정하기 어렵다는 뜻이다. 자기관리는 변화폭 차이가 두 번째로 컸지만 확정
                  기준에는 못 미쳤다.
                </p>
                <h4>전체 점수는 '거의' 확정선에 닿았다</h4>
                <p>
                  전체 점수의 집단 간 차이는 확정 기준(.05)에 아주 근접한{' '}
                  <b>.053</b>이었다. 효과의 크기 자체는 중간 수준으로 작지 않았다.{' '}
                  <b>"효과가 확인되었다"가 아니라 "확정선에 근접했고, 인원이 더 많았다면
                  달라졌을 수 있다"</b>가 정확한 표현이다.
                </p>

                <h3 style={{ marginTop: 28 }}>05 · 교사도 같은 변화를 봤다</h3>
                <p>
                  아동 자기보고만 있으면 "아이들이 좋아졌다고 답한 것 아니냐"는 질문을 피하기
                  어렵다. 보건소 집단은 교사평정을 함께 받았고, 두 자료가 같은 방향으로
                  움직였다.
                </p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>영역 (보건소 셀럽 · 교사평정 T점수, 평균 50, n=7)</th>
                        <th>사전</th>
                        <th>사후</th>
                        <th>변화</th>
                        <th>판정</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>정서 인식·조절</td><td>45.7</td><td>53.1</td><td>+7.4</td><td>판단 보류</td></tr>
                      <tr><td>자기관리</td><td>44.9</td><td>52.2</td><td>+7.3</td><td>판단 보류</td></tr>
                      <tr><td>공감</td><td>41.8</td><td>49.2</td><td>+7.4</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>변화 확인</td></tr>
                      <tr><td>긍정적 관계 맺기</td><td>41.8</td><td>55.8</td><td>+14.0</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>변화 확인</td></tr>
                      <tr><td>책임있는 행동</td><td>43.9</td><td>51.1</td><td>+7.2</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>변화 확인</td></tr>
                      <tr><td><b>전체</b></td><td><b>43.6</b></td><td><b>52.3</b></td><td><b>+8.7</b></td><td style={{ color: '#2c7a45', fontWeight: 650 }}><b>변화 확인</b></td></tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12.5, color: '#8f9c93' }}>
                  T점수는 또래 규준과 비교한 점수로 50이 평균이다. 전체 점수 기준 평균보다
                  낮은 수준에서 평균 수준으로 이동했고, 7명 전원이 상승했다.
                </p>

                <h3 style={{ marginTop: 28 }}>06 · 이 결과를 읽을 때 — 같이 알아야 할 네 가지</h3>
                <div className="box-grid">
                  <div className="info-box info-box--sun">
                    <h4>1. 참여 인원이 적다</h4>
                    <p>8명, 15명, 7명이다. 실제 효과가 있어도 통계적으로 잡히지 않을 수 있고, 반대로 몇 명의 큰 변화가 전체를 끌어올릴 수도 있다. 이 결과는 확정된 검증이 아니라 예비적 신호로 봐야 한다.</p>
                  </div>
                  <div className="info-box info-box--sun">
                    <h4>2. 두 집단이 완전히 같은 출발선은 아니었다</h4>
                    <p>전체 점수와 5개 영역 중 4개는 사전에 차이가 없었지만, 긍정적 관계 맺기만 셀럽 집단이 더 높은 상태에서 시작했다. 그래서 사후 점수를 그대로 비교하지 않고, 변화폭을 비교하는 방식을 주된 분석으로 삼았다.</p>
                  </div>
                  <div className="info-box info-box--sun">
                    <h4>3. 보건소 집단에는 비교 집단이 없다</h4>
                    <p>시간이 지나며 자연히 좋아졌을 가능성을 완전히 배제할 수 없다. 다만 아동과 교사라는 서로 독립된 두 자료가 같은 방향을 가리켰다는 점이, 이 설계에서 제시할 수 있는 최선의 근거다.</p>
                  </div>
                  <div className="info-box info-box--sun">
                    <h4>4. 학교 셀럽 집단은 완료자만 분석했다</h4>
                    <p>중도에 그만둔 아동은 제외되었다. 끝까지 참여한 아동에게서 나타난 결과이며, 처음 배정된 전체 아동 기준의 결과는 아니다.</p>
                  </div>
                </div>

                <h3 style={{ marginTop: 28 }}>07 · 상세 수치 — 원자료</h3>

                <details className="detail-block">
                  <summary>집단별 사전·사후 평균 (전체 영역)</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>셀럽 사전</th><th>사후</th><th>일반 사전</th><th>사후</th><th>보건소 사전</th><th>사후</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>17.88</td><td>22.38</td><td>17.93</td><td>18.47</td><td>18.29</td><td>20.86</td></tr>
                        <tr><td>자기관리</td><td>14.13</td><td>17.38</td><td>13.33</td><td>13.93</td><td>12.57</td><td>15.00</td></tr>
                        <tr><td>공감</td><td>14.63</td><td>16.50</td><td>14.40</td><td>14.47</td><td>13.43</td><td>15.57</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>15.25</td><td>15.88</td><td>12.87</td><td>14.33</td><td>13.57</td><td>17.43</td></tr>
                        <tr><td>책임있는 행동</td><td>16.63</td><td>18.25</td><td>15.33</td><td>15.33</td><td>15.29</td><td>17.14</td></tr>
                        <tr><td><b>전체</b></td><td><b>78.50</b></td><td><b>90.38</b></td><td><b>73.87</b></td><td><b>76.53</b></td><td><b>73.14</b></td><td><b>86.00</b></td></tr>
                      </tbody>
                    </table>
                    <p style={{ fontSize: 12, color: '#8f9c93' }}>영역별 가능 범위: 정서 인식·조절 5–25점(5문항), 나머지 각 4–20점(4문항), 전체 21–105점.</p>
                  </div>
                </details>

                <details className="detail-block">
                  <summary>검정 결과 — 집단 내 사전·사후 변화 (Wilcoxon)</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>셀럽 Z</th><th>p</th><th>일반 Z</th><th>p</th><th>보건소 Z</th><th>p</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>−2.38</td><td style={{ color: '#2c7a45' }}>.016</td><td>−0.82</td><td>.434</td><td>−1.79</td><td>.094</td></tr>
                        <tr><td>자기관리</td><td>−2.22</td><td style={{ color: '#2c7a45' }}>.031</td><td>−0.59</td><td>.597</td><td>−1.69</td><td>.125</td></tr>
                        <tr><td>공감</td><td>−2.13</td><td style={{ color: '#2c7a45' }}>.047</td><td>−0.24</td><td>.914</td><td>−2.21</td><td style={{ color: '#2c7a45' }}>.031</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>−0.95</td><td>.406</td><td>−2.05</td><td style={{ color: '#2c7a45' }}>.042</td><td>−2.21</td><td style={{ color: '#2c7a45' }}>.031</td></tr>
                        <tr><td>책임있는 행동</td><td>−2.21</td><td style={{ color: '#2c7a45' }}>.031</td><td>0.00</td><td>1.000</td><td>−2.21</td><td style={{ color: '#2c7a45' }}>.031</td></tr>
                        <tr><td><b>전체</b></td><td><b>−2.38</b></td><td style={{ color: '#2c7a45', fontWeight: 700 }}>.016</td><td><b>−0.85</b></td><td>.419</td><td><b>−2.37</b></td><td style={{ color: '#2c7a45', fontWeight: 700 }}>.016</td></tr>
                      </tbody>
                    </table>
                    <p style={{ fontSize: 12, color: '#8f9c93' }}>정확검정 양측 유의확률. 유의한 변화는 모두 상승 방향이다.</p>
                  </div>
                </details>

                <details className="detail-block">
                  <summary>검정 결과 — 집단 간 변화폭 비교 (Mann-Whitney)</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>U</th><th>Z</th><th>p</th><th>효과크기 r</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>21.50</td><td>−2.50</td><td style={{ color: '#2c7a45' }}>.011</td><td>.52</td></tr>
                        <tr><td>공감</td><td>26.50</td><td>−2.20</td><td style={{ color: '#2c7a45' }}>.027</td><td>.46</td></tr>
                        <tr><td>자기관리</td><td>36.00</td><td>−1.56</td><td>.124</td><td>.33</td></tr>
                        <tr><td>책임있는 행동</td><td>35.50</td><td>−1.60</td><td>.116</td><td>.33</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>59.50</td><td>−0.03</td><td>.992</td><td>.01</td></tr>
                        <tr><td><b>전체</b></td><td><b>30.00</b></td><td><b>−1.94</b></td><td><b>.053</b></td><td><b>.40</b></td></tr>
                      </tbody>
                    </table>
                    <p style={{ fontSize: 12, color: '#8f9c93' }}>학교 셀럽 8명 vs 학교 일반 SEL 15명. 효과크기 r은 .10 작음 / .30 중간 / .50 큼으로 해석한다.</p>
                  </div>
                </details>

                <details className="detail-block">
                  <summary>사전 동질성 검정</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>셀럽 평균순위</th><th>일반 평균순위</th><th>p</th><th>판정</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>10.94</td><td>12.57</td><td>.600</td><td>동질</td></tr>
                        <tr><td>자기관리</td><td>12.69</td><td>11.63</td><td>.737</td><td>동질</td></tr>
                        <tr><td>공감</td><td>13.06</td><td>11.43</td><td>.603</td><td>동질</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>16.00</td><td>9.87</td><td style={{ color: '#c4503c' }}>.036</td><td>차이 있음</td></tr>
                        <tr><td>책임있는 행동</td><td>14.19</td><td>10.83</td><td>.260</td><td>동질</td></tr>
                        <tr><td>전체</td><td>13.81</td><td>11.03</td><td>.365</td><td>동질</td></tr>
                      </tbody>
                    </table>
                  </div>
                </details>

                <p style={{ fontSize: 11.5, color: '#8f9c93', marginTop: 20, lineHeight: 1.8 }}>
                  분석 원자료 · 셀럽_통계_아동용_논문표.spv (SPSS Statistics 27)<br />
                  자기보고 분석은 정확검정(exact test) 기준, 교사평정 분석은 근사검정 기준이다.<br />
                  참여 인원이 적어 다중 비교 보정은 적용하지 않았으며, 개별 결과는 탐색적으로 해석해야 한다.
                </p>
              </>
            ),
          },
          {
            label: '교사 평정',
            content: (
              <>
                <p className="page-eyebrow">셀럽 프로그램 · 교사평정 사전–사후 결과</p>
                <h3>교사의 눈에는 차이가 훨씬 크게 보였다</h3>
                <p>
                  담임교사가 평정한 사회정서역량 결과다. 실험집단은 5개 영역 전부에서 올랐고
                  비교집단은 오히려 내려가, 두 집단의 차이가 아동 자기보고보다 훨씬 크게
                  나타났다. 다만 이 크기를 그대로 받아들이기 전에 확인할 것이 있다.
                </p>
                <div className="keyword-chip-row keyword-chip-row--small">
                  <span className="keyword-chip keyword-chip--small">아동 30명 · 교사평정</span>
                  <span className="keyword-chip keyword-chip--small">사전–사후 2시점</span>
                  <span className="keyword-chip keyword-chip--small">5개 영역 20문항</span>
                  <span className="keyword-chip keyword-chip--small">SPSS 27 · 비모수 검정</span>
                </div>

                <h3 style={{ marginTop: 28 }}>01 · 한눈에 — 네 문장으로 정리하면</h3>
                <div className="box-grid">
                  <div className="info-box info-box--leaf">
                    <h4>향상 확인 · 실험집단은 5개 영역 전부에서 올랐다</h4>
                    <p>전체 점수 <b>78.4 → 96.6점</b>(100점 만점). 8명 전원이 상승했고, 다섯 영역 모두 통계적으로 의미 있는 향상이었다.</p>
                  </div>
                  <div className="info-box info-box--coral">
                    <h4>하락 확인 · 비교집단은 같은 기간 오히려 내려갔다</h4>
                    <p>전체 점수 <b>80.3 → 73.7점</b>. 15명 중 11명이 하락했고, 정서 인식·조절, 자기관리, 공감 세 영역에서 의미 있는 하락이 확인됐다.</p>
                  </div>
                  <div className="info-box">
                    <h4>차이 확인 · 변화폭 차이는 모든 영역에서 유의했다</h4>
                    <p>전체 점수 기준 실험집단 <b>+18.3점</b> vs 비교집단 <b>−6.7점</b>. 효과크기는 다섯 영역 모두 큰 수준(r = .54~.82)이었다.</p>
                  </div>
                  <div className="info-box info-box--sun">
                    <h4>함께 볼 것 · 사후 실험집단 점수가 만점에 가깝다</h4>
                    <p>사후 평균 96.6/100점, 가장 낮은 아동도 85점. 이 정도로 몰린 점수는 평정 자체를 다시 볼 필요가 있다는 신호다. 06번에서 다룬다.</p>
                  </div>
                </div>

                <h3 style={{ marginTop: 28 }}>02 · 누가 참여했나</h3>
                <div className="participant-grid">
                  <div className="participant-card accent-yes">
                    <div className="participant-n">8<span>명</span></div>
                    <div className="participant-name">실험집단</div>
                    <div className="participant-sub">학교 · 셀럽</div>
                    <p className="participant-desc">학교 세팅에서 셀럽 프로그램에 참여한 아동. 중도에 그만둔 아동을 제외한 끝까지 참여한 8명의 자료다.</p>
                  </div>
                  <div className="participant-card accent-none">
                    <div className="participant-n">15<span>명</span></div>
                    <div className="participant-name">비교집단</div>
                    <div className="participant-sub">학교 · 일반 SEL</div>
                    <p className="participant-desc">같은 기간 기존의 보편적 사회정서학습 프로그램에 참여한 아동. 셀럽의 비교 기준이 되는 집단이다.</p>
                  </div>
                  <div className="participant-card accent-watch">
                    <div className="participant-n">7<span>명</span></div>
                    <div className="participant-name">고위험군</div>
                    <div className="participant-sub">보건소 · 셀럽</div>
                    <p className="participant-desc">보건소 세팅에서 셀럽에 참여한 아동. 비교 집단은 없어 자기 안의 변화만 볼 수 있다.</p>
                  </div>
                </div>
                <p style={{ fontSize: 12.5, color: '#8f9c93', marginTop: 12 }}>
                  담임교사가 아동 한 명씩 평정한 사회정서역량 척도(5개 영역, 각 4문항,
                  영역별 4–20점 / 전체 20–100점)를 프로그램 전후에 실시했다. 아동 자기보고와는
                  다른 척도라 점수 자체를 직접 비교할 수는 없고, 변화의 방향과 크기만 비교한다.
                </p>

                <h3 style={{ marginTop: 28 }}>03 · 영역별 결과</h3>
                <p>값은 사후−사전 문항당 평균 점수 변화폭이다.</p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>영역</th>
                        <th>실험집단</th>
                        <th>비교집단</th>
                        <th>고위험군</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>정서 인식·조절</td>
                        <td>+4.12 <Flag kind="yes">향상 확인</Flag></td>
                        <td>−1.80 <Flag kind="down">하락 확인</Flag></td>
                        <td>+1.43 <Flag kind="no">변화 없음</Flag></td>
                      </tr>
                      <tr>
                        <td>자기관리</td>
                        <td>+3.00 <Flag kind="yes">향상 확인</Flag></td>
                        <td>−1.20 <Flag kind="down">하락 확인</Flag></td>
                        <td>+2.43 <Flag kind="no">변화 없음</Flag></td>
                      </tr>
                      <tr>
                        <td>공감</td>
                        <td>+4.00 <Flag kind="yes">향상 확인</Flag></td>
                        <td>−1.54 <Flag kind="down">하락 확인</Flag></td>
                        <td>+2.14 <Flag kind="yes">향상 확인</Flag></td>
                      </tr>
                      <tr>
                        <td>긍정적 관계 맺기</td>
                        <td>+2.88 <Flag kind="yes">향상 확인</Flag></td>
                        <td>−1.00 <Flag kind="no">변화 없음</Flag></td>
                        <td>+1.43 <Flag kind="no">변화 없음</Flag></td>
                      </tr>
                      <tr>
                        <td>책임있는 행동</td>
                        <td>+4.25 <Flag kind="yes">향상 확인</Flag></td>
                        <td>−1.13 <Flag kind="no">변화 없음</Flag></td>
                        <td>+0.57 <Flag kind="no">변화 없음</Flag></td>
                      </tr>
                      <tr>
                        <td><b>전체</b></td>
                        <td><b>+18.25</b> <Flag kind="yes">향상 확인</Flag></td>
                        <td><b>−6.66</b> <Flag kind="down">하락 확인</Flag></td>
                        <td><b>+8.00</b> <Flag kind="yes">향상 확인</Flag></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 style={{ marginTop: 28 }}>04 · 두 집단의 차이 — 모든 영역에서 확인됐다</h3>
                <p>
                  아동 자기보고에서는 5개 중 2개 영역만 유의했지만, 교사평정에서는 다섯 영역
                  모두 유의했고 효과크기도 훨씬 컸다.
                </p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr><th>영역</th><th>실험집단</th><th>비교집단</th><th>차이</th><th>효과크기</th><th>판정</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>공감</td><td>+4.00</td><td>−1.54</td><td>5.54</td><td>.82</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>유의</td></tr>
                      <tr><td>책임있는 행동</td><td>+4.25</td><td>−1.13</td><td>5.38</td><td>.80</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>유의</td></tr>
                      <tr><td>자기관리</td><td>+3.00</td><td>−1.20</td><td>4.20</td><td>.77</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>유의</td></tr>
                      <tr><td>정서 인식·조절</td><td>+4.12</td><td>−1.80</td><td>5.92</td><td>.75</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>유의</td></tr>
                      <tr><td>긍정적 관계 맺기</td><td>+2.88</td><td>−1.00</td><td>3.88</td><td>.54</td><td style={{ color: '#2c7a45', fontWeight: 650 }}>유의</td></tr>
                      <tr><td><b>전체</b></td><td><b>+18.25</b></td><td><b>−6.66</b></td><td><b>24.91</b></td><td><b>.81</b></td><td style={{ color: '#2c7a45', fontWeight: 700 }}><b>유의</b></td></tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12.5, color: '#8f9c93' }}>효과크기 r은 .10 작음 / .30 중간 / .50 큼으로 해석한다. 여기 값은 모두 '큼' 기준을 넘는다.</p>
                <h4>출발선은 오히려 실험집단이 낮았다</h4>
                <p>
                  교사평정 사전 검사에서 실험집단은 책임있는 행동(p=.005)과 공감(p=.048)이
                  비교집단보다 유의하게 낮았다. 전체 점수는 두 집단이 비슷했다(78.4 vs 80.3).
                </p>
                <p>
                  즉 교사가 보기에 <b>더 낮은 상태에서 출발한 집단이 더 크게 올랐다.</b> 사전
                  차이가 결과를 유리하게 만든 것은 아니라는 뜻이라, 이 방향의 사전 차이는
                  오히려 결과를 뒷받침한다.
                </p>

                <h3 style={{ marginTop: 28 }}>05 · 아동 자기보고와 비교 — 두 자료가 같은 이야기를 하지는 않는다</h3>
                <p>
                  같은 아동을 아동 본인과 담임교사가 각각 평정했다. 실험집단에서는 두 자료가
                  일치하지만, <b>비교집단에서는 어긋난다.</b>
                </p>
                <div className="table-scroll">
                  <table className="data-table">
                    <thead>
                      <tr><th>집단</th><th>아동 자기보고</th><th>판정</th><th>교사평정</th><th>판정</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>실험집단</td><td>+11.88</td><td style={{ color: '#2c7a45' }}>향상</td><td>+18.25</td><td style={{ color: '#2c7a45' }}>향상</td></tr>
                      <tr><td>비교집단</td><td>+2.66</td><td>변화 없음</td><td>−6.66</td><td style={{ color: '#c4503c' }}>하락</td></tr>
                      <tr><td>고위험군</td><td>+12.86</td><td style={{ color: '#2c7a45' }}>향상</td><td>+8.00</td><td style={{ color: '#2c7a45' }}>향상</td></tr>
                    </tbody>
                  </table>
                </div>
                <p style={{ fontSize: 12.5, color: '#8f9c93' }}>두 척도는 문항과 만점이 다르므로 점수 자체를 직접 비교할 수는 없고, 변화의 방향과 확정 여부만 비교했다.</p>
                <div className="fun-note">
                  <span className="fun-note-icon">💡</span>
                  <span>
                    <b>이 불일치를 어떻게 볼 것인가.</b> 실험집단과 고위험군은 아동과 교사가
                    같은 방향을 가리켰다. 서로 독립된 두 정보원이 수렴했다는 점이 이 결과의
                    가장 단단한 부분이다. 반면 비교집단은 아동이 "그대로"라고 답한 기간에
                    교사는 "내려갔다"고 평정했다. 아동의 실제 기능이 나빠졌을 수도 있고, 학기가
                    진행되며 교사의 기준이 엄격해졌을 수도 있다. 현재 자료로는 어느 쪽인지 가릴
                    수 없으므로, 비교집단의 하락은 결론이 아니라 관찰로 제시하는 편이 안전하다.
                  </span>
                </div>

                <h3 style={{ marginTop: 28 }}>06 · 이 결과를 읽을 때 — 같이 알아야 할 다섯 가지</h3>
                <div className="box-grid">
                  <div className="info-box info-box--coral">
                    <h4>1. 사후 실험집단 점수가 만점에 몰려 있다</h4>
                    <p>사후 평균 96.6/100점, 최저 85점, 표준편차 4.96이다. 영역별로 다섯 영역 모두 평균이 19점대(만점 20점)다. 아동 간 구별이 거의 사라진 상태로, 척도가 위쪽에서 더 이상 변별하지 못하고 있다는 신호다.</p>
                  </div>
                  <div className="info-box info-box--coral">
                    <h4>2. 교사가 누가 프로그램을 받았는지 알고 있었다</h4>
                    <p>담임교사는 자기 반 아동의 참여 여부를 알 수밖에 없다. 평정자가 조건을 아는 상태에서 이 정도로 큰 차이가 나오면 기대 효과의 영향을 배제할 수 없다. 교사평정을 아동 자기보고보다 강한 근거로 제시하지 말고, 같은 방향을 가리키는 보조 증거로 두는 것이 정확하다.</p>
                  </div>
                  <div className="info-box info-box--sun">
                    <h4>3. 참여 인원이 적다</h4>
                    <p>8명, 15명, 7명이다. 효과크기가 크게 나온 것도 소표본에서 흔한 일이므로, 확정된 검증이 아니라 예비적 신호로 봐야 한다.</p>
                  </div>
                  <div className="info-box info-box--sun">
                    <h4>4. 고위험군은 영역별로는 대부분 확정되지 않았다</h4>
                    <p>전체 점수와 공감만 유의했고 나머지 네 영역은 확정 기준에 못 미쳤다(7명). 아동 자기보고에서 고위험군이 네 영역에서 향상을 보인 것과는 다른 그림이므로, 고위험군은 전체 점수 수준에서만 이야기하는 편이 안전하다.</p>
                  </div>
                </div>
                <div className="info-box info-box--sun" style={{ marginTop: 12 }}>
                  <h4>5. 다중 비교 보정은 하지 않았다</h4>
                  <p>5개 영역과 전체 점수를 세 종류 분석에서 반복 검정했다. 개별 결과는 탐색적으로 해석해야 한다.</p>
                </div>

                <h3 style={{ marginTop: 28 }}>07 · 상세 수치 — 원자료</h3>

                <details className="detail-block">
                  <summary>집단별 사전·사후 평균</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>실험집단 사전</th><th>사후</th><th>비교집단 사전</th><th>사후</th><th>고위험군 사전</th><th>사후</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>15.38</td><td>19.50</td><td>16.87</td><td>15.07</td><td>13.57</td><td>15.00</td></tr>
                        <tr><td>자기관리</td><td>16.00</td><td>19.00</td><td>14.07</td><td>12.87</td><td>12.57</td><td>15.00</td></tr>
                        <tr><td>공감</td><td>15.50</td><td>19.50</td><td>16.87</td><td>15.33</td><td>12.00</td><td>14.14</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>16.25</td><td>19.13</td><td>14.73</td><td>13.73</td><td>14.00</td><td>15.43</td></tr>
                        <tr><td>책임있는 행동</td><td>15.25</td><td>19.50</td><td>17.80</td><td>16.67</td><td>15.00</td><td>15.57</td></tr>
                        <tr><td><b>전체</b></td><td><b>78.38</b></td><td><b>96.63</b></td><td><b>80.33</b></td><td><b>73.67</b></td><td><b>67.14</b></td><td><b>75.14</b></td></tr>
                      </tbody>
                    </table>
                    <p style={{ fontSize: 12, color: '#8f9c93' }}>영역별 4–20점, 전체 20–100점. 사후 실험집단 표준편차는 영역별 1.07~1.60으로 매우 작다.</p>
                  </div>
                </details>

                <details className="detail-block">
                  <summary>검정 결과 — 집단 내 사전·사후 변화 (Wilcoxon)</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>실험집단 Z</th><th>p</th><th>비교집단 Z</th><th>p</th><th>고위험군 Z</th><th>p</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>−2.41</td><td style={{ color: '#2c7a45' }}>.016</td><td>−2.75</td><td style={{ color: '#c4503c' }}>.004</td><td>−1.19</td><td>.297</td></tr>
                        <tr><td>자기관리</td><td>−2.59</td><td style={{ color: '#2c7a45' }}>.008</td><td>−2.16</td><td style={{ color: '#c4503c' }}>.031</td><td>−1.36</td><td>.219</td></tr>
                        <tr><td>공감</td><td>−2.64</td><td style={{ color: '#2c7a45' }}>.008</td><td>−2.69</td><td style={{ color: '#c4503c' }}>.004</td><td>−2.21</td><td style={{ color: '#2c7a45' }}>.031</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>−2.38</td><td style={{ color: '#2c7a45' }}>.016</td><td>−0.77</td><td>.477</td><td>−1.49</td><td>.188</td></tr>
                        <tr><td>책임있는 행동</td><td>−2.59</td><td style={{ color: '#2c7a45' }}>.008</td><td>−1.58</td><td>.118</td><td>−0.60</td><td>.625</td></tr>
                        <tr><td><b>전체</b></td><td><b>−2.54</b></td><td style={{ color: '#2c7a45', fontWeight: 700 }}>.008</td><td><b>−2.67</b></td><td style={{ color: '#c4503c', fontWeight: 700 }}>.005</td><td><b>−2.20</b></td><td style={{ color: '#2c7a45', fontWeight: 700 }}>.031</td></tr>
                      </tbody>
                    </table>
                    <p style={{ fontSize: 12, color: '#8f9c93' }}>
                      정확검정 양측 유의확률. 실험집단·고위험군은 상승 방향, 비교집단은 하락
                      방향이다. 부호 패턴: 실험집단 전체점수 8명 전원 상승, 비교집단 11명
                      하락·3명 상승·1명 동점, 고위험군 6명 상승·1명 하락.
                    </p>
                  </div>
                </details>

                <details className="detail-block">
                  <summary>검정 결과 — 집단 간 변화폭 비교 (Mann-Whitney)</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>U</th><th>Z</th><th>p</th><th>효과크기 r</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>5.00</td><td>−3.58</td><td style={{ color: '#2c7a45' }}>&lt;.001</td><td>.75</td></tr>
                        <tr><td>자기관리</td><td>3.50</td><td>−3.69</td><td style={{ color: '#2c7a45' }}>&lt;.001</td><td>.77</td></tr>
                        <tr><td>공감</td><td>0.00</td><td>−3.95</td><td style={{ color: '#2c7a45' }}>&lt;.001</td><td>.82</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>20.50</td><td>−2.58</td><td style={{ color: '#2c7a45' }}>.008</td><td>.54</td></tr>
                        <tr><td>책임있는 행동</td><td>1.00</td><td>−3.84</td><td style={{ color: '#2c7a45' }}>&lt;.001</td><td>.80</td></tr>
                        <tr><td><b>전체</b></td><td><b>0.00</b></td><td><b>−3.88</b></td><td style={{ color: '#2c7a45', fontWeight: 700 }}>&lt;.001</td><td><b>.81</b></td></tr>
                      </tbody>
                    </table>
                    <p style={{ fontSize: 12, color: '#8f9c93' }}>실험집단 8명 vs 비교집단 15명. 공감과 전체 점수의 U=0은 두 집단의 변화량이 전혀 겹치지 않았다는 뜻이다.</p>
                  </div>
                </details>

                <details className="detail-block">
                  <summary>사전 동질성 검정</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>실험집단</th><th>비교집단</th><th>p</th><th>판정</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>15.38</td><td>16.87</td><td>.179</td><td>동질</td></tr>
                        <tr><td>자기관리</td><td>16.00</td><td>14.07</td><td>.375</td><td>동질</td></tr>
                        <tr><td>공감</td><td>15.50</td><td>16.87</td><td style={{ color: '#c4503c' }}>.048</td><td>실험집단이 낮음</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>16.25</td><td>14.73</td><td>.253</td><td>동질</td></tr>
                        <tr><td>책임있는 행동</td><td>15.25</td><td>17.80</td><td style={{ color: '#c4503c' }}>.005</td><td>실험집단이 낮음</td></tr>
                        <tr><td>전체</td><td>78.38</td><td>80.33</td><td>.301</td><td>동질</td></tr>
                      </tbody>
                    </table>
                  </div>
                </details>

                <details className="detail-block">
                  <summary>사후 집단 간 차이 (Mann-Whitney)</summary>
                  <div className="detail-inner table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr><th>영역</th><th>U</th><th>Z</th><th>p</th><th>효과크기 r</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>정서 인식·조절</td><td>11.50</td><td>−3.21</td><td style={{ color: '#2c7a45' }}>.001</td><td>.67</td></tr>
                        <tr><td>자기관리</td><td>11.50</td><td>−3.17</td><td style={{ color: '#2c7a45' }}>.001</td><td>.66</td></tr>
                        <tr><td>공감</td><td>11.00</td><td>−3.25</td><td style={{ color: '#2c7a45' }}>.001</td><td>.68</td></tr>
                        <tr><td>긍정적 관계 맺기</td><td>11.50</td><td>−3.18</td><td style={{ color: '#2c7a45' }}>.001</td><td>.66</td></tr>
                        <tr><td>책임있는 행동</td><td>14.00</td><td>−3.06</td><td style={{ color: '#2c7a45' }}>.001</td><td>.64</td></tr>
                        <tr><td><b>전체</b></td><td><b>4.00</b></td><td><b>−3.62</b></td><td style={{ color: '#2c7a45', fontWeight: 700 }}>&lt;.001</td><td><b>.76</b></td></tr>
                      </tbody>
                    </table>
                  </div>
                </details>

                <p style={{ fontSize: 11.5, color: '#8f9c93', marginTop: 20, lineHeight: 1.8 }}>
                  분석 원자료 · 셀럽_통계_교사용_논문표.spv (SPSS Statistics 27)<br />
                  모든 유의확률은 정확검정(exact test) 양측 기준이다.<br />
                  참여 인원이 적어 다중 비교 보정은 적용하지 않았으며, 개별 결과는 탐색적으로 해석해야 한다.
                </p>
              </>
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
