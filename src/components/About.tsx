import ContactIcons from './ContactIcons';

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl transform tracking-tight break-words inverted">Scott Fulguirinas</h1>
      <p className="mb-4">
        Description praesentium tempora voluptatibus delectus libero totam perspiciatis.
      </p>
      <ContactIcons></ContactIcons>
    </div>
  );
}
