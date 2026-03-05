
"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/store';
import { PRODUCTS } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist } = useCart();
  
  const wishlistProducts = PRODUCTS.filter(product => wishlist.includes(product.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="container mx-auto px-6 py-32 text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-muted-foreground opacity-30" />
          </div>
        </div>
        <h1 className="font-headline text-5xl italic">Your Wishlist is Empty</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Start curating your personal archive. Save the pieces you love for later.
        </p>
        <Button asChild size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-full">
          <Link href="/shop">EXPLORE THE ARCHIVE</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24 md:py-32 space-y-16">
      <div className="space-y-4">
        <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">YOUR CURATED SELECTION</p>
        <h1 className="font-headline text-6xl md:text-7xl italic">Wishlist</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
        {wishlistProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="pt-20 border-t border-black/5 text-center">
        <Link href="/shop" className="text-xs font-bold tracking-[0.2em] hover:text-primary transition-colors flex items-center justify-center gap-2 group">
          CONTINUE SHOPPING <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
