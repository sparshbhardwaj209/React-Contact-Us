const Button = ({ isOutline, icon, text, ...rest }) => {

  const baseClasses =
    "flex flex-row gap-1 items-center text-md py-3 px-2 rounded-sm justify-center cursor-pointer min-w-52 w-full";

  const outlineClasses = "border border-black text-black bg-white w-full";

  const solidClasses = "bg-black text-white";

  const finalClasses = `${baseClasses} ${
    isOutline ? outlineClasses : solidClasses
  }`;

  return (
    <button {...rest} className={finalClasses}>
      {icon}
      {text}
    </button>
  );
};

export default Button;