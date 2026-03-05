export type Condition = 'Vintage' | 'Mint' | 'Good';
export type Material = 'Denim' | 'Silk' | 'Wool' | 'Cotton' | 'Leather' | 'Organic Cotton';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  condition: Condition;
  material: Material;
  era?: string;
  stockAvailability: string;
  imageUrl: string;
  category: 'Vintage' | 'Designer' | 'Denim' | 'Silk' | 'Accessories';
  impact: {
    waterSaved: number;
    co2Reduced: number;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: '1992 Archive Denim Jacket',
    description: 'A perfectly weathered archive piece from the early 90s. Features original hardware and a relaxed editorial fit. This iconic silhouette defines a decade of functional luxury.',
    price: 380,
    condition: 'Vintage',
    material: 'Denim',
    era: '1990s',
    stockAvailability: 'Only 1 Left',
    imageUrl: 'https://images.unsplash.com/photo-1614697688184-66a55d41e298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxkZW5pbSUyMGphY2tldHxlbnwwfHx8fDE3NzI1NTA5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Vintage',
    impact: { waterSaved: 2500, co2Reduced: 15 }
  },
  {
    id: '2',
    name: 'Midnight Silk Slip Dress',
    description: 'Ethically sourced heavy-weight silk with a bias cut that drapes like liquid midnight. Mint condition from a private collection. A versatile piece that transitions from day to evening with ease.',
    price: 640,
    condition: 'Mint',
    material: 'Silk',
    era: '2010s',
    stockAvailability: 'In Stock',
    imageUrl: 'https://images.unsplash.com/photo-1742794568165-f1658774c30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzaWxrJTIwZHJlc3N8ZW58MHx8fHwxNzcyNTUzNDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Silk',
    impact: { waterSaved: 1200, co2Reduced: 8 }
  },
  {
    id: '3',
    name: 'Structured Wool Blazer',
    description: 'A timeless silhouette in premium Italian wool. Sharp shoulders and a cinched waist for a modern editorial look. Meticulously cared for, this blazer remains as sharp as the day it was tailored.',
    price: 890,
    condition: 'Mint',
    material: 'Wool',
    era: 'Modern Archive',
    stockAvailability: 'Limited Edition',
    imageUrl: 'https://picsum.photos/seed/wool-blazer-luxury/800/1000',
    category: 'Designer',
    impact: { waterSaved: 4500, co2Reduced: 25 }
  },
  {
    id: '4',
    name: 'Heritage Leather Handbag',
    description: 'Hand-crafted vegetable-tanned leather that has aged into a beautiful deep mahogany patina. This piece embodies the history of its previous owners while remaining perfectly functional.',
    price: 1200,
    condition: 'Good',
    material: 'Leather',
    era: '1980s',
    stockAvailability: 'Only 1 Left',
    imageUrl: 'https://images.unsplash.com/photo-1647540945262-7da3bd1a3d96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxsZWF0aGVyJTIwYmFnfGVufDB8fHx8MTc3MjU1MzY2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Accessories',
    impact: { waterSaved: 8000, co2Reduced: 40 }
  },
  {
    id: '5',
    name: 'Organic Cotton Oxford',
    description: 'Upcycled from high-quality deadstock fabric. A minimal staple for the circular wardrobe. Soft, breathable, and designed to last another lifetime.',
    price: 220,
    condition: 'Mint',
    material: 'Organic Cotton',
    era: 'Circular 2024',
    stockAvailability: 'In Stock',
    imageUrl: 'https://picsum.photos/seed/upcycled-oxford/800/1000',
    category: 'Designer',
    impact: { waterSaved: 900, co2Reduced: 5 }
  },
  {
    id: '6',
    name: 'Raw Selvedge Denim',
    description: 'Vintage selvedge denim with original distressing. A rare find from the Japanese archive collection. These jeans feature a character that only time and wear can create.',
    price: 450,
    condition: 'Vintage',
    material: 'Denim',
    era: '2000s',
    stockAvailability: 'Only 1 Left',
    imageUrl: 'https://picsum.photos/seed/selvedge-denim/800/1000',
    category: 'Denim',
    impact: { waterSaved: 3200, co2Reduced: 18 }
  }
];
