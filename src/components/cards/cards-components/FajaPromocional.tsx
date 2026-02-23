type FajaPromocionalProps = {
  descripcion: string;
};

export const FajaPromocional = ({ descripcion }: FajaPromocionalProps) => {
  return (
    <span className="bg-foreground absolute top-0 right-2 z-2 mt-3 ml-3 inline-flex px-2 py-1 text-xs text-white uppercase select-none">
      {descripcion}
    </span>
  );
};
