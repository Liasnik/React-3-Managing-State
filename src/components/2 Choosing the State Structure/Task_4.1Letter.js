export default function Letter({
    letter,
    onToggle,
    isSelected,
  }) {
    return (
      <li className={isSelected ? 'highlighted' : ''}>
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => {
              onToggle(letter.id);
            }}
          />
          {letter.subject}
        </label>
      </li>
    )
  }
  