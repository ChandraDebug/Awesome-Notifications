import { Button } from "flowbite-react";
import { HiOutlineEmojiHappy, HiOutlineEmojiSad } from "react-icons/hi";
export const Input = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label
          htmlFor='icon'
          className='block mt-5 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
          Select an icon
        </label>
        <select
          defaultValue={props.form.Icon}
          name='icon'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          <option value='HiCheck'>Check</option>
          <option value='HiExclamation'>Exclamation</option>
          <option value='HiX'>Cancel</option>
        </select>

        <label
          htmlFor='priority'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'>
          Select type of message
        </label>
        <select
          defaultValue={props.form.priority}
          name='priority'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
          <option value='red'>Error</option>
          <option value='blue'>Info</option>
          <option value='yellow'>Warning</option>
          <option value='green'>Success</option>
        </select>

        <div className='mb-6'>
          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Message
          </label>
          <textarea
            type='textarea'
            name='message'
            id='message'
            defaultValue={props.form.message}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            required='required'
          />
        </div>

        <Button.Group outline={true}>
          <Button
            disabled={props.form.length < 5 ? false : true}
            gradientDuoTone='purpleToPink'
            pill={true}
            type='submit'>
            Open Notification
            <HiOutlineEmojiHappy className='ml-2 h-5 w-5' />
          </Button>
          <Button
            className='mt-2'
            disabled={props.form.length > 0 ? false : true}
            gradientDuoTone='purpleToPink'
            pill={true}
            onClick={props.popToast}>
            Close Notification
            <HiOutlineEmojiSad className='ml-2 h-5 w-5' />
          </Button>
        </Button.Group>
      </form>
    </div>
  );
};
