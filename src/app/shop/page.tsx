"use client";

import React, { useState, useMemo } from 'react';
import { PRODUCTS, Condition, Material } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShopPage() {
  const [search, setSearch] = useState('');
  const [conditionFilter, setConditionFilter] = useState<string>('all');
  const [materialFilter, setMaterialFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (search) {
      result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (conditionFilter !== 'all') {
      result = result.filter(p => p.condition === conditionFilter);
    }

    if (materialFilter !== 'all') {
      result = result.filter(p => p.material === materialFilter);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, conditionFilter, materialFilter, sortBy]);

  const clearFilters = () => {
    setSearch('');
    setConditionFilter('all');
    setMaterialFilter('all');
    setSortBy('featured');
  };

  return (
    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Header & Search */}
      <div className="space-y-12">
        <div className="space-y-4">
          <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">CURATED COLLECTION</p>
          <h1 className="font-headline text-6xl md:text-7xl italic">Shop the Archive</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between p-8 bg-white rounded-[2rem] editorial-shadow">
          <div className="relative w-full lg:w-[450px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search unique pieces..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 bg-secondary border-none focus-visible:ring-primary rounded-full text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-4 items-center w-full lg:w-auto">
            <Select value={conditionFilter} onValueChange={setConditionFilter}>
              <SelectTrigger className="w-full sm:w-44 bg-secondary border-none h-14 rounded-full text-xs font-bold tracking-widest">
                <SelectValue placeholder="Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="Vintage">Vintage</SelectItem>
                <SelectItem value="Mint">Mint</SelectItem>
                <SelectItem value="Good">Good</SelectItem>
              </SelectContent>
            </Select>

            <Select value={materialFilter} onValueChange={setMaterialFilter}>
              <SelectTrigger className="w-full sm:w-44 bg-secondary border-none h-14 rounded-full text-xs font-bold tracking-widest">
                <SelectValue placeholder="Material" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Materials</SelectItem>
                <SelectItem value="Denim">Denim</SelectItem>
                <SelectItem value="Silk">Silk</SelectItem>
                <SelectItem value="Wool">Wool</SelectItem>
                <SelectItem value="Leather">Leather</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-44 bg-secondary border-none h-14 rounded-full text-xs font-bold tracking-widest">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {(conditionFilter !== 'all' || materialFilter !== 'all' || search !== '') && (
              <Button variant="ghost" onClick={clearFilters} className="h-14 hover:bg-black/5 rounded-full px-6 text-xs font-bold tracking-widest">
                <X className="w-4 h-4 mr-2" /> CLEAR ALL
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-40 text-center space-y-6 bg-white rounded-[3rem] editorial-shadow">
          <p className="text-3xl italic font-headline">No pieces found matching your criteria.</p>
          <Button variant="outline" onClick={clearFilters} className="rounded-full h-14 px-10 border-foreground/10 hover:bg-black/5">
            RESET ALL FILTERS
          </Button>
        </div>
      )}
    </div>
  );
}
