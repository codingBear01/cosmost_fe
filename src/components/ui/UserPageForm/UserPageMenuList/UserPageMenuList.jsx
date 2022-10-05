/* libraries */
import React from 'react';
import { Link } from 'react-router-dom';
/* components */
import * as S from './styled';
/* static data */
import { USER_PAGE_MENU_LIST as menu } from '../../../../data';

function UserPageMenuList() {
  return (
    <S.UserPageMenuList>
      {menu &&
        menu.map((item) => (
          <Link key={item.id} to={item.path}>
            <S.UserPageMenuItem>
              {item.icon}
              <span>{item.title}</span>
            </S.UserPageMenuItem>
          </Link>
        ))}
    </S.UserPageMenuList>
  );
}

export default UserPageMenuList;
