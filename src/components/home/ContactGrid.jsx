/* eslint-disable no-unused-vars */
import React from "react";
import { cn } from "/lib/utils";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import Waves from "./general/LiquidChroma";
import { ContactPage } from "./ContactForm";
export function ContactGrid() {
  const features = [
    {
      title: "Track issues effectively",
      description:
        "Track and manage your project issues with ease using our intuitive interface.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Capture pictures with AI",
      description:
        "Capture stunning photos effortlessly using our advanced AI technology.",
      skeleton: <SkeletonTwo />,
      className:
        "hidden lg:block border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6  xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div className={cn(` relative overflow-hidden`, className)}>{children}</div>
  );
};

export const SkeletonOne = () => {
  return <ContactPage />;
};

export const SkeletonTwo = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Waves
          lineColor="#fff"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.03}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
    </>
  );
};
