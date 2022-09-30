/* components */
import * as S from './styled';
/* react-icons */
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <S.Footer>
      <BsGithub />
      <S.FooterInfo>
        <a
          href="https://github.com/CosMost-BE"
          target="_blank"
          rel="noreferrer"
        >
          Back-end Repo.
        </a>
        <a
          href="https://github.com/codingBear01/cosMost_FE"
          target="_blank"
          rel="noreferrer"
        >
          Front-end Repo.
        </a>
        <span>Mady By Team_NiceCream</span>
      </S.FooterInfo>
    </S.Footer>
  );
}

export default Footer;
