export default function ReturnButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="return-button" onClick={onClick}>
      ← 바다로 돌아가기
    </button>
  );
}
