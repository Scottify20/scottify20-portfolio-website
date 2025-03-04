interface ContactIconProps {
  url: string;
  label: string;
  iconURL: string;
  altText: string;
}

const contacts: ContactIconProps[] = [
  {
    url: 'https://github.com/Scottify20',
    label: "Scottify20's github profile",
    iconURL: '/images/icons/github.svg',
    altText: 'Github icon',
  },
  {
    url: 'mailto:fulguirinasscottivan@gmail.com',
    label: 'Send an email to Scott Fulguirinas',
    iconURL: '/images/icons/email.svg',
    altText: 'Email icon',
  },
  {
    url: '',
    label: "Visit Scott Fulguirinas' LinkedIn Profile",
    iconURL: '/images/icons/linkedin.svg',
    altText: 'LinkedIn icon',
  },
];

function ContactIcon(props: ContactIconProps) {
  const { url, label, iconURL, altText } = props;

  return (
    <a
      tabIndex={0}
      className=" hover:brightness-150 hover:saturate-50 focus:bg-[rgba(255, 185, 87, 0.075)] self-center"
      href={url}
      target="_blank"
      aria-label={label}
    >
      <img width="40px" className="aspect-square" src={iconURL} alt={altText}></img>
    </a>
  );
}

interface ContactIconsProps {
  // layout: 'horizontal' | 'vertical';
  className: string;
}

export default function ContactIcons(props: ContactIconsProps) {
  const { className } = props;

  return (
    <div className={`flex justify-between w-full ${className}`}>
      {contacts.map((contact, index) => (
        <ContactIcon {...contact} key={index}></ContactIcon>
      ))}
    </div>
  );
}
