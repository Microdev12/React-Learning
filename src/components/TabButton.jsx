
/// as prop we can use object destructuring like {children, onSelect}
export default function TabButton({children, onSelect, isSelected}) {
 
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
  );
}
