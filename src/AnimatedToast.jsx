import { Toast } from "flowbite-react";
import { motion } from "framer-motion";

export const AnimatedToast = (props) => {
  const IconToast = props.Icon;
  return (
    <div className='flex flex-col m-4'>
      <Toast duration={1000}>
        <div
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-${props.Background}-100 text-${props.Background}-500 dark:bg-${props.Background}-800 dark:text-${props.Background}-200`}>
          <IconToast className='h-5 w-5' />
        </div>
        <div className='ml-3 text-sm font-normal'>{props.Title}</div>

        <Toast.Toggle />
      </Toast>
    </div>
  );
};
