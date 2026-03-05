"use client";

import React from 'react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Product } from '@/lib/products';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Heart, Droplets, Wind, X } from 'lucide-react';

interface QuickViewProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuickView: React.FC<QuickViewProps> = ({ product, open, onOpenChange }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-none rounded-[2rem] md:rounded-[3rem] shadow-2xl w-[95vw] md:w-full">
        <div className="flex flex-col md:flex-row h-full max-h-[85vh] md:max-h-[90vh]">
          <div className="relative w-full md:w-1/2 aspect-[4/5] md:aspect-auto">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-between bg-white overflow-y-auto">
            <div className="space-y-6 md:space-y-10">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-secondary border-none px-3 md:px-4 py-1 md:py-1.5 text-[8px] md:text-[9px] tracking-widest uppercase font-bold">{product.condition}</Badge>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{product.category}</p>
                </div>
                <h2 className="font-headline text-3xl md:text-5xl italic leading-tight">{product.name}</h2>
                <p className="text-2xl md:text-3xl font-light text-primary italic">${product.price}</p>
              </div>

              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light line-clamp-4 md:line-clamp-none">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="p-4 md:p-6 bg-secondary rounded-[1rem] md:rounded-[1.5rem] flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-sm">
                    <Droplets className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] md:text-[9px] text-muted-foreground uppercase font-bold tracking-widest truncate">Water Saved</p>
                    <p className="text-sm md:text-lg font-headline italic truncate">{product.impact.waterSaved}L</p>
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-secondary rounded-[1rem] md:rounded-[1.5rem] flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-sm">
                    <Wind className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] md:text-[9px] text-muted-foreground uppercase font-bold tracking-widest truncate">CO2 Reduced</p>
                    <p className="text-sm md:text-lg font-headline italic truncate">{product.impact.co2Reduced}kg</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-8 md:pt-12">
              <Button 
                onClick={() => { addToCart(product); onOpenChange(false); }}
                className="flex-1 h-14 md:h-16 bg-primary text-white hover:bg-primary/90 rounded-full text-[10px] md:text-xs font-bold tracking-widest shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" /> ADD TO BAG
              </Button>
              <Button 
                onClick={() => toggleWishlist(product.id)}
                variant="outline" 
                className={`w-14 h-14 md:w-16 md:h-16 p-0 rounded-full border-foreground/10 hover:bg-black/5 ${isWishlisted ? 'text-primary border-primary bg-primary/5' : ''}`}
              >
                <Heart className={`w-5 h-5 md:w-6 md:h-6 ${isWishlisted ? 'fill-primary' : ''}`} />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};