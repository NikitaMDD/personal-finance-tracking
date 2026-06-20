import {
    Card,
    CardContent,
} from "@/shared/ui/card";

import { Typography } from "@/shared/ui/typography";
import { motion } from "framer-motion";
import { AuthTabs } from "./components/AuthTabs";

export function LoginAndRegisterPage() {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <Card className="w-[600px]">

        <CardContent 
          className="pt-6"
        >

          <div
            className="mb-8 text-center"
          >

            <Typography
              as="h1"
              variant="h1"
            >
              Personal Finance
            </Typography>

            <Typography
              variant="body"
              className="mt-2 text-[var(--color-text-secondary)]"
            >
              Управление личными финансами
            </Typography>
          </div>

          <AuthTabs/>

        </CardContent>

      </Card>
    </motion.div>
  );
}