"use client";

import React, { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TabsContent } from "@radix-ui/react-tabs";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -100px" };

// Wrapper component around TabsContent
export function AnimatedTabsContent({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsContent>) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <TabsContent  {...props}>
      <motion.div
      className="rounded-xl border bg-white max-w-[1300px] mx-auto  flex-col md:flex-row gap-10 p-2 md:p-10 flex"
        variants={{
          hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 10 } // Smooth exit transition
        }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        {...(isInStaggerGroup
          ? {}
          : {
              initial: "hidden",
              whileInView: "visible",
              viewport,
            })}
      >
        {children}
      </motion.div>
    </TabsContent>
  );
}
