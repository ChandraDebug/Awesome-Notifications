import { Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import {
  HiCheck,
  HiExclamation,
  HiX,
  HiOutlineEmojiHappy,
  HiOutlineEmojiSad,
} from "react-icons/hi";
import { AnimatedToast } from "./AnimatedToast";
import { motion, AnimatePresence } from "framer-motion";

import { Content } from "./Content";
import * as Hi from "react-icons/hi";
import { Input } from "./Input";

function App() {
  const [button, setButton] = useState(true);

  const IconSet = {
    HiCheck: HiCheck,
    HiExclamation: HiExclamation,
    HiX: Hi.HiAdjustments,
  };

  const [form, setForm] = useState([]);

  const popToast = () => {
    form.pop();
    setForm(() => [...form]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setForm([
      ...form,
      {
        Icon: IconSet[event.target.icon.value],
        priority: event.target.priority.value,
        message: event.target.message.value,
      },
    ]);
  };

  return (
    <div>
      <ul>
        {form && (
          <AnimatePresence initial={true}>
            {form.map(({ message, Icon, priority }, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", bounce: 0.6 }}
                exit={{
                  opacity: 0,
                  scale: 0.5,
                  transition: { type: "spring", stiffness: 250 },
                }}>
                <AnimatedToast
                  Title={message}
                  Icon={Icon}
                  Background={priority}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        )}
      </ul>
      <div className='absolute right-1/2  top-1/2'>
        <Input
          handleSubmit={handleSubmit}
          popToast={popToast}
          form={form}
          button={button}
        />
      </div>
    </div>
  );
}

export default App;
