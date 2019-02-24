import { useState, useEffect, useRef } from 'react';
import Fuse from 'fuse.js';

function useSearch(items, config) {
  const [search, setSearch] = useState('');
  const [filteredItems, setItems] = useState(items);

  const indexer = useRef(null);

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
