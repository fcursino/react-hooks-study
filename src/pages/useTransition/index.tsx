import { ChangeEvent, useState, useTransition } from "react";

const Usetransition: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  const items = Array.from({ length: 20000 }, (_, i) => `Item ${i + 1}`);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    startTransition(() => {
      const filtered = items.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar..."
      />
      {isPending ? <p>Filtrando...</p> : null}
      <ul>
        {filteredItems.map((item: any, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default Usetransition