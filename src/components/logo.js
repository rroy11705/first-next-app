/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, alt, ...rest }) {
  return (
    <Link path="/" {...rest}>
      <Image src={src} alt={alt}/>
    </Link>
  );
}
