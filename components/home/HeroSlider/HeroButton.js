import Link from "next/link";

const HeroButton = ({ link, title }) => {
  return (
    <div>
      <button href={link} className="button_slide slide_right">
        {title}
      </button>
    </div>
  );
};

export default HeroButton;
