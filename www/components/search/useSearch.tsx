import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import Fuse from 'fuse.js';

function useSearch<T>(
  items: T[],
  config: Fuse.FuseOptions<any>,
): [T[], Dispatch<SetStateAction<string>>] {
  const [search, setSearch] = useState('');
  const [filteredItems, setItems] = useState(items);

  const indexer = useRef<any>(null);

  // on mount, instantiate indexer
  // if items change, reinstantiate
  useEffect(() => {
    indexer.current = new Fuse(items, config);
  }, [items, config]);

  // when search changes, set filtered Items
  useEffect(() => {
    if (search === '') {
      setItems([]);
    } else {
      setItems(indexer.current.search(search));
    }
  }, [search]);

  return [filteredItems, setSearch];
}

export default useSearch;
