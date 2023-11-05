"use client";
import { FC, useEffect, useState } from "react";
import styles from "./pixelBackground.module.scss";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

const anim = {
  initial: {
    opacity: 1,
  },
  open: (i: any) => ({
    opacity: 0,
    transition: { duration: 0, delay: 0.075 * i },
  }),
  closed: (i: any) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.075 * i },
  }),
};

const PixelBackground: FC<Props> = () => {
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize(true);
    }
  }, []);
  const shuffle = (a: Array<any>) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };
  const getBlocks = () => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const amountofBlocks = Math.ceil(innerHeight / blockSize);
    const delays = shuffle([...Array(amountofBlocks)].map((_, i) => i));
    return delays.map((randomDelay, i) => {
      return (
        <motion.div
          key={i}
          className={styles.block}
          variants={anim}
          initial="initial"
          animate="open"
          exit="closed"
          custom={randomDelay}
        ></motion.div>
      );
    });
  };

  return (
    <AnimatePresence mode="wait">
      {windowSize ? (
        <div className={styles.background}>
          {[...Array(20)].map((_, i) => {
            return (
              <div className={styles.column} key={i}>
                {getBlocks()}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </AnimatePresence>
  );
};

export default PixelBackground;
