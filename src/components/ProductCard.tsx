"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/store';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { QuickView } from './QuickView';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, wishlist, addToCart } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="group relative animate-fade-in-up flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary rounded-[1.5rem] md:rounded-[2rem] editorial-shadow transition-all duration-500 md:hover:shadow-xl">
        <Link href={`/product/${product.id}`} className="block h-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-1000 md:group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6 gap-2 md:gap-3">
          <Button 
            onClick={() => setIsQuickViewOpen(true)}
            variant="secondary" 
            className="w-full h-12 md:h-14 bg-white/70 md:bg-white/90 backdrop-blur-md text-foreground hover:bg-white rounded-full transition-all text-[10px] font-bold tracking-widest shadow-lg md:translate-y-4 md:group-hover:translate-y-0 duration-500"
            suppressHydrationWarning
          >
            <Eye className="w-4 h-4 mr-2" /> QUICK VIEW
          </Button>
          <Button 
            onClick={() => addToCart(product)}
            className="w-full h-12 md:h-14 bg-primary text-white hover:bg-primary/90 rounded-full transition-all text-[10px] font-bold tracking-widest shadow-lg md:translate-y-4 md:group-hover:translate-y-0 duration-500 delay-75"
            suppressHydrationWarning
          >
            <ShoppingBag className="w-4 h-4 mr-2" /> ADD TO BAG
          </Button>
        </div>

        <button 
          onClick={(e) => { e.preventDefault(); toggleWishlist(product.id); }}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-white/70 md:bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-all shadow-sm z-10 hover:scale-110 active:scale-95"
          suppressHydrationWarning
        >
          <Heart className={`w-3 h-3 md:w-4 md:h-4 transition-colors ${isWishlisted ? 'fill-primary text-primary' : 'text-foreground'}`} />
        </button>

        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          <Badge variant="outline" className="bg-white/70 md:bg-white/80 backdrop-blur-md text-[8px] md:text-[9px] tracking-[0.1em] md:tracking-[0.2em] border-none px-3 md:px-4 py-1 md:py-1.5 uppercase font-bold text-foreground">
            {product.condition}
          </Badge>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 md:pt-8 space-y-2 flex-1">
        <div className="flex justify-between items-start">
          <Link href={`/product/${product.id}`} className="block flex-1 group/title">
            <h3 className="text-xs md:text-sm font-medium tracking-tight group-hover/title:text-primary transition-colors line-clamp-1">{product.name}</h3>
            <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-[0.1em] md:tracking-[0.2em] mt-1">{product.material} — {product.era || 'Modern'}</p>
          </Link>
          <span className="text-xs md:text-sm font-bold italic text-primary ml-2 md:ml-4">${product.price}</span>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickView product={product} open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen} />
    </div>
  );
};
