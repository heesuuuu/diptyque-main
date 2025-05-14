const Icon = ({ name, size = 24, color = '', className = '' }) => {
  return (
    <span
      className={`material-symbols-sharp ${className} ${color}`}
      style={{
        fontSize: `${size}px`,
        fontVariationSettings: "'wght' 300",
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
    >
      {name}
    </span>
  );
};

export default Icon;

/*
  // 컴포넌트 사용법
  
  // 기본
  - <Icon name="search(아이콘이름)" />
  
  // 크기 변경
  - <Icon name="search" size={20} /> 
  
  // 클래스 추가 (Tailwind 스타일링과 함께 사용)
  - <Icon name="search" className="text-primary hover:text-semantic-blue" />
  
  // 여러 속성 조합
  - <Icon name="favorite" size={32} className="text-semantic-red" /> 
*/
