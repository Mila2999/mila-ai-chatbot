import { motion } from "framer-motion";
import Link from "next/link";

import { LogoGoogle, MessageIcon, VercelIcon } from "./icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <VercelIcon />
          <span>+</span>
          <MessageIcon />
        </p>
        <p>
        <MessageIcon />
         Welcome to Mila’s chatbot! I specialize in full-stack development with a focus on  {" "}
          <code className="rounded-sm bg-muted-foreground/15 px-1.5 py-0.5">
            React
          </code>{" "}
          TypeScript{" "}
          <code className="rounded-sm bg-muted-foreground/15 px-1.5 py-0.5">
          Node.js
          </code>{" "}
          Let’s chat about my experience and soft skills!
        </p>
        
        <p>
          {" "}
          Feel free to ask me about my projects, problem-solving approach, or how I collaborate in teams to deliver results.{" "}
          <Link
            className="text-blue-500 dark:text-blue-400"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            Docs
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
