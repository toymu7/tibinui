interface SelectPartProps {
  partComment: string;
  selectedPart: any;
  partPosition: any;
  partStyles: any;
}

export default function SelectPart({
  partComment,
  selectedPart,
  partPosition,
  partStyles,
}: SelectPartProps) {
  return (
    <div className={partPosition}>
      {selectedPart && (
        <img src={selectedPart} alt={partComment} className={partStyles} />
      )}
    </div>
  );
}
