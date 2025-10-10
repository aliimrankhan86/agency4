type TextFieldProps = {
  label?: string;
  placeholder: string;
  className?: string;
};

const TextField = ({ label, placeholder, className }: TextFieldProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="font-figtree text-sm uppercase text-neutral-950">
        {label} <span className="text-blue-600">*</span>
      </div>
      <input
        placeholder={placeholder}
        className="mt-2 font-figtree text-sm text-neutral-950 placeholder:text-neutral-500 w-full px-6 py-4 border border-neutral-200 rounded-full hover:border-neutral-500 focus:border-neutral-950 focus:outline-none transition-colors duration-200"
      />
    </div>
  );
};

export default TextField;
