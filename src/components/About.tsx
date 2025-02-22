import ContactIcons from './ContactIcons';

export default function About() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl transform tracking-tight break-words inverted mb-2">
        Scott Fulguirinas
      </h1>

      <div className="flex flex-col gap-4">
        <p>
          I'm a <span className="text-orange-100">Web Developer</span> and{' '}
          <span className="text-orange-100">UI/UX Designer</span> who enjoys the challenge of
          bringing creative solutions to design and development problems.
        </p>
        <p className="mb-4">
          From concept to code, I'm dedicated to crafting user-friendly interfaces and visually
          appealing designs with pixel-perfect precision.
        </p>
      </div>

      <ContactIcons></ContactIcons>
    </div>
  );
}
