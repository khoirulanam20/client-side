const Card = (props) => {
  const { title = false, desc, variant = "" } = props;

  const getVariant = () => {
    return variant ? ` ${variant}` : "";
  };

  return (
    <div className={`flex flex-col flex-1 mb-6${getVariant()}`}>
      {title && (
        <>
          {title.length === 1 ? (
            <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">
              {title}
            </div>
          ) : (
            <div className="text-lg text-gray-02 mb-4">{title}</div>
          )}
        </>
      )}
      <div className="bg-white rounded-lg px-6 py-5 shadow-xl flex-1">
        {desc}
      </div>
    </div>
  );
};

export default Card;
