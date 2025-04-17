import { useState } from 'react';
import { CheckIcon, Combobox, Group, Pill, PillsInput, useCombobox, rem } from '@mantine/core';

// Données initiales - à remplacer par vos données réelles
const defaultItems = [
  'Frontend Developer',
  'Backend Engineer',
  'UX Designer',
  'Product Manager',
  'Data Scientist',
  'DevOps Specialist'
];

interface MultiInputProps {
  initialItems?: string[];
  placeholder?: string;
  onSelectionChange?: (selectedItems: string[]) => void;
}

const MultiInput = ({
  initialItems = defaultItems,
  placeholder = 'Rechercher ou ajouter des compétences...',
  onSelectionChange
}: MultiInputProps) => {
  // Configuration du Combobox Mantine
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  // États
  const [search, setSearch] = useState('');
  const [availableItems, setAvailableItems] = useState(initialItems);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Vérifie si la recherche correspond exactement à un item existant
  const exactMatch = availableItems.some((item) => item.toLowerCase() === search.toLowerCase());

  // Gère la sélection/désélection d'un item
  const handleItemSelect = (item: string) => {
    setSearch('');
    
    if (item === '$create') {
      // Création d'un nouvel item
      const newItem = search.trim();
      setAvailableItems((current) => [...current, newItem]);
      setSelectedItems((current) => [...current, newItem]);
    } else {
      // Toggle de la sélection
      setSelectedItems((current) =>
        current.includes(item)
          ? current.filter((v) => v !== item) // Désélection
          : [...current, item] // Sélection
      );
    }
    
    // Callback pour les changements
    onSelectionChange?.(selectedItems);
  };

  // Supprime un item sélectionné
  const handleItemRemove = (item: string) => {
    setSelectedItems((current) => current.filter((v) => v !== item));
    onSelectionChange?.(selectedItems.filter((v) => v !== item));
  };

  // Rendu des items sélectionnés (pills)
  const selectedPills = selectedItems.map((item) => (
    <Pill 
      key={item} 
      withRemoveButton 
      onRemove={() => handleItemRemove(item)}
      styles={{
        root: { margin: rem(4) },
        remove: { color: 'var(--mantine-color-gray-6)' }
      }}
    >
      {item}
    </Pill>
  ));

  // Filtrage des options disponibles
  const filteredOptions = availableItems
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option 
        value={item} 
        key={item} 
        active={selectedItems.includes(item)}
        style={{ padding: rem(8) }}
      >
        <Group gap="sm">
          {selectedItems.includes(item) && <CheckIcon size={12} />}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox 
      store={combobox} 
      onOptionSubmit={handleItemSelect}
      withinPortal={false}
      shadow="md"
    >
      <Combobox.DropdownTarget>
        <PillsInput 
          variant="filled"
          radius="md"
          onClick={() => combobox.openDropdown()}
          style={{ width: '100%' }}
        >
          <Pill.Group>
            {selectedPills}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder={placeholder}
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleItemRemove(selectedItems[selectedItems.length - 1]);
                  }
                  
                  // Ouverture du dropdown avec la flèche du bas
                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    combobox.openDropdown();
                  }
                }}
                style={{ minWidth: rem(200) }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown style={{ maxHeight: rem(250), overflowY: 'auto' }}>
        <Combobox.Options>
          {filteredOptions}

          {/* Option pour créer un nouvel item */}
          {!exactMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create" style={{ color: 'var(--mantine-color-blue-6)' }}>
              + Ajouter "{search.trim()}"
            </Combobox.Option>
          )}

          {/* Aucun résultat trouvé */}
          {search.trim().length > 0 && filteredOptions.length === 0 && !exactMatch && (
            <Combobox.Empty>Aucun résultat trouvé</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};

export default MultiInput;