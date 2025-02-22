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
  return (
    <a
      tabIndex={0}
      className=" hover:brightness-150 hover:saturate-50 focus:bg-[rgba(255, 185, 87, 0.075)]"
      href={props.url}
      target="_blank"
      aria-label={props.label}
    >
      <img width="40px" className="aspect-square" src={props.iconURL} alt={props.altText}></img>
    </a>
  );
}

export default function ContactIcons() {
  return (
    <div className="flex flex-row gap-6">
      {contacts.map((contact, index) => (
        <ContactIcon {...contact} key={index}></ContactIcon>
      ))}
    </div>
  );
}
