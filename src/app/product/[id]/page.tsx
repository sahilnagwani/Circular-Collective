"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/products';
import { useCart } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Droplets, Wind, Sparkles, RefreshCw, ChevronLeft } from 'lucide-react';
import { generateProductNarrative } from '@/ai/flows/ai-enhanced-product-storytelling';
import { Skeleton } from '@/components/ui/skeleton';
import { ProductCard } from '@/components/ProductCard';
import Link from 'next/link';

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [aiNarrative, setAiNarrative] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const product = PRODUCTS.find(p => p.id === id);
  const isWishlisted = product ? wishlist.includes(product.id) : false;

  useEffect(() => {
    if (product && !aiNarrative) {
      const getNarrative = async () => {
        setLoadingAi(true);
        try {
          const res = await generateProductNarrative({
            productName: product.name,
            productDescription: product.description,
            productPrice: `$${product.price}`,
            productCondition: product.condition,
            productMaterial: product.material,
            productEra: product.era,
            stockAvailability: product.stockAvailability,
            waterSavedLitres: product.impact.waterSaved,
            co2ReducedKg: product.impact.co2Reduced
          });
          setAiNarrative(res.narrative);
        } catch (error) {
          console.error("AI narrative generation failed", error);
        } finally {
          setLoadingAi(false);
        }
      };
      getNarrative();
    }
  }, [product, aiNarrative]);

  if (!product) return <div className="p-32 text-center">Product not found.</div>;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="mb-12">
        <Link href="/shop" className="text-[10px] font-bold tracking-[0.3em] flex items-center gap-2 hover:text-primary transition-colors uppercase">
          <ChevronLeft className="w-4 h-4" /> Back to Archive
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        
        {/* Left: Images */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-[4/5] bg-secondary w-full overflow-hidden rounded-[3rem] editorial-shadow">
            <Image 
              src={product.imageUrl} 
              alt={product.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="relative aspect-square bg-secondary rounded-[2rem] overflow-hidden hover-lift">
                <Image src={`https://picsum.photos/seed/product-${product.id}-${i}/800/800`} alt={`${product.name} detail ${i}`} fill className="object-cover opacity-90" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="tracking-widest border-none bg-secondary px-4 py-1.5 uppercase font-bold text-[9px]">{product.condition}</Badge>
              <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">{product.category}</span>
            </div>
            <h1 className="font-headline text-6xl md:text-7xl leading-[1.1] italic">{product.name}</h1>
            <p className="text-4xl font-light text-primary italic">${product.price}</p>
          </div>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-8 text-lg font-light">
              {product.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-[1.5rem]">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 font-bold">Material</p>
                <p className="text-md font-medium">{product.material}</p>
              </div>
              <div className="bg-secondary p-6 rounded-[1.5rem]">
                <p className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1 font-bold">Period</p>
                <p className="text-md font-medium">{product.era || 'Modern Archive'}</p>
              </div>
            </div>
          </div>

          {/* AI Narrative Section */}
          <div className="p-10 bg-white rounded-[2.5rem] editorial-shadow space-y-6 relative overflow-hidden group">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="w-5 h-5" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">The Editorial Story — AI Enhanced</span>
            </div>
            {loadingAi ? (
              <div className="space-y-3">
                <Skeleton className="h-4 w-full rounded-full" />
                <Skeleton className="h-4 w-5/6 rounded-full" />
                <Skeleton className="h-4 w-4/6 rounded-full" />
              </div>
            ) : (
              <p className="text-md font-light leading-relaxed text-foreground/80 italic">
                {aiNarrative || "Authenticity, scarcity, and circularity. This piece represents a unique moment in fashion history, meticulously curated for the modern wardrobe."}
              </p>
            )}
            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <button onClick={() => setAiNarrative(null)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Environmental Impact */}
          <div className="space-y-6">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Circular Footprint</p>
            <div className="flex flex-wrap gap-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Water Saved</p>
                  <p className="font-headline text-2xl italic">{product.impact.waterSaved}L</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Wind className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">CO2 Reduced</p>
                  <p className="font-headline text-2xl italic">{product.impact.co2Reduced}kg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-6 pt-8">
            <div className="flex gap-4">
              <Button onClick={() => addToCart(product)} size="lg" className="flex-1 h-20 text-xs font-bold tracking-[0.2em] bg-primary text-white hover:bg-primary/90 rounded-full shadow-xl">
                <ShoppingBag className="w-5 h-5 mr-3" /> ADD TO BAG
              </Button>
              <Button onClick={() => toggleWishlist(product.id)} variant="outline" size="lg" className={`h-20 w-20 p-0 rounded-full border-foreground/10 hover:bg-black/5 ${isWishlisted ? 'text-primary border-primary bg-primary/5' : ''}`}>
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-primary' : ''}`} />
              </Button>
            </div>
            <div className="flex justify-center items-center gap-6">
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.2em]">{product.stockAvailability}</p>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-[0.2em]">Complimentary Circular Shipping</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <section className="mt-40 space-y-16">
        <div className="text-center space-y-4">
          <p className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">CURATED PAIRINGS</p>
          <h2 className="font-headline text-5xl italic">Complete the Look</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 4).map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
