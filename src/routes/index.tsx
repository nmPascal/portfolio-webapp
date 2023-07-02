/* eslint-disable react-hooks/rules-of-hooks */
import { FC, useEffect, useState } from "react";

// helpers
import { SettingsHelper } from "../helpers";

// packages
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NotFound } from "../pages";

export const index: FC = (): JSX.Element => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState(location);

    useEffect(() => {
      setPrevLocation(location);
    }, [location]);
  
    const pageTransitionConfig = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence mode="wait">
            <Routes location={location}>
                {SettingsHelper.getRoutes().map((item, idx) => (
                    <Route
                        key={idx}
                        path={item.path}
                        element={
                            <motion.div
                                key={location.key}
                                initial={prevLocation ? "exit" : "initial"}
                                animate="animate"
                                exit="exit"
                                variants={pageTransitionConfig}
                                transition={{ duration: 0.5 }}
                            >
                                {<item.page />}
                            </motion.div>
                        }
                    />
                ))}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AnimatePresence>
    );
};
