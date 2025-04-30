
/// as prop we can use object destructuring like {children, onSelect}
export default function TabButton({children, onSelect}) {
 
  return (
    <li>
      <button onClick={onSelect}>{props.children}</button>
    </li>
  );
}
