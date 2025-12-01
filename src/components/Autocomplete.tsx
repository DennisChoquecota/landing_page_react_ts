import React, { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';

type SuggestionItem = {
   id: string | number;
   label: string;
   code: string;
   search?: string;
};

type AutocompleteProps = {
   suggestions: SuggestionItem[];
   placeholder?: string;
   onSelect: (item: SuggestionItem) => void;
   minLength?: number;
};

export const AutocompleteInput: React.FC<AutocompleteProps> = ({
   suggestions,
   placeholder = 'Escribe algo...',
   onSelect,
   minLength = 3,
}) => {
   const [inputValue, setInputValue] = useState('');
   const [filteredSuggestions, setFilteredSuggestions] = useState<SuggestionItem[]>([]);
   const [activeIndex, setActiveIndex] = useState(-1);
   const [showSuggestions, setShowSuggestions] = useState(false);
   const wrapperRef = useRef<HTMLDivElement>(null);

   const fuse = new Fuse(suggestions, {
      keys: ['label', 'code', 'search'],
      threshold: 0.3, // menor = más estricta, mayor = más permisiva
      includeScore: true,
   });

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
            setShowSuggestions(false);
            setActiveIndex(-1);
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setInputValue(value);

      if (value.trim().length < minLength) {
         setFilteredSuggestions([]);
         setShowSuggestions(false);
         return;
      }

      const fuseResults = fuse.search(value);
      const matched = fuseResults.map((r) => r.item);
      setFilteredSuggestions(matched);
      setShowSuggestions(true);
      setActiveIndex(-1);
   };

   const handleSelect = (item: SuggestionItem) => {
      setInputValue(item.label);
      setShowSuggestions(false);
      setActiveIndex(-1);
      onSelect(item);
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowDown') {
         setActiveIndex((prev) => Math.min(prev + 1, filteredSuggestions.length - 1));
      } else if (e.key === 'ArrowUp') {
         setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter' && activeIndex >= 0) {
         e.preventDefault();
         handleSelect(filteredSuggestions[activeIndex]);
      }
   };

   return (
      <div ref={wrapperRef} style={{ position: 'relative', width: 300 }}>
         <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            style={{ width: '100%', padding: 8 }}
         />

         {showSuggestions && filteredSuggestions.length > 0 && (
            <ul
               style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  background: 'white',
                  border: '1px solid #ccc',
                  maxHeight: 200,
                  overflowY: 'auto',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
               }}
            >
               {filteredSuggestions.map((item, index) => (
                  <li
                     key={item.id}
                     onClick={() => handleSelect(item)}
                     style={{
                        padding: 8,
                        backgroundColor: index === activeIndex ? '#eee' : '#fff',
                        cursor: 'pointer',
                     }}
                  >
                     {item.label} <b>{item.code}</b>
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};