export default function Link({ children, url }) {
  return (
    <a className="navigation__link" href={url}>
      {children}
    </a>
  );
}
