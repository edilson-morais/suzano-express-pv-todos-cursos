"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
interface BenefitProps {
  text: string;
  checked: boolean;
}
const Benefit = ({
  text,
  checked
}: BenefitProps) => {
  return <div className="flex items-center gap-3">
      {checked ? <span className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-3" />
        </span> : <span className="grid size-4 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <X className="size-3" />
        </span>}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>;
};
interface ModernPricingCardProps {
  tier: string;
  price: string;
  bestFor: string;
  CTA: string;
  benefits: Array<{
    text: string;
    checked: boolean;
  }>;
  className?: string;
  highlighted?: boolean;
}
export const ModernPricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  highlighted = false
}: ModernPricingCardProps) => {
  return <motion.div initial={{
    filter: "blur(2px)"
  }} whileInView={{
    filter: "blur(0px)"
  }} transition={{
    duration: 0.5,
    ease: "easeInOut",
    delay: 0.25
  }}>
      <Card className={cn("relative h-full w-full overflow-hidden border", "border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80", "p-6", highlighted && "border-primary bg-zinc-900", className)}>
        {highlighted}
        
        <div className="flex flex-col items-center border-b pb-6 border-zinc-700">
          <span className="mb-6 inline-block text-zinc-50 font-semibold">
            {tier}
          </span>
          <span className="mb-3 inline-block text-4xl font-medium text-primary">
            {price}
          </span>
          <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
            {bestFor}
          </span>
        </div>
        
        <div className="space-y-4 py-9">
          {benefits.map((benefit, index) => <Benefit key={index} {...benefit} />)}
        </div>
        
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold" asChild>
          <a href="https://sun.eduzz.com/50027?utm_source=suzano+express&utm_id=pv">
            {CTA}
          </a>
        </Button>
        
        {highlighted && <div className="flex items-center justify-center space-x-4 pt-6 mt-6 border-t border-zinc-700">
            <div className="flex -space-x-2">
              {[...Array(8)].map((_, i) => <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-zinc-900 flex items-center justify-center text-primary-foreground font-bold text-xs">
                  {String.fromCharCode(65 + i)}
                </div>)}
            </div>
            <div className="text-left text-sm">
              <p className="font-bold text-zinc-300">
                + <span className="text-primary">de 2.000</span> alunos <span className="font-bold">dominando o PANDEIRO</span>
                <span className="block">e <span className="font-bold">tocando cada vez mais ainda!</span></span>
              </p>
            </div>
          </div>}
      </Card>
    </motion.div>;
};