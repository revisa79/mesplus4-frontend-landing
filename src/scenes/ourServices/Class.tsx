type Props = {
  name: string;
  description?: string;
  image: string;
  isHovered: boolean; // New prop to control hover state
  onMouseEnter: () => void; // Manual hover
  onMouseLeave: () => void; // Manual hover out
};

const Class = ({ name, description, image, isHovered, onMouseEnter, onMouseLeave }: Props) => {
  const overlayStyles = `p-5 absolute z-29 flex h-[350px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-90" : "opacity-0"}`;

  return (
    <li
      className="relative mx-5 inline-block h-[380px] w-[450px]"
      onMouseEnter={onMouseEnter} // Manual hover
      onMouseLeave={onMouseLeave} // Manual hover out
    >
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={`${name} image`} />
    </li>
  );
};

export default Class;
