export const color = {
  'bg-neutral-500': 'bg-neutral-500',
  'bg-green-500': 'bg-green-500',
  'bg-purple-500': 'bg-purple-500',
  'bg-orange-500': 'bg-orange-500',
  'bg-zinc-500': 'bg-zinc-500',
  'bg-stone-500': 'bg-stone-500',
  'bg-slate-500': 'bg-slate-500',
  'bg-gray-500': 'bg-gray-500',
  'bg-indigo-500': 'bg-indigo-500',
  'bg-cyan-500': 'bg-cyan-500',
  'bg-yellow-500': 'bg-yellow-500',
  'bg-blue-500': 'bg-blue-500',
  'bg-red-500': 'bg-red-500',
  'bg-black': 'bg-black',
  'bg-pink-500': 'bg-pink-500',
  'bg-amber-500': 'bg-amber-500',
  'bg-rose-500': 'bg-rose-500',
};

export const renderColor = (val: string) => {
  switch (val) {
    case 'normal':
    case 'psychic':
    case 'unknown':
      return color['bg-neutral-500'];
    case 'grass':
      return color['bg-green-500'];
    case 'poison':
      return color['bg-purple-500'];
    case 'fire':
      return color['bg-orange-500'];
    case 'flying':
      return color['bg-zinc-500'];
    case 'ground':
      return color['bg-stone-500'];
    case 'rock':
      return color['bg-slate-500'];
    case 'steel':
      return color['bg-gray-500'];
    case 'ghost':
      return color['bg-indigo-500'];
    case 'water':
      return color['bg-cyan-500'];
    case 'electric':
      return color['bg-yellow-500'];
    case 'ice':
      return color['bg-blue-500'];
    case 'dragon':
      return color['bg-red-500'];
    case 'dark':
      return color['bg-black'];
    case 'fairy':
      return color['bg-pink-500'];
    case 'stellar':
    case 'bug':
      return color['bg-amber-500'];
    case 'fighting':
      return color['bg-rose-500'];
  }
};
