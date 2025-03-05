type NavIconProps = {
  color?: string
}

export const NavIcon = ({ color = 'red' }: NavIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }} width="50px" height="50px" viewBox="0 0 24 24" fill="#FFE500">
      <path d="M0 0h24v24H0V0z" fill='#1C3972' />
      <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
    </svg>
  );
};

