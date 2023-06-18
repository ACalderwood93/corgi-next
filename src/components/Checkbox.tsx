const Checkbox = ({
  label,
  id,
  register,
}: {
  label: string;
  id: string;
  register?: any;
}) => {
  return (
    <div className="flex flex-row items-center  my-2 rounded-xl ">
      {register && (
        <input
          className="mx-4 w-8 h-8  rounded-md checked:bg-primary  focus:ring-0 focus:shadow-none"
          type="checkbox"
          id={id}
          {...register(id)}
        />
      )}
      {!register && (
        <input
          className="mx-4 w-8 h-8  rounded-md checked:bg-primary  focus:ring-0 focus:shadow-none"
          type="checkbox"
          id={id}
        />
      )}
      <label className="flex-grow" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
