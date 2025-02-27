interface LabelProps {
  value: string;
}

const label = ({ value }: LabelProps) => {
  return (
    <div className="bg-primary rounded-[20px] px-[10px] py-[4px]">
      {value}
    </div>
  )
}

export default label
