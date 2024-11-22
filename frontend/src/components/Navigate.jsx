/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

export default function Navigate({ href, className, value, target='_self', scrollTop=true, children, callback=()=>{} }) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const handleOnClick = (e) => {
    e.preventDefault();
    callback();
    if(target==='_self') {
      navigate(href);
      scrollTop ? scrollToTop() : {};
    } else {
      window.open(href, '_blank');
    }
  }

  return (
    <a onClick={handleOnClick} href={href} className={className}>{ value }{ children }</a>
  );
}
