import { useLayoutEffect, useRef, useState } from "react"

const Useeffect: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [items]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <div 
        ref={containerRef} 
        style={{ height: '100px', overflowY: 'auto', border: '1px solid black' }}
      >
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <button onClick={addItem}>Adicionar Item</button>
    </div>
  );
}
export default Useeffect