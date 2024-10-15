import s from './Section.module.css';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
  return (
    <section className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
}
