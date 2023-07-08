type AvatarProps = {
  email: string;
};

function Avatar(props: AvatarProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {props.email.substring(0, 1).toUpperCase()}
        </span>
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {props.email}
      </div>
    </div>
  );
}

export { Avatar };
